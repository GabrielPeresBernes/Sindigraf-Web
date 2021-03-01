import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import logo from '../../assets/load/logo.png';

import { Container, Logo, Animation } from './styles';

interface LoadScreenProps {
  show: boolean;
}

const LoadScreen: React.FC<LoadScreenProps> = ({ show }) => {
  const refFirst = useRef(null);
  const refSecond = useRef(null);
  const refThird = useRef(null);
  const refFourth = useRef(null);

  useEffect(() => {
    const duration = 0.9;

    const first = gsap.timeline({ repeat: -1 });

    first
      .fromTo(
        refFirst.current,
        { opacity: 0, duration },
        { opacity: 1, duration },
      )
      .to(refFirst.current, { opacity: 0, duration })
      .fromTo(
        refSecond.current,
        { opacity: 0, duration },
        { opacity: 1, duration },
      )
      .to(refSecond.current, { opacity: 0, duration })
      .fromTo(
        refThird.current,
        { opacity: 0, duration },
        { opacity: 1, duration },
      )
      .to(refThird.current, { opacity: 0, duration })
      .fromTo(
        refFourth.current,
        { opacity: 0, duration },
        { opacity: 1, duration },
      )
      .to(refFourth.current, { opacity: 0, duration });
  }, []);

  return (
    <Container show={show}>
      <Logo src={logo} />
      <Animation>
        <div id="first" ref={refFirst} />
        <div id="second" ref={refSecond} />
        <div id="third" ref={refThird} />
        <div id="fourth" ref={refFourth} />
      </Animation>
    </Container>
  );
};

export default LoadScreen;
