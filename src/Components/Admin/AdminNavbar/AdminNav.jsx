import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useDisclosure,
	useColorModeValue,
	Stack,
	Input,
	InputGroup,
	InputLeftElement,
	Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./lens.png";
import { Link as Routerlink } from "react-router-dom";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
const Links = [
	{ name: "Dashboard", path: "/admin" },
	{ name: "Products", path: "/admin/products" },
	{ name: "Add Products", path: "/admin/add" },
	{ name: "Users", path: "/admin/users" },
];

const NavLink = ({ children, path }) => (
	<Routerlink
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		to={path}
	>
		{children}
	</Routerlink>
);

function AdminNav() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();
	const location = useLocation();
	// console.log(location);
	const handleSearch = (e) => {
		if (e.key === "Enter" || e.keyCode === 13) {
			localStorage.setItem("search_term", e.target.value);
			navigate("/admin/search");
		}
	};
	return (
		<>
			<Box
				bg={useColorModeValue("gray.100", "gray.900")}
				px={4}
				style={{ position: "sticky", top: "0px", zIndex: 100 }}
			>
				<Flex
					h={16}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<IconButton
						size={"md"}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack spacing={8} alignItems={"center"}>
						<Box>
							<Image
								src={Logo}
								w="130px"
								m="auto"
								_hover={{ cursor: "pointer" }}
								onClick={() => navigate("/")}
							/>
						</Box>
						<HStack
							as={"nav"}
							spacing={4}
							display={{ base: "none", md: "flex" }}
						>
							{Links.map((e) => (
								<NavLink key={e.name} path={e.path}>
									{e.name}
								</NavLink>
							))}
						</HStack>
					</HStack>
					{location.pathname !== "/admin/search" ? (
						<InputGroup
							maxW={"60%"}
							display={{ base: "none", md: "flex" }}
						>
							<InputLeftElement
								pointerEvents="none"
								children={<HiMagnifyingGlass />}
							/>
							<Input
								type="text"
								bg="white"
								onKeyDown={handleSearch}
								placeholder="Search for a product..."
							/>
						</InputGroup>
					) : null}

					<Flex alignItems={"center"}>
						<Menu>
							<MenuButton
								as={Button}
								rounded={"full"}
								variant={"link"}
								cursor={"pointer"}
								minW={0}
							>
								<Avatar size={"sm"} src={<FaUserCircle />} />
							</MenuButton>
							<MenuList>
								<MenuItem>
									<Routerlink to="/adminlogin">
										Logout
									</Routerlink>
								</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
							{Links.map((e) => (
								<NavLink key={`${e.name}mobile`} path={e.path}>
									{e.name}
								</NavLink>
							))}
						</Stack>
						{location.pathname !== "/admin/search" ? (
							<InputGroup maxW={"60%"}>
								<InputLeftElement
									pointerEvents="none"
									children={<HiMagnifyingGlass />}
								/>
								<Input
									type="text"
									bg="white"
									onKeyDown={handleSearch}
								/>
							</InputGroup>
						) : null}
					</Box>
				) : null}
			</Box>
		</>
	);
}

export default React.memo(AdminNav);
