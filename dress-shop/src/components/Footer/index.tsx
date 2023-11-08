import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <Box
      bg="background.dark"
      color="text.default">
      <Container>
        <Flex justifyContent="space-between" alignItems="center" py="15px">
          <Text color="white" my="15px">© 2020 Dress Shop. All rights reserved.</Text>
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
  );
};

export default Footer;
