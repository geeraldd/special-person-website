import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const compliments = [
  "💼 Ang galing mo sa mga ginagawa mo, kahit minsan di mo napapansin",
  "🤍 Ang sarap mahalin ng taong tulad mo—totoo at walang arte",
  "🧠 Ang talino mo, lalo na sa paraan ng pag-iisip mo sa buhay",
  "🏆 Isa ka sa mga taong hindi sumusuko, at ang lakas nun",
  "🌹 You make the world a better place just by being in it",
  "🦋 You're beautiful inside and out",
  "🌺 You're enough, exactly as you are",
  "🌈 You make my life colorful",
  "🌟 You're the kind of person everyone wants as a friend",
  "💖 You're loved more than you know",
  "🌸 You inspire me to be better",
  "💫 You make a difference in people's lives",
  "🌟 You deserve happiness more than anyone",
  "🛡️ Ang pakiramdam ko ligtas ako pag kasama kita",
  "🌈 Kahit di perfect, ikaw yung pinipili ko araw-araw",
  "💖 Ang halaga mo hindi nasusukat—ramdam lang",
  "🔥 Ang tapang mo humarap sa problema, tahimik pero buo",
  "✨ Isa ka sa pinakamagandang nangyari sa buhay ko",
  "🤝 Ang sarap mong gawing kakampi sa kahit anong laban",
  "🔥 Araw-araw, mas pinipili kitang mahalin",
  "🤝 Ikaw yung gusto kong kakampi palagi",
];

function getDailyCompliment() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  const index = day % compliments.length;
  return { compliment: compliments[index], index };
}

export default function DailyCompliments() {
  const [compliment, setCompliment] = useState("");

  useEffect(() => {
    const { compliment:  dailyCompliment } = getDailyCompliment();
    setCompliment(dailyCompliment);
  }, []);

  return (
    <div style={{
      width: '100%',
      padding: '0'
    }}>
      {/* Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: 'center',
          marginBottom: '28px'
        }}
      >
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2.4rem',
          color: '#C41E3A',
          margin: '0 0 8px 0',
          textShadow: '0 2px 8px rgba(196, 30, 58, 0.25)',
          fontWeight: 800,
          letterSpacing: '-0.02em'
        }}>
          Daily Affirmation ✨
        </h2>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          color: '#165B33',
          fontSize: '0.95rem',
          margin: '0',
          fontWeight: 600
        }}>
          ✨ A new compliment for you, every single day
        </p>
      </motion.div>

      {/* Main compliment card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity:  1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          background:  'linear-gradient(135deg, #C41E3A 0%, #D4AF37 50%, #165B33 100%)',
          borderRadius: '24px',
          padding: '40px 30px',
          boxShadow: '0 20px 40px rgba(196, 30, 58, 0.3)',
          textAlign: 'center',
          marginBottom: '28px',
          position: 'relative',
          overflow: 'hidden',
          border: '2px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        {/* Decorative background elements */}
        <motion.div
          animate={{ rotate: 360, opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration:  20, repeat: Infinity }}
          style={{
            position:  'absolute',
            top:  '-50px',
            right: '-50px',
            fontSize: '150px',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        >
          ✨
        </motion.div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Daily label */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.95)',
              color: '#C41E3A',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 700,
              marginBottom: '16px',
              fontFamily: "'Montserrat', sans-serif"
            }}
          >
            Today's Affirmation ✨
          </motion.div>

          {/* Main compliment text */}
          <motion.div
            key={compliment}
            initial={{ opacity: 0, y:  20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.95rem',
              color: '#fff',
              fontWeight: 700,
              lineHeight: '1.6',
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
              marginBottom: '20px'
            }}
          >
            {compliment}
          </motion.div>

          {/* Motivational addition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize:  '0.95rem',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 600,
              marginBottom: '20px'
            }}
          >
            This is your daily reminder from me.  💕
          </motion.div>
        </div>
      </motion.div>

      {/* Info section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.08), rgba(212, 175, 55, 0.08))',
          borderRadius: '16px',
          padding: '20px',
          border: '2px solid rgba(212, 175, 55, 0.15)',
          textAlign: 'center'
        }}
      >
        <div style={{
          fontFamily: "'Montserrat', sans-serif",
          color: '#165B33',
          fontSize: '0.95rem',
          fontWeight: 600,
          marginBottom: '8px'
        }}>
          💫 You get a new compliment every 24 hours at midnight
        </div>
        <div style={{
          fontFamily:  "'Montserrat', sans-serif",
          color: '#C41E3A',
          fontSize: '0.85rem'
        }}>
          Believe in yourself as much as I believe in you 💕
        </div>
      </motion.div>
    </div>
  );
}