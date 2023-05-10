import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-between w-full p-4' >
            <Link href={"/"} className='text-black'>
                Home
            </Link>
    </div>
  )
}

export default Navbar