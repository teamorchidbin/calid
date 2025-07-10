
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground flex">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex-1 ml-64">
          <Header />
          <main className="relative z-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
