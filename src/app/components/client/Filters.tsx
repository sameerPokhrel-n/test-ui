import {
  calender,
  check,
  filterFunnel,
  headerCheveronDown,
  searchIcon,
  sortUpDown,
} from "@/assets/images";

export const Filters = () => {
  return (
    <>
      <div className="h-[42px]  border-grey-200  justify-between items-center inline-flex">
        <div className="justify-start items-start gap-5 flex">
          <div className="h-9 w-64 px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-1.5 flex">
            <div className="w-5 h-5 relative">
              <img src={searchIcon} />
            </div>
            <div className="leading-none select-none font-normal text-gray-500 text-sm font-inter whitespace-pre ">
              <input
                type="text"
                placeholder="Search Particular"
                className="outline:none focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="justify-start items-start gap-5 flex cursor-pointer">
            <div className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
              <div className="justify-start items-center gap-1.5 flex">
                <div className="w-[18px] h-[18px] relative">
                  <img src={filterFunnel} />
                </div>
                <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">
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
                <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">
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
                <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">
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
          <div className="justify-start items-center gap-5 flex">
            <div className="justify-start items-center gap-1.5 flex">
              <div className="w-[18px] h-[18px] relative">
                <img src={filterFunnel} />
              </div>
              <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">
                Filter
              </div>
            </div>
            <div className="justify-start items-center gap-1.5 flex">
              <div className="w-5 h-5 relative">
                <img src={sortUpDown} />
              </div>
              <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">
                Sort
              </div>
            </div>
            <div className="justify-start items-center gap-1.5 flex">
              <div className="w-[18px] h-[18px] relative">
                <img src={filterFunnel} />
              </div>
              <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">
                Saved Filter
              </div>
            </div>
          </div>
          <div className="text-blue-500 text-sm font-medium font-['Inter'] leading-tight">
            Clear
          </div>
        </div>
      </div>
    </>
  );
};
