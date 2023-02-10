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
  const { img, name, price, ratings, seller } = product;

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
      <div class="w-full ">
        <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
          <figure class="mb-2">
            <img src={img} alt="" class="h-64 ml-auto mr-auto" />
          </figure>
          <div class="rounded-lg p-4 bg-gradient-to-r from-primary to-secondary flex flex-col">
            <div>
              <h5 class="text-white text-2xl font-bold leading-none">
                {name?.slice(0, 20)}
              </h5>
              <span class="text-xs text-white leading-none">{seller}</span>
            </div>
            <div class="flex items-center">
              <div class="text-lg text-white font-light">Tk {price}</div>
              <button
                href="javascript:;"
                class="rounded-full bg-white text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                onClick={() => handleAddProduct(product)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="stroke-current text-black m-auto"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
