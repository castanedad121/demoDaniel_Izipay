import { useState } from "react";

export const CustomFields = ({ customData, setCustomData }) => {
  const {
    field1,
    field2,
    field3,
    field4,
    field5,
    dield6,
    field7,
    field8,
    field9,
    field10,
  } = customData;
  const [tempValues, setTempValues] = useState(customData); // Estado temporal para todos los inputs

  const handleBlur = (e) => {
    let name = e.target.name;
    setCustomData((prev) => ({ ...prev, [name]: tempValues[name] })); // Actualiza el estado global solo al perder el foco
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTempValues((prev) => ({ ...prev, [name]: value })); // Solo actualiza el estado temporal
  };

  return (
    <div className="w-full flex justify-start items-center gap-4">
      <h2 className="font-medium text-[#1A90FF]">CustomFields:</h2>
      <div className="flex gap-1 flex-wrap">
        {Object.keys(customData).map((field, index) => (
          <input
            key={index}
            type="text"
            value={tempValues[field] || ""}
            name={field}
            onChange={handleChange} // Solo guarda en el estado temporal
            onBlur={handleBlur} // Guarda en el estado global cuando pierde el foco
            placeholder={`Campo ${index + 1}`}
            className="w-[270px] bg-transparent placeholder:text-slate-400 text-slate-200 
          text-sm border border-slate-300 rounded-md px-2 py-1 
          transition-all duration-300 ease-in-out focus:outline-none 
          focus:border-blue-500 focus:ring focus:ring-[#1A90FF]
          hover:border-blue-400 hover:shadow-md"
          />
        ))}
      </div>
    </div>
  );
};
