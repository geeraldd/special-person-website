import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// --- Bear SVGs ---
const WhiteBear = (props) => (
  <svg width="40" height="44" viewBox="0 0 74 84" fill="none" {... props}>
    <ellipse cx="37" cy="52" rx="30" ry="28" fill="#fff"/>
    <ellipse cx="23" cy="36" rx="8" ry="8" fill="#f2f2f2"/>
    <ellipse cx="51" cy="36" rx="8" ry="8" fill="#f2f2f2"/>
    <circle cx="29" cy="53" r="4" fill="#888"/>
    <circle cx="45" cy="53" r="4" fill="#888"/>
    <ellipse cx="37" cy="68" rx="6" ry="5" fill="#FFC0CB"/>
    <ellipse cx="13" cy="22" rx="8" ry="9" fill="#fff"/>
    <ellipse cx="61" cy="22" rx="8" ry="9" fill="#fff"/>
  </svg>
);

const BrownBear = (props) => (
  <svg width="40" height="44" viewBox="0 0 74 84" fill="none" {...props}>
    <ellipse cx="37" cy="52" rx="30" ry="28" fill="#cc9966"/>
    <ellipse cx="23" cy="36" rx="8" ry="8" fill="#e6b87c"/>
    <ellipse cx="51" cy="36" rx="8" ry="8" fill="#e6b87c"/>
    <circle cx="29" cy="53" r="4" fill="#7c482b"/>
    <circle cx="45" cy="53" r="4" fill="#7c482b"/>
    <ellipse cx="37" cy="68" rx="6" ry="5" fill="#FAC898"/>
    <ellipse cx="13" cy="22" rx="8" ry="9" fill="#cc9966"/>
    <ellipse cx="61" cy="22" rx="8" ry="9" fill="#cc9966"/>
  </svg>
);

// --- Daily messages ---
const dailyMessages = [
  "Good morning, beautiful!  You make my heart skip a beat every single day.  💕",
  "You're my favorite person in the entire world. Never forget that. 💖",
  "Every moment with you is a blessing. I love you so much. ✨",
  "You're stronger than you think, braver than you believe, and loved more than you know. 💪💕",
  "I fall for you more every single day. Thank you for being you. 🌹",
  "Life is beautiful because you're in it. I love you.  💕",
  "You make ordinary days extraordinary. I'm so lucky to have you. 🌟",
  "Your smile is my favorite.  Your laugh is my favorite.  YOU are my favorite. 😊💕",
  "I choose you.  Every day. In every way. Forever. 💞",
  "You're my greatest adventure, my sweetest dream, my everything. 💖✨",
  "Thank you for being patient, kind, and amazing. I love you. 💕",
  "You deserve all the happiness in the world. Let me help make that happen. 🌈💕",
  "With you, I found my soulmate. With you, I found home. 🏠💕",
  "I'm obsessed with you. In the best way possible. 😍💖",
  "You're my reason to smile, my reason to believe, my reason to love. 💕",
];

