import { render } from '@testing-library/react';
import Card from '.';

describe('Card component', () => {
  it('Should render Card snapshot correctly', () => {
    const card = render(
        <Card
        // Define mock data outside
          src='https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581158167%2Fsbiuoziiqi5gkuvrsymv.jpg&w=1080&q=75'
          name='Long Sleeves Polka Dots'
          price={800}
        />
    );

    expect(card).toMatchSnapshot();
  });

  // Add case have default value for AltText
});
