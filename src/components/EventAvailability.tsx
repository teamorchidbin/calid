
import React, { useState } from 'react';
import { Clock, Plus, Trash2, Copy } from 'lucide-react';
import { Switch } from './ui/switch';

interface TimeSlot {
  start: string;
  end: string;
}

interface DayAvailability {
  enabled: boolean;
  slots: TimeSlot[];
}

type WeekAvailability = {
  [key: string]: DayAvailability;
};

export const EventAvailability = () => {
  const [availability, setAvailability] = useState<WeekAvailability>({
    monday: { enabled: true, slots: [{ start: '09:00', end: '17:00' }] },
    tuesday: { enabled: true, slots: [{ start: '09:00', end: '17:00' }] },
    wednesday: { enabled: true, slots: [{ start: '09:00', end: '17:00' }] },
    thursday: { enabled: true, slots: [{ start: '09:00', end: '17:00' }] },
    friday: { enabled: true, slots: [{ start: '09:00', end: '17:00' }] },
    saturday: { enabled: false, slots: [{ start: '09:00', end: '17:00' }] },
    sunday: { enabled: false, slots: [{ start: '09:00', end: '17:00' }] }
  });

  const [useCustomSchedule, setUseCustomSchedule] = useState(false);

  const days = [
    { key: 'sunday', label: 'Sunday', short: 'Sun' },
    { key: 'monday', label: 'Monday', short: 'Mon' },
    { key: 'tuesday', label: 'Tuesday', short: 'Tue' },
    { key: 'wednesday', label: 'Wednesday', short: 'Wed' },
    { key: 'thursday', label: 'Thursday', short: 'Thu' },
    { key: 'friday', label: 'Friday', short: 'Fri' },
    { key: 'saturday', label: 'Saturday', short: 'Sat' }
  ];

  const toggleDay = (day: string) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        enabled: !prev[day].enabled
      }
    }));
  };

  const addTimeSlot = (day: string) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: [...prev[day].slots, { start: '09:00', end: '17:00' }]
      }
    }));
  };

  const removeTimeSlot = (day: string, index: number) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: prev[day].slots.filter((_, i) => i !== index)
      }
    }));
  };

  const updateTimeSlot = (day: string, index: number, field: 'start' | 'end', value: string) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: prev[day].slots.map((slot, i) => 
          i === index ? { ...slot, [field]: value } : slot
        )
      }
    }));
  };

  const copyToAllDays = (sourceDay: string) => {
    const sourceSlots = availability[sourceDay].slots;
    setAvailability(prev => {
      const updated = { ...prev };
      days.forEach(day => {
        if (day.key !== sourceDay && updated[day.key].enabled) {
          updated[day.key] = {
            ...updated[day.key],
            slots: [...sourceSlots]
          };
        }
      });
      return updated;
    });
  };

  return (
    <div className="p-6 w-full space-y-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Switch 
            id="custom-schedule" 
            checked={useCustomSchedule}
            onCheckedChange={setUseCustomSchedule}
          />
          <label htmlFor="custom-schedule" className="text-sm font-medium">
            Use a custom schedule for this event type
          </label>
        </div>
        
        {useCustomSchedule && (
          <div className="pl-6 text-sm text-muted-foreground">
            When enabled, this event type will have its own availability schedule instead of using your default calendar availability.
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Working Hours</h3>
          <div className="text-sm text-muted-foreground">
            Times displayed in your local timezone
          </div>
        </div>

        <div className="space-y-3">
          {days.map((day) => (
            <div key={day.key} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Switch 
                    checked={availability[day.key].enabled}
                    onCheckedChange={() => toggleDay(day.key)}
                  />
                  <span className="font-medium text-sm">{day.label}</span>
                </div>
                
                {availability[day.key].enabled && availability[day.key].slots.length > 0 && (
                  <button
                    onClick={() => copyToAllDays(day.key)}
                    className="flex items-center text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    Copy to all
                  </button>
                )}
              </div>

              {availability[day.key].enabled && (
                <div className="space-y-3">
                  {availability[day.key].slots.map((slot, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <input
                        type="time"
                        value={slot.start}
                        onChange={(e) => updateTimeSlot(day.key, index, 'start', e.target.value)}
                        className="px-3 py-2 border border-border rounded text-sm bg-background"
                      />
                      <span className="text-muted-foreground">to</span>
                      <input
                        type="time"
                        value={slot.end}
                        onChange={(e) => updateTimeSlot(day.key, index, 'end', e.target.value)}
                        className="px-3 py-2 border border-border rounded text-sm bg-background"
                      />
                      
                      {availability[day.key].slots.length > 1 && (
                        <button
                          onClick={() => removeTimeSlot(day.key, index)}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  
                  <button
                    onClick={() => addTimeSlot(day.key)}
                    className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add time range
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="font-medium text-sm mb-2">Schedule Preview</h4>
          <div className="space-y-1 text-sm text-muted-foreground">
            {days.map(day => {
              const dayAvail = availability[day.key];
              if (!dayAvail.enabled) return null;
              
              return (
                <div key={day.key} className="flex items-center justify-between">
                  <span>{day.short}</span>
                  <span>
                    {dayAvail.slots.map((slot, i) => (
                      <span key={i}>
                        {slot.start} - {slot.end}
                        {i < dayAvail.slots.length - 1 && ', '}
                      </span>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
