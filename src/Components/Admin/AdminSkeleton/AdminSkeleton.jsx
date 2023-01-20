import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import React from "react";
import SkeletonCard from "./Skeleton";

const AdminSkeleton = () => {
	let arr = new Array(15);
	arr.fill(1);

	return (
		<>
			<SimpleGrid columns={{ base: 3, lg: 4, md: 2, sm: 1 }} gap={5}>
				{arr.map((e) => {
					return <SkeletonCard key={e} />;
				})}
			</SimpleGrid>
		</>
	);
};

export default AdminSkeleton;
