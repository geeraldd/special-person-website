import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhiteBear = (props) => (
  <svg width="26" height="28" viewBox="0 0 74 84" fill="none" {...  props}>
    <ellipse cx="37" cy="52" rx="30" ry="28" fill="#fff"/>
    <ellipse cx="23" cy="36" rx="8" ry="8" fill="#f2f2f2"/>
    <ellipse cx="51" cy="36" rx="8" ry="8" fill="#f2f2f2"/>
    <circle cx="29" cy="53" r="4" fill="#888"/>
    <circle cx="45" cy="53" r="4" fill="#888"/>
  </svg>
);

const BrownBear = (props) => (
  <svg width="26" height="28" viewBox="0 0 74 84" fill="none" {... props}>
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
    content: `My love,

I know today is tough, and that's okay. You don't have to be strong all the time. 

Your feelings matter.  Your sadness is valid. Let it out.  Cry if you need to. I'm here for you, no matter what.

You know what?  Even on your worst days, you still manage to be one of the most beautiful people I know. Not because you're always happy, but because you keep going.  You're a fighter. 

I wish I could wrap my arms around you right now and hold you until the pain goes away. But since I can't, I want you to know:

You are loved. You are worthy.  You will get through this.

And when you're ready, I'll be right here waiting for you.  Always.

Love always,
Your [favorite person] 💕`
  },
  {
    icon: "😔",
    title: "Open when you're doubting my love",
    content: `My sweetheart,

If you're reading this, you're probably wondering if I really love you. Let me be crystal clear: I do. So much it scares me sometimes.  

You make me want to be better. You make ordinary days magical. The way you laugh, the way you care about others, the way you look at me...  it all makes me fall for you more.

There's no one else I'd rather:
- Spend forever with
- Wake up next to
- Hold in my arms
- Build a life with
- Grow old with

When I say "I love you," it's not just words. It's:
💕 Every text I send
💕 Every time I think of you
💕 Every dream I have about our future
💕 Every beat of my heart

My love for you is as real as it gets. 

Trust me.  Trust us. We're going to be okay.

Forever yours,
[Your name] 💖`
  },
  {
    icon: "😤",
    title: "Open when you're angry at me",
    content: `Baby,

I know I messed up. I'm sorry. 

I'm not perfect.  I'm going to make mistakes. I'm going to say the wrong things sometimes. I'm going to hurt you when I don't mean to.  That doesn't mean I love you any less. 

What it means is:
- I'm willing to fix it
- I care enough to try again
- I value us too much to give up
- I want to understand your perspective
- I'm sorry for how I made you feel

You have every right to be mad at me. Your anger is valid. Don't suppress it. 

But please know: I'm here.  I'm listening. I want to make it right.  Whether it takes hours, days, or weeks, I'm not going anywhere.

We're strong enough to get through this. Together.

I love you, even when you're mad at me. Maybe especially then, because it shows you care enough to fight for us.

Let's talk when you're ready. 

Always sorry, always yours,
[Your name] ❤️`
  },
  {
    icon: "😴",
    title: "Open when you're exhausted",
    content: `My beautiful sleepyhead,

I see you working so hard. I see you pushing through even when you're tired. I see everything you do, and I'm so proud of you.  

But right now? You need to rest. 

You don't have to be productive today. You don't have to accomplish anything. You don't have to prove yourself to anyone. 

Take a nap. Sleep in. Rest. Your body is asking for it.

Here's what I want you to do:
✨ Put your phone down
✨ Find the coziest spot  
✨ Wrap yourself in a blanket
✨ Close your eyes
✨ Dream about us

You work so hard for us, for your dreams, for everyone around you. But you also deserve rest. 

Sleep well, my love. I'll be here when you wake up.  

Sweet dreams of me 💤💕`
  },
  {
    icon: "😭",
    title: "Open when you're crying",
    content: `Oh sweetheart,

It's okay to cry. Please don't hold it in. 

Let those tears flow. They're not a sign of weakness. They're a sign that you feel deeply, that you care, that you're human.  

Some of the strongest people I know cry. You're one of them.

If I could be there right now, I would:
- Hold you tight
- Let you cry on my shoulder
- Stroke your hair gently
- Tell you everything will be okay
- Stay with you until the tears stop
- Love you through it all

Since I can't physically be there, imagine I am. Picture my arms around you.  Feel my love wrapping around you like a blanket.

You are not alone.  You will never be alone. 

I'm here for you. Always.

All my love,
[Your name] 💕`
  },
  {
    icon: "😩",
    title: "Open when you're stressed",
    content: `My love,

I can see the weight on your shoulders. I know you're carrying a lot right now. 

Take a deep breath.  Breathe with me.

In through your nose...  hold it...  out through your mouth.  

Now listen: You don't have to fix everything right now. You don't have to have all the answers. You don't have to be okay.  

Here's what you need to do:

1. Take a break.  Seriously. Right now.
2. Do something that makes you happy
3.  Drink some water
4. Remember that you're doing amazing
5. Let me help.  (Seriously, let me in)

You're carrying too much alone. That's not how this works. We're a team. Your stress is my stress. Your problems are my problems.

Let me be strong for you when you can't be strong for yourself.  

You've got this. WE'VE got this. 

I believe in you,
[Your name] 💪💕`
  },
  {
    icon: "😔",
    title: "Open when you feel like you're not enough",
    content: `My beautiful love,

Stop.  Just stop.

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
[Your name] 💖✨`
  },
  {
    icon: "😕",
    title: "Open when you're having a hard time",
    content: `Sweetheart,

I don't know exactly what you're going through right now, but I know it's hard. And I want you to know that it's okay to not be okay.  

Hard times don't last.  But hard people do. And you?  You're one of the strongest people I know. 

You've gotten through 100% of your worst days so far. That's a perfect record. 

This hard time?  You're going to get through it too.  Maybe not today.  Maybe not tomorrow. But you will.

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
[Your name] 💕`
  },
  {
    icon: "😰",
    title: "Open when you're worried",
    content: `My love,

I see you worrying. I see you planning for worst-case scenarios. I see your mind running a million miles an hour.

I need you to hear this: Worrying won't change the outcome. But it will steal your present moment.

Here's what I know:
✨ We can handle whatever comes our way
✨ We're stronger together
✨ Things always work out somehow
✨ And even if they don't go as planned, we'll be okay

Because we have each other. 

So here's what I want you to do:
1. Take your worry
2.  Acknowledge it (it's valid)
3. Let it go (easier said than done, I know)
4. Live in THIS moment, right now
5. Trust that we've got this

You don't have to carry all of this alone. Share the load with me. Let me worry with you.  Better yet, let me help you NOT worry.

I've got you.  I've always got you.

Stop worrying.  Start trusting. Start living.

I love you,
[Your name] ❤️`
  },
  {
    icon: "🥺",
    title: "Open when you need a hug",
    content: `Baby,

I wish I could give you a real hug right now. A long, tight hug where you feel completely safe and loved.

But since I can't, imagine this:

I'm wrapping my arms around you.  Pulling you close. Breathing in the scent of your hair. Feeling your heartbeat against mine.  Holding you like I never want to let go.

Now listen to me:

You are safe. You are loved. You are home.

My arms may not be physically around you right now, but my heart is. Always.

So when you need a hug:
- Remember that I love you
- Remember that you matter
- Remember that you're not alone
- Remember that I'm always thinking of you

And know that the next time I see you, I'm giving you the biggest hug ever.

Until then, hug yourself for me. Tell yourself what I would tell you: "You're amazing, and I love you so much."

Sending virtual hugs,
[Your name] 🤗💕`
  },
  {
    icon: "😢",
    title: "Open when you miss me",
    content: `My love,

I miss you too. So much it hurts sometimes. 

I miss:
💕 Your laugh
💕 Your smile
💕 Your voice
💕 Your touch
💕 Just being near you

But here's what I want you to know: Distance doesn't change how I feel about you. Not one bit.

We might be apart right now, but we're never really separated. My heart carries you everywhere I go.

When you miss me:
- Think of a favorite memory
- Listen to our song
- Look at our photos
- Text me a silly joke
- Call me and hear my voice

And remember: This distance is only temporary. We're always moving toward each other. 

I can't wait to see you again. To hold you. To be close to you again.

Until then, you're always on my mind and in my heart.

I miss you,
[Your name] 💔💕`
  },
  {
    icon: "🎂",
    title: "Open on your birthday",
    content: `Happy birthday to my most favorite person in the world!  🎉

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

Happy birthday, beautiful. I love you more than words could ever say.

Let's celebrate YOU today! 

With all my love,
[Your name] 🎂💕✨`
  },
  {
    icon: "💍",
    title: "Open on our anniversary",
    content: `My love,

One year.  Two years. Five years. Ten years. It doesn't matter how many.  

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

I choose you. Every day. In every way. Forever.

Happy anniversary to the love of my life. Here's to forever with you.

I love you beyond measure,
[Your name] 💍💕`
  },
  {
    icon: "😊",
    title: "Open when you need a laugh",
    content: `Baby,

I know you need a laugh right now. So here goes:

Why did the bear go to therapy? 
Because it had too many bear-y heavy feelings!  🐻

Okay okay, that was terrible. But I hope it made you smile at least a little bit.

Here are some things that always make you laugh:
- My jokes (yes, even the bad ones)
- That meme I sent you last week
- The memory of that time I...  [inside joke]
- Me trying to dance
- Animals doing funny things

You know what though? My favorite thing in the world is making you laugh. It's the best sound in existence.

So here's my challenge to you:
1. Watch a funny video
2.  Laugh until your belly hurts
3. Think of how much I love your laugh
4.  Smile even bigger
5. Remember that life is precious and laughter is medicine

And if you want, call me.  We can laugh together. 

I love you, silly.  Never stop laughing.  Never stop smiling.  

Sending you giggles,
[Your name] 😄💕`
  },
  {
    icon: "🌟",
    title: "Open when you need motivation",
    content: `My love,

You've got this. Whatever IT is, you've absolutely got this.

I believe in you. Not just today.  Every single day.

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

And I know you will. Because that's who you are—someone who never gives up.  

I'm so proud of you. Keep going. 

Your biggest fan,
[Your name] 💪🌟💕`
  },
  {
    icon: "💔",
    title: "Open when your heart hurts",
    content: `My sweetheart,

I can feel your pain, and it breaks my heart. But I want you to know: This pain?  It won't last forever. 

Heartbreak is temporary. You are permanent. You are strong. 

Here's what I know about you:
- You've survived 100% of your worst moments
- You have an incredible capacity to love
- Your heart is precious and beautiful
- Feeling this pain proves you're alive, you're human, you're real

Right now, you need to:
✨ Let yourself feel everything
✨ Don't numb the pain—process it
✨ Reach out to people who love you
✨ Be gentle with yourself
✨ Know that you're going to be okay

And most importantly: Know that I'm here.  My heart is here with yours. We can heal this together.

You're going to get through this. And you're going to come out stronger. 

I love your heart.  All of it. The parts that love so deeply that they hurt too. 

Don't harden it. Don't close it.  Just heal it.

And let me help.  

With all my love,
[Your name] 💕`
  },
  {
    icon: "🌙",
    title: "Open when you can't sleep",
    content: `My sleepy love,

I know it's 3am and you're still awake, mind racing, thoughts spiraling. I know that feeling too well.

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
[Your name] 💤✨`
  },
  {
    icon: "🎊",
    title: "Open when you've accomplished something amazing",
    content: `BABY!!! 

OH MY GOD!  YOU DID IT! 

I am SO incredibly proud of you right now!  Do you even understand how amazing you are?! 

You set a goal. You worked hard. And you CRUSHED IT! 

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

[Your name] 🎉💕⭐`
  },
  {
    icon: "🌈",
    title: "Open when you need hope",
    content: `My love,

If you're reading this, things are probably feeling pretty dark right now. But I need you to know something:

Hope is not a luxury. Hope is a necessity. And you deserve to have it.

The storm will pass. It always does. And when it does, you'll see the most beautiful rainbow—because you made it through. 

Think about all the things you thought you couldn't survive:
- Heartbreak?  You survived it.
- Failure? You came back stronger.
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

Hold on a little longer. The best part of the story is coming.

I promise.

You've got this.  You've got me. We've got this.

Forever hopeful,
[Your name] 💫💕🌈`
  },
  {
    icon: "👑",
    title: "Open when you need to remember your worth",
    content: `My Queen/King,

Listen to me very carefully: You are ROYALTY. 

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
[Your name] 👑💕`
  },
  {
    icon: "🔥",
    title: "Open when you need to feel powerful",
    content: `Baby,

Today is the day to remember: You are POWERFUL.

Not in a violent way. But in the way that matters. 

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

You are a force of nature. A unstoppable, incredible, amazing force.

So use your power today. Do something that scares you. Stand up for what you believe. Make a difference.  Love hard. Live fully.

Show the world what you're made of. 

And know that I'm right here, cheering you on, completely in awe of your power.

You've got this. 

I've got you.

Let's go change the world. 

Your biggest admirer,
[Your name] 🔥💕`
  }
];

