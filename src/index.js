import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductProvider from "./Context/ProductProvider";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ProductProvider>
);
