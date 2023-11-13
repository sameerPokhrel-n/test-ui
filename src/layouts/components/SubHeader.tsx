import { client, dotsHorizontal, headerCheveronDown } from "@/assets/images";
import { capitalizedString } from "@/core/helpers/string";
import { useLocation } from "react-router-dom";

export const SubHeader = () => {
  const { pathname } = useLocation();
  const value = pathname.split("/")[1];
  return (
    <div className="h-[60px] w-[calc(100vw-240px)]  px-6 bg-white rounded-sm shadow justify-between items-center inline-flex mb-[0.35rem]">
      <div className="justify-start items-center gap-3 flex">
        <img src={client} />
        <div className="text-slate-700 text-base  font-bold font-inter leading-snug">
          {["dashboard", "clients"].includes(value)
            ? "Clients"
            : capitalizedString(value)}
        </div>
      </div>
      <div className="cursor-pointer justify-start items-center gap-2 inline-flex">
        <div className="px-2 py-1.5 rounded justify-start items-center border border-gray-300 gap-1.5 flex">
          <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">
            Branch(Kathmandu)
          </div>
          <div className="w-5 h-5 relative">
            <img src={headerCheveronDown} />
          </div>
        </div>
        <img src={dotsHorizontal} />
      </div>
    </div>
  );
};
