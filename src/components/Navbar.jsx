import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-pink-500 text-white py-3'>
        <span className='font-bold text-xl mx-6'>ChutFinder</span>
        <ul className='flex gap-4 mx-6'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
