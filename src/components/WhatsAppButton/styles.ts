import styled from 'styled-components';

interface ButtonProps {
  isVisible: boolean;
}

export const Button = styled.a<ButtonProps>`
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  position: fixed;
  bottom: 12px;
  right: 18px;
  background: #0f9d58;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  z-index: 4;
  color: #fff;

  &:hover,
  &:active {
    color: #fff;
  }

  @media (max-width: 840px) {
    bottom: 10px;
    right: 10px;
  }

  @media (min-width: 1680px) {
    width: 80px;
    height: 80px;

    svg {
      width: 55px;
      height: 55px;
    }
  }
`;
