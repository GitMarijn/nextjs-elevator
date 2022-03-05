import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { GenericPageWrapper } from "../src/components/common/layout/layout.styled";
import ControlPanel from "../src/components/dedicated/ControlPanel/ControlPanel";
import Elevator from "../src/components/dedicated/Elevator/Elevator";

const Home: NextPage = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(0);
  const [direction, setDirection] = useState<string | null>(null);
  // const [requestedFloors, setRequestedFloors] = useState<Array<number>>([]);
  let floorArray: Array<number> = [];

  const summonElevator = (direction: string) => {
    setDirection(direction);
  };

  const handleFloorSelection = (floor: number) => {
    if (!direction)
      return alert("Please select a direction first (UP or DOWN)");

    if (!floorArray.includes(floor) && currentFloor !== floor) {
      floorArray = [...floorArray, floor].sort((a, b) => a - b);

      floorArray.forEach((item, i) => {
        console.log(i);

        setTimeout(() => setCurrentFloor(item), i * 1000 + 2000);
      });
      console.log("ARRAY:", floorArray);
    }

    // if (direction === "up") {
    //   floorArray = [...floorArray, floor];

    //   const sortedFloors = [...new Set(floorArray)].sort((a, b) => a - b);

    //   sortedFloors.forEach((item) => {
    //     const bla = setInterval(() => setCurrentFloor(item), 2000);
    //   });

    //   if (currentFloor === sortedFloors[0]) {
    //     sortedFloors.shift();
    //   }

    //   console.log(sortedFloors);
    // }

    if (direction === "down")
      floorArray = [...floorArray, floor].sort((a, b) => b - a);
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
