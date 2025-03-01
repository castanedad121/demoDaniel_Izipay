import { useState } from "react";

export const LogoInput = ({ appearance, setAppearance }) => {
  const { logo } = appearance;
  const [error, setError] = useState("");

  const isValidURL = (url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)" + // http o https obligatorio
        "((([a-zA-Z0-9$_.+!*'(),;-]+\\.)+[a-zA-Z]{2,})|" + // Dominio
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // IP
        "(:\\d+)?(\\/[-a-zA-Z0-9%_.~+]*)*" + // Puerto y ruta
        "(\\?[;&a-zA-Z0-9%_.~+=-]*)?" + // Parámetros query
        "(\\#[-a-zA-Z0-9_]*)?$",
      "i"
    );
    return pattern.test(url);
  };

  const handleChangeLogo = (e) => {
    let value = e.target.value;
    setAppearance((prev) => ({ ...prev, logo: value }));
  };

  const handleBlur = () => {
    setAppearance((prev) => {
      const updatedLogo = prev.logo;
      if (updatedLogo && !isValidURL(updatedLogo)) {
        setError("URL no válida");
      } else {
        setError("");
      }
      return prev;
    });
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex justify-start items-center gap-4">
        <h2 className="font-medium text-[#1A90FF]">Logo:</h2>
        <input
          type="text"
          value={logo}
          onChange={handleChangeLogo}
          onBlur={handleBlur}
          placeholder="https://www.miweb.com/logo..."
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-200 
      text-sm border border-slate-300 rounded-md px-2 py-1 
      transition-all duration-300 ease-in-out focus:outline-none 
      focus:border-blue-500 focus:ring focus:ring-[#1A90FF]
      hover:border-blue-400 hover:shadow-md"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
