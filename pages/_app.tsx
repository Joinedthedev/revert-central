import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/Navbar/NavBar";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import Layout from "@/components/Layout/Layout";
import { Suspense } from "react";
import Loading from "@/components/Loading";
export default function App({ Component, pageProps }: AppProps) {
  

  return (
    <ChakraProvider>
    <RecoilRoot>
   
      <Layout>
        <Suspense fallback={<Loading/>}>
        <Component {...pageProps} />
        </Suspense>
      </Layout>

  </RecoilRoot>
  </ChakraProvider>
  );
}
