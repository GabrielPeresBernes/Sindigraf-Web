import styled, { css } from 'styled-components';

interface ContentProps {
  show: boolean;
  page?: number;
}

interface IconsListProps {
  page?: number;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  overflow: hidden;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 60px;
  padding-left: calc(40% + ${props => props.theme.paddingLeftRight});
  padding-right: ${props => props.theme.paddingLeftRight};
  font-weight: 500;
  font-size: 22px;
  text-align: justify;
  position: absolute;
  top: 0;
  transition: margin 1s ease-out;
  margin-left: ${props => (props.show ? '0' : '100%')};
  height: 100%;
  width: 100%;

  @media (min-width: 1680px) {
    font-size: 34px;
  }

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
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    opacity: 0.13;
  }
`;

export const Menu = styled.div`
  z-index: 1;
  max-width: 40%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  background: rgb(33, 33, 33);
  padding-top: 80px;
  padding-bottom: 240px;

  div.title {
    margin-left: 24px;
    margin-bottom: 120px;
    width: 80%;
  }
`;

export const MenuItem = styled.button`
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

  @media (min-width: 1680px) {
    font-size: 36px;
  }

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

export const SubTitle = styled.span`
  color: rgba(0, 0, 0, 0.87);
  font-size: 30px;
  text-transform: uppercase;
  font-family: 'BrixSansBold';

  @media (min-width: 1680px) {
    font-size: 34px;
  }
`;

export const IconsList = styled.div<IconsListProps>`
  color: ${props => (props.page ? '#fff' : 'rgba(0, 0, 0, 0.87)')};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  & {
    margin-top: 30px;
  }

  & + & {
    margin-top: 10px !important;
  }

  p {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 90px;
    font-weight: 500;
    font-size: 15px;

    @media (min-width: 1680px) {
      font-size: 19px;
    }
  }

  span:first-child {
    width: 0;
  }

  span {
    width: 100%;
    max-width: 22px;

    ${props =>
      props.page === 1 &&
      css`
        max-width: 61px !important;
      `};
    ${props =>
      props.page === 2 &&
      css`
        max-width: 160px !important;
      `};
    ${props =>
      props.page === 3 &&
      css`
        max-width: 100px !important;
      `};
  }
`;

export const AltTitle = styled.div`
  font-family: 'BrixSansBold';
  font-size: 36px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 30px;
  text-align: left;
  margin-left: auto;

  @media (min-width: 1680px) {
    font-size: 40px;
  }

  hr {
    margin-top: 8px;
    background: #fff;
  }
`;
