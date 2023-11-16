import { render } from '@testing-library/react';
import { Table } from '@chakra-ui/react';

// Components
import CardBody from '.';

// Mocks
import { PRODUCT_CART } from '../../../Mock/common';

describe('CardBody component', () => {
  it('Should render CardBody snapshot correctly', () => {
    const cardBody = render(
      <Table>
        <CardBody products={PRODUCT_CART} total={0}  />
      </Table>
    );

    expect(cardBody).toMatchSnapshot();
  });
});
