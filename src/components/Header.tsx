
import React, { useState } from 'react';
import { ChevronDown, User, Moon, Map, HelpCircle, LogOut, Copy, Check } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  
  const isEventTypesPage = location.pathname === '/';
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://cal.id/sanskar');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isEventTypesPage) {
    return null;
  }

  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-end px-6 py-3">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-muted px-3 py-1.5 rounded-lg">
            <span className="text-sm text-muted-foreground">cal.id/sanskar</span>
            <button
              onClick={handleCopyLink}
              className="p-1 hover:bg-background rounded transition-colors"
            >
              {copied ? (
                <Check className="h-3 w-3 text-green-600" />
              ) : (
                <Copy className="h-3 w-3 text-muted-foreground" />
              )}
            </button>
            {copied && (
              <div className="absolute right-0 top-full mt-1 px-2 py-1 bg-foreground text-background text-xs rounded animate-fade-in">
                Copied!
              </div>
            )}
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">SY</span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
            
            {showProfileMenu && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-popover border border-border rounded-lg shadow-lg animate-scale-in">
                <div className="py-1">
                  <button className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors">
                    <User className="h-4 w-4 mr-3" />
                    My Profile
                  </button>
                  <button className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors">
                    <Moon className="h-4 w-4 mr-3" />
                    Out of Office
                  </button>
                  <button className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors">
                    <Map className="h-4 w-4 mr-3" />
                    RoadMap
                  </button>
                  <button className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors">
                    <HelpCircle className="h-4 w-4 mr-3" />
                    Help
                  </button>
                  <div className="border-t border-border my-1"></div>
                  <button className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors text-destructive">
                    <LogOut className="h-4 w-4 mr-3" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
