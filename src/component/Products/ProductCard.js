import { useEffect, useState } from "react";
import React from "react";
import Item from "./ProductItem";
import "./ProductItem.css";
import "./ProductCard.css";
import SearchBar from "../SeachBar/SearchBar";
import Categories from "../ProductCategories/Categories";

// import { createContext } from 'react';

//  export const Data = createContext();

const Card = () => {
  const [data, setData] = useState();
  const [searchString, setSearchString] = useState("");
  const [selectedCat, setSelectedCat] = useState([]);
  const[display , setDisplay] = useState(false);

  const handelOnSearch = (searchStr) => {
    console.log(searchStr);
    setSearchString(searchStr);
  };

  const fetchApi = async () => {
    
    let data = await fetch(` http://localhost:4000/Product`);
    let res = await data.json();

    setData(res);
    // console.log(res);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // console.log("checked array", checkedArray);

  const sideItems = [
    ...new Set(
      data &&
        data.map((val) => {
          return val?.category;
        })
    ),
  ];

  const updateSelectedCategories = (name, check) => {
    if (check) {
      if (!selectedCat.includes(name)) {
        const addValues = [...selectedCat];
        addValues.push(name);
        console.log("addvalues", addValues);
        setSelectedCat(addValues);
       
      }
    } else {
      const removeValues = [...selectedCat];
      console.log("....", selectedCat);

      const result = removeValues.filter((val) => val != name);
      console.log("res", result);
      setSelectedCat(result);
      // if (removeValues.includes(name)) {
      //   const val = removeValues.indexOf(name); //index

      //   for (let i in removeValues.length) {
      //     console.log("name");
      //     if (removeValues[i] == name) {
      //       removeValues.splice(val, 1);

      //     }
 //     // console.log("object")
      //   }
      //   console.log("remove values", removeValues);
      // }
    }
  };
  console.log("selectedCat", selectedCat);

  const goToHome = () => {
    console.log("object");
  };

  const sideClick =()=>{
     setDisplay(!display);
  }

  return (
    <>
      <div className="great-grand-p">
        <div className="side-div">
          <div className="side-div-1">
            <div className="search-div">
              <SearchBar
                searchString={searchString}
                handelOnSearch={handelOnSearch}
              />
            </div>

            <div className="labels">
             <div >
             <h1 id="h1-1" style={{
                  fontSize: "1.5em",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Categories
              </h1>
             </div>

              <Categories
                sideItems={sideItems}
                filterItems={updateSelectedCategories}
              />
            </div>
          </div>
        </div>

        <div className="sidethreedots">
         <button className="side-btn" onClick={()=>{sideClick()}}> <p>Custom Search</p> </button>
          {
             display? <>
         
            <div className="search-div">
              <SearchBar
                searchString={searchString}
                handelOnSearch={handelOnSearch}
              />
            </div>

              <Categories
                sideItems={sideItems}
                filterItems={updateSelectedCategories}
              />
             </>:""
          }
        </div>

        <div className="grandparent">

      
          {/* <div className="parents"> */}

          {
            data?.length &&
            data
              ?.filter((el) => {
                let isShow = true;
                if (selectedCat?.length && !selectedCat.includes(el.category)) {
                  isShow = false;
                }
                if (searchString?.length && 
                          !el.title.toLowerCase().includes(searchString.toLowerCase())) {
                  isShow = false;
                }
                return isShow;
              })
              .map((data, id) => {
                return (
                  <>
                    <div className="parent-card">
                      <Item key={id} item={data} />
                    </div>
                  </>
                );
              })
        }

          {/* } */}
        </div>
      </div>

      {/* </div> */}

      {/* { (img && img.length  > 0) ? <>
                <div className='card-img'>
               <img src={img[0].image} alt="" className='img-1' />
               </div>
                 <div className='content'>
                 <div className="title"><h1>{img[0].title}</h1></div>
                 <p>{img[0].category}</p>
                 <p>{img[0].price} </p>
                 <div className="des"><p>{img[0].description}</p></div>
                 <button className='card-btn'>Add To Cart</button>
                 </div>
                 <div className='side-price'>{img[0].price} <p>20% Off</p></div>

               
            </>  : "Wait its Coming Have till then Arrange some Drinks and have Fun"
            } */}
    </>
  );
};

export default Card;
// export {Data}
