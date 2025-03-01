export const IntegrationMethods = ({
  integrationMethod,
  setIntegrationMethod,
}) => {
  const handleSelectMethod = (method) => {
    const containerIframe = document.querySelector("#container-iframe");

    // Actualizar estado de integración
    if (method === "popUp") {
      setIntegrationMethod({ popUp: true, embebed: false, redirect: false });
      containerIframe.style.display = "none";
      // Ocultar iframe en modo PopUp
    } else if (method === "embebed") {
      setIntegrationMethod({ popUp: false, embebed: true, redirect: false });
      containerIframe.style.display = "block";
      // Mostrar iframe en modo Embebed
    } else if (method === "redirect") {
      setIntegrationMethod({ popUp: false, embebed: false, redirect: true });
      containerIframe.style.display = "none";
      // Ocultar iframe en modo Redirect
    }
  };
  return (
    <div className="w-full flex md:flex-row flex-col items-center">
      <h2 className="font-medium text-nowrap text-[#1A90FF]">
        Metodos de integración:
      </h2>
      <div className="w-full flex gap-2 justify-evenly">
        <h2
          id="popUp"
          className={
            integrationMethod.popUp
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1"
          }
          onClick={(e) => handleSelectMethod(e.target.id)}
        >
          Pop-up
        </h2>
        <h2
          id="embebed"
          className={
            integrationMethod.embebed
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1"
          }
          onClick={(e) => handleSelectMethod(e.target.id)}
        >
          Embebido
        </h2>
        <h2
          id="redirect"
          className={
            integrationMethod.redirect
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1"
          }
          onClick={(e) => handleSelectMethod(e.target.id)}
        >
          Redirect
        </h2>
      </div>
    </div>
  );
};
