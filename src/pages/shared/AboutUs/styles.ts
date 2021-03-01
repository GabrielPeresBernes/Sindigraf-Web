import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Background = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;

  @media (max-width: 840px) {
    width: auto;
    height: 100%;
    bottom: auto;
    top: 0;
  }
`;

export const Content = styled.div`
  width: 50%;
  background-color: rgba(33, 33, 33, 0.98);
  padding: 70px ${props => props.theme.paddingLeftRight} 200px
    ${props => props.theme.paddingLeftRight};
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  font-size: 18px;

  @media (min-width: 1680px) {
    font-size: 22px;
  }

  @media (max-width: 840px) {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 80px;
  }

  p {
    text-align: justify;
  }

  p:first-child {
    margin-top: 40px;
  }

  p + p {
    margin-top: 25px;
  }
`;

export const Button = styled.button`
  font-size: 18px;
  text-decoration: underline;
  background: transparent;
  border: 0;
  color: #fff;
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-top: 42px;

  @media (min-width: 1680px) {
    font-size: 22px;
  }

  @-webkit-keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  -webkit-animation-name: pulse;
  animation-name: pulse;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;

  svg {
    margin-right: 5px;
  }
`;
