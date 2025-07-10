
import React, { useState } from 'react';
import { Calendar, Clock, Users, AlertCircle } from 'lucide-react';
import { Switch } from './ui/switch';

export const EventLimits = () => {
  const [limits, setLimits] = useState({
    duration: {
      minimum: '',
      maximum: '',
      enabled: false
    },
    frequency: {
      perDay: '',
      perWeek: '',
      perMonth: '',
      enableDaily: false,
      enableWeekly: false,
      enableMonthly: false
    },
    buffer: {
      before: '',
      after: '',
      enableBefore: false,
      enableAfter: false
    },
    notice: {
      minimum: '60',
      maximum: '',
      enableMinimum: true,
      enableMaximum: false
    },
    future: {
      days: '60',
      enabled: true
    },
    capacity: {
      maxBookings: '',
      enabled: false
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
    <div className="p-6 w-full space-y-6">
      <div className="space-y-6">
        {/* Booking Frequency */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-medium">Booking Frequency</h3>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Switch 
                    checked={limits.frequency.enableDaily}
                    onCheckedChange={(checked) => handleLimitChange('frequency', 'enableDaily', checked)}
                  />
                  <label className="text-sm font-medium">Limit per day</label>
                </div>
                {limits.frequency.enableDaily && (
                  <input
                    type="number"
                    value={limits.frequency.perDay}
                    onChange={(e) => handleLimitChange('frequency', 'perDay', e.target.value)}
                    placeholder="e.g., 5"
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background"
                  />
                )}
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Switch 
                    checked={limits.frequency.enableWeekly}
                    onCheckedChange={(checked) => handleLimitChange('frequency', 'enableWeekly', checked)}
                  />
                  <label className="text-sm font-medium">Limit per week</label>
                </div>
                {limits.frequency.enableWeekly && (
                  <input
                    type="number"
                    value={limits.frequency.perWeek}
                    onChange={(e) => handleLimitChange('frequency', 'perWeek', e.target.value)}
                    placeholder="e.g., 20"
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background"
                  />
                )}
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Switch 
                    checked={limits.frequency.enableMonthly}
                    onCheckedChange={(checked) => handleLimitChange('frequency', 'enableMonthly', checked)}
                  />
                  <label className="text-sm font-medium">Limit per month</label>
                </div>
                {limits.frequency.enableMonthly && (
                  <input
                    type="number"
                    value={limits.frequency.perMonth}
                    onChange={(e) => handleLimitChange('frequency', 'perMonth', e.target.value)}
                    placeholder="e.g., 50"
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Buffer Time */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-medium">Buffer Time</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Switch 
                  checked={limits.buffer.enableBefore}
                  onCheckedChange={(checked) => handleLimitChange('buffer', 'enableBefore', checked)}
                />
                <label className="text-sm font-medium">Buffer before event</label>
              </div>
              {limits.buffer.enableBefore && (
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={limits.buffer.before}
                    onChange={(e) => handleLimitChange('buffer', 'before', e.target.value)}
                    placeholder="15"
                    className="flex-1 px-3 py-2 border border-border rounded-lg text-sm bg-background"
                  />
                  <span className="text-sm text-muted-foreground">minutes</span>
                </div>
              )}
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Switch 
                  checked={limits.buffer.enableAfter}
                  onCheckedChange={(checked) => handleLimitChange('buffer', 'enableAfter', checked)}
                />
                <label className="text-sm font-medium">Buffer after event</label>
              </div>
              {limits.buffer.enableAfter && (
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={limits.buffer.after}
                    onChange={(e) => handleLimitChange('buffer', 'after', e.target.value)}
                    placeholder="15"
                    className="flex-1 px-3 py-2 border border-border rounded-lg text-sm bg-background"
                  />
                  <span className="text-sm text-muted-foreground">minutes</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Booking Notice */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-4">
            <AlertCircle className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-medium">Booking Notice</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Switch 
                  checked={limits.notice.enableMinimum}
                  onCheckedChange={(checked) => handleLimitChange('notice', 'enableMinimum', checked)}
                />
                <label className="text-sm font-medium">Minimum notice</label>
              </div>
              {limits.notice.enableMinimum && (
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={limits.notice.minimum}
                    onChange={(e) => handleLimitChange('notice', 'minimum', e.target.value)}
                    placeholder="60"
                    className="flex-1 px-3 py-2 border border-border rounded-lg text-sm bg-background"
                  />
                  <select className="px-3 py-2 border border-border rounded-lg text-sm bg-background">
                    <option value="minutes">minutes</option>
                    <option value="hours">hours</option>
                    <option value="days">days</option>
                  </select>
                </div>
              )}
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Switch 
                  checked={limits.notice.enableMaximum}
                  onCheckedChange={(checked) => handleLimitChange('notice', 'enableMaximum', checked)}
                />
                <label className="text-sm font-medium">Maximum notice</label>
              </div>
              {limits.notice.enableMaximum && (
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={limits.notice.maximum}
                    onChange={(e) => handleLimitChange('notice', 'maximum', e.target.value)}
                    placeholder="30"
                    className="flex-1 px-3 py-2 border border-border rounded-lg text-sm bg-background"
                  />
                  <select className="px-3 py-2 border border-border rounded-lg text-sm bg-background">
                    <option value="days">days</option>
                    <option value="weeks">weeks</option>
                    <option value="months">months</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Future Booking Limit */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-4">
            <Switch 
              checked={limits.future.enabled}
              onCheckedChange={(checked) => handleLimitChange('future', 'enabled', checked)}
            />
            <h3 className="text-lg font-medium">Limit future bookings</h3>
          </div>
          
          {limits.future.enabled && (
            <div className="flex items-center space-x-2">
              <span className="text-sm">Don't allow bookings more than</span>
              <input
                type="number"
                value={limits.future.days}
                onChange={(e) => handleLimitChange('future', 'days', e.target.value)}
                className="w-20 px-3 py-2 border border-border rounded-lg text-sm bg-background"
              />
              <span className="text-sm">days in advance</span>
            </div>
          )}
        </div>

        {/* Booking Capacity */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-medium">Booking Capacity</h3>
          </div>
          
          <div className="flex items-center space-x-2 mb-3">
            <Switch 
              checked={limits.capacity.enabled}
              onCheckedChange={(checked) => handleLimitChange('capacity', 'enabled', checked)}
            />
            <label className="text-sm font-medium">Enable group bookings</label>
          </div>
          
          {limits.capacity.enabled && (
            <div className="flex items-center space-x-2">
              <span className="text-sm">Maximum attendees per booking:</span>
              <input
                type="number"
                value={limits.capacity.maxBookings}
                onChange={(e) => handleLimitChange('capacity', 'maxBookings', e.target.value)}
                placeholder="10"
                className="w-20 px-3 py-2 border border-border rounded-lg text-sm bg-background"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
