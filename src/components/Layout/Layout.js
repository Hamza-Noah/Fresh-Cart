import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";

const Layout = () => <div className={styles.Layout}><Outlet></Outlet></div>;

export default Layout;
