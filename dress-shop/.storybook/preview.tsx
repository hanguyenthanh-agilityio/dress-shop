import React from 'react'
import type { Preview } from '@storybook/react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import CHAKRA_THEME_DEFAULT from '../src/themes/chakra';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      // <BrowserRouter>
        <ChakraProvider theme={CHAKRA_THEME_DEFAULT}>
          <Story />
        </ChakraProvider>
      // </BrowserRouter>
    ),
  ],
};

export default preview;
