
import React, { useState } from 'react';
import { X, ChevronDown, Users, RotateCcw, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockTeams } from '../data/mockData';

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
}

export const CreateEventModal = ({ isOpen, onClose, teams, selectedTeam: initialTeam }: Props) => {
  const [selectedTeam, setSelectedTeam] = useState<string>(initialTeam || '');
  const [showTeamSelector, setShowTeamSelector] = useState(!initialTeam);
  const [eventType, setEventType] = useState<string>('');
  const [showDurationDropdown, setShowDurationDropdown] = useState(false);
  const [durationUnit, setDurationUnit] = useState<'minutes' | 'hours'>('minutes');
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    duration: '30'
  });
  const navigate = useNavigate();

  const eventTypeOptions = [
    {
      id: 'collective',
      title: 'Collective',
      description: 'Schedule meetings when all selected team members are available.',
      icon: Users
    },
    {
      id: 'round-robin',
      title: 'Round Robin',
      description: 'Cycle meetings between multiple team members.',
      icon: RotateCcw
    },
    {
      id: 'managed',
      title: 'Managed Event',
      description: 'Create & distribute event types in bulk to team members',
      icon: Settings
    }
  ];

  const durationSuggestions = [
    { value: '30', label: '30 mins', unit: 'minutes' as const },
    { value: '45', label: '45 mins', unit: 'minutes' as const },
    { value: '60', label: '60 mins', unit: 'minutes' as const },
    { value: '90', label: '90 mins', unit: 'minutes' as const },
    { value: '2', label: '2 hrs', unit: 'hours' as const },
    { value: '2.5', label: '2.5 hrs', unit: 'hours' as const },
    { value: '3', label: '3 hrs', unit: 'hours' as const }
  ];

  if (!isOpen) return null;

  const handleTeamSelect = (teamId: string) => {
    setSelectedTeam(teamId);
    if (teamId === 'personal') {
      setShowTeamSelector(false);
      setEventType('personal');
    } else {
      setShowTeamSelector(false);
    }
  };

  const handleEventTypeSelect = (type: string) => {
    setEventType(type);
  };

  const handleCreate = () => {
    // Create a new event with a temporary ID
    const newEventId = `new-${Date.now()}`;
    navigate(`/event/${newEventId}/setup`);
    onClose();
  };

  const handleBack = () => {
    if (eventType && selectedTeam !== 'personal') {
      setEventType('');
    } else if (selectedTeam) {
      setSelectedTeam('');
      setShowTeamSelector(true);
    }
  };

  const handleDurationSelect = (suggestion: typeof durationSuggestions[0]) => {
    setFormData({ ...formData, duration: suggestion.value });
    setDurationUnit(suggestion.unit);
    setShowDurationDropdown(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-card rounded-lg shadow-xl w-full max-w-md mx-4 animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-semibold">
            {showTeamSelector ? 'Create new event' : 
             selectedTeam === 'personal' ? 'Add a new event type' :
             eventType ? 'Add a new event type' : 'Select event type'}
          </h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {showTeamSelector && (
            <div>
              <p className="text-muted-foreground mb-4">Create a new event type for people to book times with.</p>
              <div className="space-y-2">
                {teams.map((team) => (
                  <button
                    key={team.id}
                    onClick={() => handleTeamSelect(team.id)}
                    className="w-full flex items-center p-3 border border-border rounded-lg hover:border-border/60 hover:bg-muted/50 transition-all"
                  >
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium mr-3">
                      {team.avatar}
                    </div>
                    <span className="font-medium">{team.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {!showTeamSelector && selectedTeam !== 'personal' && !eventType && (
            <div>
              <div className="space-y-3">
                {eventTypeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleEventTypeSelect(option.id)}
                    className="w-full flex items-start p-4 border border-border rounded-lg hover:border-border/60 hover:bg-muted/50 transition-all text-left"
                  >
                    <option.icon className="h-5 w-5 text-muted-foreground mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">{option.title}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {(!showTeamSelector && (selectedTeam === 'personal' || eventType)) && (
            <div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="Quick Chat"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">URL</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 py-2 border border-r-0 border-border bg-muted text-muted-foreground text-sm rounded-l-lg">
                      cal.id/{mockTeams.find(t => t.id === selectedTeam)?.url || 'sanskar'}/
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
                    placeholder="A quick video meeting."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Duration</label>
                  <div className="relative">
                    <div className="flex">
                      <input
                        type="number"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        onFocus={() => setShowDurationDropdown(true)}
                        className="flex-1 px-3 py-2 border border-r-0 border-border rounded-l-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
                      />
                      <span className="inline-flex items-center px-3 py-2 border border-border bg-muted text-sm rounded-r-lg">
                        {durationUnit === 'minutes' ? 'Minutes' : 'Hours'}
                      </span>
                    </div>
                    
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
          )}
        </div>

        <div className="flex justify-between items-center p-6 border-t border-border">
          <button
            onClick={handleBack}
            className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
            disabled={showTeamSelector}
          >
            Back
          </button>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleCreate}
              disabled={showTeamSelector || (selectedTeam !== 'personal' && !eventType)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors"
            >
              Create
            </button>
          </div>
        </div>
      </div>
      
      {/* Backdrop to close dropdown */}
      {showDurationDropdown && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setShowDurationDropdown(false)}
        />
      )}
    </div>
  );
};
