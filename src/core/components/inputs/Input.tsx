import { dotsHorizontal, searchIcon } from "@/assets/images";
import React from "react";

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "",
  value = "",
  onChange,
  name = "",
}) => {
  return (
    <div className="relative py-1 px-4">
      <img
        src={searchIcon}
        className="absolute w-5 h-5 mt-2.5 pb-0.5 ml-2 text-gray-500 scale-125"
      />
      <input
        className="w-full py-2 !pl-12 font-inter  text-sm text-gray-500 bg-white border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      <img
        src={dotsHorizontal}
        className="absolute w-5 h-5 mt-2.5 pb-0.5 ml-2 text-gray-500 top-[5px] right-6"
      />
    </div>
  );
};

export default SearchInput;
