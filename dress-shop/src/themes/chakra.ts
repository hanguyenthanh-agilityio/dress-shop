import { extendTheme } from "@chakra-ui/react";
import colors from "./color";
import { breakpoints } from './breakpoints';

// Components
import * as components from "./components";

const overrides = {
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: { ...components },
  colors,
  breakpoints
};

const CHAKRA_THEME_DEFAULT = extendTheme(overrides);

export default CHAKRA_THEME_DEFAULT;
