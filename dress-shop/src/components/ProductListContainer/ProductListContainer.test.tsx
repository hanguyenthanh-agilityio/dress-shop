import { render } from '@testing-library/react';
import ProductListContainer from '.';
import { QueryClient, QueryClientProvider } from 'react-query';

describe('ProductListContainer component', () => {
  const queryClient = new QueryClient();
  it('Should render ProductList snapshot correctly', () => {
    const productListContainer = render(
      <QueryClientProvider client={queryClient}>
        <ProductListContainer />
        </QueryClientProvider>
    );

    expect(productListContainer).toMatchSnapshot();
  });
});
