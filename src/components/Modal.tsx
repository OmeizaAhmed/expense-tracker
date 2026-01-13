import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContextComponent";

export default function Modal({
  openModal,
}: {
  openModal: (value: boolean) => void;
}) {
  const { formData, setFormData, totalTransaction, setTotalTransaction }: any =
    useContext(GlobalContext);

  function handleChange(e: any) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleClear(e: any) {
    setFormData({
      description: "",
      amount: "",
      type: "income",
    });
    e.preventDefault();
  }

  function sumbitTransaction(e: any) {
    e.preventDefault();
    if (!formData.description.trim() || !formData.amount.trim()) return;
    const cpyTotalTransaction = [...totalTransaction];
    const cpyTransaction = { ...formData, id: Date.now() };
    cpyTotalTransaction.push(cpyTransaction);
    setTotalTransaction(cpyTotalTransaction);
    setFormData({
      description: "",
      amount: "",
      type: "income",
    });
    openModal(false);
  }

  return (
    <div className="absolute z-20 left-1/2 transform -translate-x-1/2">
      <div className="w-80 rounded-2xl mx-auto h-70 bg-white p-4 relative">
        <h2 className="text-lg font-bold">Add New Transaction</h2>
        <form className="flex flex-col gap-2 mt-2">
          <label htmlFor="description-input">Enter Description</label>
          <input
            type="text"
            name="description"
            id="description-input"
            value={formData.description}
            onChange={(e) => handleChange(e)}
            className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-gray-400"
          />
          <label htmlFor="amount-input">Enter Amount</label>
          <input
            type="number"
            name="amount"
            id="amount-input"
            value={formData.amount}
            onChange={(e) => handleChange(e)}
            className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-gray-400"
          />
          <fieldset className="flex gap-2">
            <label htmlFor="income">Income</label>
            <input
              type="radio"
              name="type"
              id="income"
              value="income"
              checked={formData.type === "income"}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              name="type"
              id="expense"
              value="expense"
              checked={formData.type === "expense"}
              onChange={(e) => handleChange(e)}
            />
          </fieldset>
          <div className="flex gap-2 justify-end mt-2">
            <button
              className="bg-gray-300 px-2 py-1 rounded-md text-sm"
              onClick={(e) => handleClear(e)}
            >
              Cancel
            </button>
            <button
              className="bg-gray-300 px-2 py-1 rounded-md text-sm"
              onClick={(e) => sumbitTransaction(e)}
            >
              Add
            </button>
          </div>
        </form>
        <span
          className="absolute top-4 right-6 text-xl cursor-pointer"
          onClick={() => openModal(false)}
        >
          x
        </span>
      </div>
    </div>
  );
}
