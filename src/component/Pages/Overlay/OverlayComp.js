import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './OverlayComp.css'
import { FaStar } from "react-icons/fa";


const OverlayComp = () => {
  const [overlayData, setOverlayData] = useState();
  const params = useParams();
  console.log(params);

  const overlay = async () => {
    //   console.log(id)
    console.log("object");
    const data = await fetch(`http://localhost:4000/Product/${params.id}`);
    const res = await data.json();
    console.log(res);
    console.log(res.title);
    setOverlayData(res);
  };

  useEffect(() => {
    if (params.id) {
      overlay();
    }
  }, []);

  console.log();
  return (
    <>

      <div className="overlay-screen">
        <div className="overlay-child">
         
            <div>
              <img src={overlayData?.image} alt="" style={{ height: "300px" }} />
            </div>
      <div className="overlay-con">
            <div>
              <p style={{ color: "black",fontSize:"larger", fontWeight: "bolder" }}>
                {overlayData?.title}
              </p>
            </div>
 
            <div>
              <p style={{ color: "black" , textTransform : "capitalize"}}>{overlayData?.category}</p>
            </div>

            <div>
                <p>{overlayData?.rating.rate} <FaStar style={{"color": "yellow"}}/> <FaStar style={{"color": "yellow"}}/> <FaStar style={{"color": "yellow"}}/> <FaStar style={{"color": "yellow"}}/></p>
            </div>

            <div>
              <p style={{ color: "black" ,fontWeight: "bolder"}}>${overlayData?.price}</p>
            </div>

            <div>
              <p style={{ "max-width": "500px" }}>{overlayData?.description}</p>
            </div>

            <div>
              <button className="overlay-btn">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverlayComp;
