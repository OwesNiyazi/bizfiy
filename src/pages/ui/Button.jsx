/* eslint-disable react/prop-types */


export const Button = ({ children, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` py-2 rounded-lg text-white w-[30%] border ${className}`}
    >
      {children}
    </button>
  );
};
