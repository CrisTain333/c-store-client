import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import { productContext } from "../../Context/ProductProvider";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const { refetch } = useContext(productContext);
  const { img, name, price, ratings } = product;

  const handleAddProduct = (product) => {
    setLoading(true);
    const cart = {
      email: user.email,
      productId: product._id,
      productName: product.name,
      productPrice: product.price,
      productQuantity: product.quantity,
      productImage: product.img,
      shipping: product.shipping,
    };

    fetch(`http://localhost:5000/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("quantity increased");
        } else if (data.acknowledged) {
          toast.success("Added to cart");
        }
        refetch();
        setLoading(false);
      });
    setLoading(false);
  };

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <section class="flex flex-col  justify-center antialiased  text-gray-600 p-4">
        <div class="">
          {/* <!-- Card --> */}
          <div class="max-w-xs mx-auto ">
            <div class="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
              {/* <!-- Image --> */}
              <a
                class="block focus:outline-none focus-visible:ring-2"
                href="#0"
              >
                <figure class="relative h-0 pb-[56.25%] overflow-hidden">
                  <img
                    class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                    src={img}
                    width="320"
                    height="180"
                    alt="ProductImage"
                  />
                </figure>
              </a>
              {/* <!-- Card Content --> */}
              <div class="flex-grow flex flex-col p-5">
                {/* <!-- Card body --> */}
                <div class="flex-grow">
                  {/* <!-- Header --> */}
                  <header class="mb-3">
                    <a
                      class="block focus:outline-none focus-visible:ring-2"
                      href="#0"
                    >
                      <h3 class="text-lg text-gray-900 font-extrabold leading-snug">
                        {name?.slice(0, 50)}
                      </h3>
                    </a>
                  </header>
                  {/* <!-- Content --> */}
                  <div class="mb-8">
                    <p className="text-lg mb-2">
                      Price : <span className="font-semibold">{price}</span> Tk
                    </p>
                    <p className="flex items-center ">
                      Rating :{" "}
                      <span className="flex items-center ml-2">
                        {ratings}
                        <AiFillStar className="ml-1 text-yellow-400"></AiFillStar>
                      </span>
                    </p>
                  </div>
                </div>
                {/* <!-- Card footer --> */}
                <div
                  class="flex justify-center  w-full"
                  onClick={() => handleAddProduct(product)}
                >
                  <button
                    class={`font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-gradient-to-r from-primary to-secondary text-white w-full ${
                      loading && "cursor-not-allowed"
                    }`}
                    href="#0"
                    disabled={loading}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
