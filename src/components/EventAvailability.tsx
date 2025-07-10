import React, { useState } from 'react';
import { Clock, Plus, Trash2 } from 'lucide-react';
import { Switch } from './ui/switch';

export const EventAvailability = () => {
  const [dateOverrides, setDateOverrides] = useState(false);
  const [timeSlots, setTimeSlots] = useState([
    { day: 'Monday', enabled: true, start: '09:00', end: '17:00' },
    { day: 'Tuesday', enabled: true, start: '09:00', end: '17:00' },
    { day: 'Wednesday', enabled: true, start: '09:00', end: '17:00' },
    { day: 'Thursday', enabled: true, start: '09:00', end: '17:00' },
    { day: 'Friday', enabled: true, start: '09:00', end: '17:00' },
    { day: 'Saturday', enabled: false, start: '09:00', end: '17:00' },
    { day: 'Sunday', enabled: false, start: '09:00', end: '17:00' }
  ]);

  return (
    <div className="w-full p-4">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Availability</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Set your weekly hours for this event type. You can override these hours for specific dates.
          </p>
        </div>

        {/* Time Slots */}
        <div className="space-y-4">
          <h3 className="font-medium">Weekly Hours</h3>
          <div className="space-y-3">
            {timeSlots.map((slot, index) => (
              <div key={slot.day} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Switch 
                    checked={slot.enabled}
                    onCheckedChange={(checked) => {
                      const newSlots = [...timeSlots];
                      newSlots[index].enabled = checked;
                      setTimeSlots(newSlots);
                    }}
                  />
                  <span className="w-20 text-sm font-medium">{slot.day}</span>
                </div>
                
                {slot.enabled && (
                  <div className="flex items-center space-x-2">
                    <input 
                      type="time" 
                      value={slot.start}
                      className="px-2 py-1 border border-border rounded text-sm bg-background"
                      onChange={(e) => {
                        const newSlots = [...timeSlots];
                        newSlots[index].start = e.target.value;
                        setTimeSlots(newSlots);
                      }}
                    />
                    <span className="text-muted-foreground">to</span>
                    <input 
                      type="time" 
                      value={slot.end}
                      className="px-2 py-1 border border-border rounded text-sm bg-background"
                      onChange={(e) => {
                        const newSlots = [...timeSlots];  
                        newSlots[index].end = e.target.value;
                        setTimeSlots(newSlots);
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Date Overrides */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Date Overrides</h3>
              <p className="text-sm text-muted-foreground">Override your weekly hours for specific dates</p>
            </div>
            <Switch 
              checked={dateOverrides}
              onCheckedChange={setDateOverrides}
            />
          </div>
          
          {dateOverrides && (
            <div className="p-4 border border-border rounded-lg">
              <button className="flex items-center text-sm text-primary hover:text-primary/80">
                <Plus className="h-4 w-4 mr-2" />
                Add date override
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
