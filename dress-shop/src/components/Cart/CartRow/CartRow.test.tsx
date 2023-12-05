import { render } from '@testing-library/react';
import { Table } from '@chakra-ui/react';

// Components
import CardRow from '.';

// Mocks
import { ITEM_CART } from '../../../mock/common';

describe('CardRow component', () => {
  it('Should render CardRow snapshot correctly', () => {
    const cardRow = render(
      <Table>
        <CardRow product={ITEM_CART} total={400} />
      </Table>
    );

    expect(cardRow).toMatchSnapshot();
  });
});
