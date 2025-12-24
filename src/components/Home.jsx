import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const CoolBear = (props) => (
  <svg width="44" height="48" viewBox="0 0 74 84" fill="none" {... props}>
    <ellipse cx="37" cy="52" rx="30" ry="28" fill="#C41E3A" opacity="0.15"/>
    <ellipse cx="37" cy="52" rx="28" ry="26" fill="#165B33" opacity="0.12"/>
    <ellipse cx="23" cy="36" rx="8" ry="8" fill="#C41E3A" opacity="0.2"/>
    <ellipse cx="51" cy="36" rx="8" ry="8" fill="#165B33" opacity="0.2"/>
    <circle cx="29" cy="53" r="4" fill="#1e293b"/>
    <circle cx="45" cy="53" r="4" fill="#1e293b"/>
    <ellipse cx="37" cy="68" rx="6" ry="5" fill="#C41E3A" opacity="0.3"/>
    <ellipse cx="13" cy="22" rx="8" ry="9" fill="#C41E3A" opacity="0.15"/>
    <ellipse cx="61" cy="22" rx="8" ry="9" fill="#165B33" opacity="0.15"/>
    <rect x="25" y="48" width="8" height="4" rx="2" fill="#1e293b" opacity="0.8"/>
    <rect x="41" y="48" width="8" height="4" rx="2" fill="#1e293b" opacity="0.8"/>
    <line x1="33" y1="50" x2="41" y2="50" stroke="#1e293b" strokeWidth="2" opacity="0.8"/>
  </svg>
);

const dailyMessages = [
  "Yo! Hope today treats you right.  You got this! 💪",
  "Just checking in - you're doing amazing.  Keep it up! 🚀",
  "Real talk: You're one of the best people I know. 🎯",
  "Today's vibe:  Unstoppable.  That's you.  ⚡",
  "Quick reminder: You're capable of incredible things. 🌟",
  "Sending good energy your way. Let's get it! 🔥",
  "You make life better just by being you. Facts. ✨",
  "Keep being awesome.  The world needs more of you.  🌍",
  "Your presence matters. Don't forget that. 💫",
  "Building something great together.  Proud of you.  🏆",
  "Thanks for being real.  That's rare these days. 🙏",
  "You deserve all the wins coming your way. 👑",
  "Found my go-to person.  That's you.  Always. 🤝",
  "Your energy is unmatched. Keep shining.  ✨",
  "Every day with you in it is automatically better. 💯",
  "Hey, take a breath. You’re exactly where you need to be right now. 🌱",
  "Whatever today throws at you, I know you’ll handle it with grace. 💪",
  "Whatever you’re working toward, you’re closer than yesterday. 📈",
  "Salamat sa pagiging totoo sa sarili mo. That’s powerful. 💎",
  "Rest if you need to, but don’t give up. Malayo ka na. 🌄",
  "Trust the process. Kahit mabagal, umuusad pa rin. 🛤️",
  "Keep going. The best chapters are still ahead. 📖✨",
  "Di mo kailangan maging iba. You are already enough. 🌸",

];

const jokes = [
  "Bro, bakit parang WiFi ka? Kasi weak ako pag wala ka!  📶😂",
  "Di ako marunong mag-code pero ikaw yung only exception ko 💻❤️",
  "Kung traffic ang buhay, ikaw yung green light na hinihintay ko 🚦🥹",
  "Para kang OTP—maikli lang pero sobrang importante 🔐😂",
  "Sabi nila wag ma-attach, pero too late… naka-pin ka na sa heart ko 📌💓",
  "Di ka Google Maps pero ikaw yung direksyon ko lately 🧭❤️",
  "Di ako minimalist, pero ikaw lang sapat na 🫶",
  "Para kang soft launch—di pa official pero ramdam na ramdam 💭❤️",
  "Di ka naman unan, pero gusto kitang yakapin buong gabi 😌🫶",
  "Kung landi ay subject, pasado ako basta ikaw ang exam 😏📘",
  "Bro, bakit parang gravity ka? Lahat ng atensyon ko nahuhulog sa’yo 😳🔥",
  "Para kang slow burn—di minamadali pero lalong umiinit 😏❤️",
  "Kung may warning label ka, nakalagay siguro: ‘Nakakaadik’ 😏⚠️",
  "Bro, bakit parang mainit ang panahon pag kausap kita? Climate change ba ‘to 😏😂",
  "Di kita inaasar… inaangkin lang 😏🔥",
  "Di ka naman bawal, pero bakit parang masarap suwayin 😏😂",
  "Kung landi ay kasalanan, uulit-ulitin ko 😏🔥",
  "Di ako tamad… energy-saving mode lang 😌🔋",
  "Kung antok ay kaibigan, bestfriend mo na 😭",

];

