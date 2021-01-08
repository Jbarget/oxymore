import { TimeLeft } from "./calculateTimeLeft";

const calculateHasLaunched = (timeLeft: TimeLeft): boolean => {
  const values: number[] = Object.values(timeLeft);
  // add all numbers of array and check is <= 0
  // filter out all the numbers <= 0, check array length is 0
  const remainder = values.reduce((accum, value) => {
    return accum + value;
  }, 0);

  return remainder <= 0;
};

export default calculateHasLaunched;
