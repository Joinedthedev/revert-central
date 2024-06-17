import NavBar from "../Navbar/NavBar";
import { useRouter } from "next/router";

type LayoutProps ={
    children: any,
}
const Layout = ({ children }:LayoutProps) => {
    // useAuth(); // will implement later at end of tutorial
    const router = useRouter();
    const getNavBarVariant = () => {
      if (router.pathname === "/community") {
        return "community";
      }
      return "default";
    };
    return (
      <>
        <NavBar variant={getNavBarVariant()} />
        {children}
      </>
    );
  };
  
  export default Layout;
  