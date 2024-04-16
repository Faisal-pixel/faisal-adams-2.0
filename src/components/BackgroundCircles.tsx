"use client"
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <div className="relative flex justify-center items-center">
        <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-52 animate-ping" 
        // The animate Ping class is used to create a pulsating effect on the circle. It is from the Tailwind CSS library.
        /> 
        <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" 
        
        /> 
        <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping" 
        /> 
        <div 
        className="rounded-full h-[650px] w-[650px] border border-[#F7AB0A] opacity-50 absolute mt-52 animate-pulse"
        />
        <div className="rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52"/>
    </div>
  )
}

export default BackgroundCircles