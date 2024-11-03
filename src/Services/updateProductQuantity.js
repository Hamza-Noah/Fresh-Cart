import axios from "axios";

export default async function updateProductQuantity(productId, count, setCart) {
  let { data } = await axios.put(
    "https://ecommerce.routemisr.com/api/v1/cart/" + productId,
    {
      count,
    },
    {
      headers: {
        token: localStorage.getItem("userToken"),
      },
    }
  );

  setCart(data);
}
