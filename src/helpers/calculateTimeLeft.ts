export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (date: string): TimeLeft => {
  // +12 hours is so that the countdown ends at +13 hours CET on the launchDate shown
  const hourInMilliseconds = 60 * 60 * 1000;
  const difference =
    Number(new Date(date).getTime()) -
    Number(new Date().getTime()) +
    12 * hourInMilliseconds;

  const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutesLeft = Math.floor((difference / 1000 / 60) % 60);
  const secondsLeft = Math.floor((difference / 1000) % 60);

  const timeLeft = {
    days: daysLeft < 0 ? 0 : daysLeft,
    hours: hoursLeft < 0 ? 0 : hoursLeft,
    minutes: minutesLeft < 0 ? 0 : minutesLeft,
    seconds: secondsLeft < 0 ? 0 : secondsLeft,
  };
  return timeLeft;
};

export default calculateTimeLeft;
