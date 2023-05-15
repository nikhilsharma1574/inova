import React from 'react'
import Image from 'next/image'
import col1 from '../../public/svgs/3col.svg'

const Footer = () => {

    const Links_footer = ({title,image,link})=>{
        return(
        <>
        <div className='flex items-center gap-2 p-1'>
            <Image src={image} width={100} className='w-[20px]'/>
            <a className='hover:underline cursor-pointer' href={link} >{title}</a>
        </div>
        </>
        )
    }
return (
    <div className=' bg-slate-900 text-white'>
        <div className='flex justify-center'>
        <div className='flex flex-row justify-between container p-6 '>
            <div className=' w-full h-[260px] p-4 '>
                <h1 className='mb-8 text-xl font-semibold '>Address</h1>
                <div className='flex gap-2'>
                <Image src={col1} width={100} className='w-[20px]' />
                <ul>SRM Institute of Science and Technology Bharathi Salai, Ramapuram, Chennai -600 089 , Tamil Nadu</ul>
                </div>
            </div>
            <div className='w-full h-[260px] p-4 '>
                <h1 className='mb-8 text-xl font-semibold '>Links</h1>
                    <Links_footer title={"Linkdlen"}  link={'https://www.linkedin.com/in/nikhilshaarrma'} image={col1}/>      
                    <Links_footer title={"Github"}    link={'https://github.com/nikhilsharma1574'} image={col1}/>                   
                    <Links_footer title={"Hackerank"} link={'https://www.hackerrank.com/nikhil_sharma_b1'} image={col1}/>  
                    <Links_footer title={"Instagram"} link={'https://instagram.com/nikhil.shaarrma?igshid=ZDdkNTZiNTM='} image={col1}/>  
                    <Links_footer title={"Youtube"}   link={'https://youtube.com/@cybermonday3826'} image={col1}/>
            </div>
            <div className='w-full h-[260px] p-4'>
                <h1 className='mb-8 text-xl font-semibold '>Mail us</h1>
                <Links_footer title={"nikhilsharma1574@gmail.com"}   image={col1}/>
            </div>
            <div className=' w-full h-[260px] p-4'>
                <h1 className='mb-8 text-xl font-semibold'>Contact us</h1>
                <div className='flex gap-4'>
                {/* <Image src={linkedin_footer} width={500} className='hover:scale-110 rounded-full object-cover w-[50px] h-[50px] transition'/> */}
                {/* <Image src={github_footer} width={500} className='hover:scale-110 rounded-full object-cover w-[50px] h-[50px] transition'/> */}
                {/* <Image src={Hackerrank_footer} width={500} className='hover:scale-110 rounded-full object-cover w-[50px] h-[50px] transition'/> */}
                </div>
            </div>
        </div>
        </div>


    </div>
)
}

export default Footer