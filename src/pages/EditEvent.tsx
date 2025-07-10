import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Eye, Settings, Clock, Zap, Shield, Smartphone, Workflow, Webhook, RotateCcw, Moon, Sun } from 'lucide-react';
import { EventSetup } from '../components/EventSetup';
import { EventAvailability } from '../components/EventAvailability';
import { EventLimits } from '../components/EventLimits';
import { EventAdvanced } from '../components/EventAdvanced';
import { EventApps } from '../components/EventApps';
import { EventWorkflows } from '../components/EventWorkflows';
import { EventWebhooks } from '../components/EventWebhooks';
import { RecurringEvent } from '../components/RecurringEvent';
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
  const {
    eventId,
    tab
  } = useParams();
  const [activeTab, setActiveTab] = useState(tab || 'setup');
  const [eventEnabled, setEventEnabled] = useState(true);
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
        return <RecurringEvent />;
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
  
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="h-20 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="h-full px-8 flex items-center justify-between w-full">
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-foreground">Event Types</h1>
            <p className="text-sm text-muted-foreground mt-1">Create events to share for people to book on your calendar.</p>
          </div>
          
          <div className="flex items-center space-x-4 ml-auto">
            {/* Notifications */}
            <div className="relative">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
                <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 0-8-3-8-6s3-6 8-6 8 3 8 6-3 6-8 6z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>
            </div>

            {/* Profile */}
            <div className="relative">
              <button className="flex items-center space-x-3 px-4 py-2 hover:bg-muted rounded-lg transition-colors w-full">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-sm font-medium text-primary-foreground">SY</span>
                </div>
                <span className="text-sm font-medium text-foreground">Sanskar Yadav</span>
                <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Event Header */}
      <div className="bg-card border-b border-border px-8 py-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <button onClick={handleBack} className="mr-4 p-2 hover:bg-muted rounded-lg transition-colors">
              <ArrowLeft className="h-5 w-5 text-muted-foreground" />
            </button>
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <h1 className="text-xl font-semibold text-foreground">Product Hunt Chats</h1>
                <div className="flex items-center space-x-2 px-3 py-1 bg-muted/70 text-muted-foreground text-sm rounded-md">
                  <span>cal.id/sanskar/product-hunt-chats</span>
                  <Copy className="h-3 w-3" />
                </div>
                <button className="text-sm text-primary hover:text-primary/80 flex items-center transition-colors">
                  <Eye className="h-4 w-4 mr-1" />
                </button>
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
        <div className="w-64 bg-card border-r border-border min-h-screen sticky top-0">
          <nav className="p-6 space-y-1">
            {tabs.map(tabItem => <button key={tabItem.id} onClick={() => setActiveTab(tabItem.id)} className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === tabItem.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}>
                <tabItem.icon className="mr-3 h-4 w-4" />
                {tabItem.name}
              </button>)}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-background">
          {renderTabContent()}
        </div>
      </div>
    </div>;
};