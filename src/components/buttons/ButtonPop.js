import classes from "../../main.module.css";

const ButtonPop = (props) => {
  const { btnText } = props;

  return (
    // <button onClick={props.onClick} className={classes["button-more"]}>
    //   {btnText}
    // </button>
    <button onClick={props.onClick} className={classes["animated-button"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {btnText}
    </button>
  );
};

export default ButtonPop;
