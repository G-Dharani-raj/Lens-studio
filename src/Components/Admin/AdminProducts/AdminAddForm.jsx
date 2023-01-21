import {
	Center,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Select,
	Stack,
	useToast,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../../redux/Admin/admin.actions";

const AdminAddForm = () => {
	const imageRef = useRef();
	const nameRef = useRef();
	const sizeRef = useRef();
	const priceRef = useRef();
	const discountRef = useRef();
	const categoryRef = useRef();
	// * redux
	const { data } = useSelector((store) => store.adminManager);
	const dispatch = useDispatch();
	const toast = useToast();
	const handleSubmit = (e) => {
		e.preventDefault();
		let obj = {
			product_image: imageRef.current.value,
			product_name: nameRef.current.value,
			product_price: priceRef.current.value,
			size: sizeRef.current.value,
			product_offer: `${discountRef.current.value}% OFF`,
			category: categoryRef.current.value,
		};
		addData(dispatch, obj);
		toast({
			title: "Account created.",
			description: "We've created your account for you.",
			status: "success",
			duration: 1000,
			isClosable: true,
		});
	};
	return (
		<Center>
			<Stack>
				<Heading>Add Product Form</Heading>
				<form onSubmit={handleSubmit}>
					<FormControl isRequired>
						<FormLabel>Image URL</FormLabel>
						<Input type="text" ref={imageRef} />
						<FormLabel>Product Name</FormLabel>
						<Input type="text" ref={nameRef} />
						<FormLabel>Size</FormLabel>
						<Select
							placeholder="Select option"
							size="md"
							ref={sizeRef}
						>
							<option value="Size: Medium">Medium</option>
							<option value="Size: Small">Small</option>
							<option value="Size: Wide">Wide</option>
							<option value="Size: Extra Wide">Extra Wide</option>
							<option value="Size: Narrow">Narrow</option>
							<option value="Size: Extra Narrow">
								Extra Narrow
							</option>
						</Select>
						<FormLabel>category</FormLabel>
						<Select
							placeholder="Select option"
							size="md"
							ref={categoryRef}
						>
							<option value="aviator">Aviator</option>
							<option value="computer">Computer</option>
							<option value="eyeglasses-mix">
								Eyeglasses-Mix
							</option>
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
						<Input type="number" ref={priceRef} />
						<FormLabel>Discount</FormLabel>
						<Input type="number" ref={discountRef} />
						<Input type="submit" />
					</FormControl>
				</form>
			</Stack>
		</Center>
	);
};

export default AdminAddForm;
