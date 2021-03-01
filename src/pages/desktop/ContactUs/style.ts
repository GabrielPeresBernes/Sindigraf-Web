import styled from 'styled-components';

interface BackgroundProps {
  height?: string;
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }
`;

export const Background = styled.img<BackgroundProps>``;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: ${props => props.theme.paddingLeftRight};
  padding-right: ${props => props.theme.paddingLeftRight};
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div.boxes {
    div + div {
      margin-left: 60px;
    }
  }

  div.background {
    margin-top: -16px;
    margin-left: -${props => props.theme.paddingLeftRight};
    margin-bottom: -16px;
    background: #03516a;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -2;
  }

  span.title {
    font-weight: bold;
    font-size: 32px;
    text-align: center;
    text-transform: uppercase;
    max-width: 180px;

    @media (min-width: 1680px) {
      font-size: 36px;
      max-width: 200px;
    }
  }

  img {
    opacity: 0.1;
    width: 100%;
    position: absolute;
    top: 60%;
    transform: translateY(-40%);
    right: 0;
    z-index: -1;
  }
`;

export const Quote = styled.div`
  position: relative;
  width: 55%;
  background: #fcfcfc;
  padding-left: ${props => props.theme.paddingLeftRight};
  padding-right: ${props => props.theme.paddingLeftRight};
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const Contact = styled.div`
  position: relative;
  width: 45%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-left: ${props => props.theme.paddingLeftRight};
  padding-right: ${props => props.theme.paddingLeftRight};

  img {
    opacity: 0.18;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const IconsList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-left: 140px;
`;

export const IconItem = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 30px;
  }

  div.content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 30px;
  }

  span {
    font-size: 18px;
    line-height: 21px;
    max-width: 290px;
  }

  span.title {
    font-weight: 500;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 30px;

  div {
    margin-top: 10px;

    input + input {
      margin-left: 10px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
  padding: 14px;
  border: 0;
  border-radius: 4px;
  background: rgba(33, 33, 33, 0.08);
`;

export const Select = styled.div`
  border-radius: 4px;
  background: rgba(33, 33, 33, 0.08);
  position: relative;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 0 !important;
  width: 100%;
  margin-right: 10px;
  min-width: 342px;

  select {
    padding: 14px;
    appearance: none;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
    border: 0;
    background: transparent;
    width: 100%;
    height: 100%;
  }

  &::after {
    content: '▼';
    font-size: 14px;
    top: 50%;
    transform: translateY(-50%);
    right: 14px;
    padding: inherit;
    position: absolute;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
  padding: 14px;
  border: 0;
  border-radius: 4px;
  background: rgba(33, 33, 33, 0.08);
  margin-top: 10px;
`;

export const Button = styled.button`
  background: #0f9d58;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 13px 0;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  margin-top: 12px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;

  svg {
    margin-right: 10px;
  }
`;
