
import React, { useState } from 'react';
import { Plus, MoreHorizontal, ExternalLink, Copy, ArrowUp, ArrowDown, ChevronDown } from 'lucide-react';
import { CreateEventModal } from '../components/CreateEventModal';
import { useNavigate } from 'react-router-dom';

interface EventType {
  id: string;
  title: string;
  description: string;
  duration: number;
  url: string;
  isActive: boolean;
  durations?: number[];
}

const mockEventTypes: EventType[] = [
  {
    id: '1',
    title: 'Product Hunt Chats',
    description: 'The essence of Product Hunt reflects in communities- Select a time suitable for you, and let\'s talk products!',
    duration: 30,
    url: '/sanskar/product-hunt-chats',
    isActive: true,
    durations: [15, 30, 45, 60]
  },
  {
    id: '2',
    title: 'Interviews',
    description: 'Let\'s chat about how your skills can be an asset for our team. No stress, just good vibes and great questions!',
    duration: 30,
    url: '/sanskar/interviews',
    isActive: true,
    durations: [30, 60]
  },
  {
    id: '3',
    title: 'Product Demo',
    description: 'Witness innovation in action! Reserve a time for a personalized demo of our next-gen scheduler (THIS SITE)',
    duration: 30,
    url: '/sanskar/product-demo',
    isActive: true,
    durations: [30, 45]
  },
  {
    id: '4',
    title: 'Everything Else',
    description: 'Open Agenda! Let\'s brainstorm over coffee or talk about your favorite singer. Whatever it is, I\'m all ears! ✓',
    duration: 15,
    url: '/sanskar/everything-else',
    isActive: true,
    durations: [15, 30, 60]
  }
];

export const EventTypes = () => {
  const [selectedTeam, setSelectedTeam] = useState('personal');
  const [eventTypes, setEventTypes] = useState(mockEventTypes);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const navigate = useNavigate();

  const teams = [
    { id: 'personal', name: 'Sanskar Yadav', avatar: 'SY' },
    { id: 'testing', name: 'Testing Cal ID', avatar: 'TC' }
  ];

  const handleEventClick = (eventId: string) => {
    navigate(`/event/${eventId}/setup`);
  };

  const moveEvent = (eventId: string, direction: 'up' | 'down') => {
    const currentIndex = eventTypes.findIndex(e => e.id === eventId);
    if (direction === 'up' && currentIndex > 0) {
      const newEventTypes = [...eventTypes];
      [newEventTypes[currentIndex], newEventTypes[currentIndex - 1]] = 
      [newEventTypes[currentIndex - 1], newEventTypes[currentIndex]];
      setEventTypes(newEventTypes);
    } else if (direction === 'down' && currentIndex < eventTypes.length - 1) {
      const newEventTypes = [...eventTypes];
      [newEventTypes[currentIndex], newEventTypes[currentIndex + 1]] = 
      [newEventTypes[currentIndex + 1], newEventTypes[currentIndex]];
      setEventTypes(newEventTypes);
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Event Types</h1>
            <p className="text-gray-600 mt-1">Create events to share for people to book on your calendar.</p>
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            New
          </button>
        </div>

        {/* Team Selector */}
        <div className="flex items-center space-x-1 mb-6">
          {teams.map((team) => (
            <button
              key={team.id}
              onClick={() => setSelectedTeam(team.id)}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                selectedTeam === team.id
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium mr-2 ${
                selectedTeam === team.id ? 'bg-white text-gray-900' : 'bg-gray-200 text-gray-600'
              }`}>
                {team.avatar}
              </div>
              {team.name}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Event Types List */}
      <div className="space-y-4">
        {eventTypes.map((event) => (
          <div
            key={event.id}
            className="relative group"
            onMouseEnter={() => setHoveredEvent(event.id)}
            onMouseLeave={() => setHoveredEvent(null)}
          >
            {/* Move buttons */}
            {hoveredEvent === event.id && (
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1 z-10">
                <button
                  onClick={() => moveEvent(event.id, 'up')}
                  className="p-1 bg-white border border-gray-300 rounded hover:bg-gray-50 shadow-sm"
                >
                  <ArrowUp className="h-3 w-3 text-gray-600" />
                </button>
                <button
                  onClick={() => moveEvent(event.id, 'down')}
                  className="p-1 bg-white border border-gray-300 rounded hover:bg-gray-50 shadow-sm"
                >
                  <ArrowDown className="h-3 w-3 text-gray-600" />
                </button>
              </div>
            )}

            <div
              onClick={() => handleEventClick(event.id)}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 cursor-pointer transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-medium text-gray-900 truncate">{event.title}</h3>
                    <div className="ml-2 flex items-center space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.description}</p>
                  <div className="flex items-center space-x-4">
                    {event.durations?.map((duration) => (
                      <span key={duration} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {duration}m
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <div className={`w-3 h-3 rounded-full ${event.isActive ? 'bg-green-400' : 'bg-gray-300'}`} />
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CreateEventModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        teams={teams}
      />
    </div>
  );
};
