import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react';

// React icons
import { FaFacebook, FaInstagram, FaGithub, FaHome, FaSearch } from 'react-icons/fa'
import { IconContext } from "react-icons";
import { useBreakPoints } from '../../hooks/useBreakPoints';

const Footer = () => {
  const { isLargeThanTablet } = useBreakPoints()

  const handleClickHome = () => {}
  const handleClickSearch = () => {}

  const actionButton = [
    {id: "men-categories", icon: <FaHome />, text: "Home", action: handleClickHome},
    {id: "women-categories", icon: <FaSearch />, text: "Search", action: handleClickSearch},
  ]
  return (
    <>
      {isLargeThanTablet ? (
        <Box
          bg="background.dark"
          color="text.default">
        <Container>
          <Flex justifyContent="space-between" alignItems="center" py="15px">
            <Text
              color="white"
              my="15px"
              size={{xs: "tiny", lg: "default"}}
            >
              © 2020 Dress Shop. All rights reserved.
            </Text>
            <Stack direction="row" spacing={6}>
              <IconContext.Provider value={{ size:"22px"}}>
                <FaFacebook />
                <FaInstagram />
                <FaGithub />
              </IconContext.Provider>
            </Stack>
          </Flex>
        </Container>
      </Box>
      ) : (
        <Flex borderTop="1px solid #ccc" overflow="hidden" pos="fixed" bottom="0" w="100%">
          {actionButton.map((item)=> (
            <Stack direction="row" spacing={6}>
              <Flex>
                {item.icon}
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
