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
import { useEffect,useState } from "react";

interface IceCreamItem {
  name: string;
  price: string;
  image: string;
}

const iceCreams = [
  { 
    image: "/Flavours/Flavour5/mint1.jpg", 
    name: "Mint wid choco",
    price: "Rs. 25.00"
  },
  { 
    image: "/Flavours/Flavour5/mint2.jpg", 
    name: "Mint Creams",
    price: "Rs. 25.00" 
  },
  { 
    image: "/Flavours/Flavour5/mint3.jpg", 
    name: "Mint Cones",
    price: "Rs.30.00" 
  },
  { 
    image: "/Flavours/Flavour5/mint4.png", 
    name: "Bowl Mint Choco",
    price: "Rs. 40.00" 
  },
  { 
    image: "/Flavours/Flavour5/mint5.jpg", 
    name: "Cones and Cup",
    price: "Rs. 45.00" 
  },
  { 
    image: "/Flavours/Flavour5/mint6.jpg", 
    name: "Choco Tubs",
    price: "Rs.110.00(125ml)" 
  },
  { 
    image: "/Flavours/Flavour5/mint7.avif", 
    name: "Amul Mint Cups",
    price: "Rs.10.00" 
  },
  { 
    image: "/Flavours/Flavour5/mint8.jpeg", 
    name: "Amul Mint Tubs",
    price: "Rs.60.00" 
  },
  {
    image:"/Flavours/Flavour5/mint9.jpeg",
    name:"Cornetto Mint",
    price:"Rs.20.00"
  },
  {
    image: "/Flavours/Flavour5/mint10.avif",
    name: "Mint Ibars",
    price: "Rs.20.00"
  },
  {
    image: "/Flavours/Flavour5/mint11.png",
    name: "Double Mint",
    price:"Rs : 150.00"
  },
  {
    image:"/Flavours/Flavour5/mint12.jpeg",
    name:"Dark Choco Mint",
    price:"Rs.120.00"
  }
];

const Mint = () => {
  const router = useRouter();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const [orders, setOrders] = useState<IceCreamItem[]>([]);
    const [showSuccess, setShowSuccess] = useState(false);
  
    useEffect(() => {
      const savedOrders = localStorage.getItem("myOrders");
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      }
    }, []);
  
    const isInWishlist = (name: string) => wishlist.some((item) => item.name === name);
  
    const handleWishlist = (item: IceCreamItem) => {
      if (isInWishlist(item.name)) {
        removeFromWishlist(item.name);
      } else {
        addToWishlist(item);
      }
    };
  
    const handleOrder = (item: IceCreamItem) => {
      setShowSuccess(true);
  
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
  
      const savedOrders = localStorage.getItem("myOrders");
      const existingOrders: IceCreamItem[] = savedOrders ? JSON.parse(savedOrders) : [];
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
                <CardHeader />
                <CardContent className="flex flex-col items-center relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full max-w-[200px] h-[130px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                  <Heart
                    className={`absolute top-2 right-2 cursor-pointer ${
                      isInWishlist(item.name) ? "text-red-500" : "text-gray-400"
                    }`}
                    size={20}
                    onClick={() => handleWishlist(item)}
                  />
                  <p className="text-base font-bold flex flex-col items-center mt-2">{item.name}</p>
                  <p className="text-center font-extrabold text-pink-600">{item.price}</p>
                </CardContent>
  
                <CardFooter className="flex flex-col items-center gap-3 w-full">
                  <div className="flex gap-2">
                    {/* Add to Cart */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className="bg-blue-500 text-white w-10">
                          <FontAwesomeIcon icon={faCartPlus} />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you going to add this ice cream to your cart? If yes, click "Add," otherwise click "Cancel."
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Add Cart</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
  
                    {/* Buy Now */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className="bg-green-500 text-white w-10">
                          <FontAwesomeIcon icon={faShoppingBag} />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Buy it & <b>Cash on Delivery only Available</b></AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you going to buy this ice cream? If yes, click "Order," otherwise click "Cancel."
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleOrder(item)}>Buy</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
  
                  {/* Like/Dislike */}
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
  

export default Mint;
