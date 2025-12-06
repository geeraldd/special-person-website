import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function playChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o. frequency.setValueAtTime(880, ctx.currentTime);
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.4);
  } catch (e) {
    // audio blocked
  }
}

function ConfettiPiece({ idx }) {
  const colors = ['#FFD166', '#06D6A0', '#EF476F', '#118AB2', '#8E44AD', '#FF6B9D'];
  const color = colors[idx % colors.length];
  const randomLeft = 35 + Math.random() * 30;
  const randomDuration = 1.2 + Math.random() * 0.6;
  const randomDelay = Math.random() * 0.1;

  return (
    <motion.div
      initial={{ opacity: 1, y: 0, rotate: 0, x: 0, scale: 1 }}
      animate={{ 
        opacity: 0, 
        y: -160 - Math.random() * 60, 
        rotate: Math.random() * 720 - 360, 
        x: (Math.random() * 180) - 90, 
        scale: 0.7 
      }}
      transition={{ 
        duration: randomDuration, 
        ease: "easeOut",
        delay: randomDelay
      }}
      style={{
        width: 10,
        height: 14,
        borderRadius: 3,
        background: color,
        position: 'absolute',
        left: `${randomLeft}%`,
        top: '50%',
        zIndex: 120,
        boxShadow: `0 2px 8px ${color}88`
      }}
    />
  );
}

function HeartParticle({ idx }) {
  const randomLeft = 40 + Math.random() * 20;
  const randomDuration = 1.4 + Math.random() * 0.5;

  return (
    <motion. div
      initial={{ opacity: 1, y: 0, scale: 1 }}
      animate={{ 
        opacity: 0, 
        y: -180, 
        scale: 0.5 
      }}
      transition={{ 
        duration: randomDuration, 
        ease: "easeOut"
      }}
      style={{
        position: 'absolute',
        left: `${randomLeft}%`,
        top: '50%',
        fontSize: '1.5rem',
        zIndex: 120
      }}
    >
      💖
    </motion.div>
  );
}

function MilestonePopup({ milestone, onClose }) {
  const milestoneMessages = {
    50: { emoji: '🎉', title: 'Amazing! ', message: '50 hugs!  You\'re so loving!  💕' },
    100: { emoji: '💯', title: 'Incredible!', message: '100 hugs! I feel the love! 💖' },
    150: { emoji: '🌟', title: 'Wow!', message: '150 hugs! You\'re the best! ✨' },
    200: { emoji: '👑', title: 'LEGEND!', message: '200 hugs! Forever grateful! 👑' },
    250: { emoji: '💎', title: 'PRECIOUS!', message: '250 hugs! You\'re priceless! 💎' },
    300: { emoji: '🔥', title: 'ON FIRE!', message: '300 hugs!  Unstoppable! 🔥' },
    350: { emoji: '⭐', title: 'SUPERSTAR!', message: '350 hugs! You\'re a star! ⭐' },
    400: { emoji: '👑', title: 'ROYALTY!', message: '400 hugs! Crown worthy! 👑' },
    500: { emoji: '💕', title: 'ULTIMATE!', message: '500 hugs! Forever & always! 💕' }
  };

  const data = milestoneMessages[milestone];

  return (
    <AnimatePresence>
      {milestone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
            pointerEvents: 'auto'
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)'
            }}
          />

          <motion.div
            initial={{ scale: 0.5, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.5, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              zIndex: 201,
              background: 'linear-gradient(135deg, #fae1f6 0%, #ed6ea0 50%, #fc67fa 100%)',
              borderRadius: '32px',
              padding: '40px 60px',
              textAlign: 'center',
              boxShadow: '0 25px 50px rgba(237, 110, 160, 0.4)',
              border: '3px solid rgba(255, 255, 255, 0.5)',
              maxWidth: '500px'
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{
                fontSize: '80px',
                marginBottom: '20px'
              }}
            >
              {data.emoji}
            </motion.div>

            <h2 style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '3rem',
              color: '#fff',
              margin: '0 0 12px 0',
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
            }}>
              {data.title}
            </h2>

            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '2rem',
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '16px'
            }}>
              {milestone} Hugs Milestone!
            </div>

            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '1. 1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0 0 24px 0',
              fontWeight: 600
            }}>
              {data.message}
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#d70465',
                border: 'none',
                borderRadius: '20px',
                padding: '12px 32px',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'Montserrat', sans-serif",
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
              }}
            >
              Continue Hugging!  💕
            </motion. button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* CUTE BEAR - Original design with enhanced hugging */
