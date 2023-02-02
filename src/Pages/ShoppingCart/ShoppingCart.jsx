import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../Context/ProductProvider";

const ShoppingCart = () => {
  let { cart } = useContext(productContext);

  return (
    <div>
      <div className="mt-20">
        <div class="container mx-auto mt-10">
          <div class="flex shadow-md my-10">
            <div class="w-3/4 bg-white px-10 py-10">
              <div class="flex justify-between border-b pb-8">
                <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                <h2 class="font-semibold text-2xl">{cart.length} Items</h2>
              </div>
              <div class="flex mt-10 mb-5">
                <div className="overflow-x-auto w-full">
                  <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <!-- row 1 --> */}
                      {cart.map((product) => {
                        return (
                          <tr>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-12 h-12">
                                    <img
                                      src={product?.productImage}
                                      alt="Avatar Tailwind CSS Component"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">
                                    {product?.productName}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>{product?.productQuantity}</td>
                            <td>{product?.productPrice} tk</td>
                            <th>
                              <button className="btn btn-ghost btn-xs">
                                {product?.productPrice *
                                  product?.productQuantity}{" "}
                                tk
                              </button>
                            </th>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <Link
                to="/products"
                class="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  class="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            <div id="summary" class="w-1/4 px-8 py-10">
              <h1 class="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div class="flex justify-between mt-10 mb-5">
                <span class="font-semibold text-sm uppercase">Items 3</span>
                <span class="font-semibold text-sm">590$</span>
              </div>
              <div>
                <label class="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select class="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div class="py-10">
                <label
                  for="promo"
                  class="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  class="p-2 text-sm w-full"
                />
              </div>
              <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div class="border-t mt-8">
                <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>$600</span>
                </div>
                <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
