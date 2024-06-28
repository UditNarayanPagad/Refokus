import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Button = ({ title }) => {
  const [animate, setAnimate] = useState(false);

  return (
    <div onMouseEnter={() => setAnimate(true)}
    onMouseLeave={() => setAnimate(false)} className="text-sm cursor-pointer text-black overflow-hidden bg-white px-4 py-1 pb-2 rounded-full w-[11vw] flex flex-col items-center gap-2 h-8 ">
      <motion.div
         
         initial={{ y: "0" }}
         animate={{ y: animate ? "-140%" : "0" }}
         transition={{ ease: "linear", duration: 0.25 }}
        class="flex gap-2"
      >
        <p>{title}</p>
        <span>
          <BsArrowReturnRight className="mt-2" />
        </span>
      </motion.div>
      <motion.div
         initial={{ y: "0" }}
         animate={{ y: animate ? "-140%" : "0" }}
         transition={{ ease: "linear", duration: 0.25 }}
        class="flex gap-2"
      >
        <p>{title}</p>
        <span>
          <BsArrowReturnRight className="mt-2" />
        </span>
      </motion.div>
    </div>
  );
};
// hover:bg-zinc-200 hover:scale-110 transition-all ease-in-out duration-200
export default Button;
