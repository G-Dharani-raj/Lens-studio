import React from "react";
import "./Navbar.css";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  MenuButton,
  Image,
  useDisclosure,
  MenuDivider,
  MenuList,
  useColorMode,
  Avatar,
  Menu,
  MenuItem,
  Img,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import ModalCom from "../../Modal/SignUpModal";
import LoginModal from "../../Modal/LoginModal";
import { logout } from "../../Cards/LoginCard";
import UseAuth from "../../CustomHook/UseAuth";
import Logo from "./lens.png";
import { FaRegHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  // for authentication
  const { colorMode, toggleColorMode } = useColorMode();
  const { currentUser, userDetails } = UseAuth();
  console.log("currentUser: ", currentUser);
  // for authentication

  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box bg="white" zIndex={"99"} position="sticky" top="1px" maxWidth="100%">
      <div className="Navbar">
        <ul>
          <p>Do More, Be More</p>
          <p>Try in 3D</p>
          <p>Store Locator</p>
          <p>Quality</p>
          <p>USA</p>
          <p>Singapore</p>
          <p>UAE</p>
          <p>John Jacobs</p>
          <p>Aqualens</p>
          <p>Cobrowsing</p>
          <p>Engineering Blog</p>
          <p>Lenskart Franchise</p>
        </ul>
        <ul>
          <p>Contact Us</p>
        </ul>
      </div>
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Box flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Flex
              display={{ base: "none", md: "flex" }}
              // ml={10}
              // w="100%"
              // justifyContent="space-between"
              m="auto"
              gap="160px"
            >
              <Flex w="20%" gap={"20%"} justifyContent="flex-start">
                <Image src={Logo} w="130px" m="auto" />

                <Image
                  src="https://static.lenskart.com/media/mobile/images/phone_number.svg"
                  // marginLeft={"70px"}
                  w={{ base: "0px", md: "0px", lg: "90px", xl: "130px" }}
                />
              </Flex>
              <Box w="40%">
                <Input
                  // marginLeft="20px"
                  placeholder="What are Looking for "
                />
              </Box>
              <Box w="10%" alignItems={"center"}>
                <Stack
                  flex={{ base: 1, md: 0 }}
                  justifyContent={"space-evenly"}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={7}
                >
                  <Flex gap={"5px"}>
                    <FaRegHeart />
                  </Flex>
                  <Flex gap={"5px"}>
                    <FaShoppingCart />
                  </Flex>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                    >
                      <Flex gap={"5px"}>
                        <Box>
                          {currentUser ? (
                            <Avatar
                              size={"sm"}
                              src={currentUser.photoURL}
                              alt="abc"
                            />
                          ) : (
                            <FaUserCircle />
                          )}
                        </Box>
                        <Text fontSize={"12px"} w="60px" display={"block"}>
                          {currentUser
                            ? currentUser?.displayName ||
                              userDetails?.displayFirstName
                            : "Sign In & Sign Up"}
                        </Text>
                      </Flex>
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <LoginModal />
                      </MenuItem>
                      <MenuItem>
                        <ModalCom />
                      </MenuItem>
                      <MenuDivider />
                      {currentUser ? (
                        <MenuItem>
                          {" "}
                          <Text my="2" onClick={logout}>
                            LogOut
                          </Text>
                        </MenuItem>
                      ) : (
                        ""
                      )}
                    </MenuList>
                  </Menu>
                </Stack>
              </Box>
              {/* <Box
                w={{ base: "0px", md: "0px", lg: "0px", xl: "80px" }}
                display={{ base: "none", xl: "block" }}
              >
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Box> */}
            </Flex>{" "}
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
            {/* <LoginModal />
            <ModalCom /> */}
            {/* // for authentication */}
            {/* <Flex gap={"5px"}>
              <FaRegHeart />
              
            </Flex>
            <Flex gap={"5px"}>
              <FaShoppingCart />
             
            </Flex> */}
          </Box>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Box>
  );
};

export default Navbar;
const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.rute ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                w="900px"
              >
                <Flex>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                  {/* <Flex>
                    <h1>Neww</h1>
                  </Flex> */}
                </Flex>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Flex>
      <Link
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </Flex>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "EYEGLASSES",
    rute: "/products",
    children: [
      {
        label: "MEN",
        subLabel: "MENS EYEGlasses",
        href: "/products",
      },
      {
        label: "WOMEN",
        subLabel: "WOMENS EYEGlasses",
        href: "/products",
      },
      {
        label: "KIDS",
        subLabel: "KIDS EYEGlasses",
        href: "/products",
      },
    ],
  },
  {
    label: "COMPUTER GLASSES",
    rute: "/products",
    children: [
      {
        label: "MEN",
        subLabel: "MENS COMPUTERGlasses",
        href: "/products",
      },
      {
        label: "WOMEN",
        subLabel: "WOMENS COMPUTERGlasses",
        href: "/products",
      },
      {
        label: "KIDS",
        subLabel: "KIDS COMPUTERGlasses",
        href: "/products",
      },
    ],
  },
  {
    label: "KIDS GLASSES",
    rute: "/products",
    children: [
      {
        label: "EYEGLASSES",
        subLabel: "KIDS EYEGlasses",
        href: "/products",
      },
      {
        label: "POWER GLASSES",
        subLabel: "KIDS ZERO POWER Glasses",
        href: "/products",
      },
      {
        label: "SUNGLASSES",
        subLabel: "KIDS SUNGLASSES",
        href: "/products",
      },
    ],
  },

  {
    label: "CONTACT LENSES",
    rute: "/products",
  },
  {
    label: "SUNGLASSES",
    rute: "/products",
    children: [
      {
        label: "MEN",
        subLabel: "MENS COMPUTERGlasses",
        href: "/products",
      },
      {
        label: "WOMEN",
        subLabel: "WOMENS COMPUTERGlasses",
        href: "/products",
      },
      {
        label: "KIDS",
        subLabel: "KIDS COMPUTERGlasses",
        href: "/products",
      },
    ],
  },
  {
    label: "HOME EYE-TEST",
    rute: "/products",
  },
  {
    label: "STORE LOCATOR",
    rute: "/products",
  },
];
