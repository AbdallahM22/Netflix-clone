import React from "react";
import PricingContent from "./PricingContent";


const Pricing = () => {
  const BENIFITS = [
    { id: "1", title: "Unlimited films and tv programmes" },
    { id: "2", title: "Watch on mobile phones and tablets" },
    { id: "3", title: "cancel at anytime" },
    { id: "4", title: "First month completely free" },
    { id: "5", title: "Hd available" },
    { id: "6", title: "Ultra HD" },
  ];
  const firstCardData = BENIFITS.slice(0, 4);
  const secondCardData = BENIFITS.slice(0, 5);
  const thirdCardData = BENIFITS.slice(0, 6);

  return (
    <div className="container mt-5">
      <div className="row pt-5">
        <PricingContent heading='Basic' benifits={firstCardData} price={{monthly: 7.99, yearly: 60}}/>
        <PricingContent heading='Standard' benifits={secondCardData} price={{monthly: 12.99, yearly: 120}}/>
        <PricingContent heading='Premium' benifits={thirdCardData} price={{monthly: 18.99, yearly: 180}}/>
      </div>
    </div>
  );
};

export default Pricing;
