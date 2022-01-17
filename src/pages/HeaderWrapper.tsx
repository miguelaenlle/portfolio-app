import Header from "../components/header/Header";
const HeaderWrapper: React.FC<{
  navBackground: string;
  selectedPage: string;
  onSelectPage: (page: string) => void;
  windowDimensions: { [key: string]: number };
}> = (props) => {
  return (
    <div>
      {props.children}
      {(props.windowDimensions.width > 1000) && (
        <Header
          navBackground={props.navBackground}
          selectedPage={props.selectedPage}
          onSelectPage={props.onSelectPage}
          windowDimensions={props.windowDimensions}
        />
      )}
    </div>
  );
};
export default HeaderWrapper;
