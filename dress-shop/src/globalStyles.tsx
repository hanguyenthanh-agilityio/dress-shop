import { Global } from "@emotion/react";

// Global styles
const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Poppins, sans-serif';
        src: url('/assets/fonts/Poppins-Regular.ttf') format('ttf');
        font-style: medium;
        font-weight: 400;

      }
    `}
  />
);

export default Fonts;
