export const Button = {
  baseStyle: {
    fontWeight: "400",
    h: "44px",
    border: "1px solid #f1f3f5",
    _hover: {
      bg: "brand.40",
    },
  },

  sizes: {
    default: {
      fontSize: "17px"
    },

    medium: {
      fontSize: "20px"
    }
  },

  variants: {
    default: {
      bg: "brand.80",
      color: "button.reversal",
    },

    quantity: {
      bg: "background.light",
      w: "42px",
      h: "40px",
      borderRadius: "none",
      _hover: {
        backgroundColor: "#e2e8f0"
      }
    },

    primary: {
      bg: "background.light",
      m: "10px",
      p: "10px 50px",
      _hover: {
        bg: "#aeaeae",
      },
    }
  },

  defaultProps: {
    size: "default",
    variant: "default",
  },
};
