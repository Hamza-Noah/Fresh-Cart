import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Product/Product";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getData() {
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    setProducts(data.data);
  }

  console.log(products);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        {products.map((product, i) => {
          return <Product product={product} index={i} />;
        })}
      </div>
    </>
  );
}
