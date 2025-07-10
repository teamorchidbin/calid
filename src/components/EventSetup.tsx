
import React, { useState } from 'react';
import { Switch } from './ui/switch';

export const EventSetup = () => {
  const [eventData, setEventData] = useState({
    title: 'Product Hunt Chats',
    description: 'Get to know more about the founder',
    duration: 30,
    buffer: 0,
    location: 'Google Meet'
  });

  return (
    <div className="p-6 max-w-2xl">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Event name</label>
          <input
            type="text"
            value={eventData.title}
            onChange={(e) => setEventData({...eventData, title: e.target.value})}
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring bg-background"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={eventData.description}
            onChange={(e) => setEventData({...eventData, description: e.target.value})}
            rows={3}
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring bg-background resize-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Duration</label>
            <select
              value={eventData.duration}
              onChange={(e) => setEventData({...eventData, duration: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring bg-background"
            >
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={45}>45 minutes</option>
              <option value={60}>1 hour</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Buffer time</label>
            <select
              value={eventData.buffer}
              onChange={(e) => setEventData({...eventData, buffer: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring bg-background"
            >
              <option value={0}>No buffer</option>
              <option value={5}>5 minutes</option>
              <option value={10}>10 minutes</option>
              <option value={15}>15 minutes</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Location</label>
          <select
            value={eventData.location}
            onChange={(e) => setEventData({...eventData, location: e.target.value})}
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring bg-background"
          >
            <option value="Google Meet">Google Meet</option>
            <option value="Zoom">Zoom</option>
            <option value="Microsoft Teams">Microsoft Teams</option>
            <option value="Phone call">Phone call</option>
            <option value="In person">In person</option>
          </select>
        </div>

        <div className="space-y-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Require confirmation</h4>
              <p className="text-sm text-muted-foreground">Manually approve bookings</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Allow invitees to add guests</h4>
              <p className="text-sm text-muted-foreground">Let invitees bring additional people</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Disable event</h4>
              <p className="text-sm text-muted-foreground">Hide this event type from your booking page</p>
            </div>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
};
