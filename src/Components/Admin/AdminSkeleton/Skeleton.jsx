import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Flex,
	Heading,
	Image,
	Skeleton,
	SkeletonText,
	Stack,
	Tag,
	Text,
} from "@chakra-ui/react";
import React from "react";
import AlertButton from "../AdminProducts/AlertDialogue";

const SkeletonCard = () => {
	return (
		<>
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
						<Skeleton>
							<Image
								src={
									"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/gold-transparent-full-rim-square-john-jacobs-supreme-steel-jj-e14691-c1-eyeglasses_g_2129_20_05_2022.jpg"
								}
								alt={"sample-data"}
								borderRadius="md"
							/>
						</Skeleton>
						<Stack>
							<SkeletonText>
								<Heading size="md">sample data</Heading>
							</SkeletonText>
							<SkeletonText>
								<Text size="sm">size</Text>
							</SkeletonText>
							<SkeletonText>
								<Text>
									<span>Rs.</span>
									9999
								</Text>
							</SkeletonText>
							{/* {strike_through ? (
							<Text textDecoration="line-through">
								<span>Rs.</span>
								{strike_through}
							</Text>
						) : null} */}
							<SkeletonText>
								<Text>product_offer</Text>
							</SkeletonText>
							<Flex gap={5}>
								<SkeletonText>
									<Tag>tags</Tag>
								</SkeletonText>
								<SkeletonText>
									<Tag>category</Tag>
								</SkeletonText>
							</Flex>
						</Stack>
					</CardBody>
					<Divider />
					<CardFooter>
						<Skeleton>
							<ButtonGroup spacing="2">
								<Button variant="solid" colorScheme="blue">
									Update Details
								</Button>
								<Button>Remove</Button>
							</ButtonGroup>
						</Skeleton>
					</CardFooter>
				</Card>
			</>
		</>
	);
};

export default SkeletonCard;
