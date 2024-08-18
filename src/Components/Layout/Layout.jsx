import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <div className="pt-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}