// --- Jokes ---
const jokes = [
  "Babe, alam mo kung bakit masarap ang kape katabi ka? Kasi ikaw ang tamis sa buhay ko ☕🥰",
  "Sabi ng puso ko: 'Ikaw lang sapat na.' Sabi ng wallet ko: 'Ikaw lang talaga ang kaya ko.' 😂",
  "Miss kita… pero okay lang, mamaya miss mo rin ako 😏💕",
  "Babe, parang wifi ka.  Weak ako kung wala ka!  📶❤️",
  "Alam mo ba anong tawag sa taong mahal kita? Ako yun 😌❤️",
  "Pwede ba kita hiramin sa magulang mo?  Isasauli ko rin… sa apelyido ko 😳💍",
  "Kung may forever man, ikaw 'yun...  pero 'wag mo muna akong iiwan maghuhugas pa ako ng pinggan.  💕🧽",
  "Kung pagkain ka, ikaw yung hindi ko kayang i-share kahit sa pinaka-close kong friend 😤🍟❤",
  "Sana selfie na lang tayo, para kahit magkalayo tayo, magka-face to face pa rin.  😂📸",
  "Mahal kita higit pa sa data ko—kahit mag-brownout pa, ikaw pa rin ang maliwanag.  💡",
  "May license ka ba? Kasi bawal mag-drive sa puso ko nang walang permit 🚗💘",
  "Alam mo yung feeling na laging gutom?  Ganun ako sa attention mo 😩🍽️💗",
  "Kung electric fan ka, number 3 sana kita… Mas malakas ang tama 😆💨❤️",
  "Babe, edit mo nga picture ko… Lagyan mo ng ikaw sa tabi ko para perfect 😳📸💕",
  "Babe, I checked the weather… Forecast: 100% chance mamimiss kita mamaya.  🌧️🥺💞",
  "Babe, parang cellphone ka… kasi kahit low storage na ako, ikaw pa rin pina-prioritize ko.  📱❤️",
  "Babe, parang trapik ka… kasi stuck ako sa'yo!  🚗❤️",
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
    const { message: dailyMsg, joke: dailyJoke } = getMessageOfTheDay();
    setContent({ message: dailyMsg, joke: dailyJoke });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ textAlign: "center" }}
    >
      {/* Main greeting */}
      <motion.h1
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
        className="animated-title"
      >
        Hi, Beautiful!  💖
      </motion.h1>

      {/* Bears under greeting */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <WhiteBear style={{ marginRight: '5px' }} />
        <BrownBear />
      </div>

      <motion.p
        className="welcome-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Welcome to a little piece of my heart.  Every word, image, and song here is for you. 🌷
      </motion.p>

      {/* Daily Love Message Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          margin: "28px auto 20px auto",
          background: "linear-gradient(135deg, #fae1f6 0%, #ed6ea0 50%, #fc67fa 100%)",
          borderRadius: "20px",
          boxShadow: "0 12px 28px rgba(237, 110, 160, 0.25)",
          maxWidth: "680px",
          padding: "28px 28px",
          textAlign: "center",
          fontFamily: "'Montserrat', sans-serif",
          color: "#fff",
          fontWeight: 600,
          letterSpacing: "0.04em",
          position: "relative",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          overflow: "hidden"
        }}
      >
        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360, opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            fontSize: "120px",
            zIndex: 0,
            pointerEvents: "none"
          }}
        >
          ✨
        </motion.div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              display: "inline-block",
              background: "rgba(255, 255, 255, 0.95)",
              color: "#d70465",
              padding: "8px 18px",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: 700,
              marginBottom: "14px"
            }}
          >
            Today's Message 💕
          </motion.div>

          <motion.div
            key={message}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "1.3rem",
              fontWeight: 700,
              lineHeight: "1.6",
              textShadow: "0 3px 10px rgba(139, 30, 100, 0.3)",
              marginBottom: "12px"
            }}
          >
            {message}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{
              fontSize: "0.9rem",
              color: "rgba(255, 255, 255, 0.95)",
              fontStyle: "italic"
            }}
          >
            - Your [Favorite Person] 💕
          </motion.div>
        </div>
      </motion.div>

      {/* Joke of the Day Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        style={{
          margin: "20px auto 24px auto",
          background: "linear-gradient(90deg,#fae1f6cc 0%,#fc67fa55 100%)",
          borderRadius: "18px",
          boxShadow: "0 4px 23px #fc67fa60",
          maxWidth: "680px",
          padding: "24px 26px",
          textAlign: "center",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "1.08em",
          color: "#7d3092",
          fontWeight: 600,
          letterSpacing: "0.04em",
          position: "relative",
          border: "2px solid rgba(252, 103, 250, 0.2)"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-18px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#ed6ea0",
            color: "#fff",
            padding: "7px 21px",
            borderRadius: "17px",
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1.08em",
            boxShadow: "0 2px 11px #ed6ea077",
            fontWeight: 700
          }}
        >
          Joke of the Day 😄
        </div>
        <div style={{ marginTop: "16px", whiteSpace: "pre-line" }}>
          {joke}
        </div>
      </motion.div>

      {/* Heart animation */}
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 80 }}
      >
        <img src="/heart.svg" alt="heart" style={{ width: "70px", marginBottom: "18px" }} />
      </motion.div>
    </motion.div>
  );
}