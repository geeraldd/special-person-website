import React from "react";

// Add as many cute, couple or Tagalog jokes here as you want!
const jokes = [
  "Babe, alam mo kung bakit masarap ang kape katabi ka? Kasi ikaw ang tamis sa buhay ko ☕🥰",
  "Sabi ng puso ko: 'Ikaw lang sapat na.' Sabi ng wallet ko: 'Ikaw lang talaga ang kaya ko.' 😂",
  "Miss kita… pero okay lang, mamaya miss mo rin ako 😏💕",
  "Babe, parang wifi ka. Weak ako kung wala ka! 📶❤️",
  "Alam mo ba anong tawag sa taong mahal kita? Ako yun 😌❤️",
  "Pwede ba kita hiramin sa magulang mo? Isasauli ko rin… sa apelyido ko 😳💍",
  "Kung may forever man, ikaw ‘yun... pero ‘wag mo muna akong iiwan maghuhugas pa ako ng pinggan. 💕🧽",
  "Kung pagkain ka, ikaw yung hindi ko kayang i-share kahit sa pinaka-close kong friend 😤🍟❤",
  "Sana selfie na lang tayo, para kahit magkalayo tayo, magka-face to face pa rin. 😂📸",
  "Mahal kita higit pa sa data ko—kahit mag-brownout pa, ikaw pa rin ang maliwanag. 💡",
  "May license ka ba? Kasi bawal mag-drive sa puso ko nang walang permit 🚗💘",
  "Alam mo yung feeling na laging gutom? Ganun ako sa attention mo 😩🍽️💗",
  "Kung electric fan ka, number 3 sana kita… Mas malakas ang tama 😆💨❤️",
  "Babe, edit mo nga picture ko… Lagyan mo ng ikaw sa tabi ko para perfect 😳📸💕",
  "Babe, I checked the weather… Forecast: 100% chance mamimiss kita mamaya. 🌧️🥺💞",
  "Babe, parang cellphone ka… kasi kahit low storage na ako, ikaw pa rin pina-prioritize ko. 📱❤️",
  "Babe, parang trapik ka… kasi stuck ako sa’yo! 🚗❤️",
];

function getJokeOfTheDay() {
  const today = new Date();
  // Use the day of year to index jokes (so it cycles through)
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const idx = day % jokes.length;
  return jokes[idx];
}

export default function DailyJoke() {
  const joke = getJokeOfTheDay();
  
  return (
    <div style={{
      margin: "38px auto 16px auto",
      background: "linear-gradient(90deg,#fae1f6cc 0%,#fc67fa55 100%)",
      borderRadius: "18px",
      boxShadow: "0 4px 23px #fc67fa60",
      maxWidth: "620px",
      padding: "24px 26px",
      textAlign: "center",
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "1.14em",
      color: "#7d3092",
      fontWeight: 600,
      letterSpacing: "0.04em",
      position: "relative"
    }}>
      <div style={{
        position: "absolute",
        top: "-18px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#ed6ea0",
        color: "#fff",
        padding: "7px 21px",
        borderRadius: "17px",
        fontFamily: "'Dancing Script', cursive",
        fontSize: "1.18em",
        boxShadow: "0 2px 11px #ed6ea077"
      }}>
        Joke of the Day
      </div>
      <div style={{ marginTop: "13px", whiteSpace: "pre-line" }}>
        {joke}
      </div>
    </div>
  );
}