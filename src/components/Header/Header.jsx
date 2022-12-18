import classes from "./Header.module.scss";
import logo from "../../asset/Logo.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
