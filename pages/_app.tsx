import { AppProps } from "next/app"; // Import Next.js AppProps type
import { WishlistProvider } from "@/context/WishlistContext";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) { // Add types here
  return (
    <WishlistProvider>
      <Component {...pageProps} />
    </WishlistProvider>
  );
}

export default MyApp;
