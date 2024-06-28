import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto bg-black border-b-[1px] border-zinc-800 px-9 py-5 text-white flex justify-between gap-20'>
        <div className='flex gap-20'>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='text-sm flex gap-8'>
            {
                ["Home","Work","About","News","Careers"].map((elem,index) =>(
                    <a key={index} className='flex items-center gap-1' href="#">
                        {index == 1 && <span className='h-1 w-1 bg-green-400 shadow-[0px_0px_3px_2px_#9ae6b4] rounded-full inline-block'></span>}
                        {elem}
                    </a>
                ))
            }
        </div>
        </div>
        <Button title={"Start Project"} />
    </div>
  )
}

export default Navbar