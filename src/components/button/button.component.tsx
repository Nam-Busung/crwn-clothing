import React, { ButtonHTMLAttributes } from "react";
import "./button.styles.scss";

interface ButtonProps
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonType?: "google" | "inverted";
}

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  ...otherProps
}) => {
  return (
    <button
      className={`button-container ${
        buttonType && BUTTON_TYPE_CLASSES[buttonType]
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
