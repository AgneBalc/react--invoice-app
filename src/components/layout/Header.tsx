import {
  HeaderContainer,
  Logo,
  ThemeButton,
  AvatarContainer,
  AvatarImageHolder,
} from "./styles/Header.styles";
import logo from "../../assets/logo.svg";
import { ReactComponent as IconMoon } from "../../assets/icon-moon.svg";
import { ReactComponent as IconSun } from "../../assets/icon-sun.svg";
import Avatar from "../../assets/image-avatar.jpg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { toggleTheme } from "../../app/theme-slice";

const Header = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Invoice App logo" />
      <ThemeButton
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        {theme === "light" ? <IconMoon /> : <IconSun />}
      </ThemeButton>
      <AvatarContainer>
        <AvatarImageHolder>
          <img src={Avatar} alt="" />
        </AvatarImageHolder>
      </AvatarContainer>
    </HeaderContainer>
  );
};

export default Header;
