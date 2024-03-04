import { MouseEventHandler, ReactNode } from "react"

const Button = ({
  type = "button",
  onClick,
  children,
  isDisabled = false,
  variant = "primary",
}: {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactNode;
  isDisabled?: boolean,
  variant?: string;
}) => {
  const buttonStyle: React.CSSProperties = {
    height: "40px",
    marginTop: "15px",
    borderRadius: "20px",
    border: "none",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "0.5px",
    color: "#ffffff",
    cursor: "pointer",
  };

  // Handle variant
  if (variant === "primary") {
    buttonStyle.backgroundImage = "linear-gradient(98deg, #712bda, #a45deb)";
  } else if (variant === "secondary") {
    buttonStyle.backgroundColor = "rgba(255, 255, 255, 0.2)";
  }

  return (
    <button 
      type={type}
      disabled={isDisabled}
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
