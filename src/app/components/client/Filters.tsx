import {
  calender,
  check,
  filterDivider,
  filterFunnel,
  headerCheveronDown,
  searchIcon,
  sortUpDown,
} from "@/assets/images";

export const Filters = () => {
  return (
    <div className="flex flex-col divide-y">
      <div className="h-[68px]  mb-1   border-grey-200  justify-between items-center inline-flex">
        <div className="justify-start items-start gap-5 flex">
          <div className="h-9 w-64 px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-1.5 flex">
            <div className="w-5 h-5 relative">
              <img src={searchIcon} />
            </div>
            <div className="leading-none select-none font-normal text-gray-500 text-sm font-inter whitespace-pre ">
              <input
                type="text"
                placeholder="Search Particular"
                className="text-gray-500 text-sm font-normal font-inter leading-none outline:none focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="justify-start items-start gap-5 flex cursor-pointer">
            <div className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
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
            <div className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
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
            <div className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
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
