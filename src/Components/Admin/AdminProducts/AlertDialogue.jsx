import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataPerPage, removeData } from "../../../redux/Admin/admin.actions";

export default function AlertButton({ id, currentPage }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { data } = useSelector((store) => store.adminManager);
	const dispatch = useDispatch();
	const cancelRef = React.useRef();
	const handleDelete = async () => {
		console.log(id);
		// removeData(dispatch, id);
		onClose();
		let res = await axios.delete(
			`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses/${id}`
		);
		// .then(() => console.log("success"));
		getDataPerPage(dispatch, currentPage);
	};
	// console.log(data);
	return (
		<>
			<Button
				colorScheme="red"
				onClick={onOpen}
				_hover={{ backgroundColor: "#fff", color: "black" }}
			>
				Delete
			</Button>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Delete Product
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure? You can't undo this action afterwards.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button
								colorScheme="red"
								onClick={handleDelete}
								ml={3}
							>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
}
