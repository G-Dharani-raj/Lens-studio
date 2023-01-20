import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
	Text,
	Heading,
	Stack,
	Image,
	Tag,
	Flex,
	Divider,
	ButtonGroup,
} from "@chakra-ui/react";
const AdminProductCard = ({
	product_image,
	rating_value,
	rating_count,
	product_name,
	size,
	tags,
	product_price,
	strike_through,
	product_offer,
	category,
}) => {
	return (
		<>
			<Card
				boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
				p={5}
				_hover={{
					backgroundImage:
						"linear-gradient(90deg, rgba(243, 196, 170, 1), rgba(228, 81, 154, 1) 50%, rgba(77, 84, 224, 1))",
				}}
			>
				<CardBody>
					<Image
						src={product_image}
						alt={product_name}
						borderRadius="md"
					/>
					<Stack>
						<Heading size="md">{product_name}</Heading>
						<Text size="sm">{size}</Text>
						<Text>
							<span>Rs.</span>
							{product_price}
						</Text>
						{strike_through ? (
							<Text textDecoration="line-through">
								<span>Rs.</span>
								{strike_through}
							</Text>
						) : null}

						<Text>{product_offer}</Text>
						<Flex gap={5}>
							<Tag>{tags}</Tag>
							<Tag>{category}</Tag>
						</Flex>
					</Stack>
				</CardBody>
				<Divider />
				<CardFooter>
					<ButtonGroup spacing="2">
						<Button variant="solid" colorScheme="blue">
							Update Details
						</Button>
						<Button variant="ghost" colorScheme="blue">
							Remove
						</Button>
					</ButtonGroup>
				</CardFooter>
			</Card>
		</>
	);
};

export default AdminProductCard;
