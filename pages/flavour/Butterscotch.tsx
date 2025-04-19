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
    image: "/Flavours/Flavour4/butter1.jpg", 
    name: "Cup",
    price: "Rs. 10.00"
  },
  { 
    image: "/Flavours/Flavour4/butter2.webp", 
    name: "Cones",
    price: "Rs. 25.00" 
  },
  { 
    image: "/Flavours/Flavour4/butter3.webp", 
    name: "Tubs ",
    price: "Rs.70.00(125ml)" 
  },
  { 
    image: "/Flavours/Flavour4/butter4.png", 
    name: "Specialities",
    price: "Rs. 60.00" 
  },
  { 
    image: "/Flavours/Flavour4/butter5.png", 
    name: "BlueWhale Bars",
    price: "Rs. 25.00" 
  },
  { 
    image: "/Flavours/Flavour4/butter6.webp", 
    name: "Butterscotch Cup",
    price: "Rs.10.00" 
  },
  { 
    image: "/Flavours/Flavour4/butter7.jpg", 
    name: "Cone",
    price: "Rs.20.00" 
  },
  { 
    image: "/Flavours/Flavour4/butter8.avif", 
    name: "Tubs",
    price: "Rs.90.00" 
  },
  {
    image:"/Flavours/Flavour4/butter9.jpg",
    name:"Bliss Jumpo Cup",
    price:"Rs.80.00(125ml)"
  },
  {
    image: "/Flavours/Flavour4/butter10.webp",
    name: "Caramel Cream",
    price: "Rs.95.00"
  },
  {
    image: "/Flavours/Flavour4/butter11.jpg",
    name: "Butterscotch",
    price:"Rs : 70.00"
  },
  {
    image:"/Flavours/Flavour4/butter12.webp",
    name:"Multipack 2 gold",
    price:"Rs. 70.00"
  },
  {
    image:"/Flavours/Flavour4/butter13.png",
    name:"Cup",
    price:"Rs. 10.00"
  },
  {
    image:"/Flavours/Flavour4/butter14.webp",
    name:"Cone",
    price:"Rs. 20.00"
  },
  {
    image:"/Flavours/Flavour4/butter15.png",
    name:"Tubs",
    price:"Rs. 75.00"
  },
  {
    image:"/Flavours/Flavour4/butter16.png",
    name:"Super Value Pack",
    price:"Rs.180.00"
  },
  {
    image:"/Flavours/Flavour4/butter17.jpg",
    name:"Buy 1 get 1",
    price:"Rs. 180.00"
  },
  {
    image:"/Flavours/Flavour4/butter18.webp",
    name:"Cup",
    price:"Rs.20.00"
  },
  {
    image:"/Flavours/Flavour4/butter19.avif",
    name:"Frozen Dessert Tubs",
    price:"Rs.130.00"
  },
  {
    image:"/Flavours/Flavour4/butter20.webp",
    name:"Frozen Dessert",
    price:"Rs.130.00(700 ml)"
  },
  {
    image:"/Flavours/Flavour4/butter21.jpeg",
    name:"Cornetto Cones",
    price:"Rs.25.00"
  },
  {
    image:"/Flavours/Flavour4/butter22.webp",
    name:"6Pack of Cone",
    price:"Rs.110.00(700ml)"
  },
  {
    image:"/Flavours/Flavour4/butter23.jpg",
    name:"With Waffles",
    price:"Rs.35.00"
  },
  {
    image:"/Flavours/Flavour4/butter24.jpg",
    name:"Butterscotch cream",
    price:"Rs.25.00"
  }
];

const Butterscotch = () => {
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

export default Butterscotch;
