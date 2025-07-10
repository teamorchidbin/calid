
import React, { useState } from 'react';
import { X, ChevronDown, Users, RotateCcw, Settings, Plus } from 'lucide-react';

interface Team {
  id: string;
  name: string;
  avatar: string;
  url: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  teams: Team[];
  selectedTeam?: string;
  onCreateEvent: (eventData: any) => void;
}

const durationSuggestions = [
  { value: '15', label: '15 mins' },
  { value: '30', label: '30 mins' },
  { value: '45', label: '45 mins' },
  { value: '60', label: '60 mins' },
  { value: '90', label: '90 mins' }
];

export const CreateEventModal = ({ isOpen, onClose, teams, selectedTeam: initialTeam, onCreateEvent }: Props) => {
  const [selectedTeam, setSelectedTeam] = useState<string>(initialTeam || '');
  const [showDurationDropdown, setShowDurationDropdown] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    url: 'new-event',
    description: '',
    duration: '30'
  });

  if (!isOpen) return null;

  const handleCreate = () => {
    console.log('Create button clicked with form data:', formData);
    console.log('Selected team:', selectedTeam);
    
    if (!formData.title.trim()) {
      console.log('No title provided, aborting creation');
      return;
    }

    const eventData = {
      ...formData,
      duration: formData.duration,
      team: selectedTeam
    };

    console.log('Calling onCreateEvent with:', eventData);
    onCreateEvent(eventData);
  };

  const handleDurationSelect = (suggestion: typeof durationSuggestions[0]) => {
    setFormData({ ...formData, duration: suggestion.value });
    setShowDurationDropdown(false);
  };

  const isFormValid = formData.title.trim();
  const currentTeam = teams.find(t => t.id === selectedTeam);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-card rounded-lg shadow-xl w-full max-w-md mx-4 animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-semibold">Add a new event type</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-muted-foreground mb-4">Create a new event type for people to book times with.</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                placeholder=""
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">URL</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 border border-r-0 border-border bg-muted text-muted-foreground text-sm rounded-l-lg">
                  cal.id/{currentTeam?.url || 'sanskar'}/
                </span>
                <input
                  type="text"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="flex-1 px-3 py-2 border border-border rounded-r-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                placeholder="A quick video meeting"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background placeholder:text-muted-foreground/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Duration</label>
              <div className="relative">
                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  onFocus={() => setShowDurationDropdown(true)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
                  placeholder="30"
                />
                
                {showDurationDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg shadow-lg z-10 animate-scale-in">
                    <div className="py-1 max-h-48 overflow-y-auto">
                      {durationSuggestions.map((suggestion) => (
                        <button
                          key={suggestion.value}
                          onClick={() => handleDurationSelect(suggestion)}
                          className="w-full text-left px-3 py-2 text-sm hover:bg-muted transition-colors"
                        >
                          {suggestion.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-6 border-t border-border">
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleCreate}
              disabled={!isFormValid}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isFormValid
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
              }`}
            >
              Create
            </button>
          </div>
        </div>
      </div>
      
      {/* Backdrop to close dropdown */}
      {showDurationDropdown && (
        <div 
          className="fixed inset-0 z-5" 
          onClick={() => setShowDurationDropdown(false)}
        />
      )}
    </div>
  );
};
