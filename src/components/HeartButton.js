import HeartShape from "./icon/HeartShape";
import "./HeartButton.css";

function HeartButton({ className = "" }) {
  return (
    <button className={`heart-button  ${className}`}>
      <div className="heart-button__outline">
        <HeartShape />
      </div>
    </button>
  );
}

export default HeartButton;
