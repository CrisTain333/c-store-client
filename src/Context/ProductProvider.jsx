import { createContext } from "react";

export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const name = {
    Cristain: "22",
  };

  return (
    <productContext.Provider value={{ name }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
