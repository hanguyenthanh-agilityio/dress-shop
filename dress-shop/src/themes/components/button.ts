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

    quantity: {
      border: "1px solid",
      bg: "background.light",
      w: "42px",
      h: "40px",
      borderRadius: "none",
      borderColor: "#f1f3f5",
      _hover: {
        backgroundColor: "#e2e8f0"
      }
    }
  },

  defaultProps: {
    size: "default",
    variant: "default",
  },
};
