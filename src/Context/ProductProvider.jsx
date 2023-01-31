import { createContext, useState } from "react";

export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [productCart, setProductCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  return (
    <productContext.Provider value={{ productCart, setProductCart }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;