import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Box, Flex, Heading } from "@chakra-ui/react";

const ProductsChart = () => {
	let obj = {
		rimless_rectangle: 7,
		round: 41,
		half_reem: 34,
		computer: 35,
		aviator: 30,
		rimless_round: 4,
		rimless_mixed: 30,
		eyeglasses_mix: 93,
		square: 36,
	};
	// console.log(obj);
	let name = [],
		quantity = [];

	for (let key in obj) {
		name.push(key);
		quantity.push(obj[key]);
	}

	const [state, setState] = useState({
		series: quantity,
		options: {
			chart: {
				type: "donut",
			},
			labels: name,
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: "bottom",
						},
					},
				},
			],
		},
	});

	return (
		<Flex
			alignItems={"center"}
			justifyContent={"space-between"}
			width="70%"
		>
			<Box width="50%">
				<Chart
					options={state.options}
					series={state.series}
					type="donut"
					width="100%"
				/>
			</Box>
			<Heading size="lg">Chart of all the stock listed.</Heading>
		</Flex>
	);
};

export default ProductsChart;
