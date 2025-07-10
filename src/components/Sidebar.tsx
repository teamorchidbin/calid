import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, Users, Settings, BarChart3, Workflow, FileText, Clock, Moon, Sun } from 'lucide-react';

interface SidebarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const Sidebar = ({ darkMode, setDarkMode }: SidebarProps) => {
  const navigation = [
    { name: 'Event Types', href: '/', icon: Calendar },
    { name: 'Bookings', href: '/bookings', icon: Clock },
    { name: 'Availability', href: '/availability', icon: BarChart3 },
    { name: 'Teams', href: '/teams', icon: Users },
    { name: 'Apps', href: '/apps', icon: Workflow },
    { name: 'Routing Forms', href: '/routing-forms', icon: FileText },
    { name: 'Workflows', href: '/workflows', icon: Workflow },
    { name: 'Insights', href: '/insights', icon: BarChart3 },
  ];

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border flex flex-col">
      {/* Logo Section - Made bigger to match header */}
      <div className="h-24 flex items-center px-6 border-b border-border">
        <img 
          src="https://cdn.prod.website-files.com/5e53d34464688e6f5960a338/682f1bb36cedcb0cd39a7027_Onehash-CalId-logo%20icon.svg" 
          alt="Cal ID" 
          className="h-8 w-8"
        />
        <span className="ml-3 text-xl font-semibold">Cal ID</span>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`
            }
          >
            <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      {/* Bottom Section with Dark Mode and Settings */}
      <div className="p-4 border-t border-border">
        <div className="space-y-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-muted/50 hover:bg-muted transform hover:scale-105 active:scale-95"
          >
            <div className="flex items-center space-x-3">
              {darkMode ? (
                <Sun className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Moon className="h-4 w-4 text-muted-foreground" />
              )}
              <span className="text-muted-foreground">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </span>
            </div>
          </button>
          
          <div className="w-full h-px bg-border my-2"></div>
          
          <button className="flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-muted/50 hover:bg-muted transform hover:scale-105 active:scale-95">
            <Settings className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};