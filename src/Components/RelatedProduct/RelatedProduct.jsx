import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import addProductToCart from "../../Services/addToCartService";

export default function RelatedProduct({ relatedProduct }) {
  const { userToken } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="w-full max-w-sm mx-auto p-2 overflow-hidden ">
        <div className=" rounded-md shadow-md ">
          <div
            className="flex items-end justify-end h-56 w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${relatedProduct.imageCover})`,
            }}
          >
            <button
              onClick={() => {
                addProductToCart(relatedProduct.id, userToken, setIsLoading);
              }}
              className={`${
                !isLoading ? "p-2" : "py-1 px-2"
              } rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}
            >
              {!isLoading ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              ) : (
                <i className="fa fa-spinner fa-spin"></i>
              )}
            </button>
          </div>
          <div className="px-5 py-3">
            <Link to={"/productdetails/" + relatedProduct._id}>
              <h3 className="text-gray-700 uppercase">
                {relatedProduct.title}
              </h3>
            </Link>
            <span className="text-gray-500 mt-2">${relatedProduct.price}</span>
          </div>
        </div>
      </div>
    </>
  );
}
