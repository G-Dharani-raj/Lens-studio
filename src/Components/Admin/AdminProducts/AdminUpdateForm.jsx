import {
	Center,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Select,
	Stack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "../../../redux/Admin/admin.actions";

const AdminUpdateForm = () => {
	let obj = JSON.parse(localStorage.getItem("product")) || [];
	const [image, setImage] = useState(obj.product_image);
	const [name, setName] = useState(obj.product_name);
	const sizeRef = useRef();
	const [price, setPrice] = useState(obj.product_price);
	const discountRef = useRef();
	const categoryRef = useRef();
	console.log(obj);

	// * redux
	const { data } = useSelector((store) => store.adminManager);
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		let new_obj = {
			product_image: image,
			product_name: name,
			product_price: price,
			size: sizeRef.current.value ? sizeRef.current.value : obj.size,
			product_offer: `${
				discountRef.current.value
					? discountRef.current.value
					: obj.product_offer
			}% OFF`,
			category: categoryRef.current.value
				? categoryRef.current.value
				: obj.category,
		};
		updateData(dispatch, obj.id, new_obj);
	};
	return (
		<Center>
			<Stack>
				<Heading>Update Product Form</Heading>
				<form onSubmit={handleSubmit}>
					<FormLabel>Image URL</FormLabel>
					<Input
						type="text"
						value={image}
						onChange={(e) => setImage(e.target.value)}
					/>
					<FormLabel>Product Name</FormLabel>
					<Input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<FormLabel>Size</FormLabel>
					<Select placeholder="Select option" size="md" ref={sizeRef}>
						<option value="Size: Medium">Medium</option>
						<option value="Size: Small">Small</option>
						<option value="Size: Wide">Wide</option>
						<option value="Size: Extra Wide">Extra Wide</option>
						<option value="Size: Narrow">Narrow</option>
						<option value="Size: Extra Narrow">Extra Narrow</option>
					</Select>
					<FormLabel>category</FormLabel>
					<Select
						placeholder="Select option"
						size="md"
						ref={categoryRef}
					>
						<option value="aviator">Aviator</option>
						<option value="computer">Computer</option>
						<option value="eyeglasses-mix">Eyeglasses-Mix</option>
						<option value="half-reem">Half-Reem</option>
						<option value="round">Round</option>
						<option value="rimless-round">Rimless-Round</option>
						<option value="rimless-rectangle">
							Rimless-Rectangle
						</option>
						<option value="rimless-mixed">Rimless-Mixed</option>
						<option value="square">Square</option>
					</Select>
					<FormLabel>Price</FormLabel>
					<Input
						type="number"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
					<FormLabel>Discount</FormLabel>
					<Input type="number" ref={discountRef} />
					<Input type="submit" />
				</form>
			</Stack>
		</Center>
	);
};

export default AdminUpdateForm;
