import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import Menu from '../../components/Menu';
import Home from '../shared/Home';
import AboutUs from '../shared/AboutUs';
import Products from './Products';
import ContactUs from './ContactUs';
import WhatsAppButton from '../../components/WhatsAppButton';

import { mobile } from '../../styles/themes';
import LoadScreen from '../../components/LoadScreen';
import { useLoadScreen } from '../../hooks/load';

const Index: React.FC = () => {
  const { isLoading } = useLoadScreen();

  const refHome = useRef(null);
  const refAboutUs = useRef(null);
  const refProducts = useRef(null);
  const refContactUs = useRef(null);

  return (
    <ThemeProvider theme={mobile}>
      <LoadScreen show={isLoading} />
      <Menu mobile pages={{ refHome, refAboutUs, refProducts, refContactUs }} />
      <WhatsAppButton />
      <section ref={refHome}>
        <Home refAboutUs={refAboutUs} />
      </section>
      <section ref={refAboutUs}>
        <AboutUs refProducts={refProducts} />
      </section>
      <section ref={refProducts}>
        <Products />
      </section>
      <section ref={refContactUs}>
        <ContactUs />
      </section>
    </ThemeProvider>
  );
};

export default Index;
