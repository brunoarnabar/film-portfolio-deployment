import { ReactComponent as MyLogo } from "./BrunoLogo.svg";
import "./logo.scss"

export default function App() {
  return (
    <div className="MyLogoContainer">
      <MyLogo
      className="BrunoLogo"
        fill="var(--clr-neutral-400)"
        stroke="none"
        height={"2.5rem"}
      />
    </div>
  );
}
