/* eslint-disable react/prop-types */
import { Listbox } from "@headlessui/react";

export const Select = ({ value, onValueChange, children }) => {
  return (
    <Listbox value={value} onChange={onValueChange}>
      {children}
    </Listbox>
  );
};

export const SelectTrigger = ({ children, className }) => (
  <Listbox.Button
    className={`w-full px-2 py-2 rounded-lg border border-gray-300 text-left  
    sm:w-[100%] md:w-[100 %] ${className}`}
  >
    {children}
  </Listbox.Button>
);

export const SelectContent = ({ children, className }) => (
  <Listbox.Options
    className={`absolute mt-1 w-[85%] left-[50%] -translate-x-[50%] sm:-translate-x-0 max-h-60 overflow-auto rounded-lg bg-white shadow-lg z-10 
    sm:w-[50%] md:w-[45%] lg:w-[40%] ${className}`}
  >
    {children}
  </Listbox.Options>
);

export const SelectItem = ({ children, value, className }) => (
  <Listbox.Option
    value={value}
    className={({ active, selected }) =>
      `cursor-pointer select-none px-4 py-2 ${
        active ? "bg-blue-100 text-blue-900" : ""
      } ${selected ? "font-medium" : ""} ${className}`
    }
  >
    {children}
  </Listbox.Option>
);

export const SelectValue = ({ value, placeholder }) => (
  <span className={value ? "text-white" : "text-gray-400"}>
    {value || placeholder}
  </span>
);
