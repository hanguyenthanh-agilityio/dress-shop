import { render } from '@testing-library/react';
import Footer from '.';

describe('Footer component', () => {
  it('Should render Footer snapshot correctly', () => {
    const footer = render(
        <Footer />
    );

    expect(footer).toMatchSnapshot();
  });
});
