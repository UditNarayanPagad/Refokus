import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Cards = () => {
  const [first, setfirst] = useState(false)
  const [second, setSecond] = useState(false)
  
  return (
    <div className="max-w-screen-xl mx-auto flex h-[70vh] px-12 py-6 gap-1">
      <div onMouseOver={()=>(setfirst(true))} onMouseLeave={()=>(setfirst(false))} className="w-1/3 bg-zinc-900 p-4 rounded-xl flex flex-col justify-between hover:bg-[#35353b] transition-all ease-in-out duration-200 ">
        <div style={first ? { padding: '4px' } : {padding: '0px'}} className={`flex justify-between`}>
          <div>
            <p className="text-sm font-thin">Up Next: News</p>
            <h1 className="text-2xl mt-5 ml-1 font-semibold">
              Insights and behind
              <br />
              the scenes
            </h1>
          </div>
          <IoIosArrowRoundForward className="text-3xl"/>
        </div>
        <div>
            <p className="text-sm text-zinc-300">Explore what drives our team</p>
        </div>
      </div>

      <div onMouseOver={()=>(setSecond(true))} onMouseLeave={()=>(setSecond(false))} className="w-2/3 bg-zinc-700 p-4 rounded-xl flex flex-col justify-between hover:bg-[#7443FF] transition-all ease-in-out duration-200 ">
        <div style={second ? { padding: '4px' } : {padding: '0px'}} className="flex justify-between">
          <div>
            <p className="text-sm font-thin">Get in touch</p>
            <h1 className="text-2xl mt-5 ml-1 font-semibold">
              Lets get to it,
              <br />
              togther.
            </h1>
          </div>
          <IoIosArrowRoundForward className="text-3xl"/>
        </div>
        <div>
            <h1 className="text-8xl leading-tight mb-3">Start a Project</h1>
            <div className="cursor-pointer hover:bg-green-500 hover:scale-110 transition-all ease-in-out duration-200 border-[1px] rounded-full inline-block px-4 py-2 mb-3">Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
