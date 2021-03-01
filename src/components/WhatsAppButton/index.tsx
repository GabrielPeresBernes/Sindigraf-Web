import React, { useState } from 'react';
import Icon from '@iconify/react';
import whatsapp from '@iconify/icons-mdi/whatsapp';

import { Button } from './styles';

const WhatsAppButton: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  document.addEventListener('scroll', () => {
    const { scrollY } = window;
    setScrollPosition(scrollY);
  });

  return (
    <Button
      isVisible={scrollPosition >= 60}
      href="https://wa.me/5511971187754"
      target="_blank"
    >
      <Icon icon={whatsapp} width={40} />
    </Button>
  );
};

export default WhatsAppButton;
