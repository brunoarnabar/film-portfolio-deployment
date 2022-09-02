import LoaderDots from "../../Loader/LoaderDots";
import back from "../../../Images/Icons/back.png";

export default function GoBack() {

  return (
    <div
      onClick={() => {
        setTimeout(() => {
          window.location.replace("/#sample");
        }, 300);
      }}
    >
      <LoaderDots load={false} />
      <img src={back} alt="backButton" width="35rem" />
    </div>
  );
}
