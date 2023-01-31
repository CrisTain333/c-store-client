import React, { useState } from "react";
import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { productContext } from "../../Context/ProductProvider";
import toast, { Toaster } from "react-hot-toast";

const ProductCard = ({ product }) => {
  let { setProductCart } = useContext(productContext);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const { img, name, price, ratings } = product;

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingProduct = cart.find((p) => p._id === product._id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ ...product });
      toast.success("Added To Cart");
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setProductCart([...cart]);
    setCart([...cart]);
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
                  onClick={() => addToCart(product)}
                >
                  <button
                    class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-gradient-to-r from-primary to-secondary text-white w-full"
                    href="#0"
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
