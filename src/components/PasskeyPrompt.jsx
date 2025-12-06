import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PasskeyPrompt({ onUnlock }) {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState(null);
  const [msgType, setMsgType] = useState(""); // "error" or "success"
  const [showForm, setShowForm] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim().toLowerCase() === "sleepyhead") {
      setMsg("Good job, babe! Way to go 💖");
      setMsgType("success");
      setInput("");
      setShowForm(false);
      setTimeout(() => {
        setMsg(null);
        onUnlock();
      }, 2000); // Show success for 2s then unlock
    } else {
      setMsg("Try again, baby! Think harder 😉");
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
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{
        textAlign: "center",
        marginTop: "120px",
        padding: "30px",
        borderRadius: "32px",
        background: "linear-gradient(135deg, #f7c98c 0%, #fc67fa 100%)",
        boxShadow: "0 8px 40px #9370db30"
      }}
    >
      <motion.h2
        style={{
          fontFamily: `'Dancing Script', cursive`,
          fontSize: "2.2em",
          color: "#d70465",
          marginBottom: "12px"
        }}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
      >
        What's the passkey, babe?
      </motion.h2>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            autoFocus
            onChange={e => setInput(e.target.value)}
            placeholder="hint: a person who loves to sleep"
            style={{
              fontSize: "1.2em",
              padding: "8px 18px",
              borderRadius: "10px",
              border: "2px solid #fbbdbc",
              outline: "none",
              fontFamily: `'Montserrat', sans-serif`,
              marginBottom: "16px"
            }}
          />
          <br />
          <button
            type="submit"
            style={{
              fontSize: "1.2em",
              padding: "8px 22px",
              borderRadius: "20px",
              background: "linear-gradient(90deg,#ed6ea0,#fae1f6 100%)",
              color: "#fff",
              border: "none",
              fontFamily: `Montserrat, sans-serif`,
              cursor: "pointer",
              marginTop: "10px"
            }}
          >Unlock</button>
        </form>
      )}
      <AnimatePresence>
        {msg && (
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.7 }}
            animate={{ y: 0, opacity: 1, scale: 1.12 }}
            exit={{ opacity: 0, scale: 0.7, y: -40 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            style={{
              position: "fixed",
              left: "50%",
              top: "48%",
              transform: "translate(-50%,-30%)",
              zIndex: 50,
              background: msgType === "success"
                ? "linear-gradient(90deg,#fae1f6,#ed6ea0 100%)"
                : "linear-gradient(90deg,#ffd6d6 0%,#ed5466 100%)",
              color: msgType === "success" ? "#d70465" : "#800020",
              fontWeight: "bold",
              fontFamily: `'Dancing Script', cursive`,
              borderRadius: "22px",
              boxShadow: "0 2px 14px #c561b680",
              fontSize: "1.55em",
              padding: "26px 37px",
              textShadow: msgType === "success"
                ? "0 2px 17px #ed6ea09a"
                : "0 2px 12px #ed5466",
              border: msgType === "success"
                ? "2px solid #fc67fa"
                : "2px solid #ed5466"
            }}
          >
            {msg}
            {msgType === "error" &&
              <motion.button
                type="button"
                initial={{ scale: 0.7 }}
                animate={{ scale: 1.05 }}
                whileHover={{ scale: 1.17 }}
                onClick={closeMsg}
                style={{
                  marginLeft: "16px",
                  background: "linear-gradient(90deg,#fbbdbc,#ed6ea0)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "1.18em",
                  fontFamily: `'Montserrat', sans-serif`,
                  cursor: "pointer",
                  padding: "5px 16px"
                }}
              >OK</motion.button>}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}