import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => (
  <div className={styles.Navbar}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/brands">
                Brands
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <i className="fab fa-facebook"></i>
            </li>

            <li className="nav-item mx-2">
              <i className="fab fa-twitter"></i>
            </li>

            <li className="nav-item mx-2">
              <i className="fab fa-instagram"></i>
            </li>

            <li className="nav-item mx-2">
              <i className="fab fa-youtube"></i>
            </li>

            <li className="nav-item mx-2">
              <i className="fab fa-tiktok"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
