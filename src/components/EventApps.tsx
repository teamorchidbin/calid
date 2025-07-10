
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export const EventApps = () => {
  const [installedApps] = useState<any[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full p-6 space-y-6">
        <div className="py-8 text-center">
          <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
              <span className="text-muted-foreground text-lg">📱</span>
            </div>
          </div>
          <h3 className="text-lg font-medium text-foreground mb-3">No apps installed</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            Apps enable you to enhance your workflow and improve your scheduling life significantly.
          </p>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
            <Plus className="h-4 w-4 mr-2 inline" />
            Browse Apps
          </button>
        </div>
      </div>
    </div>
  );
};
