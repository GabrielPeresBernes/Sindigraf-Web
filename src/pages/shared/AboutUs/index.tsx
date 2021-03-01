import React, { useEffect } from 'react';

import { Icon } from '@iconify/react';
import arrowDown from '@iconify/icons-mdi/arrow-down';

import Title from '../../../components/Title';
import scrollToElement from '../../../utils/scrollToElement';
import { Container, Background, Content, Button } from './styles';

import { aboutUsButton, aboutUsText, aboutUsTitle } from '../../../lang';
import background from '../../../assets/aboutUs/background.png';
import { useLoadScreen } from '../../../hooks/load';

interface AboutUsProps {
  refProducts: React.MutableRefObject<null>;
}
const AboutUs: React.FC<AboutUsProps> = ({ refProducts }) => {
  const { addLoadScreen, removeLoadScreen } = useLoadScreen();

  useEffect(() => {
    addLoadScreen();
  }, [addLoadScreen]);

  return (
    <Container>
      <Background
        src={background}
        onLoad={() => removeLoadScreen('aboutsus1')}
      />
      <Content>
        <Title>{aboutUsTitle}</Title>
        <div>
          {aboutUsText.map(text => (
            <p>{text}</p>
          ))}
        </div>
        <Button onClick={() => scrollToElement(refProducts)}>
          <Icon icon={arrowDown} />
          {aboutUsButton}
        </Button>
      </Content>
    </Container>
  );
};

export default AboutUs;
