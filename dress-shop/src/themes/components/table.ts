export const Table = {
  baseStyle: {
    tr: {
      borderBottom: "1px",
      borderColor: "#e8e8e1",
      mb: "30px"
    },
    th: {
      textTransform: "none",
      minW: "170px",
    },
    td: {
      p: "16px 20px 16px 0px !important"
    }
  },
  variants: {
    default: {
      th: {
        fontSize: "20px",
        fontWeight: "normal",
        py: "20px",
        px: "0"
      },
    },
  },

  defaultProps: {
    variant: "default",
  },
};
