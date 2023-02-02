import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const { data: cart = [], refetch } = useQuery({
    queryKey: ["userCart", user?.email],
    queryFn: async () => {
      let res = await fetch(`http://localhost:5000/order/${user?.email}`);
      let data = await res.json();
      return data;
    },
  });

  return (
    <productContext.Provider value={{ refetch, cart }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
