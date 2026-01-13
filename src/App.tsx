import TransactionChartSummary from "./charts/TransactionChartSummary";
import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Summary from "./components/Summary";
import { GlobalContext } from "./context/GlobalContextComponent";
import type { formDataType } from "./context/GlobalContextComponent";
import ExpenseList from "./components/ExpenseList";

export default function App() {
  const [isClose, setIsOpen] = useState(false);
  const { totalTransaction }: any = useContext(GlobalContext);
  const [totalExpenses, setTotalExpenses] = useState({ income: 0, expense: 0 });

  useEffect(() => {
    let income = 0;
    let expense = 0;

    income = totalTransaction
      .filter((item: { type: string }) => item.type === "income")
      .reduce(
        (acc: number, curr: formDataType) => acc + parseFloat(curr.amount),
        0
      );
    expense = totalTransaction
      .filter((item: { type: string }) => item.type === "expense")
      .reduce(
        (acc: number, curr: formDataType) => acc + parseFloat(curr.amount),
        0
      );

    setTotalExpenses({ income, expense });
  }, [totalTransaction]);
  return (
    <div className="bg-blue-50 w-full h-screen relative ">
      {isClose ? (
        <div className="bg-black/50 z-10 absolute w-full h-screen"></div>
      ) : null}
      <Header openModal={setIsOpen} />
      {isClose ? <Modal openModal={setIsOpen} /> : null}
      <div className="grid grid-cols-2 w-4/5 mx-auto mt-8 gap-5">
        <Summary
          income={totalExpenses.income}
          expense={totalExpenses.expense}
        />
        <div className="bg-white rounded-2xl p-8">
          <TransactionChartSummary
            income={totalExpenses.income}
            expense={totalExpenses.expense}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-between gap-5 w-4/5 mx-auto mt-8">
        <ExpenseList title="income" />
        <ExpenseList title="expense" />
      </div>
    </div>
  );
}
