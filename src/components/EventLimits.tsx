
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export const EventLimits = () => {
  const [settings, setSettings] = useState({
    beforeEvent: {
      bufferTime: 'no-buffer',
      minimumNotice: { value: 2, unit: 'hours' }
    },
    afterEvent: {
      bufferTime: 'no-buffer',
      timeSlotIntervals: 'default'
    },
    limitBookingFrequency: {
      enabled: true,
      limit: 1,
      period: 'per-day'
    },
    showFirstSlotOnly: {
      enabled: true,
      description: 'This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.'
    },
    limitTotalBookingDuration: {
      enabled: true,
      duration: 60,
      unit: 'minutes',
      period: 'per-day'
    },
    limitFutureBookings: {
      enabled: true,
      days: 30,
      type: 'business-days',
      alwaysAvailable: true,
      dateRange: { start: 'Jul 10, 2025', end: 'Jul 10, 2025' }
    },
    offsetStartTimes: {
      enabled: true,
      offset: 0,
      unit: 'minutes'
    }
  });

  return (
    <div className="p-8 max-w-4xl">
      <div className="space-y-8">
        {/* Before Event */}
        <div className="border-b border-gray-200 pb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Before event</h3>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Buffer time</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option value="no-buffer">No buffer time</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Notice</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={settings.beforeEvent.minimumNotice.value}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                />
                <select className="px-3 py-2 border border-gray-300 rounded-lg">
                  <option value="hours">Hours</option>
                  <option value="days">Days</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* After Event */}
        <div className="border-b border-gray-200 pb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">After event</h3>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Buffer time</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option value="no-buffer">No buffer time</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time-slot intervals</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option value="default">Use event length (default)</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
              </select>
            </div>
          </div>
        </div>

        {/* Limit Booking Frequency */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Limit booking frequency</h3>
              <p className="text-sm text-gray-600">Limit how many times this event can be booked</p>
            </div>
            <div className="relative inline-block w-12 mr-2 align-middle select-none">
              <input 
                type="checkbox" 
                checked={settings.limitBookingFrequency.enabled}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
          </div>
          
          {settings.limitBookingFrequency.enabled && (
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={settings.limitBookingFrequency.limit}
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg"
              />
              <select className="px-3 py-2 border border-gray-300 rounded-lg">
                <option value="per-day">Per day</option>
                <option value="per-week">Per week</option>
                <option value="per-month">Per month</option>
              </select>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <Plus className="h-4 w-4 mr-1" />
                Add Limit
              </button>
            </div>
          )}
        </div>

        {/* Show First Slot Only */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Only show the first slot of each day as available</h3>
              <p className="text-sm text-gray-600 max-w-3xl">
                This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.
              </p>
            </div>
            <div className="relative inline-block w-12 mr-2 align-middle select-none">
              <input 
                type="checkbox" 
                checked={settings.showFirstSlotOnly.enabled}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
          </div>
        </div>

        {/* Limit Total Booking Duration */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Limit total booking duration</h3>
              <p className="text-sm text-gray-600">Limit total amount of time that this event can be booked</p>
            </div>
            <div className="relative inline-block w-12 mr-2 align-middle select-none">
              <input 
                type="checkbox" 
                checked={settings.limitTotalBookingDuration.enabled}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
          </div>
          
          {settings.limitTotalBookingDuration.enabled && (
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={settings.limitTotalBookingDuration.duration}
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg"
              />
              <select className="px-3 py-2 border border-gray-300 rounded-lg">
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg">
                <option value="per-day">Per day</option>
                <option value="per-week">Per week</option>
              </select>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <Plus className="h-4 w-4 mr-1" />
                Add Limit
              </button>
            </div>
          )}
        </div>

        {/* Limit Future Bookings */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Limit future bookings</h3>
              <p className="text-sm text-gray-600">Limit how far in the future this event can be booked</p>
            </div>
            <div className="relative inline-block w-12 mr-2 align-middle select-none">
              <input 
                type="checkbox" 
                checked={settings.limitFutureBookings.enabled}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
          </div>
          
          {settings.limitFutureBookings.enabled && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={settings.limitFutureBookings.days}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg"
                />
                <select className="px-3 py-2 border border-gray-300 rounded-lg">
                  <option value="business-days">business days</option>
                  <option value="calendar-days">calendar days</option>
                </select>
                <span className="text-sm text-gray-600">into the future</span>
              </div>
              
              <div className="text-sm text-gray-600">
                Always 30 days available
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Within a date range</p>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={settings.limitFutureBookings.dateRange.start}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="text"
                    value={settings.limitFutureBookings.dateRange.end}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Offset Start Times */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Offset start times</h3>
              <p className="text-sm text-gray-600">Offset timeslots shown to bookers by a specified number of minutes</p>
            </div>
            <div className="relative inline-block w-12 mr-2 align-middle select-none">
              <input 
                type="checkbox" 
                checked={settings.offsetStartTimes.enabled}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
          </div>
          
          {settings.offsetStartTimes.enabled && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Offset by</span>
                <input
                  type="number"
                  value={settings.offsetStartTimes.offset}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg"
                />
                <select className="px-3 py-2 border border-gray-300 rounded-lg">
                  <option value="minutes">Minutes</option>
                </select>
              </div>
              <p className="text-sm text-gray-600">
                e.g. this will show time slots to your bookers at 9:00 AM instead of 9:00 AM
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
