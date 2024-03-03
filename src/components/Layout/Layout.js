import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => (
  <div className={styles.Layout}>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
