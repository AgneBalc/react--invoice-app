import { styled } from "styled-components";

const StyledHeader = styled.header`
  width: 6.4375rem;
  height: 100dvh;
  background-color: #373b53;
  position: fixed;
  border-radius: 0px 1.25rem 1.25rem 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
  .actionBar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    .themeIcon {
      color: #858bb2;
      &:hover {
        color: #fff;
      }
    }
    .avatarIcon {
      border-top: 1px solid rgb(73, 78, 110);
      padding-top: 1.5rem;
      width: 6.4375rem;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
      }
    }
  }
`;

export default StyledHeader;
