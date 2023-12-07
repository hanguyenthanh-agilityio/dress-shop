import { render } from '@testing-library/react';
import Footer from '.';
import { MemoryRouter } from 'react-router-dom';

describe('Footer component', () => {
  it('Should render Footer snapshot correctly', () => {
    const footer = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(footer).toMatchSnapshot();
  });
});
