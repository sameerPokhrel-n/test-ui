import { useEffect } from "react";

export const useOutsideClick = (
  callback: () => void,
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
};
