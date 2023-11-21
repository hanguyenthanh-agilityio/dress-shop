import { useMediaQuery, useTheme } from "@chakra-ui/react";

export const useBreakPoints = () => {
  const theme = useTheme();

  const [isLargeThanTablet] = useMediaQuery(
    `(min-width: ${theme["breakpoints"].lg})`,
  );

  return { isLargeThanTablet };
};
