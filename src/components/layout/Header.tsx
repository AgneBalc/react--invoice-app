import Logo from "../../assets/logo.svg";
import { ReactComponent as IconMoon } from "../../assets/icon-moon.svg";
import Avatar from "../../assets/image-avatar.jpg";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Invoice App logo" />
      <nav>
        <ul className="actionBar">
          <li className="themeIcon">
            <a href="">
              <IconMoon />
            </a>
          </li>
          <li className="avatarIcon">
            <a href="">
              <img src={Avatar} alt="avatar image" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
