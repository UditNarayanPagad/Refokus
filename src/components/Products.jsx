import React, { useState } from 'react'
import Button from './Button'

const Products = () => {
    const [products, setProducts] = useState([
        {name:"Arqitel",URL:"/remind.mp4",details:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",bgColor: "#5355EE" ,active: false},
        {name:"Cula",URL:"Silvr.mp4",details:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",bgColor:"#4A576B",active:false},
        {name:"Layout Land",URL:"weglotlikemagic.mp4",details:"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow..",bgColor:"#2DCB76",active:false},
        {name:"TTR",URL:"yahoo.mp4",details:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",bgColor:"#F97246",active:false},
    ])
    const [isHovered, setIsHovered] = useState(false);

  const productMouseEnter = () => {
    setIsHovered(true);
  };

  const productMouseLeave = () => {
    setIsHovered(false);
  };
    // let active = (products) => {
    //     products.map((prod,index)=>(prod.active = true))
    // }
    // let deactive = () => {
    //     products.map((prod,index)=>(prod.active = false))
    // }
    const handleMouseEnter = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].active = true;
        setProducts(updatedProducts);
    }

    const handleMouseLeave = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].active = false;
        setProducts(updatedProducts);
    }
  return (
    <div className='text-white'>
        {products.map((prod,index)=>(
            <div style={{backgroundColor: prod.active ? prod.bgColor : '#0000'}} onMouseEnter={()=>(handleMouseEnter(index))} onMouseLeave={()=>(handleMouseLeave(index))} key={index} className={`flex justify-evenly items-center h-52 w-full hover:bg-[${prod.bgColor}] ease-in-out transition-all duration-1000`} >
                <h1 className='w-[33.3%] text-4xl font-semibold text-center'>{prod.name}</h1>
                <div className='w-[33.3%] scale-[1.1]  rounded-xl m-9 h-full overflow-hidden'>
                    {prod.active && <video autoPlay loop muted  src={prod.URL}></video>}
                </div>
                <p className='w-[33.3%] mr-40 flex flex-col gap-7'>
                    {prod.details}
                    <Button title={"Live Website"}/>
                </p>
            </div>
        ))}
    </div>
  )
}

export default Products