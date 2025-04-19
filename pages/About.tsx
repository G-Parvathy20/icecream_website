import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect,useState } from "react";

const iceCreamFlavors = [
  { name: "Vanilla", src: "/typesiceimg/vanillapng.png" },
  { name: "Chocolate", src: "/typesiceimg/chocopng.png" },
  { name: "Strawberry", src: "/typesiceimg/strawpng.png" },
  { name: "Butterscotch", src: "/typesiceimg/butterpng.png" },
  { name: "Mint", src: "/typesiceimg/mintpng.png" },
  { name: "Almond Coffee(mocha)", src: "/typesiceimg/mochapng.png" },
  { name: "BlackCurrant", src: "/typesiceimg/blackcurrantpng.png" },
  { name: "Raspberry", src: "/typesiceimg/rasppng.png" },
  { name: "Blueberry", src: "/typesiceimg/bluepng.png" },
  { name: "Oat", src: "/typesiceimg/oatpng.png" },
  { name: "Mango", src: "/typesiceimg/mangopng.png" },
  { name: "Salted Caramel", src: "/typesiceimg/saltpng.png" },
];

const About = () => {
  const fullText = 'Chhill, relax, and savor the cone!';
const speed = 100; // in milliseconds
const [displayedText, setDisplayedText] = useState('');

useEffect(() => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < fullText.length) {
      setDisplayedText((prev) => prev + fullText.charAt(i)); // Corrected state update
      i++;
    } else {
      clearInterval(interval); // Stop after full sentence is typed
    }
  }, speed);

  return () => clearInterval(interval); // cleanup on unmount
}, []);


  return (
    <div className="w-full p-5 overflow-hidden">
      <div className="bg-yellow-300 mx-auto shadow-md p-4">
        <h1 className="text-3xl font-bold text-center">About</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-6 px-5 lg:px-28">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          className="flex flex-col items-center md:items-start text-center md:text-left mt-5"
        >
          <Image
            src="/typesiceimg/forabtpage.png"
            alt="Minion enjoying ice cream"
            width={300}
            height={300}
          />
        </motion.div>

        <div className="md:w-full mt-10 text-center md:text-right">
          <p className="text-gray-700 text-xl leading-relaxed">
            "Ice cream is more than just a dessert — it's a celebration of life. With every bite, 
            it melts away worries, stirs up laughter, and brings back childhood memories. 
            From sunny afternoons to cozy late nights, it transforms ordinary moments into unforgettable ones. 
            Whether shared with loved ones or savored in silence, ice cream reminds us 
            that happiness can be simple, sweet, and always within reach."
          </p>
          <p className="text-xl font-bold text-yellow-300 italic mt-2">~ Minion</p>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Carousel className="w-full">
            <CarouselPrevious className="left-[-1rem] sm:left-[-2rem] bg-yellow-400 hover:bg-yellow-500" />

            <CarouselContent className="flex">
              {iceCreamFlavors.map((flavor, index) => (
                <CarouselItem
                  key={index}
                  className="w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2 flex justify-center items-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-40 relative">
                      <Image
                        src={flavor.src}
                        alt={flavor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="mt-2 text-center font-semibold">{flavor.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselNext className="right-[-1rem] sm:right-[-2rem] bg-yellow-400 hover:bg-yellow-500" />
          </Carousel>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-28 mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 font-cursive">
          CREAMY
        </h1>

        <div className="w-24 h-24 sm:w-32 sm:h-32 relative">
          <Image src="/typesiceimg/coneimg.png" alt="cone image" fill className="object-contain" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 font-cursive">
          SHOP
        </h1>
      </div>

      <div className="bg-yellow-100 rounded-2xl shadow-lg p-8 mt-16 mx-4 lg:mx-32 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 font-cursive text-center mb-6">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At <span className="text-yellow-400 font-semibold">Creamy Shop</span>, we don't just serve ice cream - 
          we serve <strong>happiness in every scoop</strong>. Whether you're a fan of classic Vanilla, crave the 
          rich swirls of Chocolate Mocha, or dare to try our zesty Minty Twirl - we've got your 
          tastebuds covered! 🍫🍓🌿
        </p>

        <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          From sun-drenched cones to midnight snack cups, our flavors are handcrafted to spark 
          joy, stir memories, and make every moment melt-in-your-mouth magical. One lick, and 
          you're hooked. One bite, and you're in love. 💖✨
        </p>

        <p className="mt-6 text-2xl font-bold italic text-yellow-500">
          “Because life's too short to skip dessert.”
        </p>
      </div>
    </div>
  );
};

export default About;
