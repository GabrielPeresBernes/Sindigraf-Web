import styled, { css } from 'styled-components';

interface TitleProps {
  black?: boolean;
  alt?: boolean;
}

export const Text = styled.div<TitleProps>`
  font-family: 'BrixSansBold';
  font-size: 36px;
  line-height: 45px;
  text-transform: uppercase;
  color: ${props => (props.black ? 'rgba(0, 0, 0, 0.87)' : '#fff')};
  width: 100%;
  margin-bottom: 16px;

  span {
    ${props =>
      props.alt &&
      css`
        margin-left: auto;

        @media (max-width: 840px) {
          margin-left: 0;
        }
      `};
  }

  @media (min-width: 1680px) {
    font-size: 50px;
  }
`;

export const Divider = styled.div<TitleProps>`
  display: flex;
  align-items: center;
  width: 100%;

  div {
    width: 81px;
    height: 10px;
    background: #ffdd0e;
    visibility: ${props => (props.alt ? 'hidden' : 'visible')} !important;

    @media (max-width: 840px) {
      display: ${props => (props.alt ? 'none' : 'block')} !important;
    }
  }

  hr {
    width: 100%;
    background: ${props => (props.black ? 'rgba(0, 0, 0, 0.87)' : '#fff')};
  }
`;
