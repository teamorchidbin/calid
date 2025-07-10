
import React, { useState } from 'react';
import { Plus, Globe, Settings, Trash2 } from 'lucide-react';
import { Switch } from './ui/switch';

export const EventWebhooks = () => {
  const [webhooks, setWebhooks] = useState<any[]>([]);

  return (
    <div className="p-8 w-full space-y-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Webhooks</h3>
          <button className="flex items-center px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
            <Plus className="h-4 w-4 mr-2" />
            Add Webhook
          </button>
        </div>

        {webhooks.length === 0 ? (
          <div className="text-center py-12 bg-muted/20 rounded-lg border border-dashed border-border">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground font-medium text-sm">No webhooks configured</p>
            <p className="text-muted-foreground/70 text-sm mt-1">Add webhooks to receive real-time event notifications</p>
          </div>
        ) : (
          <div className="space-y-4">
            {webhooks.map((webhook, index) => (
              <div key={index} className="w-full p-6 border rounded-lg bg-card hover:border-border/60 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                      <Globe className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1 text-sm">{webhook.name}</h4>
                      <p className="text-muted-foreground mb-2 text-sm">{webhook.url}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Events: {webhook.events.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch checked={webhook.enabled} />
                    <button className="p-2 hover:bg-muted rounded-md transition-colors">
                      <Settings className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-md transition-colors text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
