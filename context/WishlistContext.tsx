import { createContext, useContext, useState, ReactNode } from "react";

export interface IceCream {
  image: string;
  name: string;
  price: string;
}

interface WishlistContextType {
  wishlist: IceCream[];
  addToWishlist: (item: IceCream) => void;
  removeFromWishlist: (name: string) => void;
  isInWishlist: (name: string) => boolean; // New function to check if an item is in the wishlist
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<IceCream[]>([]);

  // Check if an item already exists in the wishlist
  const isInWishlist = (name: string) => {
    return wishlist.some((item) => item.name === name);
  };

  // Add item only if it's not already in the wishlist
  const addToWishlist = (item: IceCream) => {
    if (!isInWishlist(item.name)) {
      setWishlist((prev) => [...prev, item]);
    }
  };

  // Remove item from wishlist by name
  const removeFromWishlist = (name: string) => {
    setWishlist((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
