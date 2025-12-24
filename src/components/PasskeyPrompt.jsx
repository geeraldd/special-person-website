import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PasskeyPrompt({ onUnlock }) {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState(null);
  const [msgType, setMsgType] = useState("");
  const [showForm, setShowForm] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim().toLowerCase() === "sleepyhead") {
      setMsg("🎄 Merry Christmas! You unlocked our special place! 🎄");
      setMsgType("success");
      setInput("");
      setShowForm(false);
      setTimeout(() => {
        setMsg(null);
        onUnlock();
      }, 2500);
    } else {
      setMsg("Try again, babe! Think of a person who loves to sleep 😉");
      setMsgType("error");
    }
  }

  function closeMsg() {
    setMsg(null);
    setShowForm(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity:  1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{
        textAlign: "center",
        marginTop: "80px",
        padding: "40px 30px",
        borderRadius: "32px",
        background: "linear-gradient(135deg, #C41E3A 0%, #D4AF37 50%, #165B33 100%)",
        boxShadow: "0 20px 60px rgba(196, 30, 58, 0.4)",
        border: "3px solid rgba(212, 175, 55, 0.5)",
        maxWidth: "500px",
        margin: "0 auto"
      }}
    >
      <motion.div
        style={{
          fontSize: "4rem",
          marginBottom: "16px"
        }}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🎄
      </motion.div>

      <motion.h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "2.2rem",
          color: "#FFFFFF",
          marginBottom: "8px",
          textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          fontWeight: 800,
          letterSpacing: "-0.02em"
        }}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
      >
        Welcome to Our Secret Place
      </motion.h2>

      <p style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize:  "1rem",
        color: "rgba(255, 255, 255, 0.95)",
        marginBottom: "24px",
        fontWeight: 600
      }}>
        ❄️ What's the passkey, babe?  ❄️
      </p>

      {showForm && (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          }}
        >
          <input
            type="password"
            value={input}
            autoFocus
            onChange={(e) => setInput(e.target.value)}
            placeholder="Hint: A person who loves to sleep...  😴"
            style={{
              fontSize: "1.1rem",
              padding: "12px 18px",
              borderRadius: "12px",
              border: "2px solid rgba(212, 175, 55, 0.5)",
              outline: "none",
              fontFamily: "'Montserrat', sans-serif",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              color: "#1A1A2E",
              fontWeight: 500,
              transition: "all 0.3s ease"
            }}
            onFocus={(e) => {
              e.target.style. boxShadow = "0 0 20px rgba(212, 175, 55, 0.6)";
              e.target.style.borderColor = "rgba(212, 175, 55, 0.8)";
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = "none";
              e.target.style.borderColor = "rgba(212, 175, 55, 0.5)";
            }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale:  0.95 }}
            style={{
              fontSize: "1.1rem",
              padding: "12px 32px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))",
              color: "#C41E3A",
              border:  "none",
              fontFamily:  "'Montserrat', sans-serif",
              cursor: "pointer",
              fontWeight: 700,
              marginTop: "8px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              letterSpacing: "-0.01em"
            }}
          >
            🎁 Unlock 🎁
          </motion. button>
        </motion.form>
      )}

      <AnimatePresence>
        {msg && (
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.7 }}
            animate={{ y:  0, opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7, y: -40 }}
            transition={{ type: "spring", stiffness:  500, damping: 30 }}
            style={{
              position: "fixed",
              left: "50%",
              top: "48%",
              transform: "translate(-50%, -30%)",
              zIndex: 50,
              background: msgType === "success"
                ? "linear-gradient(135deg, #165B33, #2D6A4F)"
                : "linear-gradient(135deg, #C41E3A, #E63946)",
              color: "#FFFFFF",
              fontWeight: "bold",
              fontFamily: "'Playfair Display', serif",
              borderRadius: "24px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
              fontSize: "1.5rem",
              padding: "30px 40px",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
              border: msgType === "success"
                ? "3px solid rgba(212, 175, 55, 0.6)"
                : "3px solid rgba(255, 255, 255, 0.3)",
              maxWidth: "450px",
              width: "90%"
            }}
          >
            {msg}
            {msgType === "error" && (
              <motion. button
                type="button"
                initial={{ scale: 0.7 }}
                animate={{ scale: 1.05 }}
                whileHover={{ scale: 1.15 }}
                onClick={closeMsg}
                style={{
                  marginLeft: "16px",
                  background: "rgba(255, 255, 255, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#C41E3A",
                  fontSize: "1rem",
                  fontFamily: "'Montserrat', sans-serif",
                  cursor: "pointer",
                  padding: "6px 16px",
                  fontWeight: 700,
                  transition: "all 0.3s ease"
                }}
              >
                Try Again
              </motion.button>
            )}
          </motion. div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}