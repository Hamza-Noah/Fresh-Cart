import axios from "axios";

export default async function clearUserCart(userToken, setCart) {
    let { data } = await axios.delete(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        headers: {
          token: userToken,
        },
      }
    );

    setCart(data);
  }