export const AmountInput = ({ amount, setAmount }) => {
  const handleChange = (e) => {
    let value = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };
  const handleBlur = () => {
    if (amount !== "") {
      setAmount(parseFloat(amount).toFixed(2));
    }
  };
  return (
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
  );
};
