import React from "react";
import { MdCancel } from "react-icons/md";

type Props = {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

export const DebouncedInput: React.FC<Props> = ({
  value: initialValue,
  onChange,
  debounce = 300,
  ...props
}) => {
  const [value, setValue] = React.useState<number | string>(initialValue);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (onChange) {
        onChange(value);
      }
    }, debounce);
    return () => clearTimeout(timeout);
  }, [value]);
  return (
    <div className="relative">
      <input {...props} value={value} onChange={handleInputChange} />
      {value !== "" && (
        <div className="absolute inset-y-0 -right-1 flex items-center pr-3">
          <button type="button" onClick={() => setValue("")}>
            <MdCancel className="h-4 w-4 " />
          </button>
        </div>
      )}
    </div>
  );
};

export default DebouncedInput;
