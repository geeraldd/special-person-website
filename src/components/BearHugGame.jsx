import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function playChime() {
  try {
    const ctx = new (window.AudioContext || window. webkitAudioContext)();
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
  const colors = ['#C41E3A', '#165B33', '#D4AF37', '#FFFFFF', '#E63946'];
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

function SnowflakeParticle({ idx }) {
  const randomLeft = 40 + Math.random() * 20;
  const randomDuration = 1.4 + Math.random() * 0.5;

  return (
    <motion. div
      initial={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      animate={{ 
        opacity: 0, 
        y: -180, 
        scale: 0.5,
        rotate: 360 
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
      ❄️
    </motion. div>
  );
}

function MilestonePopup({ milestone, onClose }) {
  const milestoneMessages = {
    50: { emoji: '❄️', title: 'Awesome!', message: '50 hugs!  You\'re amazing!' },
    100: { emoji: '⛄', title: 'Century!', message: '100 hugs!  Legendary!' },
    150: { emoji: '🎿', title: 'Incredible!', message: '150 hugs!  Unstoppable!' },
    200: { emoji: '🏔️', title: 'Champion!', message: '200 hugs! Peak performance!' },
    250: { emoji: '💎', title: 'Diamond!', message: '250 hugs! Pure excellence!' },
    300: { emoji: '🌨️', title: 'Blizzard!', message: '300 hugs!  Absolutely crushing it!' },
    350: { emoji: '⭐', title: 'All-Star!', message: '350 hugs! Elite level!' },
    400: { emoji: '🏆', title: 'Master!', message: '400 hugs!  Phenomenal!' },
    500: { emoji: '👑', title: 'Legend!', message: '500 hugs! Ultimate achievement!' }
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
            pointerEvents: 'auto',
            padding: '20px'
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
              background: 'rgba(26, 77, 94, 0.7)',
              backdropFilter: 'blur(8px)'
            }}
          />

          <motion.div
            initial={{ scale: 0.5, y: 50 }}
            animate={{ scale:  1, y: 0 }}
            exit={{ scale: 0.5, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              zIndex: 201,
              background: 'linear-gradient(135deg, #C41E3A 0%, #D4AF37 50%, #165B33 100%)',
              borderRadius: '32px',
              padding: '48px 64px',
              textAlign: 'center',
              boxShadow: '0 25px 50px rgba(196, 30, 58, 0.5)',
              border: '3px solid rgba(255, 255, 255, 0.4)',
              maxWidth: '500px',
              width: '90%'
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{
                fontSize: '80px',
                marginBottom: '20px'
              }}
            >
              {data.emoji}
            </motion.div>

            <h2 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '3rem',
              color: '#fff',
              margin: '0 0 12px 0',
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}>
              {data.title}
            </h2>

            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize:  '2rem',
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '16px',
              letterSpacing: '-0.01em'
            }}>
              {milestone} Hugs!
            </div>

            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0 0 28px 0',
              fontWeight: 600
            }}>
              {data.message}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#C41E3A',
                border: 'none',
                borderRadius: '16px',
                padding: '14px 36px',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'Montserrat', sans-serif",
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                letterSpacing: '-0.01em'
              }}
            >
              Keep Going!  ❤️
            </motion. button>
          </motion.div>
        </motion. div>
      )}
    </AnimatePresence>
  );
}

