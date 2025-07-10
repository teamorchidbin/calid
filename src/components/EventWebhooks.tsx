import React, { useState } from 'react';
import { Plus, Webhook, X, ExternalLink } from 'lucide-react';
interface WebhookConfig {
  id: string;
  name: string;
  url: string;
  events: string[];
  active: boolean;
}
export const EventWebhooks = () => {
  const [webhooks, setWebhooks] = useState<WebhookConfig[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newWebhook, setNewWebhook] = useState({
    name: '',
    url: '',
    events: [] as string[]
  });
  const eventTypes = [{
    id: 'booking.created',
    name: 'Booking Created',
    description: 'When a new booking is made'
  }, {
    id: 'booking.cancelled',
    name: 'Booking Cancelled',
    description: 'When a booking is cancelled'
  }, {
    id: 'booking.rescheduled',
    name: 'Booking Rescheduled',
    description: 'When a booking is rescheduled'
  }, {
    id: 'booking.confirmed',
    name: 'Booking Confirmed',
    description: 'When a booking is confirmed'
  }];
  const handleEventToggle = (eventId: string) => {
    setNewWebhook(prev => ({
      ...prev,
      events: prev.events.includes(eventId) ? prev.events.filter(e => e !== eventId) : [...prev.events, eventId]
    }));
  };
  const handleCreateWebhook = () => {
    if (newWebhook.name && newWebhook.url && newWebhook.events.length > 0) {
      const webhook: WebhookConfig = {
        id: Date.now().toString(),
        ...newWebhook,
        active: true
      };
      setWebhooks(prev => [...prev, webhook]);
      setNewWebhook({
        name: '',
        url: '',
        events: []
      });
      setShowCreateModal(false);
    }
  };
  const deleteWebhook = (id: string) => {
    setWebhooks(prev => prev.filter(w => w.id !== id));
  };
  return <div className="p-6 max-w-4xl space-y-5">
      

      {webhooks.length === 0 ? <div className="text-center py-12 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg">
      {webhooks.length === 0 ? <div className="text-center py-8 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
            <Webhook className="h-6 w-6 text-gray-400" />
            <Webhook className="h-5 w-5 text-gray-400" />
          </div>
          <p className="text-gray-500 mb-3 text-sm">No webhooks configured</p>
          <button onClick={() => setShowCreateModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
            Create Webhook
          </button>
        </div> : <div className="space-y-4">
        </div> : <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Configured Webhooks</h3>
            <button onClick={() => setShowCreateModal(true)} className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              <Plus className="h-4 w-4 mr-1" />
              Create Webhook
            </button>
          </div>

          <div className="space-y-3">
          <div className="space-y-2">
            {webhooks.map(webhook => <div key={webhook.id} className="p-4 border border-gray-200 rounded-lg bg-white">
            {webhooks.map(webhook => <div key={webhook.id} className="p-3 border border-gray-200 rounded-lg bg-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Webhook className="h-4 w-4 text-blue-600" />
                      <Webhook className="h-3 w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{webhook.name}</h4>
                      <p className="text-xs text-gray-500">{webhook.url}</p>
                    </div>
                  </div>
                  <button onClick={() => deleteWebhook(webhook.id)} className="text-red-500 hover:text-red-700 p-1">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {webhook.events.map(eventId => {
              const event = eventTypes.find(e => e.id === eventId);
              return <span key={eventId} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {event?.name}
                      </span>;
            })}
                </div>
              </div>)}
          </div>
        </div>}

      {/* Create Webhook Modal */}
      {showCreateModal && <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Create Webhook</h3>
              <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Webhook Name</label>
                <input type="text" value={newWebhook.name} onChange={e => setNewWebhook(prev => ({
              ...prev,
              name: e.target.value
            }))} placeholder="My Webhook" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Webhook URL</label>
                <input type="url" value={newWebhook.url} onChange={e => setNewWebhook(prev => ({
              ...prev,
              url: e.target.value
            }))} placeholder="https://example.com/webhook" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Trigger Events</label>
                <div className="space-y-2">
                  {eventTypes.map(event => <div key={event.id} className="flex items-start space-x-3">
                      <input type="checkbox" id={event.id} checked={newWebhook.events.includes(event.id)} onChange={() => handleEventToggle(event.id)} className="mt-1" />
                      <div className="flex-1">
                        <label htmlFor={event.id} className="text-sm font-medium text-gray-900 cursor-pointer">
                          {event.name}
                        </label>
                        <p className="text-xs text-gray-600">{event.description}</p>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 p-4 border-t border-gray-200">
              <button onClick={() => setShowCreateModal(false)} className="px-4 py-2 text-gray-600 hover:text-gray-800">
                Cancel
              </button>
              <button onClick={handleCreateWebhook} disabled={!newWebhook.name || !newWebhook.url || newWebhook.events.length === 0} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm font-medium">
                Create Webhook
              </button>
            </div>
          </div>
        </div>}
    </div>;
};