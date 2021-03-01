import React from 'react';

import { LoadScreenProvider } from './load';

const AppProvider: React.FC = ({ children }) => (
  <LoadScreenProvider>{children}</LoadScreenProvider>
);

export default AppProvider;
