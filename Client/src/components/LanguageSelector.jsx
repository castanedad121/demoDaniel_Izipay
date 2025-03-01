export const LanguageSelector = ({ lenguageSelect, setLenguageSelect }) => {
  const handleLenguage = (lenguage) => {
    if (lenguage === "control") {
      setLenguageSelect((prev) => ({
        ...prev,
        control: !prev.control,
      }));
    }

    if (lenguage === "ESP") {
      setLenguageSelect((prev) => ({
        ...prev,
        init: window.Izipay.enums.langInit.ESP,
        ESP: !prev.ESP,
        ENG: !prev.ENG,
      }));
    }

    if (lenguage === "ENG") {
      setLenguageSelect((prev) => ({
        ...prev,
        init: window.Izipay.enums.langInit.ENG,
        ESP: !prev.ESP,
        ENG: !prev.ENG,
      }));
    }
  };
  return (
    <div className="w-full flex md:flex-row flex-col items-center">
      <div>
        <h2 className="font-medium text-nowrap text-[#1A90FF]">
          Opciones de idioma:
        </h2>
        <div className="flex items-center">
          <input
            id="control"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
            checked={lenguageSelect.control}
            onClick={(e) => handleLenguage(e.target.id)}
          />
          <label className="ms-2 text-sm font-light text-gray-300">
            Control para elegir
          </label>
        </div>
      </div>
      <div className="w-full flex gap-1 justify-evenly">
        <h2
          id="ESP"
          className={
            lenguageSelect.ESP
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1 h-8 hover:bg-transparent hover:text-white "
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1 h-8"
          }
          onClick={(e) => handleLenguage(e.target.id)}
        >
          Español
        </h2>
        <h2
          id="ENG"
          className={
            lenguageSelect.ENG
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1 h-8 hover:bg-transparent hover:text-white"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1 h-8"
          }
          onClick={(e) => handleLenguage(e.target.id)}
        >
          Inglés
        </h2>
      </div>
    </div>
  );
};
