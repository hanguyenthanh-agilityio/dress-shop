import { render } from '@testing-library/react';

// Components
import { CartHeader } from '@/components';

// Constants
import { HEADER_LIST } from '@/constants/cart';
import { Table } from '@chakra-ui/react';

describe('CardHeader component', () => {
  it('Should render CardHeader snapshot correctly', () => {
    const cartHeader = render(
      <Table>
        <CartHeader headerList={HEADER_LIST} />
      </Table>
    );

    expect(cartHeader).toMatchSnapshot();
  });
});
