import React, { useState, Component, useEffect } from "react";
import { getMonthArray } from "./MonthArray";
import Chart from "react-apexcharts";
import { Box, Flex, Heading } from "@chakra-ui/react";
import countapi from "countapi-js";
const PageVisits = () => {
	const days = getMonthArray();
	const [visits, setVisits] = useState(localStorage.getItem("visits"));
	// const [views, setViews] = useState([]);

	const [state, setState] = useState({
		options: {
			chart: {
				id: "basic-bar",
			},
			xaxis: {
				categories: days,
			},
			fill: {
				type: "gradient",
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.7,
					opacityTo: 0.9,
					stops: [0, 90, 100],
				},
			},
			stroke: {
				curve: "straight",
			},
		},
		series: [
			{
				name: "series-1",
				data: [20, 222, 152, 321, visits],
			},
		],
		fill: {
			type: "gradient",
			gradient: {
				shade: "dark",
				type: "horizontal",
				shadeIntensity: 0.5,
				gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
				inverseColors: true,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 50, 100],
				colorStops: [],
			},
		},
	});
	useEffect(() => {
		countapi
			.hit("lenstudio.com", "0aa8524b-a4f6-41a7-8043-ea923f7d2a68")
			.then((result) => setVisits(result.value));
		localStorage.setItem("visits", visits);
		// setViews();
		// setState((prev) => {
		// 	// console.log(prev);
		// 	prev.series[0].data = [30, 47, 62, 32, visits];
		// 	return { ...prev };
		// });
	}, []);
	console.log(visits);
	return (
		<>
			<Flex
				alignItems={"center"}
				justifyContent={"space-between"}
				width="100%"
			>
				<Heading size="lg">Page Traffic in the past 5 days</Heading>
				<Box width={"50%"}>
					{/* {days.length > 0 && views.length > 0 ? ( */}
					<Chart
						options={state.options}
						series={state.series}
						type="area"
						width="100%"
					/>
					{/* ) : null} */}
				</Box>
			</Flex>
		</>
	);
};

export default PageVisits;

// {
//     "status": 200,
//     "path": null,
//     "namespace": "lenstudio.com",
//     "key": "0aa8524b-a4f6-41a7-8043-ea923f7d2a68",
//     "value": 0
// }
