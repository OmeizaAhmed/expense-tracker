// import TransactionChartSummary from "./charts/TransactionChartSummary";
import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";

export default function App() {
  const [ isClose, setIsOpen ] = useState(false)
  return (
    <div className="bg-blue-50 w-full h-screen relative">
      {isClose? <div className="bg-black/50 z-10 absolute w-full h-screen"></div> : null}
        <Header openModal={setIsOpen}/>
        {isClose? <Modal openModal={setIsOpen}/> : null}
        <div></div>
    </div>
  );
}
