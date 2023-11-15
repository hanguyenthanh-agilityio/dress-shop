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

    primary: {
      field: {
        w: "60px",
        h: "40px",
      }
    }
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

    quantity: {
      field: {
        border: "none",
        bg: "#fff",
        pl: "0",
        textAlign: "center",
        _hover: {
          border: "2px",
          borderRadius: "4px",
        },
      }
    }
  },

  defaultProps: {
    size: "default",
    variant: "outline",
  },
};
