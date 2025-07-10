
import React from 'react';
import { Bell, X } from 'lucide-react';

interface NotificationDropdownProps {
  onClose: () => void;  
}

export const NotificationDropdown = ({ onClose }: NotificationDropdownProps) => {
  return (
    <div className="absolute right-0 top-full mt-1 w-80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-border rounded-lg shadow-lg animate-scale-in z-10">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-foreground">Notifications</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-2">
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-sm text-foreground font-medium">New booking received</p>
            <p className="text-xs text-muted-foreground mt-1">Product Hunt Chat - 2 hours ago</p>
          </div>
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-sm text-foreground font-medium">Event updated</p>
            <p className="text-xs text-muted-foreground mt-1">Discovery Call settings changed - 4 hours ago</p>
          </div>
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-sm text-foreground font-medium">Reminder</p>
            <p className="text-xs text-muted-foreground mt-1">Strategy Session in 30 minutes - 6 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};
