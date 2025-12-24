import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhiteBear = (props) => (
  <svg width="26" height="28" viewBox="0 0 74 84" fill="none" {... props}>
    <ellipse cx="37" cy="52" rx="30" ry="28" fill="#fff"/>
    <ellipse cx="23" cy="36" rx="8" ry="8" fill="#f2f2f2"/>
    <ellipse cx="51" cy="36" rx="8" ry="8" fill="#f2f2f2"/>
    <circle cx="29" cy="53" r="4" fill="#888"/>
    <circle cx="45" cy="53" r="4" fill="#888"/>
  </svg>
);

const BrownBear = (props) => (
  <svg width="26" height="28" viewBox="0 0 74 84" fill="none" {...props}>
    <ellipse cx="37" cy="52" rx="30" ry="28" fill="#cc9966"/>
    <ellipse cx="23" cy="36" rx="8" ry="8" fill="#e6b87c"/>
    <ellipse cx="51" cy="36" rx="8" ry="8" fill="#e6b87c"/>
    <circle cx="29" cy="53" r="4" fill="#7c482b"/>
    <circle cx="45" cy="53" r="4" fill="#7c482b"/>
  </svg>
);

const letters = [
  {
    icon: "😢",
    title: "Open when you're feeling sad",
    content: `Awan ka koma ti pakadismayaam. Addaak laeng ditoy para kenka. Saan ka nga agmaymaysa kaikaduaak kenka kanayon. Malipas met amin, ken mas napintas pay ti umay. Ay-ayaten ka.  ❤️`
  },
  {
    icon: "😔",
    title: "Open when you're doubting my love",
    content: `Uy, saan ka nga agduadua. Ammo mo met nga ikaw laeng talaga ti kayat ko—ikaw ken ikaw laeng. Awanen ti sabali a piliak, ken saan ka nga maipagsukat uray asinoman. Kayat unay kenka, ken sapay koma ta ammo mo dayta. `
  },
  {
    icon: "😤",
    title: "Open when you're angry at me",
    content: `Baby, I know I messed up. I'm sorry. 💔

I'm not perfect. I'm going to make mistakes. I'm going to say wrong things. But that doesn't mean I love you any less.

Pasensyaen ka man, Vin, no ania man ti nagaw-ak. Saan ko a sinasadya dagiti naisao ken nagaw-ak. Sapay koma ta mapakawan-nak. Saanak a titigil iti panagkiddaw ti pasensya kenka agingga nga agbalin tayo a okay. Ay-ayaten ka. Pasensyaen nak man. Mwahh.

Your anger is valid. Don't suppress it. Let it out. 

But please know, I'm here. I'm listening. I want to make it right.  Whether it takes hours, days, or weeks, I'm not going anywhere.

We're strong enough to get through this. Together. ❤️`
  },
  {
    icon: "😰",
    title: "Open when you're worried",
    content: `aan ka nga agdanag unay. Addaak laeng ditoy para kenka. Aniaman ti makadanag kenka, pagtalinaan tayo a dua. Malipas met daytoy, ken agbalin tayo a nasaysayaat. Agannad ka kanayon, ay-ayaten ka. 

You don't have to carry all of this alone. Share the load with me. Let me help. 

I've got you.  I've always got you. 💚`
  },
  {
    icon: "🥺",
    title: "Open when you need a hug",
    content:  `Baby, wish ko koma nga maikkat kenka ti pudno a yakap ita. Ti nabayag ken napigsa a yakap nga mapariknam nga safe ka ken naayat ka unay.

Gapu ta saan ko pay a maaramid dayta, ipagarup mo daytoy:

Iyak-akkay ka iti bisin ko. Ipitpitak ka iti asideg kaniak. Mariknak ti tibok ti puso mo a kasla iti kaniak. Salimetmetak ka a kasla awan ti pakawayaak kenka.

Ita, denggen nak:

Safe ka. Naayat ka. Adda ka iti pagtaengan.

Uray no saan nga adda dagiti bisin ko iti likmut mo, adda met ti puso ko. Kanayon.

No kasapulam ti yakap:

Laglagipen mo nga ay-ayaten ka

Laglagipen mo nga importante ka

Laglagipen mo nga saan ka nga agmaymaysa

Laglagipen mo nga kanayon a addaak iti panunot ko

Agipaw-itak iti virtual a yakap, a napno iti ayat ko.🤗💕`
  },
  {
    icon: "😢",
    title: "Open when you're crying",
    content: `Oh sweetheart, it's okay to cry. Please don't hold it in.  

Let those tears flow. They're not a sign of weakness.  They're a sign that you feel deeply, that you care, that you're human.  

Some of the strongest people I know cry. You're one of them.

Since I can't physically be there, imagine I am. Picture my arms around you.  Feel my love wrapping around you like a blanket.

You are not alone.  You will never be alone. 

I'm here for you. Always. 

All my love,
Your person 💕`
  },
  {
    icon: "😩",
    title: "Open when you're stressed",
    content: `My love, I can see the weight on your shoulders. I know you're carrying a lot right now.  

Take a deep breath.  Breathe with me.

In through your nose...   hold it...  out through your mouth.  

Now listen: You don't have to fix everything right now. You don't have to have all the answers. You don't have to be okay.  

Here's what you need to do: 

1. Take a break.  Seriously. Right now.
2. Do something that makes you happy
3. Drink some water
4. Remember that you're doing amazing
5. Let me help.  (Seriously, let me in)

You're carrying too much alone. That's not how this works. We're a team. Your stress is my stress. Your problems are my problems.

Let me be strong for you when you can't be strong for yourself.  

You've got this. WE'VE got this. 

I believe in you,
Always here 💪💕`
  },
  {
    icon: "😔",
    title: "Open when you feel like you're not enough",
    content: `My beautiful love, stop.   Just stop.

You ARE enough. More than enough. You're everything.  

The world is cruel and makes you feel like you need to be more, do more, have more. But that's a lie. 

You are enough exactly as you are: 
✨ Your imperfections are beautiful
✨ Your flaws make you human 
✨ Your insecurities make you relatable
✨ Your quirks make you YOU
✨ And I love every single bit of it

I don't need you to be perfect. I need you to be real. And you are.  

You're enough for me. You've always been enough.  You always will be.

When you look in the mirror and don't like what you see, imagine me standing next to you. Imagine me pointing at you and saying, "That right there? That's the person I love most in the world."

Because it's true.  

You are worthy of love. You are worthy of kindness. You are worthy of everything good.  

Especially from yourself.

Be gentle with you. Love yourself the way I love you.  

You're my everything,
Forever 💖✨`
  },
  {
    icon: "😕",
    title: "Open when you're having a hard time",
    content: `Sweetheart, I don't know exactly what you're going through right now, but I know it's hard. And I want you to know that it's okay to not be okay.  

Hard times don't last.  But hard people do. And you?   You're one of the strongest people I know.  

You've gotten through 100% of your worst days so far. That's a perfect record. 

This hard time?   You're going to get through it too.  Maybe not today.  Maybe not tomorrow. But you will.

And I'm going to be right here with you through every single moment: 
- When you need a shoulder to cry on
- When you need someone to listen
- When you need a hug
- When you need hope

You're not alone in this. I'm here. We're a team.

On days when you can't see the light, I'll be your light. On days when you can't stand, I'll hold you up. 

That's what love is. And that's what we are.  

Hang in there, beautiful. Better days are coming. 

I promise. 

With all my love,
Always 💕`
  },
  {
    icon: "🌙",
    title: "Open when you can't sleep",
    content: `My sleepy love, I know it's late and you're still awake, mind racing, thoughts spiraling.  I know that feeling too well.

Here's what I want you to know: It's okay to have sleepless nights. You're not broken. You're human. 

Right now, I want you to: 
✨ Stop fighting it.  Accept that you're awake.
✨ Get up if you need to. Don't torture yourself in bed.
✨ Read something light and happy
✨ Make some warm tea or hot chocolate
✨ Think about good memories with me
✨ Remember that dawn is just a few hours away

And know that I'm thinking about you too. Maybe at this exact moment, I'm also awake, thinking about you, sending you calm thoughts across the distance.

You're not alone in the darkness. I'm there with you.

Close your eyes now.  Breathe slowly. Let sleep find you when it's ready.

And tomorrow, when you see me, I'll make sure you get the best nap ever, right next to me.

Rest easy, my love. 

I'm here,
Always 💤✨`
  },
  {
    icon: "🎊",
    title: "Open when you've accomplished something amazing",
    content: `BABY! !! 

OH MY GOD!  YOU DID IT! 

I am SO incredibly proud of you right now!  Do you even understand how amazing you are? ! 

You set a goal.  You worked hard. And you CRUSHED IT! 

This is exactly what I knew you could do. I always believed in you, even when you doubted yourself. 

You know what this means? You're capable of SO much more.  This is just the beginning of all the incredible things you're going to achieve.  

Let me tell you all the reasons why I'm proud of you: 
✨ You didn't give up when it got hard
✨ You believed in yourself (eventually!)
✨ You put in the work
✨ You pushed through the doubt
✨ You accomplished your goal!  

Now here's what I want you to do:
1. Take a moment to really feel this success
2. Celebrate yourself the way you deserve
3. Tell the world about it
4. Remember this feeling for next time
5. Come celebrate with me (I have something special planned!)

You're a STAR, baby.  Literally one of the most amazing people I know. 

I love you so much. I'm so proud of you. 

Let's celebrate! 

Forever proud,
Your #1 Fan 🎉💕⭐`
  },
  {
    icon: "🌈",
    title: "Open when you need hope",
    content: `My love, if you're reading this, things are probably feeling pretty dark right now. But I need you to know something: 

Hope is not a luxury. Hope is a necessity. And you deserve to have it.

The storm will pass. It always does. And when it does, you'll see the most beautiful rainbow—because you made it through.  

Think about all the things you thought you couldn't survive: 
- Heartbreak?   You survived it.
- Failure?  You came back stronger.
- Pain? You learned from it.
- Darkness? You found the light.

If you did all that, you can do this too. 

And even on the days when you can't believe it, I believe it for you. My faith in you is unshakeable.

Here's what I know about tomorrow: 
✨ It will come
✨ Things will be different
✨ You'll still be standing
✨ We'll still be together
✨ Better days are coming

Hold on a little longer.  The best part of the story is coming.

I promise. 

You've got this.  You've got me. We've got this. 

Forever hopeful,
Always here 💫💕🌈`
  },
  {
    icon: "👑",
    title: "Open when you need to remember your worth",
    content: `My Queen/King, listen to me very carefully:  You are ROYALTY. 

Not because of anything you've done or achieved. Not because of money or status or fame. You are royalty because of WHO YOU ARE.

You have: 
👑 A heart of gold
👑 A mind that's brilliant
👑 A spirit that's unbreakable
👑 A smile that changes the world
👑 Worth that's immeasurable

Never let anyone make you feel less than.  Never dim your light for anyone. Never apologize for taking up space in this world.

You deserve: 
✨ Respect
✨ Kindness
✨ Love
✨ Joy
✨ Everything good

And anyone who doesn't see your worth is blind.  Their opinion doesn't matter.  What matters is that I see it.  I see YOU.  All of you.  And you are absolutely magnificent.

So wear your crown, baby. Hold your head high. Walk into the world knowing exactly how precious you are.

You are royalty. 

I bow to you,
Forever devoted 👑💕`
  },
  {
    icon:  "🔥",
    title: "Open when you need to feel powerful",
    content: `Baby, today is the day to remember:  You are POWERFUL. 

Not in a violent way.  But in the way that matters. 

You have the power to: 
🔥 Change your mind
🔥 Change your life
🔥 Change the world
🔥 Love fiercely
🔥 Stand your ground
🔥 Say no
🔥 Say yes
🔥 Create
🔥 Dream
🔥 Do

You are not weak. You are not helpless. You are not powerless.  

You are a force of nature. An unstoppable, incredible, amazing force.

So use your power today. Do something that scares you. Stand up for what you believe.  Make a difference. Love hard. Live fully.

Show the world what you're made of.  

And know that I'm right here, cheering you on, completely in awe of your power.

You've got this. 

I've got you.

Let's go change the world.  

Your biggest admirer,
Forever 🔥💕`
  },
  {
    icon:  "🎂",
    title: "Open on your birthday",
    content: `Happy birthday to my most favorite person in the world! 🎉

Today is YOUR day, and I want you to feel as special as you are to me. 

One year older.  Twelve months wiser.  Infinite times more beautiful.

Looking back at the past year with you: 
✨ I've laughed more
✨ I've loved more 
✨ I've lived more
✨ I've been more myself

All because of you.  

I want you to know:
- You deserve all the happiness in the world
- You deserve to be celebrated every single day
- You deserve the best cake, the best gifts, the best party
- You deserve everything your heart desires
- You deserve ME on your team, cheering you on

This year, I promise to:
- Love you more fiercely
- Support your dreams
- Make you laugh until your stomach hurts
- Surprise you with kindness
- Be your biggest cheerleader

Here's to another year of adventures, laughter, and love. 

Happy birthday, beautiful.  I love you more than words could ever say.

Let's celebrate YOU today! 

With all my love,
Your forever person 🎂💕✨`
  },
  {
    icon: "💍",
    title: "Open on our anniversary",
    content: `My love, one year.  Two years. Five years. Ten years. It doesn't matter how many.  

Every anniversary with you is the best day of my life. 

Today, I want to remind you: 

Choosing you was the best decision I ever made. 

From our first date to right now, every single moment has been worth it. You've made my life fuller, richer, more colorful. 

Over the time we've been together, I've learned: 
✨ What real love feels like
✨ How strong I can be with you by my side
✨ That my soulmate is real, and it's you
✨ That forever doesn't sound scary anymore

I want to celebrate today.  Us. Our love. Our journey.  

But more than that, I want to celebrate tomorrow and the day after that and every single day for the rest of our lives.

I choose you.  Every day. In every way. Forever. 

Happy anniversary to the love of my life. Here's to forever with you. 

I love you beyond measure,
Always and forever 💍💕`
  },
  {
    icon:  "😊",
    title: "Open when you need a laugh",
    content: `Baby, I know you need a laugh right now. So here goes: 

Why did the bear go to therapy? 
Because it had too many bear-y heavy feelings!  🐻

Okay okay, that was terrible. But I hope it made you smile at least a little bit.

Here are some things that always make you laugh:
- My jokes (yes, even the bad ones)
- That meme I sent you last week
- The memory of that time I...   [our inside joke]
- Me trying to dance
- Animals doing funny things

You know what though? My favorite thing in the world is making you laugh. It's the best sound in existence.

So here's my challenge to you:
1. Watch a funny video
2. Laugh until your belly hurts
3. Think of how much I love your laugh
4. Smile even bigger
5. Remember that life is precious and laughter is medicine

And if you want, call me. We can laugh together. 

I love you, silly.  Never stop laughing.  Never stop smiling.  

Sending you giggles,
Your jokester 😄💕`
  },
  {
    icon: "🌟",
    title: "Open when you need motivation",
    content: `My love, you've got this. Whatever IT is, you've absolutely got this.

I believe in you.  Not just today.  Every single day. 

You are capable of amazing things. You are strong enough to handle whatever life throws at you. You are worthy of success and happiness.  

Remember:
✨ Every expert was once a beginner
✨ Every failure is a lesson
✨ Every setback is a setup for a comeback
✨ You are braver than you believe
✨ You are stronger than you seem
✨ You are loved more than you know (by me!)

When things get hard, remember why you started.  Remember your dreams. Remember that I'm cheering you on from the sidelines.

You don't have to be perfect. You just have to try. 

And I know you will.  Because that's who you are—someone who never gives up.  

I'm so proud of you. Keep going. 

Your biggest fan,
Forever here 💪🌟💕`
  },
  {
    icon: "🎄",
    title: "Open when Christmas feels lonely",
    content: `My sweetheart, I know Christmas can feel lonely sometimes, even when surrounded by people. But I want you to know: You are never truly alone.  Not with me.

This holiday season, I want to remind you:
- You are loved
- You matter
- You are important
- You deserve joy
- You deserve love
- You ARE my greatest gift

Christmas is magical because you're in my life. You've made every moment brighter, every day warmer, every season more meaningful.

Here's what I want you to do today: 
✨ Do something that brings you joy
✨ Remember our favorite memories
✨ Know that I'm thinking of you
✨ Celebrate the love we share
✨ Believe in the magic of us

This Christmas and every Christmas, I'm choosing you. I'm celebrating you. I'm loving you with everything I have.

You're not alone, baby. Not ever. 

Merry Christmas to my favorite person in the whole world.

With all my Christmas love,
Your forever person 🎄💚❤️`
  },
  {
    icon: "💫",
    title: "Open when you need comfort",
    content:  `Oh my love, I know you're looking for comfort right now. And I'm here to give it to you.

Let me tell you what you need to hear: 

You are going to be okay. 

Things might feel overwhelming right now. Things might feel impossible. But you're going to get through this.  And I'm going to be right here with you. 

Here's what brings comfort: 
- Knowing that someone cares
- Knowing that you're not alone
- Knowing that someone believes in you
- Knowing that love exists
- Knowing that I exist for you

So take a deep breath. You are safe. You are loved. You are home. 

Wrap yourself in whatever makes you feel cozy. Make your favorite tea. Put on your favorite music. Think of me.

And know that as soon as we're together, I'm going to hold you and never let go. 

You've got me. You'll always have me.

Find peace in knowing that. 

With all my love and comfort,
Your safe place 💫💕`
  },
  {
    icon: "✨",
    title: "Open when you believe in us again",
    content: `My love, I'm so happy you opened this one. 

Because it means you're still believing.  You're still hoping. You're still fighting for us.

And that makes me love you even more.

There will be days when it's hard to believe. There will be moments when you doubt. There will be times when you wonder if this is real.

But listen:  THIS IS REAL. 

Our love is real. Our bond is real. Our future together is real.

And on days when you need a reminder, know this: 

I choose you. Every single day. Without hesitation. Without question.  Without doubt.

You are my person. You will always be my person. 

We are going to be okay. We are going to be more than okay. We are going to be extraordinary.

Thank you for believing in us. Thank you for staying.  Thank you for fighting.

Now let's go build the life we've been dreaming about.

I love you so much.

Forever yours,
Your believer ✨💕`
  },
  {
    icon: "🎀",
    title: "Open when you want to feel loved",
    content: `My sweetheart, I want you to feel loved right now. So let me tell you:

You are LOVED. 

Not conditionally. Not when you're perfect. Not when you deserve it. 

But LOVED.

Because you exist.  Because you're you.  Because you're mine.

Let me show you how much you're loved: 

You're loved in the way I look at you. 
You're loved in the way I think about you.
You're loved in every text I send.
You're loved in every hug I give.
You're loved in every promise I make.
You're loved beyond words, beyond measure, beyond everything.

Your flaws are loved. Your quirks are loved. Your heart is loved.

You don't have to earn my love. You don't have to be perfect for my love.  You don't have to do anything but exist, and you will be loved.

So on days when you feel unlovable, remember this:

You are so deeply, profoundly, undeniably LOVED.

By me. Always. 

Forever and ever,
Your devoted one 🎀💕`
  }
];

