import { render } from '@testing-library/react';
import Categories from '.';

describe('Categories component', () => {
  it('Should render Categories snapshot correctly', () => {
    const categories = render(
        <Categories />
    );

    expect(categories).toMatchSnapshot();
  });
});
