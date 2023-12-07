import { render } from '@testing-library/react';
import Categories from '.';
import { MemoryRouter } from 'react-router-dom';

describe('Categories component', () => {
  it('Should render Categories snapshot correctly', () => {
    const categories = render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    expect(categories).toMatchSnapshot();
  });
});
