import {
	Center,
	Input,
	InputGroup,
	InputLeftElement,
	SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import AdminProductCard from "../AdminProducts/AdminProductCard";

const AdminSearch = () => {
	const [suggestions, setSuggestions] = useState("");
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
		axios
			.get(
				`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?q=${value}`
			)
			.then((res) => setSuggestions(res.data));
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
	return (
		<>
			<Center>
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
			<SimpleGrid columns={{ base: 3, lg: 4, md: 2, sm: 1 }} gap={5}>
				{suggestions.length > 0
					? suggestions.map((e) => (
							<AdminProductCard key={e.id} {...e} />
					  ))
					: null}
			</SimpleGrid>
		</>
	);
};

export default AdminSearch;
