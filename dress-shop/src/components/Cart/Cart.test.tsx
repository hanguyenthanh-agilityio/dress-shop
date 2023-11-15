import { render } from '@testing-library/react';
import { Table } from '@chakra-ui/react';

// Components
import Card from '.';

// Mocks
import { PRODUCT_CART } from '../../Mock/common';

// Constants
import { HEADER_LIST } from '../../constants/cart';

describe('Card component', () => {
  it('Should render Card snapshot correctly', () => {
    const card = render(
      <Table>
        <Card products={PRODUCT_CART} headerList={HEADER_LIST} />
      </Table>
    );

    expect(card).toMatchSnapshot();
  });
});
