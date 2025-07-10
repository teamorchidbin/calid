
import React, { useState } from 'react';
import { Switch } from './ui/switch';

export const EventLimits = () => {
  const [futureBookingLimit, setFutureBookingLimit] = useState(false);
  const [minimumNotice, setMinimumNotice] = useState(false);
  const [dailyLimit, setDailyLimit] = useState(false);

  return (
    <div className="w-full p-4">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Limits</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Limit when this event can be booked and how often.
          </p>
        </div>

        {/* Future Booking Limit */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Future booking limit</h3>
              <p className="text-sm text-muted-foreground">Limit how far in the future this event can be booked</p>
            </div>
            <Switch 
              checked={futureBookingLimit}
              onCheckedChange={setFutureBookingLimit}
            />
          </div>
          
          {futureBookingLimit && (
            <div className="pl-4 space-y-3">
              <div className="flex items-center space-x-2">
                <input 
                  type="number" 
                  className="w-20 px-3 py-2 border border-border rounded text-sm bg-background"
                  placeholder="30"
                />
                <select className="px-3 py-2 border border-border rounded text-sm bg-background">
                  <option>days</option>
                  <option>weeks</option>
                  <option>months</option>
                </select>
                <span className="text-sm text-muted-foreground">into the future</span>
              </div>
            </div>
          )}
        </div>

        {/* Minimum Notice */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Minimum booking notice</h3>
              <p className="text-sm text-muted-foreground">Require a minimum amount of notice before booking</p>
            </div>
            <Switch 
              checked={minimumNotice}
              onCheckedChange={setMinimumNotice}
            />
          </div>
          
          {minimumNotice && (
            <div className="pl-4 space-y-3">
              <div className="flex items-center space-x-2">
                <input 
                  type="number" 
                  className="w-20 px-3 py-2 border border-border rounded text-sm bg-background"
                  placeholder="2"
                />
                <select className="px-3 py-2 border border-border rounded text-sm bg-background">
                  <option>hours</option>
                  <option>days</option>
                  <option>weeks</option>
                </select>
                <span className="text-sm text-muted-foreground">before the event</span>
              </div>
            </div>
          )}
        </div>

        {/* Daily Limit */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Daily booking limit</h3>
              <p className="text-sm text-muted-foreground">Limit the number of bookings per day</p>
            </div>
            <Switch 
              checked={dailyLimit}
              onCheckedChange={setDailyLimit}
            />
          </div>
          
          {dailyLimit && (
            <div className="pl-4 space-y-3">
              <div className="flex items-center space-x-2">
                <input 
                  type="number" 
                  className="w-20 px-3 py-2 border border-border rounded text-sm bg-background"
                  placeholder="3"
                />
                <span className="text-sm text-muted-foreground">bookings per day</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
