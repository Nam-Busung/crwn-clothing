import React, { InputHTMLAttributes } from "react";
import "./form-input.styles.scss";
//import classNames from "classnames/bind";

interface FormInputProps
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  value: string;
}

//let cx = classNames.bind(styles);
const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />

      {label && (
        <label
          className={`${
            otherProps?.value?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
