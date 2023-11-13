import { render } from '@testing-library/react';
import Quantity from '.';

describe('Quantity component', () => {
  it('Should render Quantity snapshot correctly', () => {
    const quantity = render(
        <Quantity />
    );

    expect(quantity).toMatchSnapshot();
  });
});
