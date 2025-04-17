import axios from "axios";
import type { AppProps } from "next/app";
import { NavBar } from "@/src/components/NavBar";
import { Providers } from "@/src/components/Providers";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;

  return (
    <Providers>
      <div className="container">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </Providers>
  );
}
