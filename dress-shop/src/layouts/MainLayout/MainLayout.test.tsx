import { render } from '@testing-library/react';
import MainLayout from '.';

describe('MainLayout component', () => {
  it('Should render MainLayout snapshot correctly', () => {
    const mainLayout = render(
        <MainLayout />
    );

    expect(mainLayout).toMatchSnapshot();
  });
});
