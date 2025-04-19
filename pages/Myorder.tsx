import React, { useEffect, useState } from "react";

interface IceCreamItem {
  name: string;
  price: string;
  image: string;
}

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState<IceCreamItem[]>([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem("myOrders");
    if (storedOrders) {
      setMyOrders(JSON.parse(storedOrders));
    }
  }, []);

  const handleRemove = (indexToRemove: number) => {
    const updatedOrders = myOrders.filter((_, index) => index !== indexToRemove);
    setMyOrders(updatedOrders);
    localStorage.setItem("myOrders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-yellow-100 to-yellow-50">
      <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">
        🍦 Your Ice Cream Orders
      </h1>

      {myOrders.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          No ice creams added to your order yet!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {myOrders.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300 text-center relative"
            >
              <div className="w-full h-[200px] bg-gray-100 flex items-center justify-center rounded-lg mb-3 border">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-pink-600 text-lg font-bold mt-1">
                {item.price}
              </p>
              <p className="text-green-600 text-sm mt-2">Cash on Delivery</p>
              
              <button
                onClick={() => handleRemove(index)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-lg transition duration-200"
              >
                Cancel Order 
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrder;
