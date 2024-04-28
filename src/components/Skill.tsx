"use client";
import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
            initial={{
                x: directionLeft ? -100 : 100,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            viewport={
                {
                    once: true,
                }
            }
            src="/images/typescript.png"
            className="rounded-full border border-gray-500 object-cover w-24 h-24 filter group-hover:grayscale transition duration-300 ease-in-out xl:w-32 xl:h-32"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill