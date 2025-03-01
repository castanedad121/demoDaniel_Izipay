import React, { useEffect, useState } from "react";
import PaymentButton from "./PaymentButton";
import { PaymentMethods } from "./PaymentMethods";
import { IntegrationMethods } from "./IntegrationMethods";
import { FormActions } from "./FormActions";
import { LanguageSelector } from "./LanguageSelector";
import { AmountInput } from "./AmountInput";
import { LogoInput } from "./LogoInput";
import { ThemeColor } from "./ThemeColor";

const Checkout = () => {
  const [lenguageSelect, setLenguageSelect] = useState({
    init: window.Izipay.enums.langInit.ESP,
    control: true,
    ESP: true,
    ENG: false,
  });
  const [methodPay, setMethodPay] = useState({
    all: [true, window.Izipay.enums.showMethods.ALL],
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
  const [appearance, setAppearance] = useState({
    logo: "",
    theme: window.Izipay.enums.theme.RED,
  });

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
  }, [methodPay]);

  return (
    <div className="w-full flex md:flex-row flex-col gap-4 md:items-start items-center justify-around">
      <section className="flex flex-col gap-4 items-center md:w-1/2 p-4">
        <AmountInput amount={amount} setAmount={setAmount} />
        <IntegrationMethods
          integrationMethod={integrationMethod}
          setIntegrationMethod={setIntegrationMethod}
        />
        <FormActions actionForm={actionForm} setActionForm={setActionForm} />
        <PaymentMethods methodPay={methodPay} setMethodPay={setMethodPay} />
        <LanguageSelector
          lenguageSelect={lenguageSelect}
          setLenguageSelect={setLenguageSelect}
        />
        <LogoInput appearance={appearance} setAppearance={setAppearance} />
        <ThemeColor appearance={appearance} setAppearance={setAppearance} />
      </section>
      <section className="flex flex-col items-center md:w-1/2">
        <PaymentButton
          integrationMethod={integrationMethod}
          amount={amount}
          actionForm={actionForm}
          arrayMethodPay={arrayMethodPay}
          lenguageSelect={lenguageSelect}
          appearance={appearance}
        />
        <pre
          id="payment-message"
          className="w-min p-4 font-light text-white text-sm"
        ></pre>

        <div
          id="container-iframe"
          className=" w-min hidden overflow-hidden rounded-md p-4"
        >
          <div id="iframe-payment"></div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
