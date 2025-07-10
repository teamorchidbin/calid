
import React, { useState, useEffect } from 'react';
import { X, Clock, MapPin, Users, Calendar } from 'lucide-react';

interface Team {
  id: string;
  name: string;
  logo: string;
  url: string;
  eventTypes: any[];
}

interface CreateEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (eventData: any) => void;
  teams: Team[];
  selectedTeam: string;
}

const durationSuggestions = [
  { value: '15', label: '15 mins' },
  { value: '30', label: '30 mins' },
  { value: '45', label: '45 mins' },
  { value: '60', label: '1 hr' },
  { value: '90', label: '1.5 hrs' },
  { value: '120', label: '2 hrs' },
  { value: '150', label: '2.5 hrs' },
  { value: '180', label: '3 hrs' }
];

export const CreateEventModal = ({ isOpen, onClose, onCreate, teams, selectedTeam }: CreateEventModalProps) => {
  const [formData, setFormData] = useState({
    title: '',
    duration: '30',
    durationUnit: 'minutes',
    description: '',
    location: 'google-meet',
    teamId: selectedTeam
  });
  const [showDurationSuggestions, setShowDurationSuggestions] = useState(false);

  useEffect(() => {
    if (selectedTeam) {
      setFormData(prev => ({ ...prev, teamId: selectedTeam }));
    }
  }, [selectedTeam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const eventData = {
      ...formData,
      id: `event-${Date.now()}`,
      url: `/${formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`,
      durations: [formData.duration],
      isActive: true,
      bookingsToday: 0,
      createdAt: new Date().toISOString()
    };

    onCreate(eventData);
    onClose();
    
    // Reset form
    setFormData({
      title: '',
      duration: '30',
      durationUnit: 'minutes',
      description: '',
      location: 'google-meet',
      teamId: selectedTeam
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDurationSuggestion = (duration: string) => {
    setFormData(prev => ({ ...prev, duration }));
    setShowDurationSuggestions(false);
  };

  if (!isOpen) return null;

  const selectedTeamData = teams.find(t => t.id === formData.teamId);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background border border-border rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h2 className="text-lg font-semibold">Add a new event type</h2>
            <p className="text-sm text-muted-foreground">Create a new event type for people to book times with.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Quick Chat"
              required
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">URL</label>
            <div className="flex">
              <div className="bg-muted px-3 py-2 border border-r-0 border-border rounded-l-lg text-sm text-muted-foreground">
                https://cal.id/sanskar/
              </div>
              <input
                type="text"
                value={formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}
                readOnly
                className="flex-1 px-3 py-2 border border-border rounded-r-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm bg-background"
              />
            </div>
          </div>

          <div>
            <div className="mb-4 p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <button type="button" className="text-sm font-medium bg-muted px-2 py-1 rounded">B</button>
                <button type="button" className="text-sm font-medium bg-muted px-2 py-1 rounded italic">I</button>
              </div>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="A quick video meeting."
                rows={3}
                className="w-full px-0 py-0 border-0 focus:ring-0 text-sm bg-transparent resize-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Duration</label>
            <div className="relative">
              <div className="flex">
                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  onFocus={() => setShowDurationSuggestions(true)}
                  className="flex-1 px-3 py-2 border border-r-0 border-border rounded-l-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm"
                />
                <select
                  value={formData.durationUnit}
                  onChange={(e) => handleInputChange('durationUnit', e.target.value)}
                  className="px-3 py-2 border border-border rounded-r-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm bg-background"
                >
                  <option value="minutes">Minutes</option>
                  <option value="hours">Hours</option>
                </select>
              </div>
              
              {showDurationSuggestions && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-lg z-10">
                  <div className="p-2 text-xs text-muted-foreground border-b border-border">
                    Quick select:
                  </div>
                  <div className="grid grid-cols-4 gap-1 p-2">
                    {durationSuggestions.map((suggestion) => (
                      <button
                        key={suggestion.value}
                        type="button"
                        onClick={() => handleDurationSuggestion(suggestion.value)}
                        className="px-2 py-1 text-xs hover:bg-muted rounded transition-colors"
                      >
                        {suggestion.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Team</label>
            <select
              value={formData.teamId}
              onChange={(e) => handleInputChange('teamId', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm"
            >
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          {selectedTeamData && (
            <div className="bg-muted/50 p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">
                  {selectedTeamData.logo}
                </div>
                <span className="text-sm font-medium">{selectedTeamData.name}</span>
              </div>
            </div>
          )}

          <div className="flex items-center justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Close
            </button>
            <button
              type="submit"
              disabled={!formData.title.trim()}
              className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
