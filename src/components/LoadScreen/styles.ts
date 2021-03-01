import styled from 'styled-components';

interface ContainerProps {
  show: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #3c3c4b;
  min-width: 100%;
  min-height: 100%;
  z-index: 1000;
  position: fixed;
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s;
`;

export const Logo = styled.img`
  width: 428px;
  margin-bottom: 16px;

  @media (max-width: 840px) {
    width: 328px;
    margin-bottom: 12px;
  }
`;

export const Animation = styled.div`
  width: 410px;
  height: 8px;
  display: flex;

  @media (max-width: 840px) {
    width: 310px;
  }

  div {
    width: 100%;
    height: 100%;
  }

  #first {
    background: #00aeef;
  }

  #second {
    background: #ec008c;
  }

  #third {
    background: #fff200;
  }

  #fourth {
    background: #000000;
  }
`;
