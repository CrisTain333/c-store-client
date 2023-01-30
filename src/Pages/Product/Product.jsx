import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Product = () => {
  const [category, setCategory] = useState([]);
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const catrogyes = data.map((x) => {
          return x.category;
        });
        let unique = catrogyes.filter((v, i, a) => a.indexOf(v) === i);
        setCategory(unique);
        setProduct(data);
      });
  }, []);
  console.log(category);
  return (
    <div>
      <div className="main_div flex w-[90%] mx-auto">
        {/* Left Side  */}
        <div className="left_Side w-[20%]">
          <div className="left_Card bg-slate-50">
            <p>Filter By Category</p>

            <div>
              {category.map((x) => {
                return <p>{x}</p>;
              })}
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className="right_side w-[75%]">
          <div className="right_card">
            <div className="grid gap-1 row-gap-1 sm:grid-cols-2 lg:grid-cols-2">
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
