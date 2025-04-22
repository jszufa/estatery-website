import "./Button.css";

function Button({
  children,
  variant = "primary",
  disabled,
  onClick,
  className = "",
}) {
  return (
    <button
      className={`btn ${variant} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
