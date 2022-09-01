import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import back from "../../../Images/Icons/back.png";

export default function GoBack() {
  const location = useLocation();
  console.log(location);
  
  return (
    <div
      onClick={() => window.location.replace("/#sample")}
    >
      <img src={back} alt="backButton" width="20" />
    </div>
    // <Link to="/#sample">
    //   <a href="#sample">
    //     <img src={back} alt="backButton" width="20" />
    //   </a>
    // </Link>
  );
}
