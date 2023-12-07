import { useMediaQuery } from "@chakra-ui/react";

export const useBreakPoints = () => {
  // const theme = useTheme();

  const [isLargeThanTablet] = useMediaQuery(
    `(min-width: 1024px)`,
  );

  return { isLargeThanTablet };
};
