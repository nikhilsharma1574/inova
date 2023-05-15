import React from 'react'
import Link from 'next/link'
const Button = ({title,className="",pagetitle}) => {
return (
    <div className={`bg-blue-600 rounded px-4 py-2 ${className}`} >
        {/* <Link href={pagetitle}> */}
            <button>
                {title}            
            </button>
        {/* </Link> */}
    </div>
)
}

export default Button


