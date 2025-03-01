export const FormActions = ({ actionForm, setActionForm }) => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center">
      <h2 className="font-medium text-nowrap text-[#1A90FF]">
        Acción del formulario:
      </h2>
      <div className="w-full flex gap-1 justify-evenly">
        <h2
          id="Pay"
          className={
            actionForm.pay
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1"
          }
          onClick={() =>
            setActionForm({
              pay: true,
              register: false,
              payRegister: false,
              paytoken: false,
            })
          }
        >
          Pay
        </h2>
        <h2
          id="Register"
          className={
            actionForm.register
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1"
          }
          onClick={() =>
            setActionForm({
              pay: false,
              register: true,
              payRegister: false,
              paytoken: false,
            })
          }
        >
          Register
        </h2>
        <h2
          id="payRegister"
          className={
            actionForm.payRegister
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1"
          }
          onClick={() =>
            setActionForm({
              pay: false,
              register: false,
              payRegister: true,
              paytoken: false,
            })
          }
        >
          Pay Register
        </h2>
        <h2
          id="payToken"
          className={
            actionForm.paytoken
              ? "w-32 text-[#1A90FF] bg-[#17213B] text-center rounded-sm py-1"
              : "w-32 text-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] py-1"
          }
          onClick={() =>
            setActionForm({
              pay: false,
              register: false,
              payRegister: false,
              paytoken: true,
            })
          }
        >
          Pay Token
        </h2>
      </div>
    </div>
  );
};
