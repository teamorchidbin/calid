
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Settings, Clock, Zap, Shield, Smartphone, Workflow, Webhook, RotateCcw, ExternalLink } from 'lucide-react';
import { EventSetup } from '../components/EventSetup';
import { EventAvailability } from '../components/EventAvailability';
import { EventLimits } from '../components/EventLimits';
import { EventAdvanced } from '../components/EventAdvanced';
import { EventApps } from '../components/EventApps';
import { EventWorkflows } from '../components/EventWorkflows';
import { EventWebhooks } from '../components/EventWebhooks';
import { Switch } from '../components/ui/switch';

const tabs = [{
  id: 'setup',
  name: 'Event Setup',
  icon: Settings
}, {
  id: 'availability',
  name: 'Availability',
  icon: Clock
}, {
  id: 'limits',
  name: 'Limits',
  icon: Shield
}, {
  id: 'advanced',
  name: 'Advanced',
  icon: Zap
}, {
  id: 'recurring',
  name: 'Recurring',
  icon: RotateCcw
}, {
  id: 'apps',
  name: 'Apps',
  icon: Smartphone
}, {
  id: 'workflows',
  name: 'Workflows',
  icon: Workflow
}, {
  id: 'webhooks',
  name: 'Webhooks',
  icon: Webhook
}];

export const EditEvent = () => {
  const { eventId, tab } = useParams();
  const [activeTab, setActiveTab] = useState(tab || 'setup');
  const [eventEnabled, setEventEnabled] = useState(true);
  const [recurringEnabled, setRecurringEnabled] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

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
      case 'recurring':
        return (
          <div className="p-6 w-full">
            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <span className="font-medium">Experimental:</span> Recurring Events are currently experimental and causes some issues sometimes when checking for availability. We are working on fixing this.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Switch 
                      id="enable-recurring" 
                      checked={recurringEnabled}
                      onCheckedChange={setRecurringEnabled}
                    />
                    <label htmlFor="enable-recurring" className="text-sm font-medium">Enable recurring events</label>
                  </div>
                  
                  {recurringEnabled && (
                    <div className="pl-6 space-y-4 animate-fade-in">
                      <div>
                        <label className="block text-sm font-medium mb-2">Frequency</label>
                        <select className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring bg-background text-sm">
                          <option>Does not repeat</option>
                          <option>Daily</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                          <option>Yearly</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">End date</label>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="never" name="endType" className="rounded" />
                            <label htmlFor="never" className="text-sm">Never</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="date" name="endType" className="rounded" />
                            <label htmlFor="date" className="text-sm">On date</label>
                            <input type="date" className="ml-2 px-3 py-2 border border-border rounded text-sm bg-background" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="occurrences" name="endType" className="rounded" />
                            <label htmlFor="occurrences" className="text-sm">After</label>
                            <input type="number" className="w-20 ml-2 px-3 py-2 border border-border rounded text-sm bg-background" placeholder="1" />
                            <span className="text-sm">occurrences</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 'apps':
        return <EventApps />;
      case 'workflows':
        return <EventWorkflows />;
      case 'webhooks':
        return <EventWebhooks />;
      default:
        return <EventSetup />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <button onClick={handleBack} className="mr-4 p-2 hover:bg-muted rounded-lg transition-colors">
              <ArrowLeft className="h-5 w-5 text-muted-foreground" />
            </button>
            <div>
              <div className="flex items-center space-x-4 mb-1">
                <h1 className="text-lg font-semibold text-foreground">Product Hunt Chats</h1>
                <div className="flex items-center space-x-2 px-3 py-1 bg-muted/70 text-muted-foreground text-sm rounded-md">
                  <span>cal.id/sanskar/product-hunt-chats</span>
                  <Copy className="h-3 w-3 cursor-pointer hover:text-foreground" />
                  <ExternalLink className="h-3 w-3 cursor-pointer hover:text-foreground" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Switch checked={eventEnabled} onCheckedChange={setEventEnabled} />
              <span className="text-sm text-muted-foreground">
                {eventEnabled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        {/* Sidebar */}
        <div className="w-56 bg-card border-r border-border min-h-screen">
          <nav className="p-4 space-y-1">
            {tabs.map(tabItem => (
              <button
                key={tabItem.id}
                onClick={() => setActiveTab(tabItem.id)}
                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tabItem.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <tabItem.icon className="mr-3 h-4 w-4" />
                {tabItem.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-background">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};
