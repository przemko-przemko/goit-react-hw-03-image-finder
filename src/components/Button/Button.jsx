import React from "react";
import { LoadmoreButton } from "./Button_styles";

const Button = ({ onClick }) => {
  return <LoadmoreButton onClick={onClick}>Add more</LoadmoreButton>;
};

export default Button;
