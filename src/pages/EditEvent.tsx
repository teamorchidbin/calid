
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Copy, Settings, Clock, Zap, Shield, Smartphone, Workflow, Webhook } from 'lucide-react';
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
  { id: 'webhooks', name: 'Webhooks', icon: Webhook },
];

export const EditEvent = () => {
  const { eventId, tab } = useParams();
  const [activeTab, setActiveTab] = useState(tab || 'setup');
  const [hasChanges, setHasChanges] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleSave = () => {
    // Implement save logic
    setHasChanges(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'setup':
        return <EventSetup onFormChange={() => setHasChanges(true)} />;
      case 'availability':
        return <EventAvailability />;
      case 'limits':
        return <EventLimits />;
      case 'advanced':
        return <EventAdvanced />;
      case 'recurring':
        return <div className="p-8 max-w-4xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recurring Event</h2>
              <p className="text-gray-600 mb-6">Configure recurring patterns for this event type.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input type="checkbox" id="enable-recurring" className="rounded" />
                <label htmlFor="enable-recurring" className="text-sm font-medium">Enable recurring events</label>
              </div>
              
              <div className="pl-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Repeat frequency</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Maximum number of events</label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="10" />
                </div>
              </div>
            </div>
          </div>
        </div>;
      case 'apps':
        return <EventApps />;
      case 'workflows':
        return <EventWorkflows />;
      case 'webhooks':
        return <div className="p-8 max-w-4xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Webhooks</h2>
              <p className="text-gray-600 mb-6">Send HTTP requests to external services when events occur.</p>
            </div>
            
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-500 mb-4">No webhooks configured</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Create Webhook
              </button>
            </div>
          </div>
        </div>;
      default:
        return <EventSetup onFormChange={() => setHasChanges(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={handleBack}
              className="mr-4 p-1 hover:bg-gray-100 rounded"
            >
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
          <div className="flex items-center space-x-3">
            <button
              onClick={handleSave}
              disabled={!hasChanges}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                hasChanges 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              Save Changes
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-600">Published</span>
            </div>
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
