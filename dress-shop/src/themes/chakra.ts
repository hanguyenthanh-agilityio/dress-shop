import { extendTheme } from "@chakra-ui/react";
import colors from "./color";

// Components
import * as components from "./components";

const overrides = {
  components: { ...components },
  colors
};

const CHAKRA_THEME_DEFAULT = extendTheme(overrides);

export default CHAKRA_THEME_DEFAULT;

