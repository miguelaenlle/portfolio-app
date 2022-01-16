import classes from "./HeaderButton.module.css";
const HeaderButton: React.FC<{
  text: string;
  currentPage: string;
  changePage: (newPage: string) => void;
}> = (props) => {
  const handleClick = () => {
    props.changePage(props.text);
  };
  const currentClass = `${classes.button} ${props.currentPage === props.text && classes.selected}`;
  return (
    
    <button className={currentClass} onClick={handleClick}>
      {props.text}
    </button>
  );
};
export default HeaderButton;
