import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/Navbar/NavBar";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const getNavBarVariant = () => {
    if (router.pathname === "/community") {
      return "community";
    }
    return "default";
  };

  return (
    <RecoilRoot>
      <ChakraProvider>
        <NavBar variant={getNavBarVariant()} />
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}
