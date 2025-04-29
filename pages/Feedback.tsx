import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from '@radix-ui/react-label';
import { Button } from "@/components/ui/button";

const InputWithLabel = () => {
  return (
    <div id="contact" className="flex flex-col items-center bg-yellow-300 px-4 md:px-8 lg:px-16 py-10">
      <h1 className="text-4xl font-bold mb-10 mt-10 text-center text-white">Feedback</h1>


      <div className="flex flex-col md:flex-row md:space-x-4 w-full max-w-2xl mb-4 mt-15">
        <div className="grid w-full md:w-1/2 gap-1.5 mb-4 md:mb-0 text-white mt-5">
          <Label htmlFor="firstName">First Name</Label>
          <Input type="text" id="firstName" placeholder="First Name" className="text-black"/>
        </div>
        <div className="grid w-full md:w-1/2 gap-1.5 text-white mt-5">
          <Label htmlFor="lastName">Last Name</Label>
          <Input type="text" id="lastName" placeholder="Last Name" className="text-black"/>
        </div>
      </div>

      
      <div className="grid w-full max-w-2xl gap-1.5 mb-4 text-white mt-5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" className="text-black"/>
      </div>

    
      <div className="grid w-full max-w-2xl gap-1.5 mb-8 text-white mt-5">
        <Label htmlFor="message">Feedback message</Label>
        <textarea
          id="message"
          placeholder="Write your Feedback about our icecream product...."
          className="p-2 border border-gray-100 rounded-md h-32 text-black"
        />
      </div>

      
      <div className="w-full max-w-2xl ml-5 flex justify-start mb-20 mt-10">
        <Button className="bg-white w-auto text-yellow-400 font-bold hover:bg-yellow-100 lg:-ml-3">Submit</Button>
      </div>
    </div>
  );
};

export default InputWithLabel;
