import { client, dotsHorizontal, headerCheveronDown } from "@/assets/images";
import { capitalizedString } from "@/core/helpers/string";
import { useLocation } from "react-router-dom";

export const SubHeader = () => {
  const { pathname } = useLocation();
  const value = pathname.split("/")[1];
  return (
    <div className="mb-[0.11rem]">
      <div className="h-[60px] w-[calc(100vw-247px)]   px-6 bg-white rounded-sm shadow justify-between items-center inline-flex mb-[0.35rem]">
        <div className="justify-start items-center gap-3 flex">
          <img src={client} />
          <div className="text-slate-700 text-base  font-bold font-inter leading-snug">
            {["dashboard", "clients"].includes(value)
              ? "Clients"
              : capitalizedString(value)}
          </div>
        </div>
        <div className="cursor-pointer justify-start items-center gap-4 inline-flex mr-2">
          <div className="px-4 py-1.5 rounded justify-start items-center border border-gray-300 gap-1.5 flex">
            <div className="text-gray-500 text-sm font-normal font-inter leading-none">
              Branch(Kathmandu)
            </div>
            <div className="w-5 h-5 relative">
              <img src={headerCheveronDown} />
            </div>
          </div>
          <img src={dotsHorizontal} />
        </div>
      </div>
    </div>
  );
};
