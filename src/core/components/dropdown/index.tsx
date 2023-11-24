import { slugToTitle } from "@/core/helpers/string";

type list = {
  id: number;
  name: string;
};

type DropdownProps = {
  className: string;
  data: list[];
  setSelectedDropdownList: React.Dispatch<React.SetStateAction<string>>;
};

export const DropDown = ({
  className = "",
  data,
  setSelectedDropdownList,
}: DropdownProps) => {
  return (
    <div
      className={`z-[1000] ${className}  absolute overflow-auto custom-scrollbar  bg-white p-2 divide-y divide-gray-100 rounded-lg shadow  `}
    >
      <div className="py-2 flex flex-col  gap-2 text-sm text-gray-700 ">
        <div className="ml-2 flex  items-center">
          <ul className="flex-1 flex flex-col gap-2 justify-center">
            {data.map((el) => {
              return (
                <li
                  key={el.id}
                  className="px-2 flex items-center gap-2 cursor-pointer whitespace-nowrap hover:bg-[#f5f5f5] hover:rounded-sm py-2 "
                  onClick={() => setSelectedDropdownList(el.name)}
                >
                  {slugToTitle(el.name)}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
