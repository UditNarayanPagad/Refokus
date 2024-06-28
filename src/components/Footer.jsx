import React from 'react'

const Footer = () => {
    let links = [
        "Privacy policy","Cokkie policy","Impressum","Terms","Webflow Agency"
    ]
  return (
    <div className='flex pb-8 justify-between px-8'>
        <div className='flex gap-4'>
            {links.map((link,index)=>(
                <p key={index} className='text-sm text-zinc-400'>{link}</p>
            ))}
        </div>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
    </div>
  )
}

export default Footer