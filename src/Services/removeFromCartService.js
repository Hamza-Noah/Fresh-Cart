import axios from "axios";
import { Bounce, toast } from "react-toastify";

export default async function removeProductFromCart(
  userToken,
  productId,
  setCart
) {
  const { data } = await axios.delete(
    "https://ecommerce.routemisr.com/api/v1/cart/" + productId,
    {
      headers: {
        token: userToken,
      },
    }
  );

  toast.success("removed the Product successfully from the cart", {
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

  setCart(data);
}
