
import React, { useState } from 'react';
import { Bell, Calendar, MessageSquare, X } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'reschedule',
    title: 'Meeting rescheduled',
    message: 'John Smith rescheduled your 30min meeting',
    time: '2 mins ago',
    icon: Calendar,
  },
  {
    id: 2,
    type: 'cancel',
    title: 'Meeting cancelled',
    message: 'Sarah Johnson cancelled the Design Review',
    time: '1 hour ago',
    icon: X,
  },
  {
    id: 3,
    type: 'message',
    title: 'New message',
    message: 'Mike Davis sent you a message about tomorrow\'s call',
    time: '3 hours ago',
    icon: MessageSquare,
  },
];

export const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Bell className="h-5 w-5" />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
            {notifications.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-background/80 backdrop-blur-md border border-border/50 rounded-lg shadow-lg animate-scale-in z-50">
          <div className="p-3 border-b border-border/50">
            <h3 className="text-sm font-medium">Notifications</h3>
          </div>
          
          <div className="max-h-64 overflow-y-auto">
            {notifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <div
                  key={notification.id}
                  className="p-3 border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <IconComponent className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {notification.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground/80 mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="p-2 border-t border-border/50">
            <button className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors">
              Mark all as read
            </button>
          </div>
        </div>
      )}
      
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
