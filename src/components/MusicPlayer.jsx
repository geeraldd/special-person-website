import { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { motion } from 'framer-motion';

const playlist = [
  { 
    id: 0,
    title: "You're My", 
    src: "/music/song1.mp3",
    emoji: "🎵",
    color: "#C41E3A",
    accentColor: "#D4AF37"
  },
  { 
    id: 1,
    title: "Moon", 
    src: "/music/song2.mp3",
    emoji: "💕",
    color: "#165B33",
    accentColor: "#D4AF37"
  },
  { 
    id: 2,
    title: "LDR", 
    src: "/music/song3.mp3",
    emoji: "💖",
    color: "#C41E3A",
    accentColor: "#FFFFFF"
  },
  { 
    id: 3,
    title: "Everynight", 
    src: "/music/song4.mp3",
    emoji: "🎶",
    color: "#165B33",
    accentColor: "#C41E3A"
  },
  { 
    id:  4,
    title: "Us", 
    src: "/music/song5.mp3",
    emoji: "✨",
    color: "#D4AF37",
    accentColor: "#C41E3A"
  },
   { 
    id:  5,
    title: "Ordinary", 
    src: "/music/song6.mp3",
    emoji: "✨",
    color: "#37ccd4ff",
    accentColor: "#C41E3A"
  },
  { 
    id:  6,
    title: "Iris", 
    src: "/music/song7.mp3",
    emoji: "✨",
    color: "#b537d4ff",
    accentColor: "#C41E3A"
  }
];

export default function MusicPlayer() {
  const [playingIdx, setPlayingIdx] = useState(null);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    return () => {
      if (sound) sound.stop();
    };
  }, [sound]);

  function playSong(idx) {
    if (sound) sound.stop();
    
    const howl = new Howl({
      src: [playlist[idx]. src],
      html5: true,
      volume: 0.8,
      onend: () => {
        setPlayingIdx(null);
        setIsPlaying(false);
      }
    });
    
    howl.play();
    setSound(howl);
    setPlayingIdx(idx);
    setSelectedSong(idx);
    setIsPlaying(true);
  }

  function stopSong() {
    if (sound) sound.stop();
    setPlayingIdx(null);
    setIsPlaying(false);
  }

  function togglePlayPause() {
    if (isPlaying && sound) {
      sound.pause();
      setIsPlaying(false);
    } else if (!isPlaying && sound) {
      sound.play();
      setIsPlaying(true);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        width: '100%',
        padding: '0'
      }}
    >
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
          🎵 Music Playlist 🎵
        </h2>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          color: '#165B33',
          fontSize: '0.95rem',
          margin: 0,
          fontWeight: 600
        }}>
          Click on any record to hear music 💕
        </p>
      </motion.div>

      {/* Vinyl Records Display */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        padding: '40px 20px',
        borderRadius: '24px',
        background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.12) 0%, rgba(212, 175, 55, 0.10) 100%)',
        marginBottom: '32px',
        flexWrap: 'wrap',
        border: '2px solid rgba(212, 175, 55, 0.2)'
      }}>
        {playlist.map((song, idx) => (
          <motion.div
            key={song.id}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration:  0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => playSong(idx)}
            style={{
              cursor:  'pointer',
              perspective: '1000px'
            }}
          >
            <motion.div
              animate={{
                rotateZ: playingIdx === idx && isPlaying ? 360 : 0
              }}
              transition={{
                duration: playingIdx === idx && isPlaying ? 3 : 0.3,
                repeat: playingIdx === idx && isPlaying ? Infinity : 0,
                ease: 'linear'
              }}
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${song.color} 0%, ${song.accentColor} 100%)`,
                boxShadow: playingIdx === idx 
                  ? `0 0 40px ${song.accentColor}, 0 20px 40px rgba(0, 0, 0, 0.15)`
                  : `0 12px 30px rgba(196, 30, 58, 0.15)`,
                border: '3px solid rgba(255, 255, 255, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Vinyl record grooves background */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent 50%)',
                zIndex: 1
              }} />

              {/* Center label */}
              <div style={{
                position: 'absolute',
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${song.accentColor}, ${song.color})`,
                border: '2px solid rgba(255, 255, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent:  'center',
                zIndex: 3,
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
              }}>
                <motion.div
                  animate={{
                    scale: playingIdx === idx && isPlaying ? [1, 1.1, 1] : 1
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: playingIdx === idx && isPlaying ? Infinity : 0
                  }}
                  style={{
                    fontSize: '2rem',
                    zIndex: 4
                  }}
                >
                  {song.emoji}
                </motion. div>
              </div>

              {/* Song info - shown on hover/play */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: playingIdx === idx ?  1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 0, 0, 0.6)',
                  borderRadius: '50%',
                  zIndex:  2,
                  backdropFilter: 'blur(2px)'
                }}
              >
                <div style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontFamily: "'Montserrat', sans-serif"
                }}>
                  <div style={{
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    marginBottom: '4px'
                  }}>
                    Now Playing
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    opacity: 0.9
                  }}>
                    {song.title}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Song title below vinyl */}
            <motion.div
              style={{
                textAlign: 'center',
                marginTop: '14px',
                fontFamily: "'Montserrat', sans-serif"
              }}
            >
              <div style={{
                fontWeight: 700,
                color: playingIdx === idx ?  '#C41E3A' :  '#165B33',
                fontSize: '0.95rem',
                transition: 'color 0.3s'
              }}>
                {song.title}
              </div>
              {playingIdx === idx && (
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{
                    fontSize: '0.8rem',
                    color: song.accentColor,
                    fontWeight: 600,
                    marginTop: '4px'
                  }}
                >
                  ▶ Playing... 
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Player Controls */}
      {selectedSong !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: `linear-gradient(135deg, ${playlist[selectedSong].color}, ${playlist[selectedSong].accentColor})`,
            borderRadius: '24px',
            padding: '28px',
            marginBottom: '24px',
            boxShadow: '0 16px 32px rgba(196, 30, 58, 0.25)',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          {/* Now Playing Info */}
          <div style={{
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.8rem',
              color: '#fff',
              fontWeight: 700,
              marginBottom: '8px',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
            }}>
              {playlist[selectedSong].title}
            </div>
            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize:  '0.9rem',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 600
            }}>
              {isPlaying ? '🎵 Now playing...' : '⏸ Paused'}
            </div>
          </div>

          {/* Control Buttons */}
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent:  'center',
            flexWrap: 'wrap'
          }}>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlayPause}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#C41E3A',
                border: 'none',
                borderRadius: '20px',
                padding: '12px 32px',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'Montserrat', sans-serif",
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)'
              }}
            >
              {isPlaying ? '⏸ Pause' : '▶ Play'}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={stopSong}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#C41E3A',
                border: 'none',
                borderRadius: '20px',
                padding: '12px 32px',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'Montserrat', sans-serif",
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)'
              }}
            >
              ⏹ Stop
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.08), rgba(212, 175, 55, 0.08))',
          borderRadius: '16px',
          padding: '20px',
          border: '2px solid rgba(212, 175, 55, 0.2)',
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
          💿 Click on any vinyl record to play songs 🎶
        </div>
        <div style={{
          fontFamily: "'Montserrat', sans-serif",
          color: '#C41E3A',
          fontSize: '0.85rem'
        }}>
      
        </div>
      </motion.div>
    </motion.div>
  );
}