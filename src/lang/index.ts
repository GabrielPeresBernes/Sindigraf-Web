import whatsapp from '@iconify/icons-mdi/whatsapp';
import phone from '@iconify/icons-mdi/phone';
import emailOutline from '@iconify/icons-mdi/email-outline';
// import mapMarker from '@iconify/icons-mdi/map-marker';

import {
  cadernos,
  calendarios,
  cardapios,
  cartoes,
  catalogos,
  danfe,
  embalagens,
  envelopes,
  etiquetas,
  flyers,
  folders,
  formularioContinuo,
  jogoAmericano,
  pastas,
  revistas,
  solapas,
} from '../assets/products';

/* Home */
export const homeTitle =
  'Nossa missão é oferecer o melhor serviço para volorizar a sua empresa';

export const homeButton = 'Ver Mais';

/* About Us */
export const aboutUsTitle = 'A Empresa';

export const aboutUsText = [
  'Desde 1975 atudando no mercado, a Sindigraf, é hoje referência e uma das gráficas mais conceituadas na área de impressão off-set plana e digital, atendendo, com primordial qualidade, as melhores empresas do Brasil.',
  'A Sindigraf tem como missão oferecer aos seus clientes a máxima qualidade e o melhor atendimento, valorizando os recursos humanos internos e a tecnoçógia disponível para alcançar o aprimoramento do mercado gráfico.',
  'Buscamos destinar o que há de melhor no mercado ás empresas que buscam valorização e reconhecimento em suas áreas de atuação.',
];

export const aboutUsButton = 'Conheça os Nossos Produtos';

/* Products */
const productItemsIconsMobileWidth = {
  folders: 22,
  revistas: 42,
  catalogos: 41,
  calendarios: 36,
  envelopes: 47,
  pastas: 25,
  flyers: 23,
  cartoes: 51,
  cadernos: 28,
  etiquetas: 35,
  danfe: 25,
  solapas: 42,
  formularioContinuo: 33,
  cardapios: 30,
  jogoAmericano: 41,
  embalagens: 41,
};

export const productsTitle = 'Nossos Produtos';

export const productsButtons = ['Promocional', 'Editorial', 'Comercial'];

export const productsText = 'Atuamos em diversas áreas:';

export const productsItems = [
  {
    text: 'Folders',
    icon: folders,
    width: 31,
    mobileWidth: productItemsIconsMobileWidth.folders,
  },
  {
    text: 'Revistas',
    icon: revistas,
    width: 61 - 5,
    mobileWidth: productItemsIconsMobileWidth.revistas,
  },
  {
    text: 'Catálogos',
    icon: catalogos,
    width: 60 - 5,
    mobileWidth: productItemsIconsMobileWidth.catalogos,
  },
  {
    text: 'Calendários',
    icon: calendarios,
    width: 51 - 5,
    mobileWidth: productItemsIconsMobileWidth.calendarios,
  },
  {
    text: 'Envelopes',
    icon: envelopes,
    width: 67 - 5,
    mobileWidth: productItemsIconsMobileWidth.envelopes,
  },
  {
    text: 'Pastas',
    icon: pastas,
    width: 36 - 5,
    mobileWidth: productItemsIconsMobileWidth.pastas,
  },
  {
    text: 'Flyers',
    icon: flyers,
    width: 33 - 5,
    mobileWidth: productItemsIconsMobileWidth.flyers,
  },
  {
    text: 'Cartões',
    icon: cartoes,
    width: 73 - 5,
    mobileWidth: productItemsIconsMobileWidth.cartoes,
  },
  {
    text: 'Cadernos',
    icon: cadernos,
    width: 41 - 5,
    mobileWidth: productItemsIconsMobileWidth.cadernos,
  },
  {
    text: 'Etiquetas',
    icon: etiquetas,
    width: 50 - 5,
    mobileWidth: productItemsIconsMobileWidth.etiquetas,
  },
  {
    text: 'Danfe',
    icon: danfe,
    width: 36 - 5,
    mobileWidth: productItemsIconsMobileWidth.danfe,
  },
  {
    text: 'Solapas',
    icon: solapas,
    width: 61 - 5,
    mobileWidth: productItemsIconsMobileWidth.solapas,
  },
  {
    text: 'Formulário Contínuo',
    icon: formularioContinuo,
    width: 47 - 5,
    mobileWidth: productItemsIconsMobileWidth.formularioContinuo,
  },
  {
    text: 'Cardápios',
    icon: cardapios,
    width: 44 - 5,
    mobileWidth: productItemsIconsMobileWidth.cardapios,
  },
  {
    text: 'Jogo Americano',
    icon: jogoAmericano,
    width: 60 - 5,
    mobileWidth: productItemsIconsMobileWidth.jogoAmericano,
  },
  {
    text: 'Embalagens',
    icon: embalagens,
    width: 59 - 5,
    mobileWidth: productItemsIconsMobileWidth.embalagens,
  },
];

/* Promotional */
export const promotionalTitle = 'Promocional';

