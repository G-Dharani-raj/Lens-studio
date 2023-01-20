import { Center } from "@chakra-ui/react";
import React, { useState } from "react";
import AdminNav from "./AdminNavbar/AdminNav";
import AdminPagination from "./AdminProducts/AdminPagination";
import AdminProducts from "./AdminProducts/AdminProducts";

const Admin = () => {
	const [currentPage, setPage] = useState(1);
	return (
		<div>
			<AdminNav />
			<AdminProducts currentPage={currentPage} />
			<Center>
				<AdminPagination currentPage={currentPage} setPage={setPage} />
			</Center>
		</div>
	);
};

export default Admin;
