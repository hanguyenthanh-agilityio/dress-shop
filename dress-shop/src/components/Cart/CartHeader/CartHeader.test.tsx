import { render } from '@testing-library/react';

// Components
import CardHeader from '.';

// Constants
import { HEADER_LIST } from '../../../constants/cart';
import { Table } from '@chakra-ui/react';

describe('CardHeader component', () => {
  it('Should render CardHeader snapshot correctly', () => {
    const cardHeader = render(
      <Table>
        <CardHeader headerList={HEADER_LIST} />
      </Table>
    );

    expect(cardHeader).toMatchSnapshot();
  });
});
