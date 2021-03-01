import React from 'react';

import { Container } from './styles';

interface RoundIconProps {
  width: number;
}

const RoundIcon: React.FC<RoundIconProps> = ({ children, width }) => {
  return <Container width={width}>{children}</Container>;
};

export default RoundIcon;
