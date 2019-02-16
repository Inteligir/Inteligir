import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyles, Meta, Navigation } from '@client/components';
import defaultTheme from '@client/utils/theme';

const Page = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <main>
      <Meta />
      <Navigation />
      {children}
      <Normalize />
      <GlobalStyles />
    </main>
  </ThemeProvider>
);

export default Page;