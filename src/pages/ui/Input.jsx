/* eslint-disable react/prop-types */

export const Input = ({ value, onChange, placeholder, type = "text", className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none 
      sm:w-[100%] md:w-[100%] lg:w-[100%] ${className}`}
    />
  );
};
