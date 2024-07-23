import { Link } from "react-router-dom";
import { memo } from "react";
import {
  Container,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// Components
import { CartLogo, SearchProduct } from "@/components";

// Constants
import { ROUTES } from "@/constants";

// Hooks
import { useBreakPoints } from "@/hooks";

interface MainHeaderProps {
  children: React.ReactNode;
}

export const MainHeader = memo<MainHeaderProps>(
  ({ children }: MainHeaderProps) => (
    <Flex boxShadow="0 10px 15px 0 rgba(0,0,0,.06)" py="20px">
      <Container p={{ lg: "0 20px" }}>
        <Flex justifyContent="space-between" alignItems="center">
          <Link to={ROUTES.HOME}>
            <Heading size={{ xs: "medium", lg: "default" }}>Dress</Heading>
          </Link>
          {children}
        </Flex>
      </Container>
    </Flex>
  ),
);

const HeaderContainer = memo(() => {
  const { isLargeThanTablet } = useBreakPoints();

  return (
    <>
      {isLargeThanTablet ? (
        <MainHeader>
          <Flex alignItems="center">
            <SearchProduct />
            <Link to={ROUTES.PRODUCT_CART}>
              <Flex alignItems="center" pl="30px" cursor="pointer">
                <CartLogo />
                <Text pl="5px">Cart</Text>
              </Flex>
            </Link>
          </Flex>
        </MainHeader>
      ) : (
        <>
          <MainHeader>
            <Flex>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Option"
                  icon={<HamburgerIcon w="25px" height="25px" />}
                  variant="outline"
                  border="none"
                  px="10px"
                />
                <MenuList>
                  <MenuItem my="10px">Home</MenuItem>
                  <MenuGroup title="Categories">
                    <MenuItem>Men</MenuItem>
                    <MenuItem>Women</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Flex>
          </MainHeader>
          <Container>
            <Flex p="16px 20px">
              <SearchProduct />
            </Flex>
          </Container>
        </>
      )}
    </>
  );
});

export default HeaderContainer;
