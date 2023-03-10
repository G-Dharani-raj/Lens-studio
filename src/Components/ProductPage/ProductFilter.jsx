import React, { useContext, useEffect, useRef } from "react";
import "./styles/ProductFilter.css";
import { frame_Type, frame_Shape, color_options } from "./other";
import { productContext } from "../../Context/PrductContext";
import "animate.css";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

export default function ProductFilter() {
  let categoryArr =  ['Medium', 'Wide', 'Narrow', 'Extra Narrow', 'Extra Wide']
  const { getCategoryProducts, selectedCategory, data, sortDataBySize } =
    useContext(productContext);
  // console.log("useref",categoryArr)
  // const getCategoriesFromData = () => {
  //   let categoryObj = {};
  //   for (let i = 0; i <= data.length - 1; i++) {
  //     if (categoryObj[data[i].size] === undefined) {
  //       let temp = data[i].size;
  //       categoryObj[temp] = 1;
  //     }
  //   }
  //   categoryArr.current = Object.keys(categoryObj);
  //   console.log("all category", categoryArr);
  // };
  
  
  //   getCategoriesFromData();

    

  return (
    <div className="pro_filter_mother_container">
      <div className="frame_type_container">
        <h1 className="frame_type_title">FRAME TYPE</h1>
        <div className="frame_type_cards">
          {frame_Type.map((ele) => {
            return (
              <div
                style={{
                  border:
                    selectedCategory === ele.name ? "1px solid blue" : null,
                }}
                key={ele.id}
                className="frame_type_single_card  animate__animated animate__jackInTheBox animate__delay-1s"
                onClick={() => getCategoryProducts(ele.name, ele.query)}
              >
                <img src={ele.image} alt="" />
                <p className="frame_type_name">{ele.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      {/* here this next div is for frame type filter but iam using samme classes for styling like above */}
      <div className="frame_type_container">
        <h1 className="frame_type_title">FRAME SHAPE</h1>
        <div className="frame_type_cards">
          {frame_Shape.map((ele, ind) => {
            return (
              <div
                style={{
                  border:
                    selectedCategory === ele.name ? "1px solid blue" : null,
                }}
                key={ind}
                className="frame_type_single_card  animate__animated animate__jackInTheBox animate__delay-1s"
                onClick={() => getCategoryProducts(ele.name)}
              >
                <img src={ele.image} alt="" />
                <p className="frame_type_name">{ele.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="brand_filter_container">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  className="brands_title"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Frame Size
                </Box>
                <TriangleDownIcon color={"grey"} boxSize="3" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {categoryArr.map((ele, index) => {
                return (
                  <div
                   
                    key={index}
                    className="color_options "
                  >
                    <input  onClick={() => sortDataBySize(ele)} type="checkbox" value={index} />
                    <label htmlFor="FrameSize"> {ele}</label>
                  </div>
                );
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="color_filter_container">
        <h1 className="frame_color_title frame_type_title ">FRAME COLOR</h1>
        <div className="color_filters_options_div">
          {color_options.map((ele, index) => {
            return (
              <div
                style={{ marginLeft: "14px" }}
                key={index}
                className="color_options "
              >
                <input type="checkbox" value={ele} />
                <label htmlFor="color_option">
                  {" "}
                  {ele} <span className="color_option_conunt">(55+)</span>{" "}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
