import { useCallback } from "react";
import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// Hooks
import { useBreakPoints } from "../../hooks/useBreakPoints";

// React icons
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaHome,
  FaSearch,
  FaCartArrowDown,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  const navigate = useNavigate();
  const { isLargeThanTablet } = useBreakPoints();

  const handleClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleClickSearch = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const handleClickCart = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const actionButton = [
    {
      id: "men-categories",
      icon: <FaHome />,
      text: "Home",
      action: handleClickHome,
    },
    {
      id: "women-categories",
      icon: <FaSearch />,
      text: "Search",
      action: handleClickSearch,
    },
    {
      id: "men-categories",
      icon: <FaCartArrowDown />,
      text: "Cart",
      action: handleClickCart,
    },
  ];
  return (
    <>
      {isLargeThanTablet ? (
        <Box bg="background.dark" color="text.default">
          <Container>
            <Flex justifyContent="space-between" alignItems="center" py="15px">
              <Text
                color="white"
                my="15px"
                size={{ xs: "tiny", lg: "default" }}
              >
                © 2020 Dress Shop. All rights reserved.
              </Text>
              <Stack direction="row" spacing={6}>
                <IconContext.Provider value={{ size: "22px" }}>
                  <FaFacebook />
                  <FaInstagram />
                  <FaGithub />
                </IconContext.Provider>
              </Stack>
            </Flex>
          </Container>
        </Box>
      ) : (
        <Flex
          justifyContent="space-around"
          bg="#fff"
          borderTop="1px solid #ccc"
          overflow="hidden"
          pos="fixed"
          bottom="0"
          w="100%"
          p="10px"
        >
          {actionButton.map((item) => (
            <Stack direction="row" spacing={6}>
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                onClick={item.action}
              >
                <IconContext.Provider value={{ size: "20px" }}>
                  {item.icon}
                </IconContext.Provider>
                <Text>{item.text}</Text>
              </Flex>
            </Stack>
          ))}
        </Flex>
      )}
    </>
  );
};

export default Footer;
