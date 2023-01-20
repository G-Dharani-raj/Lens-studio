import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../../redux/Admin/admin.actions";

const AdminUpdateForm = () => {
	const imageRef = useRef();
	const nameRef = useRef();
	const sizeRef = useRef();
	const priceRef = useRef();
	const discountRef = useRef();

	// * redux
	const { data } = useSelector((store) => store.adminManager);
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		let obj = {
			product_image: imageRef.current.value,
			product_name: nameRef.current.value,
			product_price: priceRef.current.value,
			size: sizeRef.current.value,
			product_offer: `${sizeRef.current.value}% OFF`,
			// category: categoryRef.current.value
		};
		addData(dispatch, obj);
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<FormLabel>Image URL</FormLabel>
				<Input type="text" ref={imageRef} />
				<FormLabel>Product Name</FormLabel>
				<Input type="text" ref={nameRef} />
				<FormLabel>Size</FormLabel>
				<Select placeholder="Select option" size="md" ref={sizeRef}>
					<option value="Size: Medium">Medium</option>
					<option value="Size: Small">Small</option>
					<option value="Size: Wide">Wide</option>
					<option value="Size: Extra Wide">Extra Wide</option>
					<option value="Size: Narrow">Narrow</option>
					<option value="Size: Extra Narrow">Extra Narrow</option>
				</Select>
				<FormLabel>Price</FormLabel>
				<Input type="number" ref={priceRef} />
				<FormLabel>Discount</FormLabel>
				<Input type="number" ref={discountRef} />
				<Input type="submit" />
			</form>
		</>
	);
};

export default AdminUpdateForm;
