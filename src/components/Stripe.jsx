import { motion } from 'framer-motion'
import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='flex overflow-hidden'>
      <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:10,repeat: Infinity}} className='flex flex-shrink-0 justify-between gap-10 h-52 items-center '>
        {val.map((strp,index)=>(
            <div key={index} className='flex h-[25%] flex-shrink-0 justify-between gap-10 p-4 items-center w-[25%] border-l-[0.1px] border-l-zinc-400 '><img src={strp.URL} alt="" />{strp.number}</div>
        ))}
    </motion.div>
    <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:10,repeat: Infinity}} className='flex flex-shrink-0 justify-between gap-10 h-52 items-center '>
        {val.map((strp,index)=>(
            <div key={index} className='flex h-[25%] flex-shrink-0 justify-between gap-8 p-4 items-center w-[25%] border-l-[0.1px] border-l-zinc-400 '><img src={strp.URL} alt="" />{strp.number}</div>
        ))}
    </motion.div>
    </div>
  )
}


// border-t-zinc-400 border-t-[1px] border-b-[1px] border-b-zinc-400
export default Stripe