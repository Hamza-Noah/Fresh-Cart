import axios from "axios";


export default async function getUserCart(userToken, setCart) {
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        headers: {
          token: userToken,
        },
      }
    );

    setCart(data);
  }