import React from 'react'
import Link from 'next/link'
const Navbar = () => {

  const Customlink = ({title,link,className="",icon_link}) =>{
    return(
      <>
        <Link href={link} className='mr-4 transition-colors duration-300 hover:underline underline-offset-4 hover:text-blue-700'>
          {title}
        </Link>
      </>
    )
  }


  return (
    <div className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav className='flex flex-row gap-3'>
        <Customlink title="Nikhil" link="/#"/>
        <Customlink title="Bansal" link="/#"/>
        <Customlink title="Surendar" link="/#"/>
        <Customlink title="Pasha" link="/#"/>
      </nav>
      <nav className='flex flex-row gap-3'>
      <Customlink title="Signup" link="/#"/>
      <Customlink title="Login" link="/#"/>
      </nav>
    </div>
  )
}

export default Navbar