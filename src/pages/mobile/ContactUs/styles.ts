import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }
`;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  padding: 40px ${props => props.theme.paddingLeftRight};
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div.boxes {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div + div {
      margin-top: 30px;
    }
  }

  div.background {
    margin: -40px -${props => props.theme.paddingLeftRight};
    background: #03516a;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -2;
  }

  span.title {
    font-weight: bold;
    font-size: 32px;
    line-height: 45px;
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
    height: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    z-index: -1;
  }
`;

export const Quote = styled.div`
  position: relative;
  width: 100%;
  background: #fcfcfc;
  padding: 40px ${props => props.theme.paddingLeftRight};
  display: flex;
  flex-direction: column;
`;

export const Contact = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px ${props => props.theme.paddingLeftRight} 80px
    ${props => props.theme.paddingLeftRight};

  img {
    opacity: 0.18;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;

export const IconsList = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
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
    margin-left: 15px;
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
  margin-top: 40px;

  input + input {
    margin-top: 5px;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
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
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;

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
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
  padding: 14px;
  border: 0;
  border-radius: 4px;
  background: rgba(33, 33, 33, 0.08);
  margin-top: 5px;
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
