import React from "react";
import {
  StyledButton,
  StyledButtonDown,
  StyledButtonUp,
} from "./Buttons.styled";

type ButtonProps = {
  children?: number;
  summonElevator?: () => void;
  handleFloorSelection?: () => void;
};

export const Button = ({ children, handleFloorSelection }: ButtonProps) => {
  return <StyledButton onClick={handleFloorSelection}>{children}</StyledButton>;
};

export const ButtonUp = ({ summonElevator }: ButtonProps) => (
  <StyledButtonUp onClick={summonElevator} />
);
export const ButtonDown = ({ summonElevator }: ButtonProps) => (
  <StyledButtonDown onClick={summonElevator} />
);
