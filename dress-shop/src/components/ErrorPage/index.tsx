import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import {  Link  } from "react-router-dom";

// Constants
import { ROUTES } from "@/constants/routes";

export default function ErrorPage() {

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      py="30px"
      px="6px"
      id="error-page"
    >
      <Heading
        display="inline-block"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        Oops!
      </Heading>
      <Text mt="12px" mb="8px">
        Page Not Found
      </Text>
      <Text mt="12px" mb="15px">Sorry, an unexpected error has occurred.</Text>
      <Link to={ROUTES.HOME}>
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
          fontWeight={600}
          width="120px"
        >
          Go to Home
        </Button>
      </Link>

    </Flex>
  );
}
