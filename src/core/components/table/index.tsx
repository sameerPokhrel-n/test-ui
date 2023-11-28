import { useRef, useState, useEffect, HTMLProps } from "react";
import {
  ColumnDef,
  useReactTable,
  getSortedRowModel,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
  RowData,
  ColumnFiltersState,
  FilterFn,
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { dotsVertical } from "@/assets/images";
import { IoIosAdd } from "react-icons/io";
import { useClient } from "@/app/context/client/Provider";
import { DropDown } from "../dropdown";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
}

interface ReactTableProps<T extends object> {
  rows: T[];
  defaultColumns: ColumnDef<T>[];
  title?: string;
  showFooter?: boolean;
  sortable?: boolean;
  rowSelectableWithCheckbox?: boolean;
}

const defaultColumn: Partial<ColumnDef<any>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    const initialValue = getValue();
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState(initialValue);

    // When the input is blurred, we'll call our table meta's updateData function
    const onBlur = () => {
      table.options.meta?.updateData(index, id, value);
    };

    // If the initialValue is changed external, sync it up with our state
    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    if (id === "addColumn") return;
    return (
      <input
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        type="text"
        className="Input"
      />
    );
  },
};

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export const Table = <T extends object>({
  rows,
  defaultColumns,
  title = "",
  showFooter = true,
  sortable = true,
  rowSelectableWithCheckbox = false,
}: ReactTableProps<T>) => {
  const [data, setData] = useState(() => [...rows]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const { globalFilter, setGlobalFilter } = useClient();
  const [rowSelection, setRowSelection] = useState({ 0: true });
  const [isOpen, setIsOpen] = useState({ headerID: "", showDropDown: false });
  const [showHiddenColumn, setShowHiddenColumns] = useState(false);

  useEffect(() => {
    setData(rows);
  }, [rows]);

  let columns;
  if (rowSelectableWithCheckbox) {
    const columnsWithRowSelectable = [
      {
        id: "rowSelection",
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      ...defaultColumns,
    ];
    columns = columnsWithRowSelectable;
  } else {
    columns = defaultColumns;
  }

  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnVisibility,
      rowSelection,
      columnFilters,
      globalFilter,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    },
  });

  //hiddenColumns
  const hiddenColumns = Object.values(columnVisibility).includes(false)
    ? table
        .getAllLeafColumns()
        .filter(
          (el) =>
            Object.keys(columnVisibility).includes(el.id) && !el.getIsVisible()
        )
    : [];

  return (
    <div className="flex flex-col h-[50vh]">
      <div className="overflow-auto custom-scrollbar sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
          <div className="overflow-visible">
            <table className="min-w-full text-center border">
              <thead className="border-b bg-white sticky top-0">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        className={`bg-white font-bold py-4 whitespace-nowrap select-none align-middle text-left border`}
                        key={header.id}
                        style={{
                          width: header.getSize(),
                        }}
                        colSpan={header.colSpan}
                      >
                        <div
                          className={`flex justify-between w-full px-2 gap-3 items-center place-items-center `}
                        >
                          <div
                            className={`flex-1 flex ${
                              header.id !== "rowSelection"
                                ? "gap-1"
                                : "justify-center"
                            } text-slate-700 leading-none font-inter font-semibold items-center place-items-center`}
                          >
                            {header.id === "addColumn" && (
                              <div className="flex items-center gap-2 cursor-pointer relative group">
                                <IoIosAdd
                                  onMouseOver={() => {
                                    setShowHiddenColumns(!showHiddenColumn);
                                  }}
                                />
                                {showHiddenColumn && (
                                  <DropDown
                                    className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform top-4 -left-4"
                                    options={hiddenColumns}
                                    onSelect={(
                                      option: (typeof hiddenColumns)[0]
                                    ) => console.log(option)}
                                    optionWithCheckBox={true}
                                  />
                                )}
                              </div>
                            )}

                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}

                            {sortable &&
                            !["rowSelection", "addColumn"].includes(
                              header.id
                            ) ? (
                              <button
                                onClick={header.column.getToggleSortingHandler()}
                                className={
                                  header.column.getCanSort()
                                    ? "cursor-pointer select-none"
                                    : ""
                                }
                              >
                                {{
                                  asc: (
                                    <FaSortUp className="h-4 w-4 text-gray-400" />
                                  ),
                                  desc: (
                                    <FaSortDown className="h-4 w-4 text-gray-400" />
                                  ),
                                }[header.column.getIsSorted() as string] ??
                                  (header.column.getCanSort() ? (
                                    <FaSort className="text-gray-400 h-4 w-4" />
                                  ) : null)}
                              </button>
                            ) : null}
                          </div>

                          {!["rowSelection", "addColumn"].includes(
                            header.id
                          ) && (
                            <div className="px-1 relative group">
                              <img
                                className="cursor-pointer"
                                src={dotsVertical}
                                onMouseOver={() =>
                                  setIsOpen((prevState) => ({
                                    ...prevState,
                                    showDropDown: true,
                                    headerID: header.id,
                                  }))
                                }
                              />

                              {isOpen.showDropDown &&
                                isOpen.headerID === header.id && (
                                  <DropDown
                                    className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform"
                                    options={[
                                      { ...header.column, id: "Hide Column" },
                                    ]}
                                    onSelect={(option) => {}}
                                    optionWithHiddenBox={true}
                                  />
                                )}
                            </div>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className='border-b" bg-white'>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        className={`whitespace-nowrap   text-slate-700  gap-1 font-normal font-Inter leading-none  text-sm border  font-inter  py-1 px-2`}
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              {showFooter && (
                <tfoot>
                  {table.getFooterGroups().map((footerGroup) => (
                    <tr key={footerGroup.id}>
                      {footerGroup.headers.map((header) => (
                        <th key={header.id} colSpan={header.colSpan}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.footer,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </tfoot>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={
        className +
        "appearance-none myCheckbox cursor-pointer  w-5 h-5 p-[3px] rounded-md border-2 default:ring-2 ring-indigo-400 checked:bg-indigo-500 checked:bg-[url('assests/images/checked.png')]  focus:none"
      }
      {...rest}
    />
  );
}
