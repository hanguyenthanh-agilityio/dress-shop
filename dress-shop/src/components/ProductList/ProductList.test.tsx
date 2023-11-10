import { render } from '@testing-library/react';
import ProductList from '.';
import { PRODUCTS } from '../../Mock/common';

describe('ProductList component', () => {
  it('Should render ProductList snapshot correctly', () => {
    const productList = render(
        <ProductList products={PRODUCTS} />
    );

    expect(productList).toMatchSnapshot();
  });
});
