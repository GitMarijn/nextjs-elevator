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
  disabled?: boolean;
};

export const Button = ({
  children,
  handleFloorSelection,
  disabled,
}: ButtonProps) => {
  return (
    <StyledButton onClick={handleFloorSelection} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export const ButtonUp = ({ summonElevator }: ButtonProps) => (
  <StyledButtonUp onClick={summonElevator} />
);
export const ButtonDown = ({ summonElevator }: ButtonProps) => (
  <StyledButtonDown onClick={summonElevator} />
);
