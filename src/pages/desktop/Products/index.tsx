import React, { useEffect, useState } from 'react';

import Title from '../../../components/Title';
import RoundIcon from '../../../components/RoundIcon';
import {
  productsButtons,
  productsText,
  productsTitle,
  productsItems,
  promotionalItems,
  promotionalText,
  promotionalTitle,
  editorialItems,
  editorialText,
  editorialTitle,
  commercialItems,
  commercialText,
  commercialTitle,
} from '../../../lang';
import {
  Container,
  MenuItem,
  SubTitle,
  Menu,
  IconsList,
  Content,
  AltTitle,
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
}

const getProductItems = (
  products: ProductsItems[],
  itemsPerLine: number,
  page: number,
): any[] => {
  const productsItemsRows: any[] = [];
  let rowItems: any[] = [];
  const iconSizes = [95, 85, 115, 95];

  products.forEach((productsItem, index) => {
    rowItems.push(
      <>
        <span />
        <div>
          <RoundIcon width={iconSizes[page]}>
            <img
              src={productsItem.icon}
              width={productsItem.width}
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
  const [page, setPage] = useState(0);

  const { addLoadScreen, removeLoadScreen } = useLoadScreen();

  useEffect(() => {
    addLoadScreen(3);
  }, [addLoadScreen]);

  return (
    <Container>
      <Menu>
        <div className="title">
          <Title>{productsTitle}</Title>
        </div>
        {productsButtons.map((productsButton, index) => (
          <MenuItem
            onClick={() => setPage(index + 1)}
            style={{ zIndex: productsButtons.length - index }}
          >
            {productsButton}
          </MenuItem>
        ))}
      </Menu>
      <Content show={page === 0} className="page0">
        <SubTitle>{productsText}</SubTitle>
        {getProductItems(productsItems, 6, 0)}
      </Content>
      <Content show={page === 1} page={page} className="page1">
        <AltTitle style={{ width: '19vw' }}>
          {promotionalTitle}
          <hr />
        </AltTitle>
        <p>{promotionalText}</p>
        {getProductItems(promotionalItems, 5, 1)}
        <img
          className="background"
          src={promotional}
          alt="plano de fundo"
          onLoad={() => removeLoadScreen('products1')}
        />
      </Content>
      <Content show={page === 2} page={page} className="page2">
        <AltTitle style={{ width: '230px' }}>
          {editorialTitle}
          <hr />
        </AltTitle>
        <p>{editorialText}</p>
        {getProductItems(editorialItems, 2, 2)}
        <img
          className="background"
          src={editorial}
          alt="plano de fundo"
          onLoad={() => removeLoadScreen('products2')}
        />
      </Content>
      <Content show={page === 3} page={page} className="page3">
        <AltTitle style={{ width: '250px' }}>
          {commercialTitle}
          <hr />
        </AltTitle>
        <p>{commercialText}</p>
        {getProductItems(commercialItems, 4, 3)}
        <img
          className="background"
          src={commercial}
          alt="plano de fundo"
          onLoad={() => removeLoadScreen('products3')}
        />
      </Content>
    </Container>
  );
};

export default Products;
