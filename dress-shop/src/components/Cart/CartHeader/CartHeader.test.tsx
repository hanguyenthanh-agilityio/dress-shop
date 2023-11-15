import { render } from '@testing-library/react';

// Components
import CardHeader from '.';

// Constants
import { HEADER_LIST } from '../../../constants/cart';

jest.mock("./index");

describe('CardHeader component', () => {
  it('Should render CardHeader snapshot correctly', () => {
    const cardHeader = render(
      <CardHeader headerList={HEADER_LIST} />
    );

    expect(cardHeader).toMatchSnapshot();
  });
});
