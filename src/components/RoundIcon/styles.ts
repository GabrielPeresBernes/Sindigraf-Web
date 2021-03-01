import styled from 'styled-components';

interface ContainerProps {
  width: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: #f0f0f5;
  min-width: ${props => props.width}px;
  min-height: ${props => props.width}px;
  max-width: ${props => props.width}px;
  max-height: ${props => props.width}px;
  color: rgba(0, 0, 0, 0.87);
`;
