import React, { useEffect } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import Title from '../../../components/Title';
import RoundIcon from '../../../components/RoundIcon';
import {
  productsText,
  productsTitle,
  productsItems,
  promotionalItems,
  promotionalText,
  editorialItems,
  editorialText,
  commercialItems,
  commercialText,
} from '../../../lang';
import {
  Container,
  SubTitle,
  IconsList,
  Content,
  Header,
  Button,
} from './styles';
import {
  background1 as promotional,
  background2 as editorial,
  background3 as commercial,
} from '../../../assets/products';
import { useLoadScreen } from '../../../hooks/load';

interface ProductsItems {
  text: string;
  icon: string;
  width: number;
  mobileWidth: number;
}

const getProductItems = (
  products: ProductsItems[],
  itemsPerLine: number,
  page?: number,
): any[] => {
  const productsItemsRows: any[] = [];
  let rowItems: any[] = [];

  products.forEach((productsItem, index) => {
    rowItems.push(
      <>
        <span />
        <div>
          <RoundIcon width={70}>
            <img
              src={productsItem.icon}
              width={productsItem.mobileWidth}
              alt="produto ícone"
            />
          </RoundIcon>
          <p>{productsItem.text}</p>
        </div>
      </>,
    );

    if ((index + 1) % itemsPerLine === 0 || index + 1 === products.length) {
      productsItemsRows.push(<IconsList page={page}>{rowItems}</IconsList>);
      rowItems = [];
    }
  });

  return productsItemsRows;
};

const Products: React.FC = () => {
  const { addLoadScreen, removeLoadScreen } = useLoadScreen();

  useEffect(() => {
    addLoadScreen(3);
  }, [addLoadScreen]);

  return (
    <Container>
      <Header>
        <Title>{productsTitle}</Title>
      </Header>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Content className="page0">
                <SubTitle>{productsText}</SubTitle>
                {getProductItems(productsItems, 4, 0)}
              </Content>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ zIndex: 3 }}>
          <Card.Header>
            <Accordion.Toggle as={Button} eventKey="1">
              Promocional
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Content page={1} className="page1">
                <p>{promotionalText}</p>
                {getProductItems(promotionalItems, 4, 1)}
                <img
                  className="background"
                  src={promotional}
                  alt="plano de fundo"
                  onLoad={() => removeLoadScreen('products1')}
                />
              </Content>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ zIndex: 2 }}>
          <Card.Header>
            <Accordion.Toggle as={Button} eventKey="2">
              Editorial
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Content page={2} className="page2">
                <p>{editorialText}</p>
                {getProductItems(editorialItems, 2, 2)}
                <img
                  className="background"
                  src={editorial}
                  alt="plano de fundo"
                  onLoad={() => removeLoadScreen('products2')}
                />
              </Content>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ zIndex: 1 }}>
          <Card.Header>
            <Accordion.Toggle as={Button} eventKey="3">
              Comercial
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <Content page={3} className="page3">
                <p>{commercialText}</p>
                {getProductItems(commercialItems, 4, 3)}
                <img
                  className="background"
                  src={commercial}
                  alt="plano de fundo"
                  onLoad={() => removeLoadScreen('products3')}
                />
              </Content>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default Products;
