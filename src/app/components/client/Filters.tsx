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
import { DebouncedInput } from "@/core/components/inputs";
import { useState, useEffect } from "react";
import Select, { components } from "react-select";

export const Filters = () => {
  const { globalFilter, setGlobalFilter, clientInitialState } = useClient();

  const [selectedDropdownList, setSelectedDropdownList] = useState({
    byAssignee: "",
    byStatus: "",
    byDate: "",
  });
  const assigneeList = clientInitialState.map((el) => ({
    label: el.name,
    value: el.name,
  }));

  const filternSortAssigneeList = assigneeList
    .filter(
      (el, id) => assigneeList.findIndex((en) => en.value === el.value) === id
    )
    .sort((a, b) => (b.value > a.value ? -1 : 1));

  const dateList = clientInitialState.map((el, id) => ({
    label: el.last_updated,
    value: el.last_updated,
  }));

  const filternSortDateList = dateList
    .filter(
      (el, id) => dateList.findIndex((en) => en.value === el.value) === id
    )
    .sort((a, b) => new Date(a.value) - new Date(b.value));
  const statusList = clientInitialState.map((el) => ({
    label: el.status,
    value: el.status,
  }));
  const filternSortStatusList = statusList.filter(
    (el, id) => statusList.findIndex((en) => en.value === el.value) === id
  );

  useEffect(() => {
    if (Object.values(selectedDropdownList).some((el) => el !== "")) {
      setGlobalFilter(
        String(
          selectedDropdownList.byAssignee ||
            selectedDropdownList.byDate ||
            selectedDropdownList?.byStatus ||
            ""
        )
      );
    }
  }, [selectedDropdownList]);

  const DropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <img src={headerCheveronDown} />
        </components.DropdownIndicator>
      )
    );
  };

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
            <div className="-top-[5px] relative">
              <Select
                className="text-sm  w-[189px] "
                classNamePrefix={"rselect"}
                placeholder={
                  <div className="justify-start items-center gap-1.5 flex">
                    <img src={filterFunnel} />
                    <div className="whitespace-nowrap">Filter by assigned</div>
                  </div>
                }
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? "#7474C9 !important" : "",
                    boxShadow: state.isFocused
                      ? "0 0 0 1px #7474C9 !important "
                      : "",
                    height: "2.5rem",
                    marginTop: "0.25rem",
                  }),
                }}
                value={
                  filternSortAssigneeList?.find(
                    (el) => el.label === selectedDropdownList.byAssignee
                  ) ?? ""
                }
                isClearable={true}
                options={filternSortAssigneeList}
                onChange={(selectedOption) => {
                  setSelectedDropdownList({
                    byAssignee: selectedOption?.value,
                    byStatus: "",
                    byDate: "",
                  });
                }}
                components={{ DropdownIndicator }}
              />
            </div>

            <div className="-top-[5px] relative">
              <Select
                className="text-sm  w-[105px] "
                classNamePrefix={"rselect"}
                placeholder={
                  <div className="justify-start items-center gap-1.5 flex">
                    <img src={calender} />
                    <div className="whitespace-nowrap">Date</div>
                  </div>
                }
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? "#7474C9 !important" : "",
                    boxShadow: state.isFocused
                      ? "0 0 0 1px #7474C9 !important "
                      : "",
                    height: "2.5rem",
                    marginTop: "0.25rem",
                  }),
                }}
                value={
                  filternSortDateList?.find(
                    (el) => el.label === selectedDropdownList.byDate
                  ) ?? ""
                }
                isClearable={true}
                options={filternSortDateList}
                onChange={(selectedOption) => {
                  setSelectedDropdownList({
                    byAssignee: "",
                    byStatus: "",
                    byDate: selectedOption?.value,
                  });
                }}
                components={{ DropdownIndicator }}
              />
            </div>
            <div className="-top-[5px] relative">
              <Select
                className="text-sm  w-[117px] "
                classNamePrefix={"rselect"}
                placeholder={
                  <div className="justify-start items-center gap-1.5 flex">
                    <img src={check} />
                    <div className="whitespace-nowrap">Status</div>
                  </div>
                }
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? "#7474C9 !important" : "",
                    boxShadow: state.isFocused
                      ? "0 0 0 1px #7474C9 !important "
                      : "",
                    height: "2.5rem",
                    marginTop: "0.25rem",
                  }),
                }}
                value={
                  filternSortStatusList?.find(
                    (el) => el.label === selectedDropdownList.byStatus
                  ) ?? ""
                }
                isClearable={true}
                options={filternSortStatusList}
                onChange={(selectedOption) => {
                  setSelectedDropdownList({
                    byAssignee: "",
                    byStatus: selectedOption?.value,
                    byDate: "",
                  });
                }}
                components={{ DropdownIndicator }}
              />
            </div>
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
