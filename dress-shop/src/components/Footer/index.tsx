import { Box, Container, Stack, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      bg="black"
      color="mintcream">
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align="center">
        <Text color="white">© 2020 Dress Shop. All rights reserved.</Text>
        <Stack direction="row" spacing={6}>
          {/* <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton> */}
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
