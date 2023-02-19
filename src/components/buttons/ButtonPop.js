import classes from "../../main.module.css";

const ButtonPop = (props) => {
  const { btnText } = props;

  return (
    <button onClick={props.onClick} className={classes["button-more"]}>
      {btnText}
    </button>
  );
};

export default ButtonPop;
