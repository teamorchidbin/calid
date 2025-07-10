
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  
  const isEventTypesPage = location.pathname === '/';
  const isEventEditPage = location.pathname.startsWith('/event/');
  
  // Extract event title from path if needed
  const eventTitle = isEventEditPage ? "Product Hunt Chats" : "";

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground flex">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex-1 ml-64">
          <Header 
            showEventTypesHeader={isEventTypesPage} 
            showEventEditHeader={isEventEditPage}
            eventTitle={eventTitle}
          />
          <main className="relative z-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
