
import React, { useState } from 'react';
import { X, ChevronDown, Users, RotateCcw, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Team {
  id: string;
  name: string;
  avatar: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  teams: Team[];
}

export const CreateEventModal = ({ isOpen, onClose, teams }: Props) => {
  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const [showTeamSelector, setShowTeamSelector] = useState(true);
  const [eventType, setEventType] = useState<string>('');
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    duration: '15'
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
    // Create event logic here
    navigate('/event/new/setup');
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            {showTeamSelector ? 'Create new event' : 
             selectedTeam === 'personal' ? 'Add a new event type' :
             eventType ? 'Add a new event type' : 'Select event type'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {showTeamSelector && (
            <div>
              <p className="text-gray-600 mb-4">Create a new event type for people to book times with.</p>
              <div className="space-y-2">
                {teams.map((team) => (
                  <button
                    key={team.id}
                    onClick={() => handleTeamSelect(team.id)}
                    className="w-full flex items-center p-3 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium mr-3">
                      {team.avatar}
                    </div>
                    <span className="text-gray-900 font-medium">{team.name}</span>
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
                    className="w-full flex items-start p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors text-left"
                  >
                    <option.icon className="h-5 w-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{option.title}</h3>
                      <p className="text-sm text-gray-600">{option.description}</p>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="Quick Chat"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">URL</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-lg">
                      https://cal.id/sanskar/
                    </span>
                    <input
                      type="text"
                      value={formData.url}
                      onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    placeholder="A quick video meeting."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <div className="flex">
                    <input
                      type="number"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="flex-1 px-3 py-2 border border-r-0 border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span className="inline-flex items-center px-3 py-2 border border-gray-300 bg-gray-50 text-gray-700 text-sm rounded-r-lg">
                      Minutes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center p-6 border-t border-gray-200">
          <button
            onClick={handleBack}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            disabled={showTeamSelector}
          >
            Back
          </button>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleCreate}
              disabled={showTeamSelector || (selectedTeam !== 'personal' && !eventType)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
