import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FaThumbsUp } from "react-icons/fa";
import { useRouter } from "next/router";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useWishlist } from "@/context/WishlistContext";
import { IceCream } from "@/context/WishlistContext";  // Adjust path if needed
import { useState,useEffect } from "react";

interface IceCreamItem {
  name: string;
  price: string;
  image: string;
}


const iceCreams = [
  { 
    image: "/Flavours/Flavour9/blue1.jpg", 
    name: "blueberry",
    price: "Rs.100.00(125ml)"
  },
  { 
    image: "/Flavours/Flavour9/blue2.jpg", 
    name: "blueberry Ice",
    price: "Rs. 25.00" 
  },
  { 
    image: "/Flavours/Flavour9/blue3.avif", 
    name: "Lavender",
    price: "Rs.125.00(150ml)" 
  },
  { 
    image: "/Flavours/Flavour9/blue4.webp", 
    name: "Cream",
    price: "Rs.90.00" 
  },
  { 
    image: "/Flavours/Flavour9/blue5.jpeg", 
    name: "Cones",
    price: "Rs.30.00" 
  },
  { 
    image: "/Flavours/Flavour9/blue6.avif", 
    name: "Blueberry Cup",
    price: "Rs.15.00" 
  },
  { 
    image: "/Flavours/Flavour9/blue7.jpg", 
    name: "Cup Icecream",
    price: "Rs.10.00" 
  },
  { 
    image: "/Flavours/Flavour9/blue8.jpg", 
    name: "Chill Blueberry",
    price: "Rs.20.00" 
  },
  {
    image:"/Flavours/Flavour9/blue9.jpg",
    name:"Blueberry",
    price:"Rs.30.00"
  },
  {
    image: "/Flavours/Flavour9/blue10.jpg",
    name: "Choco Layout",
    price: "Rs.30.00"
  },
  {
    image: "/Flavours/Flavour9/blue11.jpeg",
    name: "Blue.. Coated",
    price:"Rs : 30.00"
  },
  {
    image:"/Flavours/Flavour9/blue12.jpeg",
    name:"Cornetto",
    price:"Rs.30.00"
  },
  {
    image:"/Flavours/Flavour9/blue13.jpg",
    name:"Cone",
    price:"Rs.25.00"
  },
  {
    image:"/Flavours/Flavour9/blue14.jpg",
    name:"Mini Icone",
    price:"Rs.25.00"
  },
  {
    image:"/Flavours/Flavour9/blue15.jpg",
    name:"Bowl Scoops",
    price:"Rs.40.00"
  },
  {
    image:"/Flavours/Flavour9/blue16.webp",
    name:"With Toppings",
    price:"Rs.50.00"
  }
];

const Blueberry = () => {
  const router = useRouter();
            const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
            const [orders, setOrders] = useState<IceCreamItem[]>([]);
          
            useEffect(() => {
              const savedOrders = localStorage.getItem("myOrders");
              if (savedOrders) {
                setOrders(JSON.parse(savedOrders));
              }
            }, []);
          
            const isInWishlist = (name: string) => {
              return wishlist.some((item) => item.name === name);
            };
          
            const handleWishlist = (item: IceCreamItem) => {
              if (isInWishlist(item.name)) {
                removeFromWishlist(item.name);
              } else {
                addToWishlist(item);
              }
            };
          
            const handleOrder = (item: IceCreamItem) => {
              const savedOrders = localStorage.getItem("myOrders");
              const existingOrders: IceCreamItem[] = savedOrders ? JSON.parse(savedOrders) : [];
            
              // Add only if not already present (optional)
              const updatedOrders = [...existingOrders, item];
              
              localStorage.setItem("myOrders", JSON.stringify(updatedOrders));
              setOrders(updatedOrders);
              router.push("/MyOrder");
            };
  

  return (
    <div className="p-5 w-full overflow-hidden">

      <div className="mt-2 min-w-full max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
          {iceCreams.map((item, index) => (
            <Card key={index} className="relative flex flex-col items-center border-none shadow-none max-w-[200px]">
              <CardHeader className="flex flex-col items-center" />
              <CardContent className="flex flex-col items-center relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full max-w-[200px] h-[130px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
                <Heart
                className={`absolute top-2 right-2 cursor-pointer ${
                  wishlist.some((wishlistItem) => wishlistItem.name === item.name) ? "text-red-500" : "text-gray-400"
                }`}
                size={20}
                onClick={() => handleWishlist(item)}
                />
                <p className="text-base font-bold flex flex-col items-center mt-2">{item.name}</p>
                <p className="text-center font-extrabold text-pink-600">{item.price}</p>
              </CardContent>

              <CardFooter className="flex flex-col items-center gap-3 w-full">
                <div className="flex gap-2">
                  <Button className="bg-blue-500 text-white w-10">
                    <FontAwesomeIcon icon={faCartPlus} />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="bg-green-500 text-white w-10">
                        <FontAwesomeIcon icon={faShoppingBag} />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you going to buy this ice cream? If yes, click "Buy," otherwise click "Cancel."
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleOrder(item)}>Buy</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
                <div className="flex mt-2 justify-end w-full gap-3">
                  <FaThumbsUp className="text-black cursor-pointer" size={20} />
                  <ThumbsDown className="text-black cursor-pointer" size={20} />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blueberry;
