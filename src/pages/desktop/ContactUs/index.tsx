import React, { useCallback, useEffect } from 'react';
import Icon from '@iconify/react';
import send from '@iconify/icons-mdi/send';
import Swal from 'sweetalert2';

import RoundIcon from '../../../components/RoundIcon';
import Title from '../../../components/Title';
import Box from '../../../components/Box';
import {
  Button,
  Container,
  Banner,
  Contact,
  Form,
  Input,
  TextArea,
  Quote,
  IconsList,
  IconItem,
  Select,
} from './style';

import {
  contactUsTitle,
  contactUsItems,
  requestQuoteTitle,
  requestQuoteItems,
  bannerTitle,
  bannerItems,
} from '../../../lang';
import background1 from '../../../assets/contactUs/background1.png';
import background2 from '../../../assets/contactUs/background2.png';
import { useLoadScreen } from '../../../hooks/load';

const ContactUs: React.FC = () => {
  const handleSubmit = useCallback(ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        Swal.fire({
          icon: 'success',
          title: 'Orçamento enviado com sucesso!',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao enviar orçamento!',
        });
      }
    };
    xhr.send(data);
  }, []);

  const { addLoadScreen, removeLoadScreen } = useLoadScreen();

  useEffect(() => {
    addLoadScreen(2);
  }, [addLoadScreen]);

  return (
    <Container>
      <Banner>
        <div className="background" />
        <img
          src={background1}
          alt="impressora"
          onLoad={() => removeLoadScreen('contact1')}
        />
        <span className="title">{bannerTitle}</span>
        <div className="boxes">
          {bannerItems.map((bannerItem, index) => (
            <Box item={index}>{bannerItem}</Box>
          ))}
        </div>
      </Banner>
      <div>
        <Quote>
          <Title black>{requestQuoteTitle}</Title>
          <Form
            action="https://formspree.io/f/xrgovdjy"
            method="POST"
            onSubmit={handleSubmit}
          >
            <Input type="text" placeholder="Nome" name="nome" />
            <div>
              <Input type="text" placeholder="Email" name="email" />
              <Input type="text" placeholder="Telefone" name="telefone" />
            </div>
            <div>
              <Select>
                <select name="servico">
                  {requestQuoteItems.map(requestQuoteItem => (
                    <option key={requestQuoteItem} value={requestQuoteItem}>
                      {requestQuoteItem}
                    </option>
                  ))}
                </select>
              </Select>
              <Input
                type="text"
                placeholder="Quantidade Desejada"
                name="quantidade"
              />
            </div>
            <TextArea rows={2} placeholder="Mensagem" name="mensagem" />
            <Button>
              <Icon icon={send} />
              Enviar
            </Button>
          </Form>
        </Quote>
        <Contact>
          <img
            src={background2}
            alt="pessoa utilizando celular e computador"
            onLoad={() => removeLoadScreen('contact2')}
          />
          <Title alt>{contactUsTitle}</Title>
          <IconsList>
            {contactUsItems.map(contactUsItem => (
              <IconItem>
                <RoundIcon width={58}>
                  <Icon icon={contactUsItem.icon} width={38} />
                </RoundIcon>
                <div className="content">
                  <span className="title">{contactUsItem.title}</span>
                  <span>{contactUsItem.text}</span>
                </div>
              </IconItem>
            ))}
          </IconsList>
        </Contact>
      </div>
    </Container>
  );
};

export default ContactUs;
