
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Copy, Settings, Clock, Zap, Shield, Smartphone, Workflow } from 'lucide-react';
import { EventSetup } from '../components/EventSetup';
import { EventAvailability } from '../components/EventAvailability';
import { EventLimits } from '../components/EventLimits';
import { EventAdvanced } from '../components/EventAdvanced';
import { EventApps } from '../components/EventApps';
import { EventWorkflows } from '../components/EventWorkflows';

const tabs = [
  { id: 'setup', name: 'Event Setup', icon: Settings },
  { id: 'availability', name: 'Availability', icon: Clock },
  { id: 'limits', name: 'Limits', icon: Shield },
  { id: 'advanced', name: 'Advanced', icon: Zap },
  { id: 'recurring', name: 'Recurring', icon: Clock },
  { id: 'apps', name: 'Apps', icon: Smartphone },
  { id: 'workflows', name: 'Workflows', icon: Workflow },
];

export const EditEvent = () => {
  const { eventId, tab } = useParams();
  const [activeTab, setActiveTab] = useState(tab || 'setup');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'setup':
        return <EventSetup />;
      case 'availability':
        return <EventAvailability />;
      case 'limits':
        return <EventLimits />;
      case 'advanced':
        return <EventAdvanced />;
      case 'apps':
        return <EventApps />;
      case 'workflows':
        return <EventWorkflows />;
      default:
        return <EventSetup />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="mr-4 p-1 hover:bg-gray-100 rounded">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Product Hunt Chats</h1>
              <div className="flex items-center mt-1 space-x-2">
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Preview
                </button>
                <button className="text-sm text-gray-600 hover:text-gray-800 flex items-center">
                  <Copy className="h-3 w-3 mr-1" />
                  Copy link
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-sm text-gray-600">Published</span>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-1">
            {tabs.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => setActiveTab(tabItem.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tabItem.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <tabItem.icon className="mr-3 h-4 w-4" />
                {tabItem.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};
