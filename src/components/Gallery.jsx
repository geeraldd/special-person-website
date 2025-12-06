import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: "/images/photo1.jpg", title: "Our First Memory", emoji: "💑" },
  { src: "/images/photo2.jpg", title: "Sweet Moments", emoji: "🌹" },
  { src: "/images/photo3.jpg", title: "Forever in My Heart", emoji: "💕" },
  { src: "/images/photo4.jpg", title: "Beautiful You", emoji: "✨" },
  { src: "/images/photo5.jpg", title: "Happy Times", emoji: "😊" },
  { src: "/images/photo6.jpg", title: "Close to My Heart", emoji: "💖" },
  { src: "/images/photo7.jpg", title: "Lovely Moments", emoji: "🌸" },
  { src: "/images/photo8.jpg", title: "Us Together", emoji: "👫" },
  { src: "/images/photo9.jpg", title: "My Favorite Person", emoji: "💝" },
  { src: "/images/photo10.jpg", title: "Every Moment Counts", emoji: "⏰" },
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
      {/* Frame container */}
      <motion.div
        animate={{
          rotateX: isHovered ? -5 : 0,
          rotateY: isHovered ? (index % 2 === 0 ? 3 : -3) : 0,
          y: isHovered ? -8 : 0
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '12px',
          boxShadow: isHovered 
            ? '0 20px 40px rgba(165, 77, 153, 0.25), 0 0 0 1px rgba(237, 110, 160, 0.3)' 
            : '0 8px 20px rgba(165, 77, 153, 0.12), 0 0 0 1px rgba(237, 110, 160, 0.15)',
          transition: 'all 0.3s ease',
          border: '1px solid rgba(255, 192, 208, 0.5)',
          backgroundColor: '#fefbff',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Decorative corner dots */}
        <div style={{
          position: 'absolute',
          top: 8,
          left: 8,
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ed6ea0, #fc67fa)',
          zIndex: 10
        }} />
        <div style={{
          position: 'absolute',
          top: 8,
          right: 8,
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ed6ea0, #fc67fa)',
          zIndex: 10
        }} />
        <div style={{
          position: 'absolute',
          bottom: 8,
          left: 8,
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ed6ea0, #fc67fa)',
          zIndex: 10
        }} />
        <div style={{
          position: 'absolute',
          bottom: 8,
          right: 8,
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ed6ea0, #fc67fa)',
          zIndex: 10
        }} />

        {/* Photo container */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '8px',
          aspectRatio: '4/5',
          background: '#f5f5f5',
          marginBottom: '10px'
        }}>
          {/* Loading shimmer */}
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

          {/* Photo */}
          <motion.img
            src={image. src}
            alt={image. title}
            onLoad={() => setIsLoaded(true)}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '6px',
              display: isLoaded ? 'block' : 'none'
            }}
          />

          {/* Hover overlay with heart */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at center, rgba(237, 110, 160, 0.4), rgba(165, 77, 153, 0.3))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '6px',
              zIndex: 5
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              style={{ fontSize: '2. 5rem' }}
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
            marginBottom: '4px'
          }}>
            <span style={{ fontSize: '1.1rem' }}>{image.emoji}</span>
          </div>
          <motion.div
            animate={{ color: isHovered ? '#d70465' : '#a18cd1' }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%'
            }}
          >
            {image.title}
          </motion.div>
        </div>
      </motion.div>
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
          fontFamily: "'Dancing Script', cursive",
          fontSize: '2. 2rem',
          color: '#d70465',
          margin: '0 0 8px 0',
          textShadow: '0 2px 8px rgba(165, 77, 153, 0.2)'
        }}>
          ✨ Our Memories ✨
        </h2>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          color: '#a18cd1',
          fontSize: '0.95rem',
          margin: 0
        }}>
          Every moment with you is precious.  Hover to see the love!  💕
        </p>
      </motion.div>

      {/* Gallery grid - responsive for 10+ images */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '20px',
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
          color: '#a18cd1',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '0.9rem',
          padding: '16px',
          background: 'rgba(237, 110, 160, 0. 05)',
          borderRadius: '14px',
          backdropFilter: 'blur(4px)'
        }}
      >
        <div style={{ marginBottom: '8px' }}>
          🖼️ Click or hover over photos to see them come alive
        </div>
        <div style={{ fontSize: '0.85rem', color: '#fc67fa' }}>
          These are our beautiful moments frozen in time 📸
        </div>
      </motion.div>

      {/* CSS animations */}
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

        @media (max-width: 640px) {
          [style*="gridTemplateColumns"] {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) ! important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}