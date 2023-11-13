import {
  cheveronLeft,
  dotsHorizontal,
  headerCheveronDown,
} from "@/assets/images";
import SearchInput from "@/core/components/inputs/Input";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const MenuLink = ({ menu, sidebarOpen }) => {
  const { pathname } = useLocation();
  const activePath = pathname?.split("/")[1];

  return (
    <NavLink
      to={menu?.path}
      className={`group flex items-center place-items-center text-sm gap-6 font-medium p-2  my-1
        hover:bg-secondaryDim ${
          activePath === menu?.name && "bg-secondaryDim"
        } hover:text-black rounded-md`}
    >
      {menu.icon && (
        <div className="text-gray-200">
          <img src={menu.icon} />
        </div>
      )}
      {sidebarOpen && (
        <div className="flex-1 flex flex-row justify-between items-center">
          <span
            className={`select-none text-textColor text-sm font-medium font-inter whitespace-pre duration-500`}
          >
            {menu?.title}
          </span>
          <img src={dotsHorizontal} />
        </div>
      )}
      {!sidebarOpen && (
        <span
          className={`absolute bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit z-20`}
        >
          {menu?.title}
        </span>
      )}
    </NavLink>
  );
};

const MenuItem = ({ menu, sidebarOpen }) => {
  return <MenuLink menu={menu} sidebarOpen={sidebarOpen} />;
};

export const Sidebar = <T extends {}[]>({ items }: { items: T }) => {
  let menus = items || [];
  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6 border-r">
      <div
        className={`flex-1 bg-white min-h-screen ${
          open ? "w-60" : "w-17"
        } duration-250 text-dark`}
      >
        <div className="flex  items-center place-items-center">
          <div className="flex-1 flex  items-center gap-2">
            <div className="flex flex-row gap-2 px-6 py-2">
              <h3 className="text-gray-600 font-inter font-medium">CRM</h3>
              <img src={headerCheveronDown} className="cursor-pointer" />
            </div>
          </div>
          <div className="bg-gray-400 flex align-baseline -mt-[1rem]">
            <img
              src={cheveronLeft}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        <SearchInput
          name="Search"
          placeholder="Search"
          value=""
          onChange={() => console.log("hello")}
        />
        <div className="mt-4 flex-1 gap-1 relative px-4 font-inter">
          {menus?.map((menu, i) => (
            <MenuItem sidebarOpen={open} menu={menu} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
