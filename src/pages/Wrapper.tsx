import classes from "./Wrapper.module.css";
const Wrapper: React.FC<{ compact: boolean }> = (props) => {
  return (
    <div
      className={props.compact ? classes["wrapper-compact"] : classes.wrapper}
    >
      {props.children}
    </div>
  );
};
export default Wrapper;
