import React from "react";
import { ButtonDown, ButtonUp } from "../../common/Buttons/Buttons";
import { FLOORS } from "../../../../constants/floors.constants";
import { FloorElement, FloorWrapper } from "./Elevator.styled";

type ElevatorProps = {
  currentFloor: number;
  summonElevator: (direction: string, floor: number) => void;
  direction: string | null;
  moving: boolean;
};

const Elevator = ({
  summonElevator,
  currentFloor,
  direction,
  moving,
}: ElevatorProps) => {
  return (
    <FloorWrapper>
      <h2>Floors</h2>
      {moving && <p>ELEVATOR IS MOVING</p>}
      {direction ? (
        <p>{`Going ${direction}`}</p>
      ) : (
        <p>Please set a direction UP/DOWN</p>
      )}
      {FLOORS?.map((floor) => (
        <FloorElement key={floor} currentFloor={currentFloor === floor}>
          <>
            {floor < 5 && (
              <ButtonUp summonElevator={() => summonElevator("up", floor)} />
            )}
            {floor}
            {floor > 0 && (
              <ButtonDown
                summonElevator={() => summonElevator("down", floor)}
              />
            )}
          </>
        </FloorElement>
      ))}
    </FloorWrapper>
  );
};

export default Elevator;