function CuteBear({ side = "left", hugging = false, onClick, name = "Gee", bearColor = "#f4d9e8" }) {
  // Enhanced hugging with better movement
  const bodyTranslate = hugging ? (side === 'left' ? 55 : -55) : 0;
  const armRotate = hugging ? (side === 'left' ? 100 : -100) : (side === 'left' ? -25 : 25);
  const armX = hugging ? (side === 'left' ? 50 : -50) : 0;
  const armY = hugging ? -8 : 0;
  const rotateZ = hugging ? (side === 'left' ? 12 : -12) : 0;

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      animate={{ 
        x: bodyTranslate,
        rotateZ: rotateZ
      }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      style={{ width: 160, height: 200, position: 'relative', cursor: 'pointer', userSelect: 'none' }}
    >
      {/* Shadow */}
      <div style={{
        position: 'absolute',
        bottom: -10,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 90,
        height: 12,
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.12), transparent)',
        borderRadius: '50%',
        zIndex: 10
      }} />

      {/* ARMS - Connected properly to body */}
      <motion. div
        style={{
          position: 'absolute',
          top: 65,
          left: side === 'left' ? -15 : 'auto',
          right: side === 'left' ? 'auto' : -15,
          width: 50,
          height: 70,
          zIndex: side === 'left' ? 30 : 45
        }}
        animate={{
          rotate: armRotate,
          x: armX,
          y: armY
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      >
        {/* Upper arm */}
        <svg viewBox="0 0 50 70" width="50" height="70" style={{ position: 'absolute', width: '100%', height: '100%' }}>
          {/* Fluffy upper arm sphere */}
          <circle cx={side === 'left' ? 40 : 10} cy="15" r="16" fill={bearColor} stroke="#e8c5d9" strokeWidth="1"/>
          {/* Forearm */}
          <ellipse cx={side === 'left' ? 35 : 15} cy="45" rx="13" ry="18" fill={bearColor} stroke="#e8c5d9" strokeWidth="1"/>
          {/* Paw/Hand - cute round paw pad */}
          <circle cx={side === 'left' ? 32 : 18} cy="68" r="11" fill={bearColor} stroke="#e8c5d9" strokeWidth="1"/>
          {/* Paw pads (toe beans) */}
          <circle cx={side === 'left' ? 26 : 24} cy="62" r="4" fill="#ffc0d0" opacity="0.8"/>
          <circle cx={side === 'left' ? 32 : 18} cy="60" r="4" fill="#ffc0d0" opacity="0.8"/>
          <circle cx={side === 'left' ? 38 : 12} cy="62" r="4" fill="#ffc0d0" opacity="0.8"/>
          <circle cx={side === 'left' ?  32 : 18} cy="75" r="5" fill="#ffc0d0" opacity="0.9"/>
        </svg>
      </motion. div>

      {/* MAIN BEAR BODY */}
      <svg viewBox="0 0 180 220" width="160" height="200" style={{ position: 'absolute', left: 0, top: 0, zIndex: 50 }}>
        {/* Back leg left */}
        <ellipse cx="50" cy="170" rx="18" ry="22" fill={bearColor} stroke="#e8c5d9" strokeWidth="1. 2"/>
        {/* Back leg right */}
        <ellipse cx="130" cy="170" rx="18" ry="22" fill={bearColor} stroke="#e8c5d9" strokeWidth="1.2"/>
        
        {/* Main body - big round and cute */}
        <ellipse cx="90" cy="125" rx="52" ry="50" fill={bearColor} stroke="#e8c5d9" strokeWidth="1. 2"/>
        
        {/* Belly - lighter color */}
        <ellipse cx="90" cy="133" rx="35" ry="32" fill="#fce4ec" opacity="0.9"/>
        
        {/* Head - big and round */}
        <circle cx="90" cy="70" r="45" fill={bearColor} stroke="#e8c5d9" strokeWidth="1.2"/>
        
        {/* Ears - COMPLETE, not cut off */}
        <circle cx="50" cy="30" r="22" fill={bearColor} stroke="#e8c5d9" strokeWidth="1"/>
        <circle cx="50" cy="30" r="11" fill="#ffc0d0" opacity="0.9"/>
        
        <circle cx="130" cy="30" r="22" fill={bearColor} stroke="#e8c5d9" strokeWidth="1"/>
        <circle cx="130" cy="30" r="11" fill="#ffc0d0" opacity="0.9"/>
        
        {/* Eyes - big and cute */}
        <circle cx="72" cy="63" r="6" fill="#2c2c2c"/>
        <circle cx="108" cy="63" r="6" fill="#2c2c2c"/>
        
        {/* Eye shine - makes them alive */}
        <circle cx="74" cy="61" r="2. 5" fill="#fff" opacity="0.9"/>
        <circle cx="110" cy="61" r="2.5" fill="#fff" opacity="0.9"/>
        
        {/* Snout - cute rounded snout */}
        <ellipse cx="90" cy="85" rx="20" ry="18" fill="#ffc0d0" opacity="0.95"/>
        
        {/* Nose - cute triangle nose */}
        <ellipse cx="90" cy="83" rx="5" ry="6" fill="#d81b60" opacity="0.8"/>
        
        {/* Mouth - simple cute smile */}
        <path d="M 90 89 Q 80 95 75 92" stroke="#d81b60" strokeWidth="1. 5" fill="none" strokeLinecap="round" opacity="0.7"/>
        <path d="M 90 89 Q 100 95 105 92" stroke="#d81b60" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0. 7"/>
        
        {/* Blush marks - rosy cheeks */}
        <circle cx="60" cy="80" r="8" fill="#ffc0d0" opacity="0.6"/>
        <circle cx="120" cy="80" r="8" fill="#ffc0d0" opacity="0.6"/>
      </svg>

      {/* Name badge */}
      <motion.div 
        animate={hugging ? { scale: 1.15, y: -5 } : { scale: 1, y: 0 }}
        style={{
          position: 'absolute',
          bottom: -8,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: '#c2185b',
          fontFamily: "'Dancing Script', cursive",
          fontWeight: 700,
          fontSize: '1rem',
          whiteSpace: 'nowrap',
          textShadow: hugging ? '0 0 8px rgba(200, 30, 100, 0.4)' : 'none'
        }}
      >
        {name}
      </motion.div>
    </motion.div>
  );
}

