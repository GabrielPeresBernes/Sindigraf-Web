import React from 'react';

import { Text, Divider } from './styles';

interface TitleProps {
  black?: boolean;
  alt?: boolean;
}

const Title: React.FC<TitleProps> = ({ children, black, alt }) => {
  return (
    <>
      <Text black={black} alt={alt}>
        <span>{children}</span>
      </Text>
      <Divider black={black} alt={alt}>
        <div />
        <hr />
      </Divider>
    </>
  );
};

export default Title;
