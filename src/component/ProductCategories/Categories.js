import React, { useState } from "react";
import "./Categories.css";

const Categories = ({ sideItems, filterItems }) => {
  //   const[checkboxChange , setCheckboxChange] = useState(false);
  // const values = [];

  const handelCheckCHange = (e,val) => {
    console.log(val)
    console.log("val",e.target.checked);
    filterItems(val,e.target.checked);
  };
  return (
    <>
      <div className="items">
        {sideItems.map((val) => {
          return (
            <>
              <div className="div-items">
                <div className="item-1">{val} </div>
                <input
                  type="checkbox"
                   style={{"cursor":"pointer"}}
                  // checked ={val}
                  onChange={(e) => {
                    handelCheckCHange(e,val);
                  }}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
