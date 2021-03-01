import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  div {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    max-height: 85vh;
  }
`;

export const Background = styled.video`
  position: absolute;
  top: 0;
  right: 0;
  width: 110%;
  z-index: -1;

  @media (max-width: 840px) {
    width: auto;
    height: 100%;
  }
`;

export const Logo = styled.img`
  width: 340px;
  margin-top: 60px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (min-width: 1680px) {
    width: 520px;
    margin-top: 70px;
  }

  @media (max-width: 840px) {
    width: 330px;
  }
`;

export const Stamp = styled.img`
  width: 90px;
  margin-top: 25px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (min-width: 1680px) {
    width: 140px;
  }

  @media (max-width: 840px) {
    width: 85px;
  }
`;

export const Title = styled.p`
  font-size: 34px;
  font-family: 'BrixSansBold';
  margin-top: 70px;
  max-width: 420px;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 1680px) {
    font-size: 46px;
    max-width: 600px;
  }

  @media (max-width: 840px) {
    font-size: 26px;
    max-width: 320px;
  }
`;

export const Button = styled.button`
  margin-top: 40px;
  border: 4px solid #ffdd0e;
  padding: 12px 50px;
  font-size: 18px;
  text-transform: uppercase;
  color: #fff;
  background-color: transparent;
  position: relative;

  transform: perspective(1px) translateZ(0);
  transition-property: color;
  transition-duration: 0.3s;

  @media (min-width: 1680px) {
    font-size: 26px;
  }

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

  &:hover {
    color: rgba(0, 0, 0, 0.87);
  }

  &:hover:before {
    transform: scaleX(1);
  }
`;
