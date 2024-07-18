import { Link } from "react-router-dom";
import { ChangeEvent, memo, KeyboardEvent } from "react";
import {
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// Components
import { CartLogo, SearchInput } from "@/components";

// Hooks
import { useBreakPoints } from "@/hooks";

// Constants
import { ROUTES } from "@/constants";

interface MainHeaderProps {
  children: React.ReactNode;
}

interface HeaderProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent) => void;
  value?: string;
}

export const MainHeader = ({ children }: MainHeaderProps) => (
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
);

const Header = memo<HeaderProps>(
  ({ onChange, onKeyDown, value }: HeaderProps) => {
    const { isLargeThanTablet } = useBreakPoints();

    return (
      <>
        {isLargeThanTablet ? (
          <MainHeader>
            <Flex alignItems="center">
              <SearchInput
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
              />
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
                <SearchInput
                  value={value}
                  onChange={onChange}
                  onKeyDown={onKeyDown}
                />
              </Flex>
            </Container>
          </>
        )}
      </>
    );
  },
);

export default Header;
