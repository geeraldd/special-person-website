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

const Icon = {
  Home: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Gallery: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
      <circle cx="8. 5" cy="8.5" r="1.5" fill="currentColor"/>
      <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Letters: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  OpenMeWhen: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Compliments: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M11. 049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-. 363 1.118l1.518 4.674c. 3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-. 783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-. 784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
    </svg>
  ),
  Music: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 18V5l12-2v13M9 18c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm12-2c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Play: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M14. 752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" fill="currentColor"/>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
  Gift: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2v6m-5-6h10a2 2 0 012 2v4H5V4a2 2 0 012-2zm-7 8h18v10a2 2 0 01-2 2H7a2 2 0 01-2-2v-10zm7 0v10" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Lock: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="17" r="1" fill="currentColor"/>
    </svg>
  )
};

const pages = [
  { id: 'home', name: 'Home', component: Home, icon: Icon.Home, locked: false },
  { id: 'gallery', name: 'Gallery', component: Gallery, icon: Icon.Lock, locked: true },
  { id: 'letters', name:  'Letters', component: Letters, icon: Icon.Letters, locked: false },
  { id: 'open-me-when', name: 'Open Me When', component: OpenMeWhen, icon: Icon.Lock, locked: true },
  { id: 'compliments', name: 'Daily Drops', component: DailyCompliments, icon: Icon.Gift, locked: false },
  { id: 'music', name:  'Music', component: MusicPlayer, icon: Icon.Music, locked: false },
  { id: 'play', name:  'Hug Counter', component: PlayWithMe, icon: Icon.Play, locked: false }
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

  const handlePageClick = (pageId) => {
    const page = pages.find(p => p.id === pageId);
    if (page?. locked) {
      alert('🔒 This page is coming soon! Still being prepared with love 💕');
      return;
    }
    setCurrent(pageId);
  };

  return (
    <div className="app-root">
      <aside className="sidebar" role="navigation" aria-label="Primary">
        <div className="brand">
          <div className="brand-name">🎄 Merry Christmas</div>
        </div>

        <nav className="side-nav">
          {pages.map(pg => (
            <button
              key={pg.id}
              className={`side-button ${current === pg.id ? 'active' : ''} ${pg.locked ? 'locked' : ''}`}
              onClick={() => handlePageClick(pg. id)}
              aria-current={current === pg.id ? 'page' : undefined}
              title={pg.locked ? 'Coming soon!' : pg.name}
              disabled={pg.locked}
              style={{
                opacity: pg.locked ? 0.5 : 1,
                cursor: pg.locked ? 'not-allowed' : 'pointer'
              }}
            >
              <span className="side-icon">{pg.icon({ size: 20 })}</span>
              <span className="side-label">
                {pg.name}
                {pg.locked && ' 🔒'}
              </span>
            </button>
          ))}
        </nav>

        <div className="sidebar-foot">
          <small style={{ color: '#165B33', fontWeight: 600 }}>Made with 💚❤️</small>
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