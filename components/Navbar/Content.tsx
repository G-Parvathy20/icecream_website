import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';


const Content: React.FC = () => {

  const router = useRouter();

  const handleClick=()=>{
    router.push('/Flavours');
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center max-h-screen mt-0">
        <div className="w-full bg-[url('/bgimg/secimg.jpg')] lg:bg-[url('/bgimg/bgimg.jpg')] md:bg-[url('/bgimg/secimg.jpg')] sm:bg-[url('/bgimg/secimg.jpg')] bg-cover bg-center px-8">
          <main className="p-4">
          <h1 className="text-white sm:text-white md:text-yellow-300 lg:text-yellow-300 text-center font-extrabold mt-10 md:text-3xl lg:text-4xl sm:text-xl">Welcome to our Creamy Cones Shop</h1>

            <p className="mt-5 text-center font-serif text-base text-white">Order Your Cup of Creamy Icecream</p>
            <p className="mt-5 text-center font-serif text-base text-white">"Ice cream makes everything better."</p>
            <p className="text-lg text-center text-white font-bold">"Good vibes and ice cream, that's all you need."</p>
            <div className="flex justify-center items-center mb-20">
              <Button className="text-white mt-6 font-semibold rounded-lg bg-yellow-300 hover:bg-yellow-400 hover:text-white transition-all duration-500 hover:animate-out"  onClick={handleClick} >Order Your Icecream</Button>
            </div>
          </main>
        </div>
      </div>
      <div id="abtpage" className="flex flex-col md:flex-row items-center justify-between px-3 py-5">
      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 lg:mx-28 mx-14 mt-20">
        <h2 className="text-4xl font-bold text-yellow-300 mb-4">About</h2>
        <p className="text-gray-700 text-lg max-w-md">
          Ice cream is a sweet and refreshing treat loved by people of all ages.It comes in many flavors and styles, from creamy vanilla to fruity
          mango. Enjoying an ice cream is not just about taste—it's about joy, smiles, and memories! <a href='/About' className='text-blue-500 font-bold text-lg underline'>More about....</a>
        </p>
        <p className="text-xl font-bold text-yellow-300 md:mt-2 md:ms-72 sm:ms-10 italic">~ Minion</p>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        className="md:w-1/2 flex flex-col items-center text-center"
      >
        <Image
          src="/typesiceimg/minionimg.png"
          alt="Minion enjoying ice cream"
          width={600}
          height={600}
        />
        <motion.p
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="text-yellow-300 font-bold italic"
        >
          “Even Minions scream for ice cream!”
        </motion.p>
      </motion.div>
    </div>
    </div>
  );
};

export default Content;
