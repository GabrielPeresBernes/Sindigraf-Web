import React, { useEffect, useRef } from 'react';

import { Container, Logo, Stamp, Title, Button, Background } from './styles';

import { useLoadScreen } from '../../../hooks/load';
import { homeTitle, homeButton } from '../../../lang';
import { logo, stamp, background } from '../../../assets/home';
import scrollToElement from '../../../utils/scrollToElement';

interface HomeProps {
  refAboutUs: React.MutableRefObject<null>;
}

const Home: React.FC<HomeProps> = ({ refAboutUs }) => {
  const { addLoadScreen, removeLoadScreen } = useLoadScreen();
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    addLoadScreen(3);
  }, [addLoadScreen]);

  useEffect(() => {
    video.current?.addEventListener('loadeddata', () => {
      if (video.current?.readyState && video.current?.readyState >= 3)
        removeLoadScreen('home1');
    });
  }, [removeLoadScreen, video]);

  return (
    <Container>
      <div>
        <Logo src={logo} onLoad={() => removeLoadScreen('home2')} />
        <Stamp src={stamp} onLoad={() => removeLoadScreen('home3')} />
        <Title>{homeTitle}</Title>
        <Button
          className="hvr-sweep-to-right"
          onClick={() => scrollToElement(refAboutUs)}
        >
          {homeButton}
        </Button>
      </div>
      <Background muted loop autoPlay src={background} ref={video} />
    </Container>
  );
};

export default Home;
