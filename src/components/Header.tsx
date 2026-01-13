
export default function Header({openModal}:{openModal: (value:true) => void}){

  return (
    <nav className="flex justify-between w-4/5 mx-auto p-5">
      <h1 className="text-3xl font-bold text-blue-400">Expense Tracker</h1>
      <button  className="px-3 py-1.5 rounded-md bg-blue-400 font-semibold text-sm hover:bg-blue-200" onClick={()=> openModal(true)}>Add New Transaction</button>
    </nav>
  )
}