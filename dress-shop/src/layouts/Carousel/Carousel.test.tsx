import { render } from '@testing-library/react';
import Carousel from '.';

describe('Carousel component', () => {
  it('Should render Carousel snapshot correctly', () => {
    const carousel = render(
        <Carousel />
    );

    expect(carousel).toMatchSnapshot();
  });
});
