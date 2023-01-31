import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Home = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/all`)
      .then((res) => res.json())
      .then((data) => {
        const products = data;
        const treadingProduct = products.filter((f) => f.ratings >= 5);
        setProduct(treadingProduct.slice(0, 9));
      });
  }, []);
  return (
    <div>
      {/* <h2 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Hello World
      </h2> */}
      <section>
        <div className="dark:bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-8  mx-auto text-center    dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              “<span className="text-primary">Cleanse</span> & Debloat or Cut
              the <span className="text-primary">Cals</span>”
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              “Menswear Founded on Fit, Built on Service, and Focused on Style.
              However You Fit, Bonobos Fits You.”
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 bg-gradient-to-r from-primary to-secondary text-white"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Trending Products Section   */}
      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Trending products on C-Store
            </h2>
            <hr />
          </div>
          <div className="grid gap-1 row-gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          <div className="w-full flex item justify-center mt-5">
            <Link to="/products">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 bg-gradient-to-r from-primary to-secondary text-white"
              >
                View All
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contents Section  */}
      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary">
                <svg className="text-white w-7 h-7" viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points=" 8,5 8,1 16,1 16,5"
                    strokeLinejoin="round"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="9,15 1,15 1,5 23,5 23,15 15,15"
                    strokeLinejoin="round"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="22,18 22,23 2,23 2,18"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="9"
                    y="13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    width="6"
                    height="4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Most Sold Products
                </h2>
              </div>
              <div>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  See More
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src="https://hips.hearstapps.com/hmg-prod/images/42578450-010-b-1516375303.jpg?crop=1xw:1xh;center,top&resize=980:*"
                  alt=""
                />
                <img
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src="https://thestandard.co/wp-content/uploads/2021/06/7-17.jpg?x73016"
                  alt=""
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18374274/2022/9/8/27e5874a-195c-4a74-880a-5675db88b0481662614010076-ADIDAS-Men-Sports-Shoes-391662614009670-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section  */}
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-4 mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Trusted by the industry leaders
          </h2>
        </div>
        <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="fill-current w-14 h-14"
            >
              <path d="M0.063 24.026c0.094-0.156 0.245-0.167 0.464-0.031 4.844 2.818 10.125 4.224 15.823 4.224 3.802 0 7.557-0.708 11.266-2.125l0.417-0.188c0.188-0.083 0.313-0.135 0.391-0.172 0.302-0.12 0.521-0.063 0.703 0.172 0.161 0.229 0.12 0.448-0.161 0.641-0.339 0.25-0.802 0.547-1.339 0.87-1.661 0.99-3.521 1.755-5.583 2.302-2.036 0.542-4.057 0.813-6.021 0.813-3.021 0-5.88-0.526-8.578-1.583-2.693-1.057-5.094-2.547-7.24-4.464-0.135-0.099-0.203-0.203-0.203-0.297 0-0.063 0.026-0.12 0.068-0.172zM8.813 15.734c0-1.339 0.328-2.484 0.99-3.432s1.563-1.667 2.724-2.156c1.057-0.448 2.339-0.766 3.88-0.958 0.521-0.063 1.38-0.141 2.563-0.234v-0.49c0-1.245-0.141-2.078-0.401-2.5-0.406-0.578-1.042-0.87-1.922-0.87h-0.24c-0.641 0.063-1.198 0.26-1.661 0.615-0.469 0.359-0.771 0.839-0.901 1.464-0.083 0.396-0.276 0.62-0.583 0.677l-3.359-0.422c-0.328-0.078-0.495-0.24-0.495-0.516 0-0.063 0.010-0.12 0.031-0.203 0.328-1.719 1.141-3 2.427-3.839 1.297-0.823 2.797-1.302 4.516-1.401h0.724c2.198 0 3.943 0.578 5.182 1.719 0.182 0.203 0.359 0.401 0.542 0.641 0.156 0.219 0.297 0.422 0.375 0.599 0.099 0.182 0.203 0.443 0.26 0.76 0.078 0.339 0.141 0.563 0.182 0.682 0.036 0.141 0.083 0.401 0.099 0.818s0.026 0.661 0.026 0.74v7.042c0 0.5 0.083 0.958 0.219 1.38 0.141 0.417 0.281 0.719 0.422 0.896l0.682 0.901c0.12 0.182 0.177 0.339 0.177 0.479 0 0.161-0.078 0.302-0.24 0.417-1.599 1.401-2.479 2.161-2.615 2.281-0.219 0.182-0.5 0.203-0.839 0.063-0.26-0.224-0.5-0.443-0.703-0.661l-0.411-0.464c-0.083-0.099-0.224-0.281-0.427-0.563l-0.396-0.578c-1.083 1.182-2.141 1.922-3.203 2.219-0.656 0.203-1.458 0.302-2.438 0.302-1.479 0-2.719-0.453-3.682-1.375-0.958-0.922-1.438-2.224-1.438-3.922l-0.068-0.099zM13.818 15.151c0 0.755 0.188 1.359 0.568 1.818 0.38 0.453 0.901 0.682 1.536 0.682 0.063 0 0.146-0.005 0.26-0.026 0.12-0.021 0.182-0.031 0.224-0.031 0.818-0.214 1.438-0.734 1.896-1.568 0.224-0.375 0.38-0.776 0.484-1.214 0.12-0.427 0.156-0.786 0.177-1.068 0.021-0.26 0.021-0.719 0.021-1.339v-0.719c-1.12 0-1.979 0.078-2.563 0.24-1.698 0.479-2.557 1.557-2.557 3.24l-0.047-0.026zM26.031 24.521c0.042-0.078 0.104-0.146 0.177-0.224 0.484-0.328 0.953-0.547 1.401-0.667 0.734-0.177 1.453-0.297 2.151-0.323 0.188-0.016 0.37 0 0.547 0.042 0.865 0.078 1.396 0.224 1.563 0.438 0.083 0.12 0.12 0.307 0.12 0.521v0.203c0 0.677-0.188 1.479-0.557 2.396-0.37 0.922-0.885 1.667-1.536 2.24-0.099 0.083-0.188 0.12-0.266 0.12-0.042 0-0.078 0-0.12-0.016-0.12-0.057-0.141-0.156-0.083-0.318 0.719-1.682 1.073-2.859 1.073-3.521 0-0.198-0.042-0.359-0.115-0.458-0.193-0.219-0.734-0.344-1.635-0.344-0.323 0-0.708 0.021-1.156 0.063-0.484 0.063-0.938 0.12-1.333 0.182-0.12 0-0.198-0.021-0.24-0.063-0.042-0.036-0.052-0.063-0.031-0.099 0-0.026 0.010-0.042 0.031-0.089v-0.078z"></path>
            </svg>
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="fill-current w-14 h-14"
            >
              <path d="M9.438 31.401c-0.63-0.422-1.193-0.938-1.656-1.536-0.516-0.615-0.984-1.266-1.422-1.938-1.021-1.495-1.818-3.125-2.375-4.849-0.667-2-0.99-3.917-0.99-5.792 0-2.094 0.453-3.922 1.339-5.458 0.651-1.198 1.625-2.203 2.797-2.906 1.135-0.708 2.453-1.094 3.786-1.12 0.469 0 0.974 0.068 1.51 0.198 0.385 0.109 0.854 0.281 1.427 0.495 0.729 0.281 1.13 0.453 1.266 0.495 0.427 0.156 0.786 0.224 1.068 0.224 0.214 0 0.516-0.068 0.859-0.172 0.193-0.068 0.557-0.188 1.078-0.411 0.516-0.188 0.922-0.349 1.245-0.469 0.495-0.146 0.974-0.281 1.401-0.349 0.521-0.078 1.036-0.104 1.531-0.063 0.948 0.063 1.813 0.266 2.589 0.557 1.359 0.547 2.458 1.401 3.276 2.615-0.349 0.214-0.667 0.458-0.969 0.734-0.651 0.573-1.198 1.25-1.641 2.005-0.573 1.026-0.865 2.188-0.859 3.359 0.021 1.443 0.391 2.714 1.12 3.813 0.521 0.802 1.208 1.484 2.047 2.047 0.417 0.281 0.776 0.474 1.12 0.604-0.161 0.5-0.333 0.984-0.536 1.464-0.464 1.078-1.016 2.109-1.667 3.083-0.578 0.839-1.031 1.464-1.375 1.88-0.536 0.635-1.052 1.12-1.573 1.458-0.573 0.38-1.25 0.583-1.938 0.583-0.469 0.021-0.932-0.042-1.38-0.167-0.385-0.13-0.766-0.271-1.141-0.432-0.391-0.177-0.792-0.333-1.203-0.453-0.51-0.135-1.031-0.198-1.552-0.198-0.536 0-1.057 0.068-1.547 0.193-0.417 0.12-0.818 0.26-1.214 0.432-0.557 0.234-0.927 0.391-1.141 0.458-0.427 0.125-0.87 0.203-1.318 0.229-0.693 0-1.339-0.198-1.979-0.599zM18.578 6.786c-0.906 0.453-1.771 0.646-2.63 0.583-0.135-0.865 0-1.75 0.359-2.719 0.318-0.828 0.745-1.573 1.333-2.24 0.609-0.693 1.344-1.266 2.172-1.677 0.88-0.453 1.719-0.698 2.521-0.734 0.104 0.906 0 1.797-0.333 2.76-0.307 0.854-0.76 1.641-1.333 2.344-0.583 0.693-1.302 1.266-2.115 1.682z"></path>
            </svg>
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="fill-current w-14 h-14"
            >
              <path d="M6.427 23.031c-0.911 0-1.739-0.744-1.739-1.651s0.744-1.656 1.739-1.656c1 0 1.751 0.745 1.751 1.656 0 0.907-0.833 1.651-1.745 1.651zM27.776 14.016c-0.183-1.323-1-2.401-2.079-3.224l-0.421-0.333-0.339 0.411c-0.656 0.745-0.921 2.068-0.839 3.057 0.079 0.751 0.317 1.495 0.74 2.073-0.344 0.177-0.76 0.333-1.084 0.505-0.76 0.249-1.5 0.333-2.239 0.333h-21.385l-0.084 0.489c-0.156 1.579 0.084 3.229 0.751 4.724l0.328 0.579v0.077c2 3.313 5.557 4.803 9.437 4.803 7.459 0 13.573-3.224 16.473-10.177 1.901 0.083 3.819-0.412 4.719-2.235l0.24-0.411-0.396-0.251c-1.083-0.661-2.563-0.749-3.801-0.416l-0.027 0.005zM17.099 12.693h-3.239v3.228h3.239zM17.099 8.636h-3.239v3.228h3.239zM17.099 4.495h-3.239v3.229h3.239zM21.057 12.693h-3.219v3.228h3.229v-3.228zM9.063 12.693h-3.219v3.228h3.229v-3.228zM13.099 12.693h-3.197v3.228h3.219v-3.228zM5.063 12.693h-3.199v3.228h3.24v-3.228zM13.099 8.636h-3.197v3.228h3.219v-3.224zM9.041 8.636h-3.192v3.228h3.219v-3.224l-0.021-0.004z"></path>
            </svg>
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="fill-current w-14 h-14"
            >
              <path d="M31.907 3.921c-9.552-3.395-19.933-3.676-29.652-0.801-1.629 0.391-2.609 2.052-2.161 3.667 0.532 2.135 1.308 4.588 2.24 6.812 0.016 0.052 0.041 0.027 0.041-0.025-0.135-1.043 0.667-2.36 2.24-2.839 7.557-2.407 15.692-2.297 23.188 0.307 1.145 0.396 2.427-0.229 2.796-1.416 0.932-3 1.308-5.037 1.401-5.547 0.016-0.095-0.068-0.131-0.093-0.157zM8.864 10.521c-1.145 0.239-2.728 0.615-3.916 1.009-2.375 0.819-2.265 3.709-1 4.631 0.093-0.536 0.667-1.265 1.307-1.511 2.371-0.932 4.917-1.489 7.491-1.719-1.308-0.531-2.584-1.292-3.865-2.411zM27.771 16.307c-6.891-3.239-14.801-3.552-21.932-0.869-1.131 0.427-1.839 1.803-1.131 3.109 1.235 2.235 2.641 4.375 4.199 6.401-0.224-0.776 0.172-2.213 1.692-2.683 4.204-1.292 8.615-0.744 11.547 0.443 0.828 0.333 2 0.131 2.657-0.853 1.119-1.724 2.14-3.516 3.052-5.36 0.041-0.083 0-0.145-0.084-0.188zM20.959 26.667c-1.229-0.62-2.355-1.432-3.333-2.401-0.453-0.453-1.12-1.104-1.823-1.88-1.605 0-3.163 0.161-4.829 0.693-1.547 0.484-1.692 2.271-1.015 3.203 1.145 1.427 1.948 2.197 3.229 3.521 1.411 1.385 3.667 1.395 5.093 0.025 1-1 1.615-1.667 2.745-2.948 0.067-0.068 0.041-0.187-0.068-0.213z"></path>
            </svg>
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="fill-current w-14 h-14"
            >
              <path d="M29.3 17.425l2.665-2.995h-3.12l-1.085 1.24-1.125-1.24h-5.935v-0.8h2.805v-2.405h-7.56v3.775h-0.025c-0.48-0.55-1.075-0.74-1.77-0.74-1.42 0-2.49 0.97-2.865 2.245-0.9-2.97-4.87-2.88-6.095-0.7v-1.21h-2.74v-1.31h3v-2.055h-5.45v9.22h2.45v-3.875h2.445c-0.075 0.285-0.115 0.59-0.115 0.91 0 3.655 5.13 4.57 6.51 1.185h-2.1c-0.735 1.045-2.29 0.445-2.29-0.73h4.275c0.185 1.525 1.37 2.845 3.005 2.845 0.705 0 1.35-0.345 1.745-0.93h0.025v0.595h10.61l1.105-1.25 1.115 1.25h3.22zM6.965 16.595c0.305-1.315 2.085-1.28 2.325 0zM14.635 19.040c-1.73 0-1.7-3.14 0-3.14 1.63 0 1.725 3.14 0 3.14zM23.025 19.995h-4.72v-8.325h4.75v1.51h-2.805v1.695h2.775v1.405h-2.805v2.235h2.805zM20.73 18.005v-1.22h2.805v-2.2l2.535 2.85-2.535 2.85v-2.28zM27.66 18.52l-1.305 1.475h-1.905l2.28-2.56-2.28-2.56h1.985l1.33 1.465 1.28-1.465h1.925l-2.27 2.55 2.3 2.57h-2.025z"></path>
            </svg>
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="fill-current w-14 h-14"
            >
              <path d="M9.427 14.401v5.167h-1.646v-6.495h3.396c1.443 0 1.932 1.021 1.932 1.943v4.552h-1.641v-4.542c0-0.391-0.198-0.625-0.682-0.625zM20.615 14.323c-0.568 0-1 0.286-1.182 0.682-0.104 0.219-0.156 0.458-0.156 0.703h2.531c-0.031-0.703-0.354-1.385-1.193-1.385zM19.276 16.828c0 0.839 0.521 1.464 1.458 1.464 0.724 0 1.083-0.203 1.505-0.625l1.016 0.974c-0.646 0.641-1.333 1.031-2.536 1.031-1.573 0-3.078-0.859-3.078-3.359 0-2.141 1.313-3.349 3.042-3.349 1.755 0 2.766 1.417 2.766 3.271v0.589h-4.172zM16.25 19.557c-1.339 0-1.906-0.932-1.906-1.854v-6.401h1.641v1.771h1.234v1.328h-1.234v3.198c0 0.38 0.177 0.589 0.568 0.589h0.667v1.37zM6.318 12.177h-1.656v-1.578h1.656zM6.323 19.635c-1.24-0.12-1.661-0.87-1.661-1.74v-4.823h1.656v6.568zM26.063 19.495c-1.24-0.12-1.656-0.87-1.656-1.734v-7.38h1.656v9.12zM31.859 11.448c-1.5-7.328-15.724-7.792-24.885-2.214v0.62c9.151-4.708 22.141-4.677 23.323 2.063 0.391 2.234-0.865 4.557-3.109 5.896v1.75c2.703-0.99 5.474-4.198 4.672-8.115zM15.198 24.26c-6.323 0.583-12.917-0.339-13.839-5.276-0.448-2.438 0.667-5.021 2.13-6.625v-0.854c-2.646 2.323-4.083 5.266-3.255 8.74 1.057 4.458 6.714 6.984 15.344 6.146 3.417-0.333 7.891-1.432 10.995-3.141v-2.422c-2.818 1.682-7.49 3.073-11.375 3.432zM27.979 10.865c0-0.078-0.052-0.104-0.156-0.104h-0.104v0.229h0.104c0.104 0 0.156-0.031 0.156-0.109zM28.141 11.432h-0.125c-0.010 0-0.021-0.005-0.026-0.016l-0.167-0.286c-0.005-0.005-0.016-0.010-0.026-0.010h-0.073v0.281c0 0.016-0.016 0.031-0.031 0.031h-0.109c-0.016 0-0.031-0.016-0.031-0.031v-0.714c0-0.036 0.021-0.057 0.052-0.063 0.068-0.005 0.135-0.005 0.203-0.005 0.203 0 0.328 0.057 0.328 0.25v0.010c0 0.12-0.063 0.182-0.151 0.214l0.172 0.292c0 0.005 0.005 0.016 0.005 0.021 0.005 0.010-0.005 0.026-0.021 0.026zM27.849 10.484c-0.302 0-0.547 0.245-0.547 0.547 0.005 0.302 0.25 0.547 0.552 0.547 0.297 0 0.542-0.245 0.542-0.542 0-0.302-0.245-0.552-0.547-0.552zM27.849 11.693c-0.365 0-0.661-0.292-0.661-0.656s0.297-0.661 0.661-0.661c0.359 0 0.661 0.297 0.661 0.661s-0.302 0.656-0.661 0.656z"></path>
            </svg>
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="fill-current w-14 h-14"
            >
              <path d="M15.125 24.041c0.077 0.063 0.161 0.131 0.239 0.193-1.567 1.047-3.452 1.651-5.473 1.651-5.464 0-9.891-4.421-9.891-9.885 0-5.459 4.427-9.885 9.885-9.885 2.027 0 3.912 0.604 5.475 1.645-0.079 0.068-0.157 0.136-0.22 0.204-2.337 2.020-3.681 4.953-3.681 8.036s1.339 6.016 3.667 8.041zM22.115 6.115c-2.032 0-3.912 0.604-5.475 1.645 0.079 0.068 0.157 0.136 0.22 0.204 2.337 2.020 3.681 4.953 3.681 8.036 0 3.079-1.339 6.011-3.667 8.041-0.077 0.063-0.161 0.131-0.239 0.193 1.567 1.047 3.447 1.651 5.473 1.651 5.464 0 9.891-4.421 9.891-9.885 0-5.459-4.427-9.885-9.885-9.885zM16 8.235c-0.131 0.099-0.251 0.197-0.375 0.307-2.084 1.813-3.401 4.48-3.401 7.459s1.317 5.645 3.401 7.459c0.12 0.109 0.249 0.213 0.375 0.312 0.131-0.099 0.251-0.203 0.375-0.312 2.084-1.813 3.401-4.48 3.401-7.459s-1.317-5.645-3.401-7.459c-0.12-0.109-0.244-0.208-0.375-0.307z"></path>
            </svg>
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="fill-current w-14 h-14"
            >
              <path d="M7.188 0.005l6.333 17.948v-0.010l0.5 1.411c2.786 7.88 4.281 12.104 4.286 12.109 0.005 0 0.427 0.026 0.938 0.057 1.542 0.063 3.453 0.24 4.901 0.411 0.333 0.042 0.62 0.052 0.641 0.042l-6.859-19.453-3.234-9.135c-0.609-1.734-1.13-3.208-1.156-3.266l-0.042-0.12h-6.302zM18.531 0.016l-0.016 7.073-0.010 7.078-0.583-1.646-0.75 15.745c0.74 2.089 1.135 3.203 1.141 3.208s0.427 0.036 0.932 0.057c1.547 0.068 3.453 0.24 4.906 0.417 0.333 0.036 0.625 0.052 0.641 0.036 0.021-0.010 0.026-7.224 0.026-16.010l-0.010-15.958zM7.188 0.005v15.984c0 8.792 0.010 15.995 0.021 16.005s0.552-0.042 1.208-0.115c0.651-0.083 1.557-0.177 2.010-0.214 0.693-0.068 2.76-0.203 3-0.203 0.068 0 0.073-0.359 0.083-6.771l0.010-6.776 0.505 1.417 0.177 0.5 0.76-15.734-0.255-0.729-1.214-3.365z"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Steps Section  */}
      <div>
        <div className="p-6  dark:bg-violet-400 dark:text-gray-900">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <h2 className="text-center text-6xl tracking-tighter font-bold text-centers">
                Buy Product
              </h2>
            </div>
            <div className="text-center">
              <p className="text-3xl text-gray-400 mt-5">In 4 Easy Steps</p>
            </div>
          </div>
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
              <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
                <div className="flex items-center mb-1">
                  <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-primary">
                    1
                  </span>
                  <p className="text-lg font-semibold sm:text-base">
                    Create Your Account
                  </p>
                </div>
                <p className="text-sm text-gray-900">
                  Create Your Account By Email Password Or Login By Google
                  Account
                </p>
              </div>
              <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
                <div className="flex items-center mb-1">
                  <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded bg-yellow-400">
                    2
                  </span>
                  <p className="text-lg font-semibold sm:text-base">
                    Browse items by category
                  </p>
                </div>
                <p className="text-sm text-gray-900">
                  Browse items by category And Book Your Product
                </p>
              </div>
              <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
                <div className="flex items-center mb-1">
                  <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded md:text-teal-900 bg-purple-400 md:bg-teal-accent-400">
                    3
                  </span>
                  <p className="text-lg font-semibold sm:text-base">Pay</p>
                </div>
                <p className="text-sm text-gray-900">
                  Pay By Our Secure Payment System . With Visa Card, Master Card
                  , Google Card, Discovery Card, or by Any International Online
                  Banking Card
                </p>
              </div>
              <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
                <div className="flex items-center mb-1">
                  <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded md:text-white bg-teal-400 md:bg-deep-purple-accent-400">
                    4
                  </span>
                  <p className="text-lg font-semibold sm:text-base">
                    Go to Meeting Location
                  </p>
                </div>
                <p className="text-sm text-gray-900">
                  Go to Meeting Location & Verify The Product And After Geting
                  The Product In Hand Please Feel Free To Add A review
                </p>
              </div>
            </div>
            <div className="relative md:col-span-2 lg:col-span-2">
              <img
                className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
                src="https://betacom5.web.app/static/media/e-commerce-online-shopping-concept-attractive-caucasian-woman-paying-purchase-internet-holding-smartphone-credit-card-red-background.5ef2a454b7b2b471ccbb.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
