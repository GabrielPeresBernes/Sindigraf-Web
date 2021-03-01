import styled, { css } from 'styled-components';

interface ContentProps {
  page?: number;
}

interface IconsListProps {
  page?: number;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background: #3d3d4d;
  color: #fff;
  font-family: 'BrixSansBold';
  font-size: 28px;
  text-transform: uppercase;
  border: 0;
  padding: 12px 0 12px 19px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transform: perspective(1px) translateZ(0);
  position: relative;
  transition-property: color;
  transition-duration: 0.3s;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffdd0e;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover,
  &:focus,
  &:active {
    color: rgba(0, 0, 0, 0.87);
  }

  &:hover:before,
  &:focus:before,
  &:active:before {
    transform: scaleX(1);
  }
`;

export const Header = styled.div`
  padding: 40px ${props => props.theme.paddingLeftRight} 30px
    ${props => props.theme.paddingLeftRight};
  background: rgb(33, 33, 33);
`;

export const Content = styled.div<ContentProps>`
  overflow: hidden;
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: ${props => props.theme.paddingLeftRight};
  padding-right: ${props => props.theme.paddingLeftRight};
  font-weight: 500;
  font-size: 20px;
  text-align: justify;

  &:before {
    content: '';
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fcfcfc;
    ${props =>
      props.page === 1 &&
      css`
        background: #03516a !important;
      `};
    ${props =>
      props.page === 2 &&
      css`
        background: #650031 !important;
      `};
    ${props =>
      props.page === 3 &&
      css`
        background: #656100 !important;
      `};
  }

  img.background {
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    opacity: 0.13;
  }
`;

export const SubTitle = styled.div`
  width: 100%;
  color: rgba(0, 0, 0, 0.87);
  font-size: 22px;
  text-transform: uppercase;
  font-family: 'BrixSansBold';
  text-align: center;
`;

export const IconsList = styled.div<IconsListProps>`
  color: ${props => (props.page ? '#fff' : 'rgba(0, 0, 0, 0.87)')};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  span:first-child {
    width: 0;
  }

  span {
    width: 100%;
    max-width: 16px;
  }

  & {
    margin-top: 40px;
  }

  & + & {
    margin-top: 20px !important;
  }

  p {
    text-align: center;
    max-width: 70px;
    font-weight: 500;
    font-size: 12px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
