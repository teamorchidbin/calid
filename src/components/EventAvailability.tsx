
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const EventAvailability = () => {
  const [availabilityType, setAvailabilityType] = useState('working-hours');
  const [workingHours] = useState([
    { day: 'Monday', start: '9:00 am', end: '5:00 pm' },
    { day: 'Tuesday', start: '9:00 am', end: '5:00 pm' },
    { day: 'Wednesday', start: '9:00 am', end: '5:00 pm' },
    { day: 'Thursday', start: '9:00 am', end: '5:00 pm' },
    { day: 'Friday', start: '9:00 am', end: '5:00 pm' },
    { day: 'Saturday', start: '9:00 am', end: '5:00 pm' },
    { day: 'Sunday', start: '9:00 am', end: '5:00 pm' },
  ]);
  const [timezone] = useState('Asia/Calcutta');

  return (
    <div className="p-8 max-w-4xl">
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Availability</h2>
          
          <div className="mb-6">
            <div className="relative">
              <select
                value={availabilityType}
                onChange={(e) => setAvailabilityType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="working-hours">Working Hours - Default</option>
                <option value="custom">Custom Schedule</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="space-y-4">
              {workingHours.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between py-3">
                  <div className="w-24 text-gray-700 font-medium">
                    {schedule.day}
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <span>{schedule.start}</span>
                    <span>-</span>
                    <span>{schedule.end}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">🌍</span>
                <span className="text-sm font-medium text-gray-700">{timezone}</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Edit availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
