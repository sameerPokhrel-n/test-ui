import { slugToTitle } from "@/core/helpers/string";
import { FaRegEyeSlash } from "react-icons/fa";

type Option = {
  label: string;
  value: string;
};

interface IDropdownProps<T> {
  className: string;
  options: T[];
  onSelect: (option: T) => void;
  optionWithCheckBox?: boolean;
  optionWithHiddenBox?: boolean;
  children?: React.ReactElement;
}

export function DropDown<T>({
  className = "",
  options,
  onSelect,
  optionWithCheckBox = false,
  children,
  optionWithHiddenBox = false,
}: IDropdownProps<T>) {
  const handleOptionClick = (option: T) => {
    onSelect(option);
  };
  return (
    <>
      <div
        className={`z-[1000] ${className}   absolute overflow-auto custom-scrollbar  bg-white p-2 divide-y divide-gray-100 rounded-lg shadow `}
      >
        <div className="py-2 flex flex-col  gap-2 text-sm text-gray-700 ">
          <div className="ml-2 flex  items-center">
            <ul className="flex-1 flex flex-col gap-2 justify-center">
              {options.length > 0 ? (
                options.map((el) => {
                  return (
                    <li
                      key={el.id}
                      className={`px-2 flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                        !optionWithCheckBox ||
                        (children?.type &&
                          "hover:bg-[#f5f5f5] hover:rounded-sm")
                      } py-2 `}
                      onClick={() => handleOptionClick(el)}
                    >
                      {optionWithHiddenBox && (
                        <label>
                          <input
                            className="hidden"
                            {...{
                              type: "checkbox",
                              checked: el.getIsVisible(),
                              onChange: el.getToggleVisibilityHandler(),
                            }}
                          />
                          <FaRegEyeSlash className="w-5 h-5 cursor-pointer" />
                        </label>
                      )}

                      {optionWithCheckBox && (
                        <input
                          className="appearance-none myCheckbox cursor-pointer w-5 h-5 p-[3px] rounded-md border-2 default:ring-2 ring-indigo-400 focus:none"
                          {...{
                            type: "checkbox",
                            checked: el?.getIsVisible(),
                            onChange: el?.getToggleVisibilityHandler(),
                          }}
                        />
                      )}
                      {children}
                      {slugToTitle(el.id)}
                    </li>
                  );
                })
              ) : (
                <>No Hidden Columns</>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
