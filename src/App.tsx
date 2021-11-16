import { useEffect, useState } from "react";

type TDate = {
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
};

import "./App.css";

function App() {
  const [dateTime, setDateTime] = useState<TDate>({
    hours:
      new Date().getHours() < 10
        ? `0${new Date().getHours()}`
        : new Date().getHours(),
    minutes:
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : new Date().getMinutes(),
    seconds:
      new Date().getSeconds() < 10
        ? `0${new Date().getSeconds()}`
        : new Date().getSeconds(),
  });
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime({
        hours:
          new Date().getHours() < 10
            ? `0${new Date().getHours()}`
            : new Date().getHours(),
        minutes:
          new Date().getMinutes() < 10
            ? `0${new Date().getMinutes()}`
            : new Date().getMinutes(),
        seconds:
          new Date().getSeconds() < 10
            ? `0${new Date().getSeconds()}`
            : new Date().getSeconds(),
      });
    }, 1000);
    setTimezone(new Intl.DateTimeFormat().resolvedOptions().timeZone);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <div className="Clock">
        {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
      </div>
      <div className="Timezone">{timezone}</div>
    </div>
  );
}

export default App;
