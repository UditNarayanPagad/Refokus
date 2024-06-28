import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  let marque1 = [
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg",
  ];
  let marque2 = [
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg",
  ];
  return (
    <div className="text-white pt-52 pb-52  ">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-10">
      <div className="flex overflow-hidden">
        <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:15,repeat: Infinity}} className="flex flex-shrink-0 h-9 gap-32 m-12">
          {marque1.map((image, index) => (
            <img className="h-full" key={index} src={image} alt="" />
          ))}
        </motion.div>
        <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:15,repeat: Infinity}} className="flex flex-shrink-0 h-9 gap-32 m-12">
          {marque1.map((image, index) => (
            <img className="h-full" key={index} src={image} alt="" />
          ))}
        </motion.div>
      </div>
      <div className=" flex overflow-hidden">
        <motion.div initial={{x:"-100%"}} animate={{x:"0"}} transition={{ease:"linear",duration:15,repeat: Infinity}} className="flex flex-shrink-0 h-9 gap-32 m-12">
          {marque1.map((image, index) => (
            <img className="h-full" key={index} src={image} alt="" />
          ))}
        </motion.div>
        <motion.div initial={{x:"-100%"}} animate={{x:"0"}} transition={{ease:"linear",duration:15,repeat: Infinity}} className="flex flex-shrink-0 h-9 gap-32 m-12">
          {marque1.map((image, index) => (
            <img className="h-full" key={index} src={image} alt="" />
          ))}
        </motion.div>
      </div> 
      </div>
    </div>
  );
};

export default Marquee;
