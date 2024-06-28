import React, { useState } from 'react'
import Stripe from './Stripe'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {
  const { scrollYProgress } = useScroll()

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      //console.log(Math.floor(latest*100))
      imageShow(Math.floor(latest*100))
    })
    const [image, setimage] = useState([
        {URL:"",left:"0%",top:"-50%",isActive:false},
        {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",left:"0%",top:"-50%",isActive:false},
        {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",left:"30%",top:"-35%",isActive:false},
        {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",left:"60%",top:"-5%",isActive:false},
        {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",left:"-20%",top:"15%",isActive:false},
        {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",left:"50%",top:"45%",isActive:false},
        {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",left:"30%",top:"35%",isActive:false},
    ])
    let imageShow = (latest)=>{
      let n = -1
      switch (latest) {
        case 0:
          n = -1
          break;
        case 1:
          n = 0
          break;
        case 3:
          n = 1
          break;
        case 5:
          n = 2
          break;
        case 7:
          n = 3
          break;
        case 9:
          n = 4
          break;
        case 11:
          n = 5
        case 13:
          n = 6
          break;
      
        default:
          break;
      }
      const updatedImages = [...image]
      
    for (let index = 0; index <= n; index++) {
      updatedImages[index].isActive = true
      for (let i = index+1; i < updatedImages.length; i++) {
        updatedImages[i].isActive = false
      }
    }
    // if (n == -1) {
    //   updatedImages[0].isActive = false
    // }

    setimage(updatedImages)
    }
    let stripes =[
      {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",number:15},
      {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",number:52},
      {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",number:5},
      {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",number:16},
      {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",number:24},
      {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",number:2},
    ]
  return (
    <div className='max-w-screen-xl mx-auto text-center text-white'>
        <h1 className='relative text-[35vw] leading-tight font-semibold select-none'>work</h1>
        <div className='absolute left-[40%] top-[45%] h-60 w-60'>
            {image.map((image,index)=>(
                 image.isActive && <img key={index} className="absolute rounded-lg" style={{left:image.left,top:image.top}} src={image.URL} alt="" />
            ))}
        </div>
        <p className='text-zinc-400'>Web Design, Webflow Development, Creative Development</p>
        <Stripe val={stripes}/>
    </div>
  )
}

export default Work