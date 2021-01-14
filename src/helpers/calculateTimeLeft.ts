export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (date: string): TimeLeft => {
  const difference =
    Number(new Date(date).getTime()) - Number(new Date().getTime());

  // +18 hours is so that the countdown ends at 6pm on the launchDate shown
  const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((difference / (1000 * 60 * 60)) % 24) + 18;
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
