import { useContext } from "react"
import { GlobalContext, type formDataType } from "../context/GlobalContextComponent"

export default function ExpenseList({title}: {title: "expense" | "income"}){
  const {totalTransaction, setTotalTransaction}: any = useContext(GlobalContext)
  const expenseData : formDataType[] = totalTransaction.filter((item:formDataType) => item.type === title)
  
  function removeFromExpense(id:number){
    const cpyTotalTransaction = [...totalTransaction];
    const transactionIndex = cpyTotalTransaction.findIndex((item: {id: number}) => item.id === id);
    if(transactionIndex !== -1){
      cpyTotalTransaction.splice(transactionIndex, 1);
    }
    setTotalTransaction(cpyTotalTransaction);
  }

  return(
    <div className="flex flex-col gap-3 bg-white p-5 rounded-2xl">
      <h4 className="text-xl font-bold text-red-950 capitalize">{title}</h4>
      {
        expenseData && expenseData.length?
        expenseData.map((item) => (
          <div key={item.id} className={`w-full rounded-lg py-3 px-6 pr-9 flex relative justify-between capitalize ${title === 'income'? "bg-blue-100" : "bg-red-100"}`}>
            <span className="w-50 truncate">{item.description}</span>
            <span>₦{new Intl.NumberFormat('en-Us').format(parseFloat(item.amount))}</span>
            <span className="absolute top-1.5 right-3 text-xs font-mono cursor-pointer font-bold" onClick={() => item.id? removeFromExpense(item.id): null}>x</span>
          </div>
        ))
        : null
      }
    </div>
  )
}