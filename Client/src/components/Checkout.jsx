import React, { useEffect, useState } from "react";
import PaymentButton from "./PaymentButton";
import creditCardIcon from "../assets/creditcard.svg";
import qrIcon from "../assets/qrcode.svg";
import applePayIcon from "../assets/apple_pay.svg";
import yapeIcon from "../assets/icon-mini-yape.svg";
import milesIcon from "../assets/Miles.png";
import ibkAppIcon from "../assets/plin-interbank-dark.svg";

const Checkout = () => {
  console.log(window.Izipay.enums.langInit.ESP);
  const [lenguageSelect, setLenguageSelect] = useState({
    init: window.Izipay.enums.langInit.ESP,
    control: true,
    ESP: true,
    ENG: false,
  });
  const [methodPay, setMethodPay] = useState({
    all: [true, window.Izipay.enums.showMethods.ALL], // 🔹 Inicia en true
    card: [true, window.Izipay.enums.showMethods.CARD],
    qr: [true, window.Izipay.enums.showMethods.QR],
    apple_pay: [true, window.Izipay.enums.showMethods.APPLE_PAY],
    yape: [true, window.Izipay.enums.showMethods.YAPE],
    ibk_app: [true, window.Izipay.enums.showMethods.IBK_APP],
    miles: [true, window.Izipay.enums.showMethods.MILES],
  });

  const [arrayMethodPay, setArrayMethodPay] = useState([
    window.Izipay.enums.showMethods.ALL,
  ]);
  const [amount, setAmount] = useState("1.99");
  const [integrationMethod, setIntegrationMethod] = useState({
    popUp: true,
    embebed: false,
    redirect: false,
  });
  const [actionForm, setActionForm] = useState({
    pay: true,
    register: false,
    payRegister: false,
    paytoken: false,
  });

  const handleSelectMethod = (method) => {
    const containerIframe = document.querySelector("#container-iframe");
    const paymentMessage = document.querySelector("#payment-message");

    // Limpiar mensaje de pago
    paymentMessage.innerHTML = "";

    // Actualizar estado de integración
    if (method === "popUp") {
      setIntegrationMethod({ popUp: true, embebed: false, redirect: false });
      containerIframe.style.display = "none";
      // Ocultar iframe en modo PopUp
    } else if (method === "embebed") {
      setIntegrationMethod({ popUp: false, embebed: true, redirect: false });
      containerIframe.style.display = "block"; // Mostrar iframe en modo Embebed
    } else if (method === "redirect") {
      setIntegrationMethod({ popUp: false, embebed: false, redirect: true });
      containerIframe.style.display = "none";
      // Ocultar iframe en modo Redirect
    }
  };

  // Función para validar solo números con máximo 2 decimales
  const handleChange = (e) => {
    let value = e.target.value;

    // Permitir solo números y máximo 2 decimales
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };
  const handleBlur = () => {
    if (amount !== "") {
      // Formatear a 2 decimales si es necesario
      setAmount(parseFloat(amount).toFixed(2));
    }
  };

  // 🔹 Maneja la selección de métodos de pago
  const handleMethodPay = (methodPaySelect) => {
    setMethodPay((prev) => {
      let updatedMethods;

      if (methodPaySelect === "all") {
        const allSelected = !prev.all[0];

        updatedMethods = {
          all: [allSelected, window.Izipay.enums.showMethods.ALL],
          card: [allSelected, window.Izipay.enums.showMethods.CARD],
          qr: [allSelected, window.Izipay.enums.showMethods.QR],
          apple_pay: [allSelected, window.Izipay.enums.showMethods.APPLE_PAY],
          yape: [allSelected, window.Izipay.enums.showMethods.YAPE],
          ibk_app: [allSelected, window.Izipay.enums.showMethods.IBK_APP],
          miles: [allSelected, window.Izipay.enums.showMethods.MILES],
        };
      } else {
        const methodSelected = !prev[methodPaySelect][0];

        updatedMethods = {
          ...prev,
          all: [false, window.Izipay.enums.showMethods.ALL], // Desactiva "Todos"
          [methodPaySelect]: [
            methodSelected,
            window.Izipay.enums.showMethods[methodPaySelect.toUpperCase()],
          ],
        };
      }

      return updatedMethods;
    });
  };
  // 🔹 Sincroniza arrayMethodPay con los cambios en methodPay
  useEffect(() => {
    let newArrayMethodPay = [];

    if (methodPay.all[0]) {
      newArrayMethodPay = [methodPay.all[1]];
    } else {
      newArrayMethodPay = Object.keys(methodPay)
        .filter((key) => key !== "all" && methodPay[key][0])
        .map((key) => methodPay[key][1]);
    }

    setArrayMethodPay(newArrayMethodPay);
  }, [methodPay]); // Se ejecuta cada vez que methodPay cambia
  return (
    <div className="w-full flex md:flex-row flex-col gap-4 md:items-start items-center justify-around">
      <section className="flex flex-col gap-4 items-center md:w-1/2 p-4">
        <div className="w-full flex justify-start items-center gap-4">
          <h2 className="font-medium text-[#1A90FF]">Monto:</h2>
          <input
            type="text"
            value={amount}
            onChange={handleChange}
            onBlur={handleBlur}
            inputMode="decimal"
            className="w-min bg-transparent placeholder:text-slate-400 text-slate-200 
      text-sm border border-slate-300 rounded-md px-2 py-1 
      transition-all duration-300 ease-in-out focus:outline-none 
      focus:border-blue-500 focus:ring focus:ring-[#1A90FF]
      hover:border-blue-400 hover:shadow-md"
          />
        </div>
        <div className="w-full flex md:flex-row flex-col">
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
        <div className="w-full flex md:flex-row flex-col">
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
        <div className="w-full flex md:flex-row flex-col">
          <div>
            <h2 className="font-medium text-nowrap text-[#1A90FF]">
              Métodos de Pago:
            </h2>
            <div className="flex items-center">
              <input
                id="all"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                checked={methodPay.all[0]}
                onClick={(e) => handleMethodPay(e.currentTarget.id)}
              />
              <label className="ms-2 text-sm font-light text-gray-300">
                Todos
              </label>
            </div>
          </div>
          <div className="w-full flex gap-1 justify-evenly">
            <div
              id="card"
              className={
                methodPay.card[0]
                  ? "flex flex-col justify-center items-center rounded-sm cursor-pointer bg-[#17213B] hover:bg-transparent text-[#1A90FF] hover:text-white pt-2 px-2"
                  : "flex flex-col justify-center items-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] pt-2 px-2"
              }
              onClick={(e) => handleMethodPay(e.currentTarget.id)}
            >
              <div className="flex flex-col justify-center items-center h-8 overflow-hidden">
                <img src={creditCardIcon} className="h-8" alt="Credit Card" />
              </div>
              <p className="font-light">Tarjeta</p>
            </div>
            <div
              id="qr"
              className={
                methodPay.qr[0]
                  ? "flex flex-col justify-center items-center rounded-sm cursor-pointer bg-[#17213B] hover:bg-transparent text-[#1A90FF] hover:text-white pt-2 px-2"
                  : "flex flex-col justify-center items-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] pt-2 px-2"
              }
              onClick={(e) => handleMethodPay(e.currentTarget.id)}
            >
              <div className="flex flex-col justify-center items-center h-8 overflow-hidden">
                <img src={qrIcon} className="h-8" alt="Credit Card" />
              </div>
              <p className="font-light">QR</p>
            </div>
            <div
              id="miles"
              className={
                methodPay.miles[0]
                  ? "flex flex-col justify-center items-center rounded-sm cursor-pointer bg-[#17213B] hover:bg-transparent text-[#1A90FF] hover:text-white pt-2 px-2"
                  : "flex flex-col justify-center items-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] pt-2 px-2"
              }
              onClick={(e) => handleMethodPay(e.currentTarget.id)}
            >
              <div className="h-8 overflow-hidden flex justify-center items-center bg-transparent ">
                <img src={milesIcon} className="h-8" alt="Credit Card" />
              </div>
              <p className="font-light">Millas</p>
            </div>
            <div
              id="yape"
              className={
                methodPay.yape[0]
                  ? "flex flex-col justify-center items-center rounded-sm cursor-pointer bg-[#17213B] hover:bg-transparent text-[#1A90FF] hover:text-white pt-2 px-2"
                  : "flex flex-col justify-center items-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] pt-2 px-2"
              }
              onClick={(e) => handleMethodPay(e.currentTarget.id)}
            >
              <div className="h-8 overflow-hidden flex justify-center items-center">
                <img src={yapeIcon} className="h-[28px]" alt="Credit Card" />
              </div>
              <p className="font-light">Yape</p>
            </div>
            <div
              id="ibk_app"
              className={
                methodPay.ibk_app[0]
                  ? "flex flex-col justify-center items-center rounded-sm cursor-pointer bg-[#17213B] hover:bg-transparent text-[#1A90FF] hover:text-white pt-2 px-2"
                  : "flex flex-col justify-center items-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] pt-2 px-2"
              }
              onClick={(e) => handleMethodPay(e.currentTarget.id)}
            >
              <div className="h-8 overflow-hidden flex justify-center items-center">
                <img src={ibkAppIcon} className="h-8" alt="Credit Card" />
              </div>
              <p className="font-light">Plin - Interbank</p>
            </div>
            <div
              id="apple_pay"
              className={
                methodPay.apple_pay[0]
                  ? "flex flex-col justify-center items-center rounded-sm cursor-pointer bg-[#17213B] hover:bg-transparent text-[#1A90FF] hover:text-white pt-2 px-2"
                  : "flex flex-col justify-center items-center rounded-sm cursor-pointer hover:bg-[#17213B] hover:text-[#1A90FF] pt-2 px-2"
              }
              onClick={(e) => handleMethodPay(e.currentTarget.id)}
            >
              <div className="h-8 overflow-hidden flex justify-center items-center">
                <img src={applePayIcon} className="h-16" alt="Credit Card" />
              </div>
              <p className="font-light">Apple Pay</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center md:w-1/2">
        <PaymentButton
          integrationMethod={integrationMethod}
          amount={amount}
          actionForm={actionForm}
          arrayMethodPay={arrayMethodPay}
          lenguageSelect={lenguageSelect}
        />
        <pre
          id="payment-message"
          className="w-min p-4 font-light text-white text-sm"
        ></pre>

        <div
          id="container-iframe"
          className=" w-min bg-white hidden overflow-hidden rounded-md p-4"
        >
          <div id="iframe-payment"></div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
