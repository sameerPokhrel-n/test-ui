import { useClient } from "@/app/context/client/Provider";
import { Client } from "@/app/data/makeData";
import { client1 } from "@/assets/images";
import { Table } from "@/core/components/table";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { LuRedo } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";

const Cell = (props) => {
  const row = props.row;
  const color = props.color;
  return (
    <div className={`inline-block ${color}  px-4 py-3 text-white`}>{row}</div>
  );
};
const StatusCell = (ctx: CellContext<any, any>) => {
  const { status } = ctx.row.original;
  const color = status === "Completed" ? "bg-green" : "bg-blue-400";
  return <Cell row={status} color={color} />;
};

const NameCell = (ctx: CellContext<any, any>) => {
  const { name, email_address } = ctx.row.original;
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 flex  gap-2 justify-start  place-items-center">
        <img src={client1} className="h-7 w-7 rounded " />
        <div className="flex flex-col items-start justify-start text-slate-700  gap-1 font-normal font-Inter leading-none">
          <span>{name}</span>
          <span>{email_address}</span>
        </div>
      </div>
      <div className="justify-self-start">
        {ctx.row.getIsSelected() && (
          <div className="p-1 relative rounded-full   border-dotted border-2">
            <IoIosAdd className="text-slate-400" />
          </div>
        )}
      </div>
    </div>
  );
};
const AssigneeCell = (ctx: CellContext<any, any>) => {
  const { name, role } = ctx.row.original;
  return (
    <div className="w-64">
      <div className="flex gap-1 justify-between place-items-center ">
        <div className="justify-start flex flex-row gap-1 ">
          <img src={client1} className="h-7 w-7 rounded " />
          <div className="flex flex-col items-start justify-start text-slate-700  gap-1 font-normal font-Inter leading-none">
            <span>{name.split(" ")[0]}</span>
            <span>{role}</span>
          </div>
        </div>
        <div className="justify-end">
          <LuRedo className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

const FollowersCell = (ctx: CellContext<any, any>) => {
  const { followers } = ctx.row.original;
  return (
    <div className="w-48">
      <div className="flex gap-1  justify-between place-items-center ">
        <span className="text-slate-700">{followers}</span>
        <LuRedo className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
};

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: NameCell,
  },
  {
    accessorKey: "added_from",
    header: "Added From",
  },
  {
    accessorKey: "tags",
    header: "Tags",
  },
  {
    accessorKey: "internal_id",
    header: "Internal Id",
  },

  {
    accessorKey: "client_id",
    header: "Client Id",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "client_portal",
    header: "Client Portal",
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
    cell: AssigneeCell,
  },
  {
    accessorKey: "followers",
    header: "Followers",
    cell: FollowersCell,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: StatusCell,
  },
  {
    accessorKey: "applications",
    header: "Applications",
  },
  {
    accessorKey: "last_updated",
    header: "Last Updated",
  },
  {
    accessorKey: "addColumn",
    header: "Add Column",
  },
];

export const ClientTable = () => {
  const { clientInitialState } = useClient();
  return (
    <div className="-mt-[1rem]">
      <Table
        rows={clientInitialState}
        defaultColumns={columns}
        showFooter={true}
        rowSelectableWithCheckbox={true}
      />
    </div>
  );
};
