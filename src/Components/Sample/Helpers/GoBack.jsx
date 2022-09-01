import { Link } from "react-router-dom";
import back from "../../../Images/Icons/back.png";

export default function GoBack() {
  return (
    <Link to="/">
      <img src={back} alt="backButton" width="20" />
    </Link>
  );
}