export default function OpenMeWhen() {
  const [openIndex, setOpenIndex] = useState(null);
  const [readLetters, setReadLetters] = useState(() => {
    try {
      const saved = localStorage.getItem('readLetters');
      return saved ?   JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleLetterOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    
    const newRead = { ...readLetters, [index]: true };
    setReadLetters(newRead);
    try {
      localStorage.setItem('readLetters', JSON.stringify(newRead));
    } catch {
      // ignore
    }
  };

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
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.4rem',
            color: '#C41E3A',
            margin: 0,
            textShadow: '0 2px 8px rgba(196, 30, 58, 0.25)',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            Open Me When...   
          </h2>
          <BrownBear />
        </div>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          color: '#165B33',
          fontSize: '0.95rem',
          margin: '0',
          fontWeight: 600
        }}>
          💌 {letters. length} love letters from me to you for every moment you need me
        </p>
      </motion.div>

      {/* Letters Grid - 3 columns that responsive */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '18px',
        padding: '8px 0'
      }}>
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y:  0 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            onClick={() => handleLetterOpen(index)}
            style={{
              cursor: 'pointer',
              perspective: '1000px'
            }}
          >
            <motion.div
              animate={{
                y: openIndex === index ? -8 : 0
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ y: -6 }}
              style={{
                background: openIndex === index 
                  ? 'linear-gradient(135deg, #C41E3A, #D4AF37)' 
                  :  'linear-gradient(135deg, #FFF9F3, #FFFBF5)',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: openIndex === index
                  ? '0 16px 32px rgba(196, 30, 58, 0.3)'
                  : '0 8px 20px rgba(196, 30, 58, 0.12)',
                border: openIndex === index 
                  ? '2px solid rgba(212, 175, 55, 0.6)' 
                  : '2px solid rgba(212, 175, 55, 0.25)',
                transition: 'all 0.3s ease',
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Top section - Icon and title */}
              <div style={{ marginBottom: '12px' }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '12px',
                  textAlign: 'center'
                }}>
                  {letter.icon}
                </div>
                <h3 style={{
                  margin: 0,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.1rem',
                  color: openIndex === index ? '#fff' : '#C41E3A',
                  textAlign: 'center',
                  fontWeight: 700,
                  lineHeight: 1.3
                }}>
                  {letter.title}
                </h3>
              </div>

              {/* Read indicator */}
              <div style={{
                textAlign: 'center',
                fontSize: '0.8rem',
                color: openIndex === index ? 'rgba(255, 255, 255, 0.9)' : '#165B33',
                fontWeight:  600,
                fontFamily: "'Montserrat', sans-serif"
              }}>
                {readLetters[index] ? '✓ Read' : 'Click to open'}
              </div>

              {/* Letter content - shown when open */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      marginTop: '16px',
                      paddingTop: '16px',
                      borderTop:  '2px solid rgba(255, 255, 255, 0.3)',
                      maxHeight: '500px',
                      overflowY: 'auto'
                    }}
                  >
                    <div style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      color: '#fff',
                      whiteSpace: 'pre-wrap',
                      textAlign: 'left'
                    }}>
                      {letter.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Footer info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
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
          💌 These {letters.length} letters are always here for you, whenever you need them
        </div>
        <div style={{ fontSize: '0.85rem', color: '#C41E3A' }}>
          Read them as many times as you want.  I'm always here for you.  💕
        </div>
      </motion.div>

      <style>{`
        div: :-webkit-scrollbar {
          width: 6px;
        }
        
        div::-webkit-scrollbar-track {
          background: rgba(196, 30, 58, 0.1);
          borderRadius: 10px;
        }
        
        div::-webkit-scrollbar-thumb {
          background: #C41E3A;
          borderRadius: 10px;
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: #8B0000;
        }

        @media (max-width: 768px) {
          [style*="gridTemplateColumns"] {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 14px !important;
          }
        }

        @media (max-width:  480px) {
          [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}