import { useWishlist } from "@/context/WishlistContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-5 w-full overflow-hidden">
      <div className="bg-yellow-300 mx-auto shadow-md p-4">
        <h1 className="text-3xl font-bold text-center">My Wishlist</h1>
      </div>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600 mt-5">Your wishlist is empty.</p>
      ) : (
        <div className="mt-10 min-w-full max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
            {wishlist.map((item, index) => (
              <Card key={index} className="relative flex flex-col items-center border-none shadow-none max-w-[200px]">
                <CardContent className="flex flex-col items-center relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full max-w-[200px] h-[130px] object-cover rounded-lg"
                  />
                  <p className="text-base font-bold flex flex-col items-center mt-2">{item.name}</p>
                  <p className="text-center font-extrabold text-pink-600">{item.price}</p>
                  <Button className="mt-2 bg-red-500 text-white" onClick={() => removeFromWishlist(item.name)}>
                    Remove
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
