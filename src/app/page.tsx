"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [bill, setbill] = useState()
  const [resto, setResto] = useState()
  const [result , setResult] = useState()


  const  handleinputBill = (event)  => {

      setbill(event.target.value)

  }

  const  handleInputResto = (Event) => {

    setResto(Event.target.value)
  }


  const  calculationResult = () => {

 const Total =  Number(bill) + Number(resto)

  setResult(Total)
  }



  return (

    <>

    <div className="flex flex-col justify-center items-center mt-10">

      <h1 className="text-2xl font-bold text-white">Bill sheet-App 🥇</h1>
    </div>
    
    <main className="flex justify-center items-center min-h-screen ">

<div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative flex flex-col justify-center items-center mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">

    <h1 className="text-4xl font-bold ">${result}</h1>
  </div>
  
  <div>

    {/* Bill input */}
    <div className="flex flex-col px-4 space-y-3 my-7">

      <label className="text-[20px]  font-semibold text-cyan-700 ">Bill ✨</label>
      <input type="number" placeholder="Enter Bill" 
      className="px-5 py-3 outline-none border-2 border-cyan-600
      rounded-md  disabled:opacity-50 disabled:cursor-not-allowed"

      value={bill}
      onChange={handleinputBill}
      
      
      />
    </div>
    {/* Hadhaa intu */}
     <div className="flex flex-col px-4 space-y-3 my-7">

      <label className="text-[20px]  font-semibold text-cyan-700 ">BaQi Hore ✨</label>
      <input type="number" placeholder="Enter Bill" 
      className="px-5 py-3 outline-none border-2 border-cyan-600
      rounded-md  disabled:opacity-50 disabled:cursor-not-allowed"
      value={resto}
      onChange={handleInputResto}
      
      
      />
    </div>
  </div>
  <div className="p-6 pt-0">
    <button data-ripple-light="true" type="button" className=" rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md
     shadow-blue-500/20 transition-all  disabled:opacity-50 disabled:cursor-not-allowed"
    
    onClick={calculationResult}
    >
      calulate
    </button>
  </div>
</div>
    </main>
    </>
  );
  
}
