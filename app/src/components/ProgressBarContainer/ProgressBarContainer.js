import green_strike from "../../assets/svg/green_strike.svg";
import yellow_strike from "../../assets/svg/yellow_strike.svg";
import red_strike from "../../assets/svg/red_strike.svg";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./ProgressBarContainer.css";

const colorTable = (val) => {
  switch (true) {
    case val < 50:
      return { color: "#E69281", img: red_strike };
    case val >= 50 && val <= 80:
      return { color: "#E2C84E", img: yellow_strike };
    case val > 80:
      return { color: "#BDC667", img: green_strike };
    default:
      return { color: "#FFFFFF" };
  }
};

export default function ProgressBarContainer({ label, value }) {
  return (
    <div>
      <p className="skill_title">{label}</p>
      <ProgressBar IsMain={false} width={value} />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <img src={colorTable(value)["img"]} className="strike_img" alt="" />
        <a
          href="/"
          style={{ color: "#000", fontWeight: "400" }}
          className="upgrade_link"
        >
          повысить
        </a>
      </div>
    </div>
  );
}
