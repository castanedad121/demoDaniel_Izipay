const useIzipay = async (transactionId, orderData) => {
  try {
    const response = await fetch("http://localhost:4242/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        transactionId: transactionId,
      },
      body: JSON.stringify(orderData),
    });

    return await response.json();
  } catch (error) {
    console.error("Error obteniendo el token:", error);
    return { response: { token: undefined, error: "01_NODE_API" } };
  }
};

export default useIzipay;
