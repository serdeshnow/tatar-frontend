import "./ProgressBar.css";

const colorTable = (val) => {
  switch (true) {
    case val < 50:
      return "#E69281";
    case val >= 50 && val <= 80:
      return "#E2C84E";
    case val > 80:
      return "#C1CB68";
    default:
      return "#FFFFFF";
  }
};

export default function ProgressBar({ width, isMain }) {
  return (
    <div>
      <div
        style={{
          borderColor: isMain ? "#1F9C00" : colorTable(parseInt(width)),
        }}
        className="progress_container"
      >
        <div
          style={{
            width: `${width}%`,
            backgroundColor: isMain ? "#1F9C00" : colorTable(parseInt(width)),
          }}
          className="progress_bar"
        />
      </div>
    </div>
  );
}
