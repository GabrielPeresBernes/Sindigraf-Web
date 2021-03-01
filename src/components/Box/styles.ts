import styled, { css } from 'styled-components';

interface FrameProps {
  item: number;
}

export const Frame = styled.div<FrameProps>`
  border: 4px solid #ffdd0e;
  padding: 10px 24px;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 1680px) {
    font-size: 26px;
  }

  @media (max-width: 840px) {
    font-size: 26px;
    width: 100%;

    span {
      margin-left: auto;
      margin-right: auto;
    }
  }

  ${props =>
    props.item === 0 &&
    css`
      width: 200px;

      @media (min-width: 1680px) {
        width: 240px;
      }

      @media (max-width: 840px) {
        span {
          max-width: 180px;
        }
      }
    `}

  ${props =>
    props.item === 1 &&
    css`
      width: 250px;

      @media (min-width: 1680px) {
        width: 280px;
      }
    `}

    ${props =>
    props.item === 2 &&
    css`
      width: 220px;

      @media (min-width: 1680px) {
        width: 240px;
      }

      @media (max-width: 840px) {
        span {
          max-width: 200px;
        }
      }
    `}
`;
