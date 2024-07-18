import { extendTheme } from "@chakra-ui/react";
import colors from "./color";
import metrics from "./metrics";
import "@fontsource/poppins";

// Components
import * as components from "./components";

const overrides = {
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: { ...components },
  colors,
  metrics,
  breakpoints: {
    xs: "0",
    sm: "375px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
    xxl: "1920px",
  },
};

const CHAKRA_THEME_DEFAULT = extendTheme(overrides);

export default CHAKRA_THEME_DEFAULT;
