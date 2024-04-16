"use client"
import { motion } from 'framer-motion';
import AboutImg from '/src/assets/images/about.jpg';

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
      initial = {{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
    className='flex flex-col relative h-screen text-center px-10 md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

      <motion.img 
      initial={{
        x: -200
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{x: 0}}
      viewport={{once: true}}
        src="/images/about.jpg"
        className='mt-44 flex-shrink-0 w-56 h-56 rounded-full object-cover sm:mt-20 md:mt-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-5 sm:space-y-10 px-0 md:px-10'>
        <h4 className='text-2xl pt-6 sm:text-4xl font-semibold'>Here is a <span className='underline decoration-[#836226a4]/50'>little</span> background</h4>
        <p>
          You migh also know me as <span className='font-semibol text-gray-500'>code_crushed! </span>
          I am a software engineer with a passion for web development. I have been working in the industry for over 5 years now and have worked with a variety of technologies. I love to learn new things and I am always looking for new challenges.  I am also really interested in ML and AI aspect so i began my self study on python. Time not spent infront of a computer is spent binging 24 hours, yes the well known Jack bauer, or defending the honor of amala as the best swallow in Africa.
        </p>
      </div>
    </motion.div>
  )
}

export default About