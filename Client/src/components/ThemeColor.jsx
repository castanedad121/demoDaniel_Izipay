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
  const handleTheme = (value) => {
    setAppearance({
      ...appearance,
      theme: value.target.id,
    });
  };
  return (
    <div className="w-full flex md:flex-row flex-col items-center">
      <h2 className="font-medium text-nowrap text-[#1A90FF]">Tema:</h2>
      <div className="w-full flex gap-1 justify-evenly">
        <h2
          id={color.RED}
          className={
            color.RED === theme
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1"
          }
          onClick={handleTheme}
        >
          Red
        </h2>
        <h2
          id={color.LIGHT_RED}
          className={
            color.LIGHT_RED === theme
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1"
          }
          onClick={handleTheme}
        >
          Light Red
        </h2>
        <h2
          id={color.GREEN}
          className={
            color.GREEN === theme
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1"
          }
          onClick={handleTheme}
        >
          Green
        </h2>
        <h2
          id={color.PURPLE}
          className={
            color.PURPLE === theme
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1"
          }
          onClick={handleTheme}
        >
          Purple
        </h2>
        <h2
          id={color.BLACK}
          className={
            color.BLACK === theme
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1"
          }
          onClick={handleTheme}
        >
          Black
        </h2>
        <h2
          id={color.BLUE}
          className={
            color.BLUE === theme
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1"
          }
          onClick={handleTheme}
        >
          Blue
        </h2>
        <h2
          id={color.LIGHTGREEN}
          className={
            color.LIGHTGREEN === theme
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1"
          }
          onClick={handleTheme}
        >
          Light Green
        </h2>
      </div>
    </div>
  );
};