export const promotionalText =
  'Materiais característicamente mais elaborados e requintados que necessitam de acabamento diferenciado e perfeita finalização. Dispomos de um completo suporte de apoio para indicar e identificar a melhor utilização dos recursos no mercado para realizar os projetos idealizados por agências de publicidade, departamentos de marketing e designers.';

export const promotionalItems = [
  {
    text: 'Catálogos',
    icon: pastas,
    width: 36 - 5,
    mobileWidth: productItemsIconsMobileWidth.pastas,
  },
  {
    text: 'Cartazes',
    icon: revistas,
    width: 61 - 5,
    mobileWidth: productItemsIconsMobileWidth.revistas,
  },
  {
    text: 'Folders',
    icon: folders,
    width: 31,
    mobileWidth: productItemsIconsMobileWidth.folders,
  },
  {
    text: 'Certificados',
    icon: danfe,
    width: 36 - 5,
    mobileWidth: productItemsIconsMobileWidth.danfe,
  },
  {
    text: 'Cartões Postais',
    icon: cartoes,
    width: 73 - 5,
    mobileWidth: productItemsIconsMobileWidth.cartoes,
  },
  {
    text: 'Cadernos',
    icon: cadernos,
    width: 41 - 5,
    mobileWidth: productItemsIconsMobileWidth.cadernos,
  },
  {
    text: 'Calendários',
    icon: calendarios,
    width: 51 - 5,
    mobileWidth: productItemsIconsMobileWidth.calendarios,
  },
];

/* Editorial */
export const editorialTitle = 'Editorial';

export const editorialText =
  'Nesta área atendemos as empresas que publicam, por intermédio de agências de publicidade ou marketing interno, informativos culturais, institucionais, educacionais ou períodicos. Nestes casos atuamos com agilidad e rapidez na divulgação de suas informações, além de esquematizar estregas programadas.';

export const editorialItems = [
  {
    text: 'Boletins Informativos',
    icon: danfe,
    width: 50 - 5,
    mobileWidth: productItemsIconsMobileWidth.danfe,
  },
  {
    text: 'Jornais Periódicos',
    icon: revistas,
    width: 71 - 5,
    mobileWidth: productItemsIconsMobileWidth.revistas,
  },
];

/* Commercial */
export const commercialTitle = 'Comercial';

export const commercialText =
  'Desenvolver ou reproduzir formulários que se façam necessários para o processo organizacional dentro das empresas. Os trabalhos comerciais devem garantir o bom andamento das informações entre os órgãos envolvidos.';

export const commercialItems = [
  {
    text: 'Cartões de Visita',
    icon: cartoes,
    width: 73 - 5,
    mobileWidth: productItemsIconsMobileWidth.cartoes,
  },
  {
    text: 'Papel Carta',
    icon: danfe,
    width: 36 - 5,
    mobileWidth: productItemsIconsMobileWidth.danfe,
  },
  {
    text: 'Etiquetas',
    icon: etiquetas,
    width: 50 - 5,
    mobileWidth: productItemsIconsMobileWidth.etiquetas,
  },
  {
    text: 'Envelopes',
    icon: envelopes,
    width: 67 - 5,
    mobileWidth: productItemsIconsMobileWidth.envelopes,
  },
  {
    text: 'Pastas',
    icon: pastas,
    width: 36 - 5,
    mobileWidth: productItemsIconsMobileWidth.pastas,
  },
  {
    text: 'Formulário Contínuo',
    icon: formularioContinuo,
    width: 47 - 5,
    mobileWidth: productItemsIconsMobileWidth.formularioContinuo,
  },
];

/* Sindigraf Banner */
export const bannerTitle = 'Por que a sindigraf?';

export const bannerItems = [
  'Desde 1975 no mercado',
  'Orçamentos personalizados',
  'Compromisso com prazos',
];

/* Request Quote */
export const requestQuoteTitle = 'Solicite um Orçamento';

export const requestQuoteItems = [
  'Selecione um Serviço',
  'Folders',
  'Manuais',
  'Catálogos',
  'Calendários',
  'Envelopes',
  'Pastas',
  'Flyers',
  'Cartões',
  'Cadernos',
  'Etiquetas',
  'Formulário Contínuo',
  'Danfe',
  'Solapas',
  'Cardápio',
  'Jogo Americano',
  'Embalagens',
  'Papel A4 Sulfite em branco 75gr',
  'Outros',
];

/* Contact Us */

export const contactUsTitle = 'Contate-nos';

export const contactUsItems = [
  { title: 'WhatsApp', text: '(11) 97118 - 7754', icon: whatsapp },
  { title: 'Telefone', text: '(11) 4229 - 8611', icon: phone },
  { title: 'E-mail', text: 'vendas@sindigraf.com.br', icon: emailOutline },
  /* {
    title: 'Endereço',
    text: 'Rua Casemiro de Abreu, 291, Cerâmica - São Caetano do Sul - SP ',
    icon: mapMarker,
  }, */
];
