import Slider from "react-slick/lib/slider";

import RelatedProduct from "../RelatedProduct"
export default function RelatedProducts({ relatedProducts }) {


  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 20,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };

  return (
    <>
      <div className="mt-60">
        <h3 className="text-gray-600 text-2xl font-medium">More Products</h3>
        <Slider {...settings}>
          {relatedProducts.map((relatedProduct, i) => {
            return (
           <RelatedProduct relatedProduct={relatedProduct} key={i}/>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
