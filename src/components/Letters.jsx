import React, { useState } from "react";

/*
  Letters header adjusted so icons do NOT overlap the title.
  Icons placed to the far right as a small tool area; title centered and clear.
*/

const WhiteBear = (props) => (
  <svg width="26" height="28" viewBox="0 0 74 84" fill="none" {...props}>
    <ellipse cx="37" cy="52" rx="30" ry="28" fill="#fff"/>
    <ellipse cx="23" cy="36" rx="8" ry="8" fill="#f2f2f2"/>
    <ellipse cx="51" cy="36" rx="8" ry="8" fill="#f2f2f2"/>
    <circle cx="29" cy="53" r="4" fill="#888"/>
    <circle cx="45" cy="53" r="4" fill="#888"/>
  </svg>
);

const BrownBear = (props) => (
  <svg width="26" height="28" viewBox="0 0 74 84" fill="none" {...props}>
    <ellipse cx="37" cy="52" rx="30" ry="28" fill="#cc9966"/>
    <ellipse cx="23" cy="36" rx="8" ry="8" fill="#e6b87c"/>
    <ellipse cx="51" cy="36" rx="8" ry="8" fill="#e6b87c"/>
    <circle cx="29" cy="53" r="4" fill="#7c482b"/>
    <circle cx="45" cy="53" r="4" fill="#7c482b"/>
  </svg>
);

const letters = [
  {
    title: "Open Letter — Memory",
    content: "My love, every day with you is a new adventure. Just seeing you smile gives my heart a reason to beat. 💐"
  },
  {
    title: "Open Letter — Encouragement",
    content: "When you're around, the world is warmer. You are my comfort, my joy, and my inspiration. I love you beyond words. ✨"
  },
  {
    title: "Open Letter — Promise",
    content: "Thank you for being you—so wonderfully, beautifully you. Here's to more memories together. 🥰"
  }
];

export default function Letters() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div>
      {/* Header: title centered; icons moved to right-hand tool area so they don't overlap */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <WhiteBear />
          <h2 style={{ margin: 0 }}>Letters for You</h2>
          <BrownBear />
        </div>

        {/* right tool area */}
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button className="interactive-icon" title="Write a new letter">✍️</button>
          <button className="interactive-icon" title="Surprise">🎁</button>
        </div>
      </div>

      {letters.map((letter, idx) => (
        <div
          key={idx}
          className="letter-envelope"
          onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          style={{
            position: "relative",
            margin: "14px auto",
            maxWidth: "640px",
            padding: "18px",
            background: "#fffbea",
            borderRadius: "18px",
            boxShadow: "0 2px 14px #ed6ea030",
            textAlign: "left",
            cursor: "pointer"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <WhiteBear style={{ width: 28, height: 30 }} />
              <b style={{ fontSize: "1.05rem" }}>{letter.title}</b>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="interactive-icon" title="Share">🔗</button>
              <button className="interactive-icon" title="Favorite">⭐</button>
            </div>
          </div>

          {openIdx === idx && (
            <div className="letter-content" style={{
              marginTop: "12px",
              color: "#a18cd1",
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.14em'
            }}>
              {letter.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}