import React, { useState } from "react";
import Vanilla from "./flavour/Vanilla";
import BlackCurrant from "./flavour/BlackCurrant";
import Blueberry from "./flavour/Blueberry";
import Butterscotch from "./flavour/Butterscotch";
import Chocolate from "./flavour/Chocolate";
import Mango from "./flavour/Mango";
import Mint from "./flavour/Mint";
import Mocha from "./flavour/Mocha";
import Oat from "./flavour/Oat";
import Raspberry from "./flavour/Raspberry";
import SaltySweet from "./flavour/SaltySweet";
import Strawberry from "./flavour/Strawberry";
import { FaSearch } from "react-icons/fa";

const Flavor = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const flavors = [
    { 
    name: "BlackCurrant", 
    component: <BlackCurrant /> 
    },
    { 
    name: "Blueberry", 
    component: <Blueberry /> 
    },
    { 
    name: "Butterscotch", 
    component: <Butterscotch /> 
    },
    { 
    name: "Chocolate", 
    component: <Chocolate /> 
    },
    { 
    name: "Mango", 
    component: <Mango /> 
    },
    { 
    name: "Mint", 
    component: <Mint /> 
    },
    { 
    name: "Mocha", 
    component: <Mocha /> 
    },
    { 
    name: "Oat", 
    component: <Oat /> 
    },
    { 
    name: "Raspberry", 
    component: <Raspberry /> 
    },
    { 
    name: "SaltySweet", 
    component: <SaltySweet /> 
    },
    { 
    name: "Strawberry", 
    component: <Strawberry /> 
    },
    { 
    name: "Vanilla", 
    component: <Vanilla /> 
    },
  ];

  const filteredFlavors = flavors.filter((flavor) =>
    flavor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="p-5 w-full overflow-hidden">
        <div className="bg-yellow-300 mx-auto shadow-md p-4">
          <h1 className="text-3xl font-bold text-center text-white">Our Flavours</h1>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="relative w-full px-4 sm:w-3/4 md:w-1/2 lg:w-1/3">
          <span className="absolute inset-y-0 left-0 flex items-center pl-8 text-gray-500">
            <FaSearch />
            </span>
            <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 p-2 w-full rounded-md border border-gray-400 focus:outline-none"
            />
            </div>
            </div>


      {/* Render filtered flavours only */}
      <div className="mt-5 space-y-4">
        {filteredFlavors.length > 0 ? (
          filteredFlavors.map((flavor, index) => (
            <div key={index}>{flavor.component}</div>
          ))
        ) : (
          <p className="text-center text-red-500 font-semibold">No flavour found!</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Flavor;
