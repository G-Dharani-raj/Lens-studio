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
} from "@chakra-ui/icons";
import ModalCom from "../../Modal/SignUpModal";
import LoginModal from "../../Modal/LoginModal";
import { logout } from "../../Cards/LoginCard";
import UseAuth from "../../CustomHook/UseAuth";
import Logo from "./lens.png";
import { FaRegHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  // for authentication

  const { currentUser, userDetails } = UseAuth();
  console.log("currentUser: ", currentUser);
  // for authentication

  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
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
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <Image src={Logo} w="130px" m="auto" />
              <Image
                src="https://static.lenskart.com/media/mobile/images/phone_number.svg"
                w={"120px"}
                h="40px"
                marginLeft={"70px"}
              />
              {/* this is input tag that will help you to search parameter  */}
              <Input
                w="600px"
                marginLeft="20px"
                placeholder="What are Looking for "
              />
            </Flex>{" "}
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Box>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            {/* // for authentication */}
            {/* <Text>
              {currentUser
                ? userDetails?.displayFirstName || currentUser?.email
                : "Person"}
            </Text> */}
            {/* <Text my="2" onClick={logout}>
              Logout
            </Text> */}
            {/* <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
            </Button>
            <LoginModal/>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              href={"#"}
              _hover={{
                bg: "pink.300",
              }}
            >
              Sign Up
            </Button> */}
            <Text w="70px" fontSize="12px" m="auto">
              Track Order
            </Text>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  
                   <Box>
                  {currentUser?( <Avatar 
  size={"sm"} src={currentUser.photoURL} alt="abc"/>):<FaUserCircle />}
                  </Box>
                  <Flex gap={"5px"}>
                 
                    <Text fontSize={"12px"} w="60px" display={"block"}>
                      {currentUser
                        ? currentUser?.displayName || userDetails?.displayFirstName
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
            </Flex>
            {/* <LoginModal />
            <ModalCom /> */}
            {/* // for authentication */}
            <Flex gap={"5px"}>
              <FaRegHeart />
              <Text w="50px" fontSize="12px" m="auto">
                Wishlist
              </Text>{" "}
            </Flex>
            <Flex gap={"5px"}>
              <FaShoppingCart />
              <Text w="50px" fontSize="12px" m="auto">
                Cart
              </Text>{" "}
            </Flex>
          </Stack>
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
                href={navItem.href ?? "#"}
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
                  <Flex>
                    <h1>Neww</h1>
                  </Flex>
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
    label: "Inspiration",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Find Work",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Learn Design",
    href: "#",
  },
  {
    label: "Hire Designers",
    href: "#",
  },
  {
    label: "Inspiration",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Find Work",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Learn Design",
    href: "#",
  },
];
