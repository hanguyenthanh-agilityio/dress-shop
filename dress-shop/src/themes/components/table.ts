export const Table = {
  baseStyle: {
    tr: {
      borderBottom: "1px",
      borderColor: "#e8e8e1",
      mb: "30px"
    },
    th: {

      textTransform: "none",
    },
  },
  variants: {
    default: {
      th: {
        fontSize: "20px",
        fontWeight: "normal",
        py: "20px",
        px: "0"
      }
    },
  },

  defaultProps: {
    variant: "default",
  },
};
