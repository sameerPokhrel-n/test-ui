import { useClient } from "@/app/context/client/Provider";
import {
  calender,
  check,
  filterDivider,
  filterFunnel,
  headerCheveronDown,
  searchIcon,
  sortUpDown,
} from "@/assets/images";
import { DropDown } from "@/core/components/dropdown";
import { DebouncedInput } from "@/core/components/inputs";
import { useState, useEffect } from "react";

export const Filters = () => {
  const { globalFilter, setGlobalFilter, clientInitialState } = useClient();
  //   const [isDropDownVisible, setIsDropdownVisible] = useState(false);
  const [isDropDownVisible, setIsDropdownVisible] = useState({
    key: "",
    status: false,
  });
  const [selectedDropdownList, setSelectedDropdownList] = useState("");
  const assigneeList = clientInitialState.map((el, id) => ({
    id: id,
    name: el.name,
  }));

  const filternSortAssigneeList = assigneeList
    .filter(
      (el, id) => assigneeList.findIndex((en) => en.name === el.name) === id
    )
    .sort((a, b) => (b.name > a.name ? -1 : 1));

  const dateList = clientInitialState.map((el, id) => ({
    id: id,
    name: el.last_updated,
  }));

  const filternSortDateList = dateList
    .filter((el, id) => dateList.findIndex((en) => en.name === el.name) === id)
    .sort((a, b) => new Date(a.name) - new Date(b.name));
  const statusList = clientInitialState.map((el, id) => ({
    id: id,
    name: el.status,
  }));
  const filternSortStatusList = statusList.filter(
    (el, id) => statusList.findIndex((en) => en.name === el.name) === id
  );

  useEffect(() => {
    if (selectedDropdownList !== "") {
      setGlobalFilter(String(selectedDropdownList));
      setIsDropdownVisible({ key: "", status: false });
    }
  }, [selectedDropdownList]);

  return (
    <div className="flex flex-col divide-y">
      <div className="h-[68px]  mb-1   border-grey-200  justify-between items-center inline-flex">
        <div className="justify-start items-start gap-5 flex">
          <div className="h-9 w-64 px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-1.5 flex">
            <div className="w-5 h-5 relative">
              <img src={searchIcon} />
            </div>
            <div className="leading-none select-none font-normal text-gray-500 text-sm font-inter whitespace-pre ">
              <DebouncedInput
                value={globalFilter ?? ""}
                onChange={(value) => setGlobalFilter(String(value))}
                className="Input text-gray-500 text-sm font-normal font-inter leading-none outline:none focus:outline-none focus:ring-0"
                placeholder="Search all columns..."
              />
            </div>
          </div>
          <div className="justify-start items-start gap-5 flex cursor-pointer">
            <div
              onClick={() =>
                setIsDropdownVisible({ key: "filterByAssignee", status: true })
              }
              className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex"
            >
              <div className="justify-start items-center gap-1.5 flex">
                <div className="w-[18px] h-[18px] relative">
                  <img src={filterFunnel} />
                </div>
                <div className="text-gray-500 text-sm font-normal font-inter leading-none">
                  Filter by assigned
                </div>
              </div>
              <div className="w-5 h-5 relative">
                <img src={headerCheveronDown} />
              </div>
            </div>
            {isDropDownVisible.status &&
              isDropDownVisible.key === "filterByAssignee" && (
                <DropDown
                  className="w-56 top-52 h-96"
                  data={filternSortAssigneeList}
                  setSelectedDropdownList={setSelectedDropdownList}
                />
              )}

            <div
              className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex"
              onClick={() =>
                setIsDropdownVisible({ key: "filterByDate", status: true })
              }
            >
              <div className="justify-start items-center gap-1.5 flex">
                <div className="w-5 h-5 relative">
                  <img src={calender} />
                </div>
                <div className="text-gray-500 text-sm font-normal font-inter leading-none">
                  Date
                </div>
              </div>
              <div className="w-5 h-5 relative">
                <img src={headerCheveronDown} />
              </div>
            </div>
            {isDropDownVisible.status &&
              isDropDownVisible.key === "filterByDate" && (
                <DropDown
                  className="w-32 top-52 left-[46rem] h-96"
                  data={filternSortDateList}
                  //   data={dateList}
                  setSelectedDropdownList={setSelectedDropdownList}
                />
              )}

            <div
              className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex"
              onClick={() =>
                setIsDropdownVisible({ key: "filterByStatus", status: true })
              }
            >
              <div className="justify-start items-center gap-1.5 flex">
                <div className="w-5 h-5 relative">
                  <img src={check} />
                </div>
                <div className="text-gray-500 text-sm font-normal font-'lnter' leading-none">
                  Status
                </div>
              </div>
              <div className="w-5 h-5 relative">
                <img src={headerCheveronDown} />
              </div>
            </div>

            {isDropDownVisible.status &&
              isDropDownVisible.key === "filterByStatus" && (
                <DropDown
                  className="w-36 top-52 left-[54rem] h-auto"
                  data={filternSortStatusList}
                  setSelectedDropdownList={setSelectedDropdownList}
                />
              )}
          </div>
        </div>

        <div className="justify-start items-center gap-9 flex cursor-pointer">
          <div className="justify-start items-center gap-5 flex px-10">
            <div className=" items-center gap-1.5 flex  justify-between">
              <div className="w-[18px] h-[18px] relative ">
                <img src={filterFunnel} />
              </div>
              <div className="text-gray-500 text-sm font-normal font-inter leading-none">
                Filter
              </div>
              <div className="pl-2">
                <img src={filterDivider} />
              </div>
            </div>
            <div className="justify-start items-center gap-1.5 flex">
              <div className="w-5 h-5 relative">
                <img src={sortUpDown} />
              </div>
              <div className="text-gray-500 text-sm font-normal font-inter leading-none">
                Sort
              </div>
              <div className="pl-2">
                <img src={filterDivider} />
              </div>
            </div>
            <div className="justify-start items-center gap-1.5 flex">
              <div className="w-[18px] h-[18px] relative">
                <img src={filterFunnel} />
              </div>
              <div className="text-gray-500 text-sm font-normal font-inter leading-none">
                Saved Filter
              </div>
            </div>
          </div>
          <div className="text-blue-500 text-sm font-medium font-['Inter'] leading-tight">
            Clear
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
