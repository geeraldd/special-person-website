import { useEffect, useState } from "react";

const crossedDate = new Date("2021-08-01T00:00:00"); // Change this to your start date

function getTimeDiff(start) {
  const now = new Date();
  const diffMs = now - start;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function CrossPathTimer() {
  const [timer, setTimer] = useState(getTimeDiff(crossedDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(getTimeDiff(crossedDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      background: "linear-gradient(90deg, rgba(196, 30, 58, 0.95), rgba(212, 175, 55, 0.95), rgba(22, 91, 51, 0.95))",
      backdropFilter: "blur(20px) saturate(180%)",
      color: "#fff",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      padding: "12px 16px",
      textAlign: "center",
      fontSize: "0.95rem",
      boxShadow: "0 -4px 24px rgba(196, 30, 58, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
      zIndex: 999,
      borderTop: "2px solid rgba(255, 255, 255, 0.3)"
    }}>
      <span style={{ fontWeight: 500, fontSize: "0.9rem", opacity: 0.95 }}>
        🎄 Crossed Path Since <span style={{ fontWeight: "700" }}>{crossedDate.toLocaleDateString()}</span>
      </span>
      <span style={{
        marginLeft: "10px",
        marginRight: "4px",
        opacity: 0.7
      }}>
        →
      </span>
      <span style={{
        fontFamily: "'Cinzel', serif",
        fontSize:  "1rem",
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }}>
        {timer.days}d {timer.hours}h {timer.minutes}m {timer. seconds}s
      </span>
      <span style={{ marginLeft: "8px", opacity: 0.9 }}>❤️</span>
    </div>
  );
}