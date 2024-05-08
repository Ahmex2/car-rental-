import React from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
      <div className="payment">
        <label className="d-flex align-items-center gap-2">
          <input type="radio" name="paymentMethod" />   Vodafone Cash
        </label>
      </div>

      <div className="payment mt-3">
        <label className="d-flex align-items-center gap-2">
          <input type="radio" name="paymentMethod" /> Etisalat Cash
        </label>
      </div>
      
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label className="d-flex align-items-center gap-2">
          <input type="radio" name="paymentMethod" /> Orange Money
        </label>
        </div>
        
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label className="d-flex align-items-center gap-2">
          <input type="radio" name="paymentMethod" /> Master Card
        </label>
        <img src={masterCard} alt="MasterCard" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label className="d-flex align-items-center gap-2">
          <input type="radio" name="paymentMethod" /> Paypal
        </label>
        <img src={paypal} alt="Paypal" />
      </div>
    </>
  );
};

export default PaymentMethod;