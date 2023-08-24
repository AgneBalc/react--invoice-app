import Logo from "../../assets/logo.svg";
import { ReactComponent as IconMoon } from "../../assets/icon-moon.svg";
import Avatar from "../../assets/image-avatar.jpg";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { toggleTheme } from "../../app/theme-slice";

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header>
      <img src={Logo} alt="Invoice App logo" />
      <nav>
        <ul className="actionBar">
          <li
            className="themeIcon"
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            <IconMoon />
          </li>
          <li className="avatarIcon">
            <img src={Avatar} alt="avatar image" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
