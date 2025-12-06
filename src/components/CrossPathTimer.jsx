import { useEffect, useState } from "react";

const crossedDate = new Date("2023-08-01T00:00:00"); // <-- Your start date

function getTimeDiff(start) {
  const now = new Date();
  const diffMs = now - start;
  const days   = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours  = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes= Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds= Math.floor((diffMs / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function CrossPathTimer() {
  const [timer, setTimer] = useState(getTimeDiff(crossedDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(getTimeDiff(crossedDate));
    }, 1000); // update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      background: "linear-gradient(90deg,#fae1f6,#a18cd1,#ed6ea0)",
      color: "#572b48",
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: 600,
      letterSpacing: "0.07em",
      padding: "9px 0",
      textAlign: "center",
      fontSize: "1.12em",
      boxShadow: "0 -4px 18px #fae1f6cc",
      zIndex: 999
    }}>
      Crossed paths since <span style={{ fontWeight: "bold" }}>{crossedDate.toLocaleDateString()}</span> — 
      <span style={{
        color: "#d70465",
        marginLeft: "5px",
        fontFamily: "'Dancing Script', cursive"
      }}>
        {timer.days} days, {timer.hours} hours, {timer.minutes} min, {timer.seconds} sec
      </span>
    </div>
  );
}