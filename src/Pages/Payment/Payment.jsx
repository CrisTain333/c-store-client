import React from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transactionId = query.get("transactionId");
  console.log(transactionId);

  return (
    <div>
      <p>Payment page</p>
    </div>
  );
};

export default Payment;
