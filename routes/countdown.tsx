// routes/countdown.tsx

import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  console.log(date.toISOString())
  return (
    <p>
      The big event is happening <Countdown target={date.toISOString()} />.
    </p>
  );
}