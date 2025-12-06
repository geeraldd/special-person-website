import { useState } from 'react';
import Home from './components/Home.jsx';
import Gallery from './components/Gallery.jsx';
import Letters from './components/Letters.jsx';
import OpenMeWhen from './components/OpenMeWhen.jsx';
import DailyCompliments from './components/DailyCompliments.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import PasskeyPrompt from './components/PasskeyPrompt.jsx';
import PlayWithMe from './components/BearHugGame.jsx';
import CrossPathTimer from './components/CrossPathTimer.jsx';

/* Small inline SVG icons used in the sidebar */
const Icon = {
  Home: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 11. 5L12 4l9 7.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 21V11h14v10" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Gallery: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="2" fill="#fff" opacity="0.06"/>
      <path d="M3 18l4-5 3 4 5-6 4 8" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9"/>
    </svg>
  ),
  Letters: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#fff" opacity="0.06"/>
      <path d="M3 7l9 6 9-6" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.95"/>
    </svg>
  ),
  OpenMeWhen: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#fff" strokeWidth="1.2" fill="none" opacity="0.95"/>
    </svg>
  ),
  Compliments: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4. 87 1.18 6. 88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#fff" opacity="0.95"/>
    </svg>
  ),
  Music: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path d="M9 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill="#fff" opacity="0.95"/>
      <path d="M9 9v8l10-3V6z" stroke="#fff" strokeWidth="1. 2" fill="none" opacity="0.95"/>
    </svg>
  ),
  Play: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#fff" opacity="0.06"/>
      <path d="M10 8l6 4-6 4V8z" fill="#fff" opacity="0.95"/>
    </svg>
  )
};

const pages = [
  { id: 'home', name: 'Home', component: Home, icon: Icon.Home },
  { id: 'gallery', name: 'Gallery', component: Gallery, icon: Icon. Gallery },
  { id: 'letters', name: 'Letters', component: Letters, icon: Icon.Letters },
  { id: 'open-me-when', name: 'Open Me When', component: OpenMeWhen, icon: Icon.OpenMeWhen },
  { id: 'compliments', name: 'Daily Affirmations', component: DailyCompliments, icon: Icon. Compliments },
  { id: 'music', name: 'Music', component: MusicPlayer, icon: Icon.Music },
  { id: 'play', name: 'Play With Me', component: PlayWithMe, icon: Icon.Play }
];

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [current, setCurrent] = useState('home');

  if (! unlocked) {
    return (
      <div className="app-root">
        <div className="centered-unlock">
          <PasskeyPrompt onUnlock={() => setUnlocked(true)} />
        </div>
      </div>
    );
  }

  const PageComponent = pages.find(p => p.id === current)?.component || Home;

  return (
    <div className="app-root">
      <aside className="sidebar" role="navigation" aria-label="Primary">
        <div className="brand">
          <div className="brand-name">special-person</div>
        </div>

        <nav className="side-nav">
          {pages.map(pg => (
            <button
              key={pg.id}
              className={`side-button ${current === pg.id ? 'active' : ''}`}
              onClick={() => setCurrent(pg.id)}
              aria-current={current === pg.id ? 'page' : undefined}
              title={pg.name}
            >
              <span className="side-icon">{pg.icon({ size: 18 })}</span>
              <span className="side-label">{pg.name}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-foot">
          <small style={{ color: '#ffeef8' }}>Made with ♥</small>
        </div>
      </aside>

      <main className="main-content">
        <div className="content-wrap">
          <PageComponent />
        </div>
        <CrossPathTimer />
      </main>
    </div>
  );
}