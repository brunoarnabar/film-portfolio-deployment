import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import back from "../../../Images/Icons/back.png";

export default function GoBack() {
  let navigate = useNavigate();
  return (
    <Link to="/">
      <img src={back} alt="backButton" width="20" />
    </Link>
  );
}
