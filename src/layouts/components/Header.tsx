import { headerItems } from "@/app/data/menu";
import { headerCheveronDown, headerIcon } from "@/assets/images";
import { Fragment } from "react";

export default function Header() {
  return (
    <header className=" bg-white gap-6 place-items-center mb-[0.35rem] p-[30px] items-center h-[72px] inline-flex ">
      <div className={` w-screen   duration-250  `}>
        <div className="flex flex-row justify-between items-center">
          <div className="flex  flex-row gap-4 place-items-start items-center">
            <img src={headerIcon} />
            <h1 className="font-inter text-gray-900 text-xl font-semibold leading-7">
              Test Project
            </h1>
          </div>
          <div className="flex flex-row  items-center gap-8">
            {headerItems.map((el, id) => {
              if (el.name === "bell") {
                return (
                  <div className="relative" key={el.name}>
                    <img src={el.icon} key={id} className="cursor-pointer" />
                    <span className="absolute right-0  rounded-full bg-green w-3.5 h-3.5  text-white text-[8px] font-medium font-inter leading-snug text-center -top-[4px] right p-[2px] m-[1px]">
                      2
                    </span>
                  </div>
                );
              } else if (el.name !== "image") {
                return (
                  <img src={el.icon} key={el.name} className="cursor-pointer" />
                );
              } else {
                return (
                  <Fragment key={el.name}>
                    <img
                      src={el.icon}
                      key={el.name}
                      className="cursor-pointer"
                    />
                    <img
                      src={headerCheveronDown}
                      className="-ml-6 cursor-pointer"
                    />
                  </Fragment>
                );
              }
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
