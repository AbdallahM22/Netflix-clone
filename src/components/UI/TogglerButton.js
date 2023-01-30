import classes from "./TogglerButton.module.css";


const TogglerButton = (props) => {
  
  const moverClasses = props.move;

  return (
    <div className={classes.toggler} onClick={props.onClick}>
      <span className={`${classes["toggler-mover"]} ${moverClasses}`} />
    </div>
  );
};

export default TogglerButton;
