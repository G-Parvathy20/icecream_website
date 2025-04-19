import React from 'react';
import { FaIceCream } from 'react-icons/fa';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MdOutlineMenu } from "react-icons/md";
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <div id="home">
            <nav className="bg-yellow-300 shadow-md">
                <div className="container mx-auto flex justify-between items-center p-4">

                    <Link href="/" className="text-white text-3xl font-bold flex items-center">
                        <FaIceCream className="mr-2" /> Creamy Cones
                    </Link>

                    
                    <div className="hidden md:flex space-x-4">
                        <Link href="#home" className="text-white hover:bg-yellow-200 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </Link>
                        <Link href="#abtpage" className="text-white hover:bg-yellow-200 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                            About
                        </Link>
                        <Link href="/Flavours" className="text-white hover:bg-yellow-200 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                            Flavours
                        </Link>
                        <Link href="/Myorder" className="text-white hover:bg-yellow-200 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                            Myorder
                        </Link>
                        <Link href="#contact" className="text-white hover:bg-yellow-200 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                            Contact Us
                        </Link>
                        <Link href="/feedback" className="text-white hover:bg-yellow-200 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                            Feedback
                        </Link>
                        <Link href="/wishlist" className="text-white hover:bg-yellow-200 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                            Wishlist
                        </Link>
                    </div>


                    <div className="md:hidden flex items-center">
                        <Sheet>
                            <SheetTrigger>
                                <MdOutlineMenu className='text-xl mt-2 text-white' />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle className='text-yellow-400'>Menu</SheetTitle>
                                    <SheetDescription>
                                        <div className='flex flex-col space-y-4'>
                                            <Link href="#home" className='text-blue-400'>Home</Link>
                                            <Link href="/about" className='text-blue-400'>About</Link>
                                            <Link href="/Flavours" className='text-blue-400'>Flavours</Link>
                                            <Link href="/Myorder" className='text-blue-400'>Myorder</Link>
                                            <Link href="#contact" className='text-blue-400'>Contact Us</Link>
                                            <Link href="/feedback" className='text-blue-400'>Feedback</Link>
                                            <Link href="/wishlist" className='text-blue-400'>Wishlist</Link>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
