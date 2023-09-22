import { styled } from "styled-components";
import { breakpoints } from "../../../styles/globalStyles";

const HeaderContainer = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme.header.bg};
  display: flex;
  z-index: 8000;
  @media screen and (min-width: ${breakpoints.desktop}) {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 6.4375rem;
    height: 100%;
    border-radius: 0 1.25rem 1.25rem 0;
  }
`;

const Logo = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 100%;
    height: auto;
  }
`;

const ThemeButton = styled.button`
  width: 1.875rem;
  height: 1.875rem;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 1.4375rem;
  align-self: center;
  color: ${({ theme }) => theme.themeToggleButton.color};
  &:hover {
    color: ${({ theme }) => theme.themeToggleButton.hover.color};
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    margin: 0 auto;
    position: absolute;
    bottom: 117px;
    left: 0;
    right: 0;
  }
`;

const AvatarContainer = styled.div`
  padding: 0 1.5rem;
  display: flex;
  border-left: 1px solid #494e6e;

  @media screen and (min-width: ${breakpoints.desktop}) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem;
    border-left: none;
    border-top: 1px solid #494e6e;
    margin: 0;
  }
`;

const AvatarImageHolder = styled.div`
  margin: auto;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export {
  HeaderContainer,
  Logo,
  ThemeButton,
  AvatarContainer,
  AvatarImageHolder,
};