function CuteBear({ side = "left", hugging = false, onClick, name = "Gee", bearColor = "#F4D9E8" }) {
  const bodyTranslate = hugging ? (side === 'left' ? 65 : -65) : 0;
  const bodyRotate = hugging ? (side === 'left' ? 10 : -10) : 0;

  return (
    <motion. div
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      animate={{ 
        x: bodyTranslate,
        rotateZ: bodyRotate
      }}
      transition={{ type: "spring", stiffness:  250, damping: 20 }}
      style={{ 
        width: 160, 
        height: 200, 
        position: 'relative', 
        cursor: 'pointer', 
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Shadow */}
      <motion.div 
        animate={{
          scale: hugging ? 1.15 : 1,
          opacity: hugging ? 0.25 : 0.18
        }}
        style={{
          position: 'absolute',
          bottom: 5,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 110,
          height: 18,
          background: 'radial-gradient(ellipse at center, rgba(26,77,94,0.3), transparent)',
          borderRadius: '50%',
          zIndex: 10
        }} 
      />

      {/* MAIN BEAR BODY - NO ARMS */}
      <div style={{
        position: 'absolute',
        top: 5,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50
      }}>
        <svg viewBox="0 0 190 230" width="160" height="200" style={{ overflow: 'visible' }}>
          {/* Back legs */}
          <ellipse cx="55" cy="182" rx="20" ry="24" fill={bearColor} stroke="#e8c5d9" strokeWidth="1. 4"/>
          <ellipse cx="135" cy="182" rx="20" ry="24" fill={bearColor} stroke="#e8c5d9" strokeWidth="1.4"/>
          
          {/* Main body */}
          <ellipse cx="95" cy="134" rx="58" ry="56" fill={bearColor} stroke="#e8c5d9" strokeWidth="1.4"/>
          
          {/* Belly */}
          <ellipse cx="95" cy="142" rx="40" ry="38" fill="#fce4ec" opacity="0.85"/>
          
          {/* Head */}
          <circle cx="95" cy="77" r="50" fill={bearColor} stroke="#e8c5d9" strokeWidth="1.4"/>
          
          {/* Ears */}
          <circle cx="55" cy="36" r="25" fill={bearColor} stroke="#e8c5d9" strokeWidth="1.3"/>
          <circle cx="55" cy="36" r="14" fill="#C41E3A" opacity="0.25"/>
          
          <circle cx="135" cy="36" r="25" fill={bearColor} stroke="#e8c5d9" strokeWidth="1.3"/>
          <circle cx="135" cy="36" r="14" fill="#165B33" opacity="0.25"/>
          
          {/* Eyes */}
          <circle cx="75" cy="70" r="7" fill="#1A1A2E"/>
          <circle cx="115" cy="70" r="7" fill="#1A1A2E"/>
          
          {/* Eye shine */}
          <circle cx="77" cy="68" r="3" fill="#fff" opacity="0.95"/>
          <circle cx="117" cy="68" r="3" fill="#fff" opacity="0.95"/>
          
          {/* Snout */}
          <ellipse cx="95" cy="92" rx="23" ry="21" fill="#D4AF37" opacity="0.2"/>
          
          {/* Nose */}
          <ellipse cx="95" cy="90" rx="7" ry="8" fill="#165B33" opacity="0.7"/>
          
          {/* Mouth */}
          <path d="M 95 96 Q 85 102 80 99" stroke="#165B33" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
          <path d="M 95 96 Q 105 102 110 99" stroke="#165B33" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
          
          {/* Blush marks */}
          <circle cx="62" cy="87" r="10" fill="#C41E3A" opacity="0.25"/>
          <circle cx="128" cy="87" r="10" fill="#165B33" opacity="0.25"/>
        </svg>
      </div>

      {/* Name badge */}
      <motion.div 
        animate={hugging ? { scale: 1.2, y: -12 } : { scale: 1, y: 0 }}
        style={{
          position: 'absolute',
          bottom: -2,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: '#165B33',
          fontFamily: "'Cinzel', serif",
          fontWeight: 700,
          fontSize: '1.15rem',
          whiteSpace: 'nowrap',
          textShadow: hugging ? '0 0 12px rgba(196,30,58,0.6)' : 'none',
          zIndex: 100,
          letterSpacing: '-0.01em'
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
  const [snowBurst, setSnowBurst] = useState(0);
  const [milestone, setMilestone] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('hugStats');
      const now = new Date();
      const todayStr = now.toISOString().slice(0, 10);
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
      console.warn("Could not access localStorage", e);
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
    setSnowBurst(h => h + 1);

    checkMilestone(newTotal);

    setHugState('hugging');
    setTimeout(() => setHugState('idle'), 1400);
  }

  function resetToday() {
    try {
      const now = new Date();
      const todayStr = now.toISOString().slice(0, 10);
      localStorage.setItem('hugStats', JSON.stringify({ total, today: 0, lastDate:  todayStr }));
      setToday(0);
    } catch (e) {
      console.warn("Could not write to localStorage", e);
    }
  }

  const isHugging = hugState !== 'idle';

  return (
    <div style={{
      borderRadius: 24,
      padding: '24px',
      background: "linear-gradient(135deg, rgba(196, 30, 58, 0.08) 0%, rgba(165, 92, 246, 0.06) 100%)",
      boxShadow: "0 8px 32px rgba(196, 30, 58, 0.12)",
      position: "relative",
      overflow: "visible",
      border: '2px solid rgba(212, 175, 55, 0.15)'
    }}>
      <div style={{ 
        fontFamily: "'Cinzel', serif", 
        fontSize: '2rem', 
        color: '#C41E3A', 
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 700,
        letterSpacing: '-0.02em'
      }}>
        ⛄ Hug Me ❤️
      </div>

      {/* Main hug area */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: '50px 20px',
        borderRadius: 20,
        background: "radial-gradient(600px 250px at 50% 30%, rgba(196, 30, 58, 0.08) 0%, rgba(212, 175, 55, 0.05) 50%, transparent 70%)",
        position: "relative",
        marginBottom: 24,
        minHeight: 340,
        border: '2px dashed rgba(212, 175, 55, 0.2)',
        overflow: 'visible',
        flexWrap: 'wrap'
      }}>
        {isHugging && (
          <motion.div
            animate={{ x: [-4, 4, -4, 4, 0] }}
            transition={{ duration:  0.3 }}
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none'
            }}
          />
        )}

        <CuteBear 
          side="left" 
          name="Rald" 
          bearColor="#F4D9E8"
          hugging={isHugging}
          onClick={doHug} 
        />

        <div style={{ 
          width: 120, 
          height: 120, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          position: 'relative',
          zIndex: 60,
          flexShrink: 0
        }}>
          <motion.div
            animate={isHugging ? { scale:  [1, 1.45, 1], rotate: [0, 15, -15, 0] } : { scale: 1 }}
            transition={isHugging ? { duration:  0.7, repeat: Infinity } : {}}
            style={{ 
              fontSize: isHugging ? '5. 5rem' : '4.5rem',
              filter: isHugging ? 'drop-shadow(0 0 24px rgba(196, 30, 58, 0.6))' : 'none',
              transition: 'all 0.3s'
            }}
          >
            {isHugging ?  '❤️' : '🤍'}
          </motion.div>
          
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 140 }}>
            <AnimatePresence>
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={`conf-${confettiBurst}-${i}`}>
                  {confettiBurst > 0 && <ConfettiPiece idx={i} />}
                </div>
              ))}
            </AnimatePresence>
          </div>

          <div style={{ position: 'absolute', inset:  0, pointerEvents: 'none', zIndex: 130 }}>
            <AnimatePresence>
              {Array. from({ length: 8 }).map((_, i) => (
                <div key={`snow-${snowBurst}-${i}`}>
                  {snowBurst > 0 && <SnowflakeParticle idx={i} />}
                </div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <CuteBear 
          side="right" 
          name="Vin" 
          bearColor="#E8C8B8"
          hugging={isHugging}
          onClick={doHug} 
        />
      </div>

      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
        <motion.button 
          onClick={doHug} 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="modern-button"
        >
          {isHugging ? '🤗 Hugging!' : '🤝 Send Hug'}
        </motion.button>
        
        <button 
          onClick={resetToday} 
          style={{
            border: '2px solid #C41E3A',
            background: 'transparent',
            color: '#C41E3A',
            borderRadius: 16,
            padding: '12px 24px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 600,
            fontFamily: "'Montserrat', sans-serif",
            transition: 'all 0.3s',
            letterSpacing: '-0.01em'
          }}
          onMouseEnter={(e) => {
            e.target.style. background = 'rgba(196, 30, 58, 0.1)';
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

      <div style={{ 
        textAlign: 'center', 
        color: '#1A1A2E', 
        fontWeight: 700,
        background: 'rgba(196, 30, 58, 0.08)',
        padding: '18px 22px',
        borderRadius: '18px',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(212, 175, 55, 0.15)'
      }}>
        <div style={{ fontFamily: "'Cinzel', serif", color: '#C41E3A', fontSize: '1.6rem', marginBottom: 10, fontWeight: 700, letterSpacing: '-0.02em' }}>
          {today} Today • {total} Total
        </div>
        <div style={{ fontSize: '0.95rem', color: '#165B33', fontFamily: "'Montserrat', sans-serif" }}>
          Click Rald or Vin (or the button) to send hugs!  ❄️
        </div>
      </div>

      <MilestonePopup 
        milestone={milestone} 
        onClose={() => setMilestone(null)} 
      />
    </div>
  );
}