import { useParams } from 'react-router-dom';
import { mockTeams } from '../data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ArrowLeft, Copy, Eye } from 'lucide-react';
import { EventSetup } from '../components/EventSetup';
import { EventAvailability } from '../components/EventAvailability';
import { EventLimits } from '../components/EventLimits';
import { EventBooking } from '../components/EventBooking';
import { EventWorkflows } from '../components/EventWorkflows';
import { EventWebhooks } from '../components/EventWebhooks';
import { EventAdvanced } from '../components/EventAdvanced';
import { EventApps } from '../components/EventApps';
import { useState } from 'react';

export function EventSettings() {
  const { eventId, tab } = useParams();
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const navigate = useNavigate();
  
  // Find the current event
  const currentEvent = mockTeams
    .flatMap(team => team.eventTypes)
    .find(event => event.id === eventId);
  
  console.log('EditEvent - eventId:', eventId, 'currentEvent:', currentEvent);
  
  // If event not found, redirect to event types
  if (!currentEvent) {
    console.log('Event not found, redirecting to event types');
    navigate('/');
    return null;
  }
  
  const tabs = [
    { id: 'setup', label: 'Event Setup', icon: '⚙️', component: EventSetup },
    { id: 'availability', label: 'Availability', icon: '🕒', component: EventAvailability },
    { id: 'limits', label: 'Limits', icon: '⏱️', component: EventLimits },
    { id: 'booking', label: 'Booking', icon: '📅', component: EventBooking },
    { id: 'workflows', label: 'Workflows', icon: '🔄', component: EventWorkflows },
    { id: 'webhooks', label: 'Webhooks', icon: '🔗', component: EventWebhooks },
    { id: 'advanced', label: 'Advanced', icon: '⚡', component: EventAdvanced },
    { id: 'apps', label: 'Apps', icon: '🧩', component: EventApps },
  ];

  const currentTab = tabs.find(t => t.id === (tab || 'setup'));
  const TabComponent = currentTab?.component || EventSetup;

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Header */}
        <div className="fixed top-0 left-60 right-0 h-16 bg-background border-b border-border z-40">
          <div className="h-full px-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/')}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-muted-foreground" />
              </button>
              <div className="flex items-center space-x-3">
                <h1 className="text-lg font-semibold text-foreground">
                  {currentEvent.title}
                </h1>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    cal.id/sanskar/{currentEvent.url?.split('/').pop() || 'event'}
                  </span>
                  <button className="p-1 hover:bg-muted rounded transition-colors">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <button className="p-1 hover:bg-muted rounded transition-colors">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Notifications */}
              <div className="relative">
                <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
                  <div className="h-5 w-5 text-muted-foreground">🔔</div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </button>
              </div>

              {/* Profile */}
              <div className="flex items-center space-x-3 px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-sm font-medium text-primary-foreground">SY</span>
                </div>
                <span className="text-sm font-medium text-foreground">Sanskar Yadav</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 mt-16 ml-60">
          <div className="p-6">
            <Tabs value={tab || 'setup'} className="w-full">
              <TabsList className="grid w-full grid-cols-8 mb-6">
                {tabs.map((tabItem) => (
                  <TabsTrigger 
                    key={tabItem.id} 
                    value={tabItem.id}
                    className="flex items-center space-x-2"
                  >
                    <span>{tabItem.icon}</span>
                    <span className="hidden sm:inline">{tabItem.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {tabs.map((tabItem) => (
                <TabsContent key={tabItem.id} value={tabItem.id}>
                  <tabItem.component 
                    eventId={eventId}
                    hasUnsavedChanges={hasUnsavedChanges}
                    setHasUnsavedChanges={setHasUnsavedChanges}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}