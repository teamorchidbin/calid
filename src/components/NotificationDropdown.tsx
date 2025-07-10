
import React, { useState } from 'react';
import { Bell, Clock, MessageCircle, X, Calendar } from 'lucide-react';

interface Notification {
  id: string;
  type: 'reschedule' | 'cancel' | 'message';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'reschedule',
    title: 'Meeting Rescheduled',
    message: 'Product Hunt Chat with John Doe has been rescheduled to tomorrow at 2 PM',
    time: '5 min ago',
    read: false
  },
  {
    id: '2',
    type: 'cancel',
    title: 'Meeting Cancelled',
    message: 'Client call with Sarah Smith has been cancelled',
    time: '1 hour ago',
    read: false
  },
  {
    id: '3',
    type: 'message',
    title: 'New Message',
    message: 'You have received a new message from Alex Johnson',
    time: '2 hours ago',
    read: true
  }
];

export const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  
  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'reschedule':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'cancel':
        return <X className="h-4 w-4 text-red-500" />;
      case 'message':
        return <MessageCircle className="h-4 w-4 text-green-500" />;
      default:
        return <Calendar className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-muted/50 rounded-lg transition-colors"
      >
        <Bell className="h-5 w-5 text-muted-foreground" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-80 bg-background/95 backdrop-blur border border-border rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-border">
            <h3 className="font-medium text-sm">Notifications</h3>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-sm text-muted-foreground">
                No notifications
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 border-b border-border last:border-b-0 hover:bg-muted/30 cursor-pointer transition-colors ${
                    !notification.read ? 'bg-muted/20' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium truncate">
                          {notification.title}
                        </p>
                        <span className="text-xs text-muted-foreground ml-2">
                          {notification.time}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
          
          {notifications.length > 0 && (
            <div className="p-3 border-t border-border">
              <button 
                className="text-xs text-primary hover:text-primary/80 w-full text-center"
                onClick={() => setNotifications(notifications.map(n => ({ ...n, read: true })))}
              >
                Mark all as read
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
