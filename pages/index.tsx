import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { GenericPageWrapper } from "../src/components/common/Layout/layout.styled";
import ControlPanel from "../src/components/dedicated/ControlPanel/ControlPanel";
import Elevator from "../src/components/dedicated/Elevator/Elevator";

const Home: NextPage = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(0);
  const [direction, setDirection] = useState<string>("up");
  const [moving, setMoving] = useState<boolean>(false);

  let floorQueue: Array<number> = [];

  useEffect(() => {
    currentFloor === 5 && setDirection("down");
    currentFloor === 0 && setDirection("up");
  }, [currentFloor]);

  const moveElevator = (floor: number, delay: number) => {
    setMoving(true);
    setTimeout(() => {
      setCurrentFloor(floor);
      setMoving(false);
    }, delay);
  };

  // Calls the elevator, preparing it to go UP or DOWN
  const summonElevator = (direction: string, floor: number) => {
    setDirection(direction);
    moveElevator(floor, (floor - currentFloor) * 500 + 1000);
  };

  // Select floor(s) where the elevator should stop
  const handleFloorSelection = (floor: number) => {
    if (!direction)
      return alert("Please select a direction first (UP or DOWN)");

    if (direction === "up") {
      // Prevent adding duplicate floors, the floor you're currently on and floors lower than current floor (because you want to go UP)
      if (
        !floorQueue.includes(floor) &&
        currentFloor !== floor &&
        currentFloor < floor
      ) {
        // Sort floors from low to high when going up
        floorQueue = [...floorQueue, floor].sort((a, b) => a - b);
        floorQueue.forEach((item) =>
          moveElevator(item, (floor - currentFloor) * 1000 + 1000)
        );
      }
    }
    if (direction === "down") {
      // Prevent adding duplicate floors, the floor you're currently on and floors higher than current floor (because you want to go DOWN)
      if (
        !floorQueue.includes(floor) &&
        currentFloor !== floor &&
        currentFloor > floor
      ) {
        // Sort floors from high to low when going down
        floorQueue = [...floorQueue, floor].sort((a, b) => b - a);
        floorQueue.forEach((item) =>
          moveElevator(item, (currentFloor - floor) * 1000 + 1000)
        );
      }
    }
  };

  const calculateDisabledButton = (floor: number) => {
    if (direction === "up") return currentFloor > floor;
    if (direction === "down") return currentFloor < floor;
  };

  return (
    <>
      <Head>
        <title>Next.js Elevator Simulator</title>
      </Head>
      <GenericPageWrapper>
        <ControlPanel
          handleFloorSelection={handleFloorSelection}
          direction={direction}
          calculateDisabledButton={calculateDisabledButton}
        />
        <Elevator
          summonElevator={summonElevator}
          currentFloor={currentFloor}
          direction={direction}
          moving={moving}
        />
      </GenericPageWrapper>
    </>
  );
};

export default Home;
