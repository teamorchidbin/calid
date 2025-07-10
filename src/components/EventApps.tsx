
import React from 'react';
import { Plus } from 'lucide-react';

const availableApps = [
  { 
    id: 'basecamp', 
    name: 'Basecamp3', 
    category: 'Other', 
    description: 'Basecamp puts everything you need to get work done in one place. It\'s the calm, organized way to manage projects, work with clients, and communicate company-wide.',
    logo: '📊'
  },
  { 
    id: 'close', 
    name: 'Close.com', 
    category: 'CRM', 
    description: 'Close is the inside sales CRM of choice for startups and SMBs. Make more calls, send more emails and close more deals starting today.',
    logo: '💼'
  },
  { 
    id: 'fathom', 
    name: 'Fathom', 
    category: 'Analytics', 
    description: 'Fathom Analytics provides simple, privacy-focused website analytics. We\'re a GDPR-compliant, Google Analytics alternative.',
    logo: '📈'
  },
  { 
    id: 'google-analytics', 
    name: 'Google Analytics', 
    category: 'Analytics', 
    description: 'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand.',
    logo: '📊'
  },
  { 
    id: 'giphy', 
    name: 'Giphy', 
    category: 'Other', 
    description: 'Add a GIF to your confirmation page',
    logo: '🎬'
  }
];

export const EventApps = () => {
  return (
    <div className="flex justify-center bg-background">
      <div className="w-full max-w-4xl p-6 space-y-6">
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <span className="text-muted-foreground text-lg">📱</span>
              <span className="text-muted-foreground text-base">📱</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No apps installed</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Apps enable you to enhance your workflow and improve your scheduling life significantly.
          </p>
          <button className="px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
            Browse App Store
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Available apps</h3>
          <p className="text-muted-foreground mb-6">View popular apps below and explore more in our App Store</p>
          
          <div className="space-y-3">
            {availableApps.map((app) => (
              <div key={app.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-border/60 transition-colors bg-card">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center border border-border">
                    <span className="text-xl">{app.logo}</span>
                    <span className="text-lg">{app.logo}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-semibold text-foreground">{app.name}</h4>
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium">
                        {app.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground line-clamp-2">{app.description}</p>
                  </div>
                </div>
                <button className="flex items-center px-3 py-2 text-sm text-foreground border border-border rounded-lg hover:bg-muted transition-colors font-medium ml-3">
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
