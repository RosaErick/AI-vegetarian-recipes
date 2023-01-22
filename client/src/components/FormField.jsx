import React from "react";

const FormField = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center  gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm  px-2 font-medium text-gray-900"
        >
          {LabelName}
        </label>

        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className="bg-gray-50 border border-gray-300 text-900 text-sm rouded-lg focus:ring-[#6469ff] focus:border-[#4649ff] outline-none block  w-full p-3"
        />
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px2 rounded-[5px] w-100 text-black"
          >
            Surprise me
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
