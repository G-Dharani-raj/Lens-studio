import React, { useEffect, useState, useContext } from "react";
import { json, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@chakra-ui/react";
import { productContext } from "../../Context/PrductContext";
import Navbar from "../Navbar/Navbar";
import "./styles/ProductDetails.css";
import "./styles/ProductCard.css";
import Fotter from "../Fotter/Fotter";
import LoaderSpinner from "../Loader/LoaderSpinner";
import "animate.css";

function ProductDetails() {
	let { id } = useParams();
	let {
		getSingleProductDetails,
		singleProduct,
		singleProductLoading,
		handleCartUpdate,
	} = useContext(productContext);
	const {
		product_image,
		product_name,
		product_price,
		strike_through,
		size,
		tags,
	} = singleProduct;

	useEffect(() => {
		getSingleProductDetails(id);
	}, [id]);

	const notification = () => {
		toast.success("✌️ added to cart !", {
			position: "top-right",
			autoClose: 2500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	};

	return (
		<>
			<Navbar />
			{singleProductLoading ? (
				<LoaderSpinner top={"10%"} left={"50%"} sz={"xl"} />
			) : (
				<div className="product_details_mother_container">
					<div className="product_details_image_cont ">
						<div className="product_image_container">
							<img
								src={product_image}
								alt="loading.."
								className="  animate__animated animate__fadeInUp"
							/>
						</div>
						<div className="product_details_container  animate__animated animate__fadeIn animate__delay-1s">
							<div className="product_tag_div">
								<p>{tags}</p>
							</div>
							<div className="product_name_div">
								<p>{product_name} Stylish Glassess </p>
							</div>
							<div className="product_size_div">
								<p>{size}</p>
							</div>
							{strike_through === "" ? null : (
								<div className="off_price_div">
									<p>{strike_through}</p>
								</div>
							)}
							<div className="product_price_div">
								<p> Rs. {product_price}</p>
							</div>

							<div className="frame_lens_div">
								<p>Frame + Lens</p>
							</div>
							<div
								className="color_div"
								style={{ gap: "7px", marginTop: "7px" }}
							>
								<div className="colors_sample grey"></div>
								<div className="colors_sample golden"></div>
								<div className="colors_sample blue"></div>
							</div>
							<div className="cart_like_btn_div">
								<Button
									onClick={() => {
										handleCartUpdate(singleProduct);
										notification();
									}}
									mb="10px"
									h={{ base: "36px", md: "42px" }}
									w={{ base: "90%", md: " 80%" }}
									colorScheme={"blue"}
								>
									Add To Cart
								</Button>
								<Button
									colorScheme="pink"
									h={{ base: "36px", md: "42px" }}
									w={{ base: "90%", md: " 80%" }}
								>
									Add to Wishlist
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
			{!singleProductLoading ? <Fotter /> : null}
			<ToastContainer />
		</>
	);
}

export default ProductDetails;
