
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

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-60 bg-card border-r border-border">
      <div className="flex h-16 items-center px-4 border-b border-border">
        <img 
          src="https://cdn.prod.website-files.com/5e53d34464688e6f5960a338/682f1bb36cedcb0cd39a7027_Onehash-CalId-logo%20icon.svg" 
          alt="Cal ID" 
          className="h-8 w-8"
        />
        <span className="ml-3 text-xl font-semibold">Cal ID</span>
      </div>
      
      <div className="flex-1 flex flex-col">
        <nav className="px-3 py-4 space-y-1 flex-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
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
      
        <div className="p-3 border-t border-border">
          <div className="flex items-center justify-center space-x-2">
          <button
            onClick={handleDarkModeToggle}
            className="p-2.5 bg-muted/50 hover:bg-muted rounded-lg transition-all duration-200"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Moon className="h-5 w-5 text-muted-foreground" />
            )}
          </button>
          <button className="p-2.5 bg-muted/50 hover:bg-muted rounded-lg transition-all duration-200 animate-button-press">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
