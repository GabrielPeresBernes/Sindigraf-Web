import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { NavigationDesktop, NavigationMobile, Button, Header } from './styles';

import Logo from '../../assets/menu/logo.png';
import scrollToElement from '../../utils/scrollToElement';

interface MenuProps {
  pages: {
    refHome: React.MutableRefObject<null | HTMLElement>;
    refAboutUs: React.MutableRefObject<null | HTMLElement>;
    refProducts: React.MutableRefObject<null | HTMLElement>;
    refContactUs: React.MutableRefObject<null | HTMLElement>;
  };
  mobile?: boolean;
}
const Menu: React.FC<MenuProps> = ({ pages, mobile }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const menuItems = [
    { name: 'Home', link: '#', ref: pages.refHome },
    {
      name: 'A Empresa',
      link: '#',
      ref: pages.refAboutUs,
    },
    {
      name: 'Nossos Produtos',
      link: '#',
      ref: pages.refProducts,
    },
    {
      name: 'Contato',
      link: '#',
      ref: pages.refContactUs,
    },
  ];

  document.addEventListener('scroll', () => {
    const { scrollY } = window;
    setScrollPosition(scrollY);
  });

  return (
    <>
      {!mobile ? (
        <NavigationDesktop isVisible={scrollPosition > 0}>
          <img src={Logo} alt="logo" />
          <div>
            {menuItems.map(menuItem => (
              <Button onClick={() => scrollToElement(menuItem.ref)}>
                {menuItem.name}
              </Button>
            ))}
          </div>
        </NavigationDesktop>
      ) : (
        <NavigationMobile isVisible={scrollPosition > 0}>
          <Navbar collapseOnSelect expand="lg">
            <Header>
              <Navbar.Brand href="#home">
                <img src={Logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Header>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                {menuItems.map(menuItem => (
                  <Nav.Link
                    href="#"
                    onClick={() => scrollToElement(menuItem.ref)}
                  >
                    {menuItem.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </NavigationMobile>
      )}
    </>
  );
};

export default Menu;
