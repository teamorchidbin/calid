
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
    <div className="p-6 max-w-4xl space-y-6">
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm">📱</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No apps installed</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
          Apps enable you to enhance your workflow and improve your scheduling life significantly.
        </p>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
          Browse App Store
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Available apps</h3>
        <p className="text-gray-600 mb-6 text-sm">View popular apps below and explore more in our App Store</p>
        
        <div className="space-y-3">
          {availableApps.map((app) => (
            <div key={app.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors bg-white">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border">
                  <span className="text-lg">{app.logo}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-gray-900 text-sm">{app.name}</h4>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                      {app.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-1">{app.description}</p>
                </div>
              </div>
              <button className="flex items-center px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                <Plus className="h-4 w-4 mr-1" />
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
