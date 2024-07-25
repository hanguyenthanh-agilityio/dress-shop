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
  Button,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// Components
import { IconCart, SearchProduct } from "@/components";

// Constants
import { ROUTES } from "@/constants";

// Hooks
import { useBreakPoints } from "@/hooks";

interface MainHeaderProps {
  children: React.ReactNode;
}

export const MainHeader = memo<MainHeaderProps>(
  ({ children }: MainHeaderProps) => (
    <Flex
      pos="fixed"
      top="0"
      zIndex="2"
      width="100%"
      boxShadow="0 10px 15px 0 rgba(0,0,0,.06)"
      py="15px"
      bg="brand.900"
    >
      <Container p={{ lg: "0 20px" }}>
        <Flex justifyContent="space-between" alignItems="center">
          <Link to={ROUTES.HOME}>
            <Heading
              size={{ xs: "medium", lg: "default" }}
              color="text.default"
            >
              Dress
            </Heading>
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
                <IconCart />
                <Text color="#fff">Cart</Text>
              </Flex>
            </Link>
            <Wrap ml="15px">
              <WrapItem>
                <Avatar
                  width="10"
                  height="10"
                  name="Kent Dodds"
                  src="https://bit.ly/dan-abramov"
                />
              </WrapItem>
            </Wrap>
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
                  icon={<HamburgerIcon w="25px" height="25px" color="#fff" />}
                  variant="outline"
                  border="none"
                  px="10px"
                  _active={{ bg: "#d82c23" }}
                />
                <MenuList bg="#1b262c">
                  <MenuItem
                    mb="10px"
                    color="#fff"
                    bg="#1b262c"
                    borderBottom="1px solid #fff"
                  >
                    Home
                  </MenuItem>
                  <MenuGroup title="Categories" ml="12px" color="#fff">
                    <MenuItem
                      color="#fff"
                      bg="#1b262c"
                      borderBottom="1px solid #fff"
                    >
                      Men
                    </MenuItem>
                    <MenuItem
                      color="#fff"
                      bg="#1b262c"
                      borderBottom="1px solid #fff"
                    >
                      Women
                    </MenuItem>
                    <Flex display="flex" justifyContent="center">
                      <Button
                        m="10px 10px 0"
                        px="60px"
                        h="30px"
                        color="#fff"
                        fontSize="13px"
                        bg="#222222"
                        border="none"
                      >
                        Log Out
                      </Button>
                    </Flex>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Flex>
          </MainHeader>
          <Container>
            <Flex p="16px 20px" mt="70px">
              <SearchProduct />
            </Flex>
          </Container>
        </>
      )}
    </>
  );
});

export default HeaderContainer;
