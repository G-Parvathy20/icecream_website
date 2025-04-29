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
    image: "/Flavours/Flavour3/straw1.jpg", 
    name: "Cup",
    price: "Rs. 15.00"
  },
  { 
    image: "/Flavours/Flavour3/straw2.jpg", 
    name: "Icones",
    price: "Rs. 25.00" 
  },
  { 
    image: "/Flavours/Flavour3/straw3.jpg", 
    name: "Double Flavour",
    price: "Rs.110.00(500ml)" 
  },
  { 
    image: "/Flavours/Flavour3/straw4.jpg", 
    name: "Tubs",
    price: "Rs. 110.00" 
  },
  { 
    image: "/Flavours/Flavour3/straw5.webp", 
    name: "Cup",
    price: "Rs. 15.00" 
  },
  { 
    image: "/Flavours/Flavour3/straw6.webp", 
    name: "Cream(Buy1Get1)",
    price: "Rs.40.00" 
  },
  { 
    image: "/Flavours/Flavour3/straw7.jpg", 
    name: "Tubs",
    price: "Rs. 80.00" 
  },
  { 
    image: "/Flavours/Flavour3/straw8.webp", 
    name: "Sundae Cheese",
    price: "Rs.90.00" 
  },
  {
    image:"/Flavours/Flavour3/straw9.jpg",
    name:"Cones",
    price:"Rs.20.00"
  },
  {
    image: "/Flavours/Flavour3/straw10.png",
    name: "Tubs",
    price: "Rs.70.00"
  },
  {
    image: "/Flavours/Flavour3/straw11.jpeg",
    name: "Cornetto Cones",
    price:"Rs : 20.00"
  },
  {
    image:"/Flavours/Flavour3/straw12.jpeg",
    name:"Icones",
    price:"Rs. 25.00"
  },
  {
    image:"/Flavours/Flavour3/straw13.jpg",
    name:"Chocobar",
    price:"Rs. 20.00"
  },
  {
    image:"/Flavours/Flavour3/straw14.png",
    name:"Cone",
    price:"Rs. 20.00"
  },
  {
    image:"/Flavours/Flavour3/straw15.jpg",
    name:"Dairy Day Tubs",
    price:"Rs. 110.00"
  },
  {
    image:"/Flavours/Flavour3/straw16.png",
    name:"Strawberry",
    price:"Rs.60.00"
  },
  {
    image:"/Flavours/Flavour3/straw17.png",
    name:"Cup",
    price:"Rs. 10.00"
  },
  {
    image:"/Flavours/Flavour3/straw18.avif",
    name:"Ball Icecream",
    price:"Rs.60.00"
  },
  {
    image:"/Flavours/Flavour3/straw19.png",
    name:"Strawberry",
    price:"Rs.100.00"
  },
  {
    image:"/Flavours/Flavour3/straw20.avif",
    name:"Icecream",
    price:"Rs.95.00"
  },
  {
    image:"/Flavours/Flavour3/straw21.avif",
    name:"Bowl Cream",
    price:"Rs.20.00"
  },
  {
    image:"/Flavours/Flavour3/straw22.jpg",
    name:"Family Pack",
    price:"Rs.95.00(700ml)"
  },
  {
    image:"/Flavours/Flavour3/straw23.webp",
    name:"Slow Churn",
    price:"Rs. 80.00"
  },
  {
    image:"/Flavours/Flavour3/straw24.jpeg",
    name:"Cup Ice",
    price:"Rs. 10.00"
  },
  {
    image:"/Flavours/Flavour3/straw25.jpeg",
    name:"Magnum Strawberry",
    price:"Rs. 35.00"
  },
  {
    image:"/Flavours/Flavour3/straw26.jpg",
    name:"White Crumble",
    price:"Rs. 30.00"
  },
  {
    image:"/Flavours/Flavour3/straw27.jpg",
    name:"Strawberry Cup",
    price:"Rs. 20.00"
  },
  {
    image:"/Flavours/Flavour3/straw28.jpg",
    name:"Cone Toppings",
    price:"Rs. 45.00"
  }
];

const Strawberry = () => {
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
  
      router.push("/Buy");
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
  
  export default Strawberry;
  