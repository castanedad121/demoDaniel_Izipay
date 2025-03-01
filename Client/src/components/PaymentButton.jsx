import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken, setOrder } from "../store/orderSlice";
import generateOrder from "../utils/generateOrder";
import removeKeyRecursive from "../utils/removeKeyRecursive";

const PaymentButton = ({
  integrationMethod,
  amount,
  actionForm,
  arrayMethodPay,
  lenguageSelect,
  appearance,
}) => {
  const { logo, theme } = appearance;
  const { init, control } = lenguageSelect;
  const { pay, register, payRegister, payToken } = actionForm;
  const { popUp, embebed, redirect } = integrationMethod;
  const dispatch = useDispatch();
  const { transactionId, orderNumber, token, status } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    const { transactionId, orderNumber } = generateOrder();
    dispatch(setOrder({ transactionId, orderNumber }));

    dispatch(
      fetchToken({
        transactionId,
        orderData: {
          requestSource: "ECOMMERCE",
          merchantCode: "4001834",
          orderNumber,
          publicKey: "VErethUtraQuxas57wuMuquprADrAHAb",
          amount: amount,
        },
      })
    );
  }, [
    dispatch,
    integrationMethod,
    amount,
    actionForm,
    arrayMethodPay,
    lenguageSelect,
    appearance,
  ]);

  const handlePayment = () => {
    const containerIframe = document.querySelector("#container-iframe");
    if (embebed) containerIframe.style.backgroundColor = "white";
    const paymentMessage = document.querySelector("#payment-message");
    // Limpiar mensaje de pago
    paymentMessage.innerHTML = "";

    // Verifica que el contenedor existe antes de ejecutar LoadForm
    const container = document.querySelector("#iframe-payment");
    if (!container) {
      console.error("El contenedor #iframe-payment no existe en el DOM.");
      return;
    }

    // Verifica que el SDK esté cargado antes de continuar
    if (!token || !window.Izipay) {
      console.error("Izipay no está cargado o el token es inválido.");
      return;
    }

    const paymentConfig = {
      transactionId,
      action: register
        ? window.Izipay.enums.payActions.REGISTER
        : payRegister
        ? window.Izipay.enums.payActions.PAY_REGISTER
        : payToken
        ? window.Izipay.enums.payActions.PAY_TOKEN
        : window.Izipay.enums.payActions.PAY,
      merchantCode: "4001834",
      order: {
        orderNumber,
        currency: "PEN",
        amount: amount,
        merchantBuyerId: "mc1768",
        dateTimeTransaction: Date.now().toString(),
        payMethod:
          arrayMethodPay.length > 1
            ? arrayMethodPay.join(", ")
            : arrayMethodPay[0] || "",
        processType: window.Izipay.enums.processType.AUTHORIZATION,
      },
      billing: {
        firstName: "Juan",
        lastName: "Wick",
        email: "jwick@izipay.pe",
        phoneNumber: "989339999",
        street: "calle el demo",
        city: "lima",
        state: "lima",
        country: "PE",
        postalCode: "00001",
        document: "12345678",
        documentType: window.Izipay.enums.documentType.DNI,
      },
      language: { init: init, showControlMultiLang: control },
      render: {
        typeForm: embebed
          ? window.Izipay.enums.typeForm.EMBEDDED
          : redirect
          ? window.Izipay.enums.typeForm.REDIRECT
          : window.Izipay.enums.typeForm.POP_UP,
        container: "#iframe-payment",
        showButtonProcessForm: true,
        redirectUrls: {
          onSuccess: "http://localhost:5173/",
          onError: "http://localhost:5173/",
          onCancel: "http://localhost:5173/",
        },
      },
      appearance: {
        logo: logo,
        theme: theme,
      },
    };

    console.log("🟢 Configuración enviada a Izipay:", paymentConfig);

    const checkout = new window.Izipay({ config: paymentConfig });

    console.log("🔹 Contenedor de pago detectado:", container);
    console.log("🟢 Configuración enviada a Izipay:", paymentConfig);
    const callbackResponsePayment = (response) => {
      console.log("🔹 Respuesta de Izipay:", response); // ✅ Ver en la consola

      if (paymentMessage) {
        let formattedResponse = removeKeyRecursive(response, "payloadHttp");

        // Mostrar el JSON formateado en el frontend
        paymentMessage.innerHTML = JSON.stringify(formattedResponse, null, 2);

        containerIframe.style.display = "none";
      }
    };
    checkout.LoadForm({
      authorization: token,
      keyRSA: "RSA",
      callbackResponse: callbackResponsePayment,
    });
  };

  return (
    <button
      onClick={handlePayment}
      className="w-max bg-[#eb2f2f] border-none py-1 px-4 text-base cursor-pointer hover:bg-[#f24949] rounded-sm hover:scale-95 hover:text-white"
      disabled={status === "loading"}
    >
      {status === "loading"
        ? "Loading..."
        : amount === ""
        ? "Ingresar Monto"
        : `PEN ${amount} →`}
    </button>
  );
};

export default PaymentButton;
