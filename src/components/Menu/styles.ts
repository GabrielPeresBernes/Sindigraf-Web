import styled, { css } from 'styled-components';

interface NavigationProps {
  isVisible: boolean;
}

interface ButtonProps {
  active?: boolean | undefined;
}

export const NavigationDesktop = styled.nav<NavigationProps>`
  background-color: #fcfcfc;
  padding: 20px 24px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 4;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: all 0.3s ease;

  img {
    width: 200px;
  }

  div {
    color: rgba(0, 0, 0, 0.87);
    font-size: 19px;
    margin-left: auto;
  }
`;

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  transition: all 0.2s ease-in;
  border: 0;
  background: transparent;
  text-transform: uppercase;

  ${props =>
    props.active &&
    css`
      color: #000;
      font-weight: 500;
    `}

  & + button {
    margin-left: 53px;
  }

  &:hover {
    color: #000;
    font-weight: 500;
  }
`;

export const NavigationMobile = styled.div<NavigationProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  z-index: 4;
  transition: all 0.3s ease;
  background-color: #fcfcfc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 0;

  nav {
    padding: 28px ${props => props.theme.paddingLeftRight} 0
      ${props => props.theme.paddingLeftRight};
    border: 0;
  }

  .navbar-collapse {
    margin: 0 -${props => props.theme.paddingLeftRight};
    padding: 10px ${props => props.theme.paddingLeftRight} 0
      ${props => props.theme.paddingLeftRight};
    border-top: 1px solid rgba(0, 0, 0, 0.5);
  }

  .nav-link {
    color: rgba(0, 0, 0, 0.87) !important;
    font-size: 22px;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 28px;

  img {
    width: 156px;
  }

  a {
    padding: 0;
  }

  button {
    border: 0;
    padding: 0;

    span {
      width: 36px;
      height: 36px;
    }
  }
`;
