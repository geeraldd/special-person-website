import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WhiteBear = (props) => (
  <svg width="32" height="36" viewBox="0 0 74 84" fill="none" {...  props}>
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
  <svg width="32" height="36" viewBox="0 0 74 84" fill="none" {... props}>
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

const compliments = [
  "✨ You light up every room you walk into",
  "💕 Your smile could brighten the darkest day",
  "🌟 You're more beautiful than you realize",
  "💪 You're stronger than you think",
  "🎨 Your creativity inspires everyone around you",
  "❤️ You have the kindest heart I know",
  "🌹 You make the world a better place just by being in it",
  "✨ Your laugh is contagious and beautiful",
  "💖 You're someone's reason to smile",
  "🌸 You deserve all the love you give others",
  "🎯 You're exactly who you're supposed to be",
  "💝 Your presence matters more than you know",
  "✨ You're a blessing to everyone who knows you",
  "🦋 You're beautiful inside and out",
  "💕 You have more strength in you than you realize",
  "🌟 You're worth so much more than you believe",
  "🎁 Your dreams are worth pursuing",
  "💫 You bring joy to everyone around you",
  "🌺 You're enough, exactly as you are",
  "❤️ You deserve kindness, especially from yourself",
  "✨ Your potential is limitless",
  "💎 You're a gem that shines bright",
  "🌈 You make my life colorful",
  "💕 I'm amazed by your strength every single day",
  "🌟 You're the kind of person everyone wants as a friend",
  "🎨 Your uniqueness is your superpower",
  "💖 You're loved more than you know",
  "🦋 You're growing into an amazing person",
  "✨ Your heart is pure gold",
  "🌸 You inspire me to be better",
  "💝 You're brave for being yourself",
  "🌟 Your smile is one of my favorite things",
  "❤️ You're worthy of love and respect",
  "💫 You make a difference in people's lives",
  "✨ You're a work of art in progress",
  "🎯 You're going to do incredible things",
  "💕 You're someone's inspiration",
  "🌺 Your authenticity is beautiful",
  "💖 You're stronger than your struggles",
  "🌟 You deserve happiness more than anyone",
  "💎 You're a rare and beautiful soul",
  "✨ You're the person others aspire to be",
  "🌈 You paint the world with kindness",
  "💝 You're capable of amazing things",
  "🦋 Your journey is inspiring",
  "❤️ You're a blessing disguised as a person",
  "🌸 You're someone I admire deeply",
  "💕 You make a real difference",
  "✨ You're precious and priceless",
  "🌟 You're exactly who I needed in my life",
  "💖 You're proof that good people still exist",
  "🎁 You're a gift to this world",
  "💫 Your love changes lives",
  "✨ You're beautiful in ways words can't describe",
  "🌺 You're stronger than you give yourself credit for",
  "💝 You're the reason I believe in love",
  "❤️ You're my favorite person",
  "🌟 You make every day better just by being you",
  "💎 Your value is immeasurable",
  "🦋 You're constantly growing and that's beautiful",
  "✨ You're the kind of person the world needs",
  "💕 You're a ray of sunshine",
  "🌈 You're capable of so much more than you think",
  "💖 You're worth fighting for",
  "🎨 You're a masterpiece",
  "🌸 You're my greatest treasure",
  "💫 You're irreplaceable",
  "✨ You're the best version of yourself right now",
  "🌟 You're living your best life, keep going",
  "💝 You're loved beyond measure",
  "❤️ You're my favorite reason to smile",
  "💕 You're someone special",
  "🌺 You're a warrior and a dreamer",
  "💖 You're everything I prayed for",
  "🎁 You're a blessing I didn't know I needed",
  "✨ You're proof that miracles happen",
  "🌈 You're the light in my darkness",
  "💎 You're absolutely perfect to me",
  "🦋 You're beautiful and you need to know it",
  "❤️ You're changing the world just by being kind",
  "🌸 You're my favorite human",
  "💫 You're what dreams are made of",
  "✨ You're stronger than your past",
  "🌟 You're my forever person"
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
    const { compliment: dailyCompliment } = getDailyCompliment();
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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '12px'
        }}>
          <WhiteBear />
          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '2rem',
            color: '#d70465',
            margin: 0,
            textShadow: '0 2px 8px rgba(165, 77, 153, 0.2)'
          }}>
            Daily Affirmation
          </h2>
          <BrownBear />
        </div>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          color: '#a18cd1',
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
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          background: 'linear-gradient(135deg, #fae1f6 0%, #ed6ea0 50%, #fc67fa 100%)',
          borderRadius: '24px',
          padding: '40px 30px',
          boxShadow: '0 20px 40px rgba(237, 110, 160, 0.3)',
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
          transition={{ duration: 20, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '-50px',
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
              color: '#d70465',
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.8rem',
              color: '#fff',
              fontWeight: 700,
              lineHeight: '1.6',
              textShadow: '0 4px 12px rgba(139, 30, 100, 0.4)',
              marginBottom: '20px'
            }}
          >
            {compliment}
          </motion. div>

          {/* Motivational addition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.95rem',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 600,
              marginBottom: '20px'
            }}
          >
            This is your daily reminder from me.  💕
          </motion. div>
        </div>
      </motion.div>

      {/* Info section */}
      <motion. div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          background: 'rgba(237, 110, 160, 0.08)',
          borderRadius: '16px',
          padding: '20px',
          border: '2px solid rgba(237, 110, 160, 0.2)',
          textAlign: 'center'
        }}
      >
        <div style={{
          fontFamily: "'Montserrat', sans-serif",
          color: '#a18cd1',
          fontSize: '0.95rem',
          fontWeight: 600,
          marginBottom: '8px'
        }}>
          💫 You get a new compliment every 24 hours at midnight
        </div>
        <div style={{
          fontFamily: "'Montserrat', sans-serif",
          color: '#fc67fa',
          fontSize: '0.85rem'
        }}>
          Believe in yourself as much as I believe in you 💕
        </div>
      </motion.div>
    </div>
  );
}