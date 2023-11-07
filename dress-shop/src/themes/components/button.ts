export const Button = {
  baseStyle: {
    fontWeight: "400",
    h: "44px",
    _hover: {
      bg: "brand.40",
    },
  },

  sizes: {
    default: {
      fontSize: "17px"
    },
  },

  variants: {
    default: {
      bg: "brand.80",
      color: "button.reversal",
    },
  },

  defaultProps: {
    size: "default",
    variant: "default",
  },
};
