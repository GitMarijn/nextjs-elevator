import React from "react";
import { Button } from "../../common/Buttons/Buttons";
import { ButtonContainer } from "./ControlPanel.styled";
import { FLOORS } from "../../../../constants/floors.constants";

type ControlPanelProps = {
  handleFloorSelection: (floor: number) => void;
  calculateDisabledButton: (floor: number) => boolean | undefined;
  direction: string | null;
};

const ControlPanel = ({
  handleFloorSelection,
  direction,
  calculateDisabledButton,
}: ControlPanelProps) => {
  return (
    <ButtonContainer>
      <h2>Inside elevator</h2>
      {direction && <p>Which floor would you like to go?</p>}
      {FLOORS.map((floor) => (
        <Button
          key={floor}
          handleFloorSelection={() => handleFloorSelection(floor)}
          disabled={calculateDisabledButton(floor)}
        >
          {floor}
        </Button>
      ))}
    </ButtonContainer>
  );
};

export default ControlPanel;
