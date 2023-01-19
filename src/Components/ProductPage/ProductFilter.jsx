import React from "react";
import "./styles/ProductFilter.css";
import { frame_Type, frame_Shape } from "./other";

export default function ProductFilter() {
  return (
    <div className="pro_filter_mother_container">
      <div className="frame_type_container">
        <h1 className="frame_type_title">FRAME TYPE</h1>
        <div className="frame_type_cards">
          {frame_Type.map((ele) => {
            return (
              <div key={ele.id} className="frame_type_single_card">
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
        <h1 className="frame_type_title">FRAME TYPE</h1>
        <div className="frame_type_cards">
          {frame_Shape.map((ele) => {
            return (
              <div key={ele.id} className="frame_type_single_card">
                <img src={ele.image} alt="" />
                <p className="frame_type_name">{ele.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
