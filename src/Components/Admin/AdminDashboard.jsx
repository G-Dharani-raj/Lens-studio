import React from "react";
import AdminNav from "./AdminNavbar/AdminNav";
import PageVisits from "./PageVisits/PageVisits";
import ProductsChart from "./AdminDashboard/ProductsChart";
const AdminDashboard = () => {
	return (
		<div style={{ margin: 0, padding: 0, overflow: "hidden" }}>
			<AdminNav />
			<PageVisits />
			<ProductsChart />
		</div>
	);
};

export default AdminDashboard;
