
import React, { useState } from 'react';
import { Calendar, Clock, Users, AlertCircle } from 'lucide-react';
import { Switch } from './ui/switch';

export const EventLimits = () => {
  const [limits, setLimits] = useState({
    minimumNotice: {
      enabled: true,
      value: '2',
      unit: 'Hours'
    },
    bookingFrequency: {
      enabled: false,
      value: '1',
      unit: 'Per day'
    },
    showFirstSlot: {
      enabled: false
    },
    totalBookingDuration: {
      enabled: false,
      value: '60',
      unit: 'Minutes',
      period: 'Per day'
    },
    futureBookings: {
      enabled: false,
      value: '30',
      unit: 'business days'
    },
    dateRange: {
      enabled: false,
      start: '2025-07-10',
      end: '2025-07-10'
    },
    offsetStartTimes: {
      enabled: false,
      value: '0',
      unit: 'Minutes'
    }
  });

  const handleLimitChange = (category: string, field: string, value: string | boolean) => {
    setLimits(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  return (
    <div className="p-6 w-full space-y-4">
      <div className="space-y-4">
        {/* Before event */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-base font-medium">Before event</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <label className="text-sm">Minimum Notice</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={limits.minimumNotice.value}
                    onChange={(e) => handleLimitChange('minimumNotice', 'value', e.target.value)}
                    className="w-20 px-3 py-2 border border-border rounded text-sm bg-background"
                  />
                  <select
                    value={limits.minimumNotice.unit}
                    onChange={(e) => handleLimitChange('minimumNotice', 'unit', e.target.value)}
                    className="px-3 py-2 border border-border rounded text-sm bg-background"
                  >
                    <option value="Hours">Hours</option>
                    <option value="Days">Days</option>
                    <option value="Weeks">Weeks</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-medium">After event</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <label className="text-sm">Time-slot intervals</label>
                </div>
                <select className="w-full px-3 py-2 border border-border rounded text-sm bg-background">
                  <option>Use event length (default)</option>
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                  <option>60 minutes</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Limit booking frequency */}
        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-medium">Limit booking frequency</h3>
              <p className="text-sm text-muted-foreground">Limit how many times this event can be booked</p>
            </div>
            <Switch
              checked={limits.bookingFrequency.enabled}
              onCheckedChange={(checked) => handleLimitChange('bookingFrequency', 'enabled', checked)}
            />
          </div>
          
          {limits.bookingFrequency.enabled && (
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={limits.bookingFrequency.value}
                onChange={(e) => handleLimitChange('bookingFrequency', 'value', e.target.value)}
                className="w-20 px-3 py-2 border border-border rounded text-sm bg-background"
              />
              <select
                value={limits.bookingFrequency.unit}
                onChange={(e) => handleLimitChange('bookingFrequency', 'unit', e.target.value)}
                className="px-3 py-2 border border-border rounded text-sm bg-background"
              >
                <option value="Per day">Per day</option>
                <option value="Per week">Per week</option>
                <option value="Per month">Per month</option>
              </select>
              <button className="text-sm text-primary hover:text-primary/80">+ Add Limit</button>
            </div>
          )}
        </div>

        {/* Only show the first slot of each day as available */}
        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium">Only show the first slot of each day as available</h3>
              <p className="text-sm text-muted-foreground">This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.</p>
            </div>
            <Switch
              checked={limits.showFirstSlot.enabled}
              onCheckedChange={(checked) => handleLimitChange('showFirstSlot', 'enabled', checked)}
            />
          </div>
        </div>

        {/* Limit total booking duration */}
        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-medium">Limit total booking duration</h3>
              <p className="text-sm text-muted-foreground">Limit total amount of time that this event can be booked</p>
            </div>
            <Switch
              checked={limits.totalBookingDuration.enabled}
              onCheckedChange={(checked) => handleLimitChange('totalBookingDuration', 'enabled', checked)}
            />
          </div>
          
          {limits.totalBookingDuration.enabled && (
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={limits.totalBookingDuration.value}
                onChange={(e) => handleLimitChange('totalBookingDuration', 'value', e.target.value)}
                className="w-20 px-3 py-2 border border-border rounded text-sm bg-background"
              />
              <select
                value={limits.totalBookingDuration.unit}
                onChange={(e) => handleLimitChange('totalBookingDuration', 'unit', e.target.value)}
                className="px-3 py-2 border border-border rounded text-sm bg-background"
              >
                <option value="Minutes">Minutes</option>
                <option value="Hours">Hours</option>
              </select>
              <select
                value={limits.totalBookingDuration.period}
                onChange={(e) => handleLimitChange('totalBookingDuration', 'period', e.target.value)}
                className="px-3 py-2 border border-border rounded text-sm bg-background"
              >
                <option value="Per day">Per day</option>
                <option value="Per week">Per week</option>
                <option value="Per month">Per month</option>
              </select>
              <button className="text-sm text-primary hover:text-primary/80">+ Add Limit</button>
            </div>
          )}
        </div>

        {/* Limit future bookings */}
        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-medium">Limit future bookings</h3>
              <p className="text-sm text-muted-foreground">Limit how far in the future this event can be booked</p>
            </div>
            <Switch
              checked={limits.futureBookings.enabled}
              onCheckedChange={(checked) => handleLimitChange('futureBookings', 'enabled', checked)}
            />
          </div>
          
          {limits.futureBookings.enabled && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="businessDays"
                  name="futureBookings"
                  className="rounded"
                  defaultChecked
                />
                <input
                  type="number"
                  value={limits.futureBookings.value}
                  onChange={(e) => handleLimitChange('futureBookings', 'value', e.target.value)}
                  className="w-20 px-3 py-2 border border-border rounded text-sm bg-background"
                />
                <select
                  value={limits.futureBookings.unit}
                  onChange={(e) => handleLimitChange('futureBookings', 'unit', e.target.value)}
                  className="px-3 py-2 border border-border rounded text-sm bg-background"
                >
                  <option value="business days">business days</option>
                  <option value="calendar days">calendar days</option>
                  <option value="weeks">weeks</option>
                  <option value="months">months</option>
                </select>
                <span className="text-sm">into the future</span>
              </div>
              <div className="text-sm text-muted-foreground">Always 30 days available</div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="dateRange"
                  name="futureBookings"
                  className="rounded"
                />
                <label htmlFor="dateRange" className="text-sm">Within a date range</label>
                <input
                  type="date"
                  value={limits.dateRange.start}
                  onChange={(e) => handleLimitChange('dateRange', 'start', e.target.value)}
                  className="px-3 py-2 border border-border rounded text-sm bg-background"
                />
                <span className="text-sm">-</span>
                <input
                  type="date"
                  value={limits.dateRange.end}
                  onChange={(e) => handleLimitChange('dateRange', 'end', e.target.value)}
                  className="px-3 py-2 border border-border rounded text-sm bg-background"
                />
              </div>
            </div>
          )}
        </div>

        {/* Offset start times */}
        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-medium">Offset start times</h3>
              <p className="text-sm text-muted-foreground">Offset timeslots shown to bookers by a specified number of minutes</p>
            </div>
            <Switch
              checked={limits.offsetStartTimes.enabled}
              onCheckedChange={(checked) => handleLimitChange('offsetStartTimes', 'enabled', checked)}
            />
          </div>
          
          {limits.offsetStartTimes.enabled && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={limits.offsetStartTimes.value}
                  onChange={(e) => handleLimitChange('offsetStartTimes', 'value', e.target.value)}
                  className="w-20 px-3 py-2 border border-border rounded text-sm bg-background"
                />
                <select
                  value={limits.offsetStartTimes.unit}
                  onChange={(e) => handleLimitChange('offsetStartTimes', 'unit', e.target.value)}
                  className="px-3 py-2 border border-border rounded text-sm bg-background"
                >
                  <option value="Minutes">Minutes</option>
                </select>
              </div>
              <p className="text-sm text-muted-foreground">
                e.g. this will show time slots to your bookers at<br />
                9:00 AM instead of 9:00 AM
              </p>
            </div>
          )}
        </div>

        {/* Offset by */}
        <div className="border-t border-border pt-4">
          <div>
            <h3 className="text-base font-medium">Offset by</h3>
            <div className="flex items-center space-x-2 mt-2">
              <input
                type="number"
                value="0"
                className="w-20 px-3 py-2 border border-border rounded text-sm bg-background"
              />
              <select className="px-3 py-2 border border-border rounded text-sm bg-background">
                <option value="Minutes">Minutes</option>
              </select>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              e.g. this will show time slots to your bookers at<br />
              9:00 AM instead of 9:00 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
