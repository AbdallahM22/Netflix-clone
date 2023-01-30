import React, { useContext, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import classes from "./Pricing.module.css";
import ThemeContext from "./store/theme-context";
import TogglerButton from "./UI/TogglerButton";

const PricingContent = (props) => {
    const ctx = useContext(ThemeContext);
  const [monthly, setMonthly] = useState(true);
  const cardClass = ctx.dark ? classes["card-dark"]: classes["card-light"];
  const headingClass = ctx.dark ? classes["heading-dark"]: classes["heading-light"];
  const spanClass = ctx.dark ? classes["price-dark"]: classes["price-light"];

  const moverClasses = !monthly ? classes.right : "";
  const changePriceHandler = () => {
    setMonthly((prevState) => !prevState);
  };
  return (
    <div className="col-11 col-sm-6 col-md-4 m-auto">
      <div className={`${classes.card} ${cardClass}`}>
        <h2 className={headingClass}>{props.heading}</h2>
        <div className={classes.price}>
          <span className={spanClass}>
            {monthly ? props.price.monthly : props.price.yearly}$
          </span>
          /{monthly ? "Monthly" : "Yearly"}
        </div>
        <ul className={`list-unstyled ${classes.benifits}`}>
          {props.benifits.map((benifit) => (
            <li key={benifit.id}>
              <AiOutlineCheck className={classes.icon} />
              {benifit.title}
            </li>
          ))}
          
        </ul>
        <button className={`btn ${classes.button}`}>Buy Now</button>
        <div className="d-flex justify-content-end mt-2">
          <TogglerButton onClick={changePriceHandler} move={moverClasses} />
        </div>
      </div>
    </div>
  );
};

export default PricingContent;
