// import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import back from "../../../Images/Icons/back.png";

export default function GoBack() {
  // const location = useLocation();
  // console.log(location);
  
  return (
    <div
      onClick={() => {
        // setTimeout(function () {
        //   window.location.replace("/#sample");
        // }, 2);
        window.location.replace("/#sample");
      }}
    >
      <img src={back} alt="backButton" width="35rem" />
    </div>
    // <Link to="/#sample">max(9%, 27rem)
    //   <a href="#sample"> 27rem 54rem clamp(27rem, 9%, 54rem)
    //     <img src={back} alt="backButton" width="20" />
    //   </a>
    // </Link>
  );
}
