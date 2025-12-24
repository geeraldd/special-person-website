import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: "/images/photo1.jpg", title: "Ako", emoji: "💑" },
  { src: "/images/photo2.jpg", title: "Ako ulit", emoji: "🌹" },
  { src: "/images/photo3.jpg", title: "Ako na nmn", emoji: "💕" },
  { src: "/images/photo4.jpg", title: "Ako na nmn ulit", emoji: "✨" },
  { src:  "/images/photo5.jpg", title: "Mukha ko padin", emoji: "😊" },
 
];

function PhotoFrame({ image, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        cursor: 'pointer',
        perspective: '1000px'
      }}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? -8 : 0,
          rotateY: isHovered ? (index % 2 === 0 ? 5 : -5) : 0,
          y: isHovered ? -12 : 0,
          boxShadow: isHovered 
            ? '0 25px 50px rgba(196, 30, 58, 0.3), 0 0 0 2px rgba(212, 175, 55, 0.4)' 
            : '0 12px 30px rgba(196, 30, 58, 0.15), 0 0 0 1px rgba(212, 175, 55, 0.2)'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          background: '#fff',
          borderRadius: '14px',
          padding: '14px',
          boxShadow: '0 12px 30px rgba(196, 30, 58, 0.15)',
          border: '2px solid rgba(212, 175, 55, 0.25)',
          backgroundColor: '#fefbff',
          transformStyle: 'preserve-3d',
          position: 'relative'
        }}
      >
        {/* Decorative corner dots */}
        {[
          { top: 8, left: 8 },
          { top: 8, right: 8 },
          { bottom: 8, left: 8 },
          { bottom: 8, right: 8 }
        ].map((pos, i) => (
          <motion. div
            key={i}
            animate={{ scale: isHovered ? 1.3 : 1 }}
            style={{
              position: 'absolute',
              ... pos,
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C41E3A, #D4AF37)',
              zIndex: 10
            }}
          />
        ))}

        {/* String/wire effect */}
        <motion. div
          animate={{ scaleY: isHovered ? 1.15 : 1 }}
          style={{
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '20px',
            background: 'linear-gradient(to bottom, #8B7355, rgba(139, 115, 85, 0.3))',
            borderRadius: '2px',
            zIndex: 5
          }}
        />

        {/* Photo container */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
          aspectRatio: '4/5',
          background: '#f5f5f5',
          marginBottom: '12px'
        }}>
          {! isLoaded && (
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s infinite',
              zIndex: 1
            }} />
          )}

          <motion.img
            src={image.src}
            alt={image.title}
            onLoad={() => setIsLoaded(true)}
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.3 }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
              display: isLoaded ? 'block' :  'none'
            }}
          />

          {/* Hover overlay with heart */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at center, rgba(196, 30, 58, 0.5), rgba(22, 91, 51, 0.3))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              zIndex: 5
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              style={{ fontSize: '3rem' }}
            >
              💖
            </motion.div>
          </motion.div>
        </div>

        {/* Caption area */}
        <div style={{
          textAlign: 'center',
          padding: '8px 0'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            marginBottom: '6px'
          }}>
            <span style={{ fontSize: '1.2rem' }}>{image.emoji}</span>
          </div>
          <motion.div
            animate={{ color: isHovered ? '#C41E3A' : '#165B33' }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 700,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%'
            }}
          >
            {image.title}
          </motion.div>
        </div>
      </motion. div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '100%'
    }}>
      {/* Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: 'center',
          marginBottom: '32px'
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
          🎄 Me, Myself and I 🎄
        </h2>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          color: '#165B33',
          fontSize: '0.95rem',
          margin: 0,
          fontWeight: 600
        }}>
          Pagmumukha kolng to lahat, magsawa ka! Kasi wala akong hawak na picture mo💕
        </p>
      </motion.div>

      {/* Gallery grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '24px',
        padding: '20px 0',
        justifyContent: 'center'
      }}>
        {images. map((image, index) => (
          <PhotoFrame key={index} image={image} index={index} />
        ))}
      </div>

      {/* Optional info section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          textAlign: 'center',
          marginTop: '32px',
          color: '#165B33',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '0.9rem',
          padding: '16px',
          background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.08), rgba(212, 175, 55, 0.08))',
          borderRadius: '14px',
          backdropFilter: 'blur(4px)',
          border: '2px solid rgba(212, 175, 55, 0.15)'
        }}
      >
        <div style={{ marginBottom: '8px', fontWeight: 700 }}>
          🖼️ Hanging picture frames of my faces haha
        </div>
        <div style={{ fontSize: '0.85rem', color: '#C41E3A' }}>
          These are my cute moments frozen in time 📸
        </div>
      </motion.div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @media (max-width: 1024px) {
          [style*="gridTemplateColumns"] {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important;
            gap: 16px !important;
          }
        }

        @media (max-width:  640px) {
          [style*="gridTemplateColumns"] {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}