export default function PlayWithMe() {
  const [hugState, setHugState] = useState('idle');
  const [total, setTotal] = useState(0);
  const [today, setToday] = useState(0);
  const [confettiBurst, setConfettiBurst] = useState(0);
  const [heartBurst, setHeartBurst] = useState(0);
  const [milestone, setMilestone] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('hugStats');
      const now = new Date();
      const todayStr = now.toISOString(). slice(0, 10);
      if (raw) {
        const s = JSON.parse(raw);
        if (s.lastDate !== todayStr) {
          const newStats = { total: s.total || 0, today: 0, lastDate: todayStr };
          localStorage.setItem('hugStats', JSON.stringify(newStats));
          setTotal(newStats.total);
          setToday(0);
        } else {
          setTotal(s.total || 0);
          setToday(s.today || 0);
        }
      } else {
        const init = { total: 0, today: 0, lastDate: todayStr };
        localStorage.setItem('hugStats', JSON.stringify(init));
        setTotal(0);
        setToday(0);
      }
    } catch (e) {
      console. warn("Could not access localStorage", e);
    }
  }, []);

  function saveStats(newTotal, newToday) {
    try {
      const now = new Date();
      const todayStr = now.toISOString().slice(0, 10);
      const st = { total: newTotal, today: newToday, lastDate: todayStr };
      localStorage.setItem('hugStats', JSON.stringify(st));
    } catch (e) {
      console.warn("Could not write to localStorage", e);
    }
  }

  function checkMilestone(newTotal) {
    const milestones = [50, 100, 150, 200, 250, 300, 350, 400, 500];
    if (milestones.includes(newTotal)) {
      setMilestone(newTotal);
    }
  }

  function doHug() {
    const newTotal = total + 1;
    const newToday = today + 1;
    setTotal(newTotal);
    setToday(newToday);
    saveStats(newTotal, newToday);

    playChime();
    setConfettiBurst(c => c + 1);
    setHeartBurst(h => h + 1);

    checkMilestone(newTotal);

    setHugState('hugging');
    setTimeout(() => setHugState('idle'), 1200);
  }

  function resetToday() {
    try {
      const now = new Date();
      const todayStr = now.toISOString().slice(0, 10);
      localStorage.setItem('hugStats', JSON.stringify({ total, today: 0, lastDate: todayStr }));
      setToday(0);
    } catch (e) {
      console. warn("Could not write to localStorage", e);
    }
  }

  const isHugging = hugState !== 'idle';

  return (
    <div style={{
      borderRadius: 20,
      padding: 24,
      background: "linear-gradient(135deg, #fffafc 0%, #fff7fb 40%, #fffbff 100%)",
      boxShadow: "0 16px 32px rgba(165,77,153,0.08)",
      position: "relative",
      overflow: "visible"
    }}>
      <div style={{ 
        fontFamily: "'Dancing Script', cursive", 
        fontSize: '1.8rem', 
        color: '#d70465', 
        marginBottom: 16,
        textAlign: 'center'
      }}>
        🐻 Play With Me 🐻
      </div>

      {/* Main hug area */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
        padding: '40px 20px',
        borderRadius: 18,
        background: "radial-gradient(800px 300px at 50% 20%, #fff7fb 0%, rgba(255,255,255,0.8) 35%, rgba(248,250,255,0.5) 70%)",
        position: "relative",
        marginBottom: 20,
        minHeight: 320,
        border: '2px dashed rgba(237, 110, 160, 0.2)',
        overflow: 'visible'
      }}>
        {/* Shake effect when hugging */}
        {isHugging && (
          <motion.div
            animate={{ x: [-4, 4, -4, 4, 0] }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none'
            }}
          />
        )}

        {/* Left Bear */}
        <CuteBear 
          side="left" 
          name="Gee" 
          bearColor="#f4d9e8"
          hugging={isHugging}
          onClick={doHug} 
        />

        {/* Center heart with effects */}
        <div style={{ 
          width: 120, 
          height: 120, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          position: 'relative',
          zIndex: 60
        }}>
          <motion.img 
            src="/heart.svg" 
            alt="heart" 
            animate={isHugging ? { scale: [1, 1.35, 1], rotate: [0, 12, -12, 0] } : { scale: 1 }}
            transition={isHugging ? { duration: 0.6, repeat: Infinity } : {}}
            style={{ 
              width: isHugging ? 85 : 72, 
              filter: isHugging ? 'drop-shadow(0 0 18px #ed6ea0)' : 'none',
              transition: 'width 0.2s'
            }} 
          />
          
          {/* Confetti */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 140 }}>
            <AnimatePresence>
              {Array.from({ length: 16 }). map((_, i) => (
                <div key={`conf-${confettiBurst}-${i}`}>
                  {confettiBurst > 0 && <ConfettiPiece idx={i} />}
                </div>
              ))}
            </AnimatePresence>
          </div>

          {/* Heart particles */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 130 }}>
            <AnimatePresence>
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={`heart-${heartBurst}-${i}`}>
                  {heartBurst > 0 && <HeartParticle idx={i} />}
                </div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Bear */}
        <CuteBear 
          side="right" 
          name="Vee" 
          bearColor="#e8c8b8"
          hugging={isHugging}
          onClick={doHug} 
        />
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
        <motion.button 
          onClick={doHug} 
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          style={{
            border: 'none',
            borderRadius: 20,
            padding: '12px 28px',
            background: 'linear-gradient(135deg, #fae1f6, #ed6ea0)',
            color: '#fff',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 12px 24px rgba(237, 110, 160, 0.4)',
            fontSize: '1.1rem',
            fontFamily: "'Montserrat', sans-serif"
          }}
        >
          {isHugging ? '💕 Hugging!  💕' : '💌 Send a Hug'}
        </motion.button>
        
        <button 
          onClick={resetToday} 
          style={{
            border: '2px solid #a18cd1',
            background: 'transparent',
            color: '#a18cd1',
            borderRadius: 16,
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '0.95rem',
            fontWeight: 600,
            fontFamily: "'Montserrat', sans-serif",
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.target.style. background = '#a18cd115';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style. background = 'transparent';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ↻ Reset Today
        </button>
      </div>

      {/* Stats */}
      <div style={{ 
        textAlign: 'center', 
        color: '#7a3d75', 
        fontWeight: 700,
        background: 'rgba(237, 110, 160, 0.08)',
        padding: '14px 18px',
        borderRadius: '14px',
        backdropFilter: 'blur(4px)'
      }}>
        <div style={{ fontFamily: "'Dancing Script', cursive", color: '#d70465', fontSize: '1.35rem', marginBottom: 6 }}>
          {today} 💕 Today • {total} 💖 Total
        </div>
        <div style={{ fontSize: '0.85rem', color: '#a18cd1' }}>
          Tap either bear or button.  Every hug is saved! 💞
        </div>
      </div>

      {/* Milestone Popup */}
      <MilestonePopup 
        milestone={milestone} 
        onClose={() => setMilestone(null)} 
      />
    </div>
  );
}