import React from "react";

const InputForm = ({ htmlFor, labelText, type, name, value, handleChange,placeholder }) => {
  return (
    <>
      <div className="col-span-6 mb-2">
        <label htmlFor={htmlFor}  className="block font-medium text-gray-700">
          {labelText}
        </label>
        <input
          type={type}
          className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          name={name}
          value={value}
          onChange={handleChange}
           placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default InputForm; 