export const ThemeColor = ({ appearance, setAppearance }) => {
  const { theme } = appearance;

  const color = {
    RED: window.Izipay.enums.theme.RED,
    LIGHT_RED: window.Izipay.enums.theme.LIGHT_RED,
    GREEN: window.Izipay.enums.theme.GREEN,
    PURPLE: window.Izipay.enums.theme.PURPLE,
    BLACK: window.Izipay.enums.theme.BLACK,
    BLUE: window.Izipay.enums.theme.BLUE,
    LIGHTGREEN: window.Izipay.enums.theme.LIGHTGREEN,
  };
  console.log(color);
  const handleTheme = (event) => {
    setAppearance((prev) => ({
      ...prev,
      theme: event.currentTarget?.id,
      hColor: event.currentTarget?.dataset.color, // ✅ Accede al dataset
    }));
  };
  return (
    <div className="w-full flex md:flex-row flex-col items-center">
      <h2 className="font-medium text-nowrap text-[#1A90FF]">Tema:</h2>
      <div className="w-full flex justify-evenly items-center">
        <h2
          id={color.RED}
          data-color="bg-[#FF4240] text-white border border-white"
          className={
            color.RED === theme
              ? "w-[90px] text-[#FF4240] bg-[#17213B] text-center rounded-sm py-1"
              : "w-[90px] text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#FF4240] py-1"
          }
          onClick={handleTheme}
        >
          Red
        </h2>
        <h2
          id={color.LIGHT_RED}
          data-color="bg-[#FF8A00] text-white border border-white"
          className={
            color.LIGHT_RED === theme
              ? "w-[90px] text-[#FF8A00] bg-[#17213B] text-center rounded-sm py-1"
              : "w-[90px] text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#FF8A00] py-1"
          }
          onClick={handleTheme}
        >
          Light Red
        </h2>
        <h2
          id={color.GREEN}
          data-color="bg-[#00A09D] text-white border border-white"
          className={
            color.GREEN === theme
              ? "w-[90px] text-[#00A09D] bg-[#17213B] text-center rounded-sm py-1"
              : "w-[90px] text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#00A09D] py-1"
          }
          onClick={handleTheme}
        >
          Green
        </h2>
        <h2
          id={color.PURPLE}
          data-color="bg-[#8A65DA] text-white border border-white"
          className={
            color.PURPLE === theme
              ? "w-[90px] text-[#8A65DA] bg-[#17213B] text-center rounded-sm py-1"
              : "w-[90px] text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#8A65DA] py-1"
          }
          onClick={handleTheme}
        >
          Purple
        </h2>
        <h2
          id={color.BLACK}
          data-color="bg-[#000000] text-white border border-white"
          className={
            color.BLACK === theme
              ? "w-[90px] bg-[#17213B] text-center rounded-sm py-1 "
              : "w-[90px] text-center rounded-sm cursor-pointer hover:bg-[#17213B]  py-1"
          }
          onClick={handleTheme}
        >
          Black
        </h2>
        <h2
          id={color.BLUE}
          data-color="bg-[#0570DE] text-white border border-white"
          className={
            color.BLUE === theme
              ? "w-[90px] text-[#0570DE] bg-[#17213B] text-center rounded-sm py-1"
              : "w-[90px] text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#0570DE] py-1"
          }
          onClick={handleTheme}
        >
          Blue
        </h2>
        <h2
          id={color.LIGHTGREEN}
          data-color="bg-[#3DD2CE] text-white border border-white"
          className={
            color.LIGHTGREEN === theme
              ? "w-[90px] text-[#3DD2CE] bg-[#17213B] text-center rounded-sm py-1"
              : "w-[90px] text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#3DD2CE] py-1"
          }
          onClick={handleTheme}
        >
          Light Green
        </h2>
      </div>
    </div>
  );
};
