
import React, { useState } from 'react';
import { Clock, MapPin, Link, Users, Video, MapPinIcon, Phone } from 'lucide-react';
import { Switch } from './ui/switch';

export const EventSetup = () => {
  const [eventName, setEventName] = useState('Product Hunt Chats');
  const [description, setDescription] = useState('Book a 15-minute chat to discuss your product launch and get feedback.');
  const [duration, setDuration] = useState('15');
  const [durationType, setDurationType] = useState('min');
  const [locationType, setLocationType] = useState('video');
  const [isPrivate, setIsPrivate] = useState(false);
  const [collectPayment, setCollectPayment] = useState(false);

  return (
    <div className="w-full p-4">
      <div className="space-y-4">
        {/* Event Name */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Event name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring bg-background text-sm"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring bg-background text-sm resize-none"
          />
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Duration</label>
          <div className="flex space-x-2">
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-24 px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring bg-background text-sm"
            />
            <select
              value={durationType}
              onChange={(e) => setDurationType(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring bg-background text-sm"
            >
              <option value="min">minutes</option>
              <option value="hr">hours</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-foreground">Location</label>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                id="video-call"
                name="location"
                value="video"
                checked={locationType === 'video'}
                onChange={(e) => setLocationType(e.target.value)}
                className="rounded-full"
              />
              <label htmlFor="video-call" className="flex items-center text-sm">
                <Video className="h-4 w-4 mr-2" />
                Video call (Google Meet)
              </label>
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                id="phone-call"
                name="location"
                value="phone"
                checked={locationType === 'phone'}
                onChange={(e) => setLocationType(e.target.value)}
                className="rounded-full"
              />
              <label htmlFor="phone-call" className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2" />
                Phone call
              </label>
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                id="in-person"
                name="location"
                value="in-person"
                checked={locationType === 'in-person'}
                onChange={(e) => setLocationType(e.target.value)}
                className="rounded-full"
              />
              <label htmlFor="in-person" className="flex items-center text-sm">
                <MapPinIcon className="h-4 w-4 mr-2" />
                In-person meeting
              </label>
            </div>
          </div>
        </div>

        {/* Additional Options */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium">Private event</h3>
              <p className="text-xs text-muted-foreground">Hide this event from your public page</p>
            </div>
            <Switch checked={isPrivate} onCheckedChange={setIsPrivate} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium">Collect payment</h3>
              <p className="text-xs text-muted-foreground">Require payment to book this event</p>
            </div>
            <Switch checked={collectPayment} onCheckedChange={setCollectPayment} />
          </div>
        </div>
      </div>
    </div>
  );
};
