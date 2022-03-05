import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { GenericPageWrapper } from "../src/components/common/layout/layout.styled";
import ControlPanel from "../src/components/dedicated/ControlPanel/ControlPanel";
import Elevator from "../src/components/dedicated/Elevator/Elevator";

const Home: NextPage = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(0);
  const [direction, setDirection] = useState<string | null>(null);
  const [requestedFloors, setRequestedFloors] = useState<Array<number>>([]);
  let floorArray: Array<number> = [];

  const summonElevator = (direction: string) => {
    setDirection(direction);
  };
  const handleFloorSelection = (floor: number) => {
    if (!direction)
      return alert("Please select a direction first (UP or DOWN)");

    if (direction === "up") floorArray = [...floorArray, floor];
    const sortedFloors = [...new Set(floorArray)].sort((a, b) => a - b);
    sortedFloors.forEach((item) =>
      setInterval(() => setCurrentFloor(item), 2000)
    );
    clearInterval();
    // setInterval(() => setCurrentFloor(sortedFloors[0]), 3000);
    console.log(sortedFloors);

    if (direction === "down")
      floorArray = [...floorArray, floor].sort((a, b) => b - a);

    console.log(currentFloor);
  };

  console.log("CurrentFloor:", currentFloor);

  return (
    <>
      <Head>
        <title>Next.js Elevator Simulator</title>
      </Head>
      <GenericPageWrapper>
        <ControlPanel
          handleFloorSelection={handleFloorSelection}
          direction={direction}
        />

        <Elevator
          summonElevator={summonElevator}
          currentFloor={currentFloor}
          direction={direction}
        />
      </GenericPageWrapper>
    </>
  );
};

export default Home;
