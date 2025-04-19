import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";


const brands = [
  { 
    image: "/Flavours/Amul Logo.png" 
  },
  { 
    image: "/Flavours/Arun Logo.png" 
  },
  { image: 
    "/Flavours/Cornetto Logo.png" 
  },
  { image: 
    "/Flavours/Dairy Day Logo.png"
  },
  { image: 
    "/Flavours/Kwality Walls Logo.png" 
  },
  { image: 
    "/Flavours/Magnum Logo.png"
  },
];

const notifications = [
  {
    image: "/Flavours/Vanilla.jpg",
    description: "Vanilla",
  },
  {
    image: "/Flavours/Chocolate.jpg",
    description: "Chocolate",
  },
  {
    image: "/Flavours/Strawberry.jpg",
    description: "Strawberry",
  },
  {
    image: "/Flavours/Butterscotch.jpg",
    description: "Butterscotch",
  },
  {
    image: "/Flavours/Mint Chocolate.jpg",
    description: "Mint",
  },
  {
    image: "/Flavours/Almond Coffee.jpg",
    description: "Mocha",
  },
  {
    image: "/Flavours/Black Currant.jpg",
    description: "BlackCurrant",
  },
  {
    image: "/Flavours/Raspberry Chocolate.jpg",
    description: "Raspberry",
  },
  {
    image: "/Flavours/Blueberry Chocolate.jpg",
    description: "Blueberry",
  },
  {
    image: "/Flavours/Oat Chocolate.jpg",
    description: "Oat",
  },
  {
    image: "/Flavours/Mango Icecream.jpg",
    description: "Mango",
  },
  {
    image: "/Flavours/Salted Caramel.jpg",
    description: "SaltySweet",
  },
];

type CardProps = React.ComponentProps<typeof Card>;



const Flavour = ({ className, ...props }: CardProps) => {

  const router = useRouter();

  const handleNavigate = (flavour: string) => {
    router.push(`/flavour/${flavour}`); 
  };


  return (
    <div>
    <div className="mt-32 bg-yellow-300 pt-7 pb-20">
      <h1 className="flex justify-center text-2xl font-bold text-white">Our Ice Cream Flavours</h1>
      
      {/* Flavours Section */}
      <div className="flex justify-center mt-10">
        <Card className={cn("w-[1300px]", className)} {...props}>
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 justify-center">
              {notifications.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={item.image}
                    alt={item.description}
                    width={120}
                    height={120}
                    className="w-[120px] h-[120px] object-cover rounded-lg"
                  />
                  <Button onClick={() => handleNavigate(item.description)} className="text-center font-bold text-white bg-yellow-300 mt-3">{item.description}</Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>
      </div>

      {/* Available Products Section */}
      <div className="mt-20">
        <div className="p-6">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl font-bold text-yellow-300">AVAILABLE PRODUCTS</h1>
          </div>
          <div className="grid grid-cols-3 gap-8 justify-center mt-10 overflow-x-auto">
            {brands.map((brand, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={brand.image}
                  alt={`Brand logo ${index + 1}`}
                  width={120}
                  height={80}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flavour;
