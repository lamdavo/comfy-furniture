import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./index";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Sidebar />
      <Footer />
    </>
  );
};
export default Layout;
