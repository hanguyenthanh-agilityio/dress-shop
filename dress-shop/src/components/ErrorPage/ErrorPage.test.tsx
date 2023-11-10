import { render } from '@testing-library/react';
import ErrorPage from '.';
import { BrowserRouter } from 'react-router-dom';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';

describe('ErrorPage component', () => {
  it('Should render ErrorPage snapshot correctly', () => {
    const errorPage = render(
      <ChakraProvider>
        <CSSReset />
        <BrowserRouter>
          <ErrorPage />
        </BrowserRouter>
      </ChakraProvider>
    );

    expect(errorPage).toMatchSnapshot();
  });
});
