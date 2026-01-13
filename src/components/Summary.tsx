

export default function Summary({income=0, expense=0}){
  
  return(
    <div className="bg-white rounded-2xl w-full h-full text-center p-5 flex flex-col gap-3 text-gray-800">
      <h3 className="text-md font-semibold">Balance is ₦{new Intl.NumberFormat('en-Us').format(income - expense)}</h3>
      <p className="flex flex-col"><span className="text-2xl font-bold">₦{new Intl.NumberFormat('en-Us').format(income)}</span><span className="text-md">Total Income</span></p>
      <p className="flex flex-col"><span className="text-2xl font-bold">₦{new Intl.NumberFormat('en-Us').format(expense)}</span><span className="text-md">Total Expense</span></p>
    </div>
  )
}

// new Intl.NumberFormat('en-Us').format(parseFloat(item.amount))