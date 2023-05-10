import React from "react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import landing_logo from '../../public/svgs/Landing_logo.svg'

export default function Home() {
  return (
    <main className="main_page">
      <Navbar/>
      <div className='flex flex-row justify-center items-center container px-12 text-black'>
        
        <div className="flex-row justify-center items-center flex-1 h-[400px] p-4">

          <div className="flex flex-col justify-center h-full ">

          <h1 className="font-semibold text-4xl">
            Build your next project faster
          </h1>
          <p className="mt-2 text-[15px] text-gray-500 font-semibold">
          Sensitivity analysis is a technique that evaluates how sensitive a model's output is to changes in its inputs. It involves varying one input at a time and measuring the effect on the output.
          </p>
          <div className="flex gap-6 flex-row m-4 ml-0 ">
            <button className="bg-blue-700 px-6 py-2 rounded text-blue-200">BTN 1</button>
            <button className="bg-blue-200 px-6 py-2 rounded text-blue-700">BTN 1</button>
          </div>
          
          </div>

        </div>

        <div className="flex flex-1  justify-center items-center h-[400px]">
          <Image src={landing_logo} width={500} className="rounded-xl"/>
        </div>
      </div>
    </main>
  )
}