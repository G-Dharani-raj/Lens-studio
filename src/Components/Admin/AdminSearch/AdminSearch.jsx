import {
	Box,
	Center,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	SimpleGrid,
	VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import AdminProductCard from "../AdminProducts/AdminProductCard";
import AdminSkeleton from "../AdminSkeleton/AdminSkeleton";

const AdminSearch = () => {
	const [suggestions, setSuggestions] = useState("");
	const [loading, setLoading] = useState(false);
	const debounce = (func) => {
		let timer;
		return function (...args) {
			const context = this;
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				timer = null;
				func.apply(context, args);
			}, 1000);
		};
	};

	const handleChange = (value) => {
		if (value === "") return;
		setLoading(true);
		axios
			.get(
				`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?q=${value}`
			)
			.then((res) => {
				setLoading(false);
				setSuggestions(res.data);
			});
	};

	const optimizedFn = useCallback(debounce(handleChange), []);
	useEffect(() => {
		let tmp = localStorage.getItem("search_term");
		axios
			.get(
				`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?q=${tmp}`
			)
			.then((res) => setSuggestions(res.data));
	}, []);
	console.log(suggestions);
	// if (loading) return <AdminSkeleton />;
	return (
		<>
			<VStack gap={5} py={10}>
				<Center minW={"100%"}>
					<InputGroup maxW={"60%"}>
						<InputLeftElement
							pointerEvents="none"
							children={<HiMagnifyingGlass />}
						/>
						<Input
							type="text"
							bg="white"
							onChange={(e) => optimizedFn(e.target.value)}
						/>
					</InputGroup>
				</Center>
				<Center>
					<Heading size="sm">
						{suggestions.length} Results found
					</Heading>
				</Center>
				{loading ? (
					<AdminSkeleton />
				) : suggestions.length > 0 ? (
					<SimpleGrid
						columns={{ base: 1, lg: 4, md: 2, sm: 1 }}
						gap={5}
					>
						{suggestions.map((e) => (
							<AdminProductCard key={e.id} {...e} />
						))}
					</SimpleGrid>
				) : (
					<Center>
						<Heading>No results found</Heading>
					</Center>
				)}
			</VStack>
		</>
	);
};

export default AdminSearch;