export default function OpenMeWhen() {
  const [openIndex, setOpenIndex] = useState(null);
  const [readLetters, setReadLetters] = useState(() => {
    try {
      const saved = localStorage. getItem('readLetters');
      return saved ?  JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleLetterOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    
    // Mark as read
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
            fontFamily: "'Dancing Script', cursive",
            fontSize: '2rem',
            color: '#d70465',
            margin: 0,
            textShadow: '0 2px 8px rgba(165, 77, 153, 0.2)'
          }}>
            Open Me When...  
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
          💌 Letters from me to you for every moment you need me
        </p>
      </motion.div>

      {/* Letters Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        padding: '8px 0'
      }}>
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={() => handleLetterOpen(index)}
            style={{
              cursor: 'pointer',
              perspective: '1000px'
            }}
          >
            <motion.div
              animate={{
                rotateY: openIndex === index ? 0 : 0,
                y: openIndex === index ? -8 : 0
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ y: -6 }}
              style={{
                background: openIndex === index 
                  ? 'linear-gradient(135deg, #fae1f6, #ed6ea0)' 
                  : 'linear-gradient(135deg, #fffbea, #fff7f0)',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: openIndex === index
                  ? '0 16px 32px rgba(237, 110, 160, 0.25)'
                  : '0 8px 20px rgba(165, 77, 153, 0.12)',
                border: openIndex === index 
                  ? '2px solid #ed6ea0' 
                  : '1px solid rgba(237, 110, 160, 0.2)',
                transition: 'all 0.3s ease',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Top section - Icon and title */}
              <div style={{ marginBottom: '12px' }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '12px',
                  textAlign: 'center'
                }}>
                  {letter.icon}
                </div>
                <h3 style={{
                  margin: 0,
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '1.25rem',
                  color: openIndex === index ? '#fff' : '#d70465',
                  textAlign: 'center',
                  fontWeight: 700
                }}>
                  {letter.title}
                </h3>
              </div>

              {/* Read indicator */}
              <div style={{
                textAlign: 'center',
                fontSize: '0.85rem',
                color: openIndex === index ? 'rgba(255, 255, 255, 0.9)' : '#a18cd1',
                fontWeight: 600
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
                      marginTop: '20px',
                      paddingTop: '20px',
                      borderTop: '2px solid rgba(255, 255, 255, 0.3)',
                      maxHeight: '400px',
                      overflowY: 'auto'
                    }}
                  >
                    <div style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.95rem',
                      lineHeight: '1.8',
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
          color: '#a18cd1',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '0.9rem',
          padding: '16px',
          background: 'rgba(237, 110, 160, 0.05)',
          borderRadius: '14px',
          backdropFilter: 'blur(4px)'
        }}
      >
        <div style={{ marginBottom: '8px' }}>
          💌 These letters are always here for you, whenever you need them
        </div>
        <div style={{ fontSize: '0.85rem', color: '#fc67fa' }}>
          Read them as many times as you want.  I'm always here for you.  💕
        </div>
      </motion.div>

      {/* Custom scrollbar styling */}
      <style>{`
        div::-webkit-scrollbar {
          width: 6px;
        }
        
        div::-webkit-scrollbar-track {
          background: rgba(237, 110, 160, 0.1);
          borderRadius: 10px;
        }
        
        div::-webkit-scrollbar-thumb {
          background: #ed6ea0;
          borderRadius: 10px;
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: #d70465;
        }
      `}</style>
    </div>
  );
}