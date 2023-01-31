import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { ThreeCircles } from "react-loader-spinner";

const Product = () => {
  // const [category, setCategory] = useState([]);
  // const [products, setProduct] = useState([]);
  const [filter, setFilter] = useState("all");
  // Get category
  const { data: category = [], isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products/category`);
      const data = res.json();
      return data;
    },
  });
  const { data: products = [], isLoading: loading } = useQuery({
    queryKey: ["products", filter],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products/${filter}`);
      const data = res.json();
      return data;
    },
  });

  const handleSelect = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      {/* <Toaster /> */}
      <div className="main_div grid grid-cols-12 w-[95%] mx-auto">
        {/* Left Side  */}
        <div className="left_Side col-span-2">
          <div className="left_Card   sticky top-20">
            <div class="flex items-center justify-center p-4">
              <div class="  w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                  Category
                  <p>{isLoading && " Loading ......."}</p>
                </h6>
                <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                  {category.map((x) => {
                    return (
                      <li class="flex items-center">
                        <input
                          onChange={handleSelect}
                          id={x}
                          type="checkbox"
                          value={x}
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />

                        <label
                          htmlFor={x}
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          {x}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className="right_side col-span-10 mt-10">
          {loading && (
            <div className="h-80 flex justify-center items-center">
              <ThreeCircles
                height="100"
                width="100"
                color="#f9a900"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
              />
            </div>
          )}
          <div className="right_card">
            <div className="grid gap-1 row-gap-1 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
