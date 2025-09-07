import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Layout/Sidebar';
import { MobileNav } from './components/Layout/MobileNav';
import { useDarkMode } from './hooks/useDarkMode';

// Pages
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { Utilities } from './pages/Utilities';
import { Settings } from './pages/Settings';
import { Messages } from './pages/Messages';
import { Analytics } from './pages/Analytics';
import { Support } from './pages/Support';
import { mockData } from './data/mockData';

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="flex">
          <Sidebar 
            brandName={mockData.brandName}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
          
          <main className="flex-1 min-h-screen">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Dashboard 
                    isDarkMode={isDarkMode} 
                    toggleDarkMode={toggleDarkMode} 
                  />
                } 
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/utilities" element={<Utilities />} />
              <Route 
                path="/settings" 
                element={
                  <Settings 
                    isDarkMode={isDarkMode} 
                    toggleDarkMode={toggleDarkMode} 
                  />
                } 
              />
              <Route path="/messages" element={<Messages />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </main>
        </div>
        
        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;