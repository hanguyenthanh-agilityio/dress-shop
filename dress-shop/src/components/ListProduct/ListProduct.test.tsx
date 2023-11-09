import { render } from '@testing-library/react';
import ListProduct from '.';
import { PRODUCTS } from '../../constants/common';

describe('ListProduct component', () => {
  it('Should render ListProduct snapshot correctly', () => {
    const listProduct = render(
        <ListProduct product={PRODUCTS} />
    );

    expect(listProduct).toMatchSnapshot();
  });
});
