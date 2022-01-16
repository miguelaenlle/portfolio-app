import Header from "../components/header/Header";
const HeaderWrapper: React.FC<{
  navBackground: string;
  selectedPage: string;
  onSelectPage: (page: string) => void;
}> = (props) => {
  return (
    <div>
      {props.children}
      <Header
        navBackground={props.navBackground}
        selectedPage={props.selectedPage}
        onSelectPage={props.onSelectPage}
      />
    </div>
  );
};
export default HeaderWrapper;
