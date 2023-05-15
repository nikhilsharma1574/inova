import React from "react";
import Button from '../components/Button.js'
import About_logo from '../../public/svgs/About_logo.svg'
import Image from "next/image.js"
import Arrow_down from '../../public/svgs/Arrow_down.svg'
import Timeline from "@/components/Timeline.js"
import iphone from '../../public/images/mobile_14.png'
import col1 from '../../public/svgs/1col.svg'
import col2 from '../../public/svgs/2col.svg'
import col3 from '../../public/svgs/3col.svg'
import col4 from '../../public/svgs/4col.svg'
import col5 from '../../public/svgs/5col.svg'
import col6 from '../../public/svgs/6col.svg'
import Footer from "@/components/Footer.js"
import standout from '../../public/svgs/stand_out.svg'
const landing_page = () => {
return (
    <>
        <div className="h-screen bg-background bg-cover">
        <div className='flex flex-col text-white h-full w-full justify-center items-center bg-landing-bg bg-cover'>
            <div className="flex justify-end w-full top-0 absolute p-6">
                <p className="underline-offset-10 underline mr-10">
                    Login
                </p>
            </div>
            <p className='text-6xl uppercase text-center font-semibold'>
                Crafting resumes<br></br>that make you shine</p>
            <div className='mt-20 '>
                <Button title={"Let's get started"} className=' hover:bg-blue-900 hover:scale-110 transition-all'/>
            </div>
            <div>
                <Image src={Arrow_down} width={60} className="object-contain h-full animate-bounce mt-20 rounded-full"/>
            </div>
        </div>
    </div>
    <div id='slide_2' className='h-screen bg-black text-white'>
        <div className='container flex-col'>
            <div className='uppercase text-6xl font-bold pt-12 pl-8'>
                What we do !!
            </div>
            <div className='flex flex-row down p-8 '>
                <div className='flex-1 h-full p-6 text-gray-400'>
                    {/* <p className="my-6">A resume is a crucial document for any job seeker, as it is often the first impression that a potential employer has of you. Creating a visually appealing and well-organized resume is essential to stand out from other applicants. With the help of a website that creates good looking resumes in PDF form, you can showcase your skills in an efficient and impressive manner.</p> */}
                    {/* <p className="my-6">Such a website typically offers a range of templates to choose from, each with a unique design that highlights different aspects of your experience and qualifications. These templates often include customizable sections, allowing you to tailor your resume to the specific job you are applying for. Additionally, many of these websites offer helpful tips and guidance to ensure that your resume is professional and well-crafted.</p> */}
                    {/* <p className="my-6">By using a website that creates good looking resumes in PDF form, you can save time and effort while still producing a high-quality document that effectively showcases your skills and qualifications. With the right design and format, your resume can make a strong impression and help you stand out in a competitive job market.</p> */}
                    <div className="mt-6">
                    <Timeline/>
                    </div>
                </div>
                <div className='flex-1 justify-center flex '>
                    <Image src={About_logo} width={500}/>
                </div>
            </div>
        </div>
    </div>
    <div className="slide_3 h-screen bg-black text-white">
        <div className="text-right uppercase text-6xl font-bold pt-10 px-8">
            what we deliver    
        </div>
        <div className="flex justify-between flex-1 items-center h-full bg-black ">
            <div className="flex flex-col flex-1 items-center gap-10">
                <Image src={col1} width={250} className="h-[150px] w-[150px] hover:scale-110 transition-all"/>
                <Image src={col2} width={250} className="h-[150px] w-[150px] hover:scale-110 transition-all"/>
                <Image src={col3} width={250} className="h-[150px] w-[150px] hover:scale-110 transition-all"/>
            </div>
            <div className="flex flex-1 justify-center">
                <Image src={iphone} width={250} className="rounded-[45px] hover:scale-110 transition-all"/>
            </div>
            <div className="flex flex-col flex-1 items-center gap-10">
                <Image src={col4} width={250} className="h-[150px] w-[150px] hover:scale-110 transition-all"/>
                <Image src={col5} width={250} className="h-[150px] w-[150px] hover:scale-110 transition-all"/>
                <Image src={col6} width={250} className="h-[150px] w-[150px] hover:scale-110 transition-all"/>
            </div>
        </div>
    </div>

    <div className="slide_4 h-screen bg-black text-white ">
        <div className="text-left uppercase text-6xl font-bold pt-10 px-8">
            Make your self standout    
        </div> 
        <div className="flex justify-between items-center bg-stone-950 rounded-lg m-20 shadow-slate-500  drop-shadow-2xl p-20">
            <div className="flex flex-1 justify-center">
            <Image src={standout} width={500} className="rounded-[45px] hover:scale-110 transition-all"/>
            </div>
            <div className="flex-1 text-center items-center gap-10">
                <h1 className="text-blue-700 font-extrabold text-2xl animate-bounce">STAND</h1> OUT FROM OTHERS
                <Button pagetitle={"Login_signup"} title={"LOGIN / SIGNUP"} className=' hover:bg-blue-900 mt-10 hover:scale-110 transition-all'/>
            </div>
        </div>
    </div>
        <Footer/> 
    </>
)
}

export default landing_page