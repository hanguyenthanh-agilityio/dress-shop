import { extendTheme } from "@chakra-ui/react";
import colors from "./color";

const overrides = { colors };

const CHAKRA_THEME_DEFAULT = extendTheme(overrides);

export default CHAKRA_THEME_DEFAULT;