function getMessageOfTheDay() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return {
    message: dailyMessages[day % dailyMessages.length],
    joke: jokes[day % jokes.length]
  };
}

export default function Home() {
  const [{ message, joke }, setContent] = useState({ message: '', joke: '' });

  useEffect(() => {
    const { message:  dailyMsg, joke: dailyJoke } = getMessageOfTheDay();
    setContent({ message:  dailyMsg, joke: dailyJoke });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{ textAlign: "center" }}
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness:  100, delay: 0.2 }}
        className="animated-title"
      >
        Hi Handsome!  👋
      </motion.h1>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ 
          textAlign: 'center', 
          marginBottom: '28px',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CoolBear />
        <div style={{
          fontFamily: "'Cinzel', serif",
          fontSize:  '1.1rem',
          color: '#165B33',
          fontWeight: 700
        }}>
          Happy Christmas 🎄
        </div>
        <CoolBear style={{ transform: 'scaleX(-1)' }} />
      </motion.div>

      <motion.p
        className="welcome-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        This is your special Christmas space.  Everything here is made just for you.✨
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{
          margin: "32px auto 24px auto",
          background: "linear-gradient(135deg, rgba(196, 30, 58, 0.12) 0%, rgba(212, 175, 55, 0.10) 100%)",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(196, 30, 58, 0.15)",
          maxWidth: "700px",
          padding: "36px 32px",
          textAlign: "left",
          fontFamily: "'Montserrat', sans-serif",
          position: "relative",
          border: "2px solid rgba(212, 175, 55, 0.25)",
          overflow: "hidden",
          backdropFilter: "blur(10px)"
        }}
      >
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{
            position:  "absolute",
            top: "-50px",
            right: "-50px",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(212, 175, 55, 0.15), transparent)",
            borderRadius: "50%",
            zIndex: 0,
            pointerEvents: "none"
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x:  0 }}
            transition={{ delay: 0.8 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(135deg, #C41E3A, #D4AF37)",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "12px",
              fontSize: "0.85rem",
              fontWeight: 700,
              marginBottom: "16px",
              letterSpacing: "-0.01em",
              boxShadow: "0 4px 12px rgba(196, 30, 58, 0.25)"
            }}
          >
            <span>📬</span> MOTIVATION
          </motion.div>

          <motion.div
            key={message}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity:  1, y: 0 }}
            transition={{ delay: 1 }}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.55rem",
              fontWeight: 700,
              lineHeight: "1.5",
              color: "#C41E3A",
              marginBottom: "16px",
              letterSpacing: "-0.01em"
            }}
          >
            {message}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              fontSize: "0.95rem",
              color: "#165B33",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap:  "8px"
            }}
          >
            <span style={{
              width: "8px",
              height: "8px",
              background: "linear-gradient(135deg, #C41E3A, #D4AF37)",
              borderRadius: "50%",
              display: "inline-block"
            }} />
            From: gerald 💚
          </motion.div>
        </div>
      </motion.div>

      <motion. div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{
          margin: "24px auto 32px auto",
          background: "linear-gradient(135deg, rgba(165, 92, 246, 0.10) 0%, rgba(6, 182, 212, 0.08) 100%)",
          borderRadius: "20px",
          boxShadow: "0 4px 24px rgba(196, 30, 58, 0.12)",
          maxWidth: "700px",
          padding: "28px 28px",
          textAlign: "left",
          fontFamily: "'Montserrat', sans-serif",
          position: "relative",
          border: "2px solid rgba(196, 30, 58, 0.15)",
          backdropFilter: "blur(10px)"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-14px",
            left: "24px",
            background: "linear-gradient(135deg, #C41E3A, #D4AF37)",
            color: "#fff",
            padding: "6px 18px",
            borderRadius: "12px",
            fontFamily: "'Cinzel', serif",
            fontSize: "0.9rem",
            boxShadow: "0 4px 12px rgba(196, 30, 58, 0.3)",
            fontWeight: 700,
            letterSpacing: "-0.01em"
          }}
        >
          😄 JOKE OF THE DAY
        </div>
        <div style={{ 
          marginTop: "12px", 
          whiteSpace: "pre-line",
          fontSize: "1.05rem",
          color: "#165B33",
          lineHeight: "1.7",
          fontWeight: 500
        }}>
          {joke}
        </div>
      </motion.div>
    </motion.div>
  );
}