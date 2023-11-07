export const Input = {
  baseStyle: {
    field: {
      borderRadius: "80px",
      h: "50px",
      pl: "32px",
      color:"#1b262c",
      background: "#f1f3f5",
      _placeholder: {
        color: "inactive.primary",
      },
    },
  },

  sizes: {
    default: {
      field: {
        w: "300px",
      },
    },
  },

  variants: {
    outline: {
      field: {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "400",
        _hover: {
          borderColor: "inactive.primary",
          bg: "inactive.secondary",
        },
      },
    },
  },

  defaultProps: {
    size: "default",
    variant: "outline",
  },
};
