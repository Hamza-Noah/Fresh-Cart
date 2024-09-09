import { Bounce, toast } from "react-toastify";
import axios from "axios";

export default async function addProductToCart(
  productId,
  userToken,
  setIsLoading = null
) {
  if (setIsLoading !== null) {
    setIsLoading(true);
  }

  try {
    let { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        productId: productId,
      },
      {
        headers: {
          token: userToken,
        },
      }
    );

    toast.success(data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    if (setIsLoading !== null) {
      setIsLoading(false);
    }
  } catch (err) {
    if (setIsLoading !== null) {
      setIsLoading(false);
    }
    console.log(err);
  }
}
