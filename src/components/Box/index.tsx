import React from 'react';

import { Frame } from './styles';

interface BoxProps {
  item: number;
}

const Box: React.FC<BoxProps> = ({ item, children }) => {
  return (
    <Frame item={item}>
      <span>{children}</span>
    </Frame>
  );
};

export default Box;
