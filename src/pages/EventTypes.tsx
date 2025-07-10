import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Copy, Eye, MoreHorizontal, Clock, ChevronUp, ChevronDown, Edit, Share, Trash2, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { CreateEventModal } from '../components/CreateEventModal';
import { mockTeams } from '../data/mockData';

export const EventTypes = () => {
  const [selectedTeam, setSelectedTeam] = useState('personal');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const [teamData, setTeamData] = useState(mockTeams);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [eventMenuOpen, setEventMenuOpen] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const navigate = useNavigate();

  const scrollTeamsContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById('teams-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      setTimeout(() => {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }, 100);
    }
  };

  const handleTeamSelect = (teamId: string) => {
    setSelectedTeam(teamId);
    setShowTeamDropdown(false);
    setShowCreateModal(true);
  };

  const copyToClipboard = async (link: string, eventId: string) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopiedLink(eventId);
      setTimeout(() => setCopiedLink(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const toggleEventStatus = (eventId: string, teamId: string) => {
    setTeamData(prev => prev.map(team => 
      team.id === teamId 
        ? {
            ...team,
            eventTypes: team.eventTypes.map(event =>
              event.id === eventId 
                ? { ...event, isActive: !event.isActive }
                : event
            )
          }
        : team
    ));
  };

  const handleEventAction = (action: string, eventId: string, teamId: string) => {
    switch (action) {
      case 'edit':
        navigate(`/event/${eventId}/setup`);
        break;
      case 'duplicate':
        console.log('Duplicate event:', eventId);
        break;
      case 'embed':
        console.log('Embed event:', eventId);
        break;
      case 'delete':
        setTeamData(prev => prev.map(team =>
          team.id === teamId
            ? { ...team, eventTypes: team.eventTypes.filter(event => event.id !== eventId) }
            : team
        ));
        break;
    }
    setEventMenuOpen(null);
  };

  const moveEvent = (eventId: string, direction: 'up' | 'down', teamId: string) => {
    setTeamData(prev => prev.map(team =>
      team.id === teamId
        ? {
            ...team,
            eventTypes: (() => {
              const events = [...team.eventTypes];
              const currentIndex = events.findIndex(event => event.id === eventId);
              if (currentIndex === -1) return events;
              
              const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
              if (newIndex < 0 || newIndex >= events.length) return events;
              
              [events[currentIndex], events[newIndex]] = [events[newIndex], events[currentIndex]];
              return events;
            })()
          }
        : team
    ));
  };

  const EventTile = ({ event, teamId }: { event: any; teamId: string }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        className={`relative bg-card border border-border rounded-lg p-4 transition-all duration-200 cursor-pointer group ${
          !event.isActive ? 'opacity-50' : ''
        } hover:shadow-md hover:border-primary/20`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate(`/event/${event.id}/setup`)}
      >
        {/* Move arrows */}
        {isHovered && (
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                moveEvent(event.id, 'up', teamId);
              }}
              className="w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-sm"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                moveEvent(event.id, 'down', teamId);
              }}
              className="w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-sm"
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        )}

        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <h3 className="font-medium text-foreground">{event.title}</h3>
            
            {/* Copy link button */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(event.url, event.id);
                }}
                className="flex items-center space-x-1 px-2 py-1 bg-muted rounded text-xs text-muted-foreground hover:bg-muted/80 transition-colors"
              >
                <Copy className="h-3 w-3" />
                <span>Copy link</span>
              </button>
              
              {copiedLink === event.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap animate-scale-in">
                  Copied!
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleEventStatus(event.id, teamId);
              }}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                event.isActive ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <span
                className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                  event.isActive ? 'translate-x-5' : 'translate-x-1'
                }`}
              />
            </button>
            
            {/* Preview button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(event.url, '_blank');
              }}
              className="p-1 hover:bg-muted rounded transition-colors"
            >
              <Eye className="h-4 w-4 text-muted-foreground" />
            </button>
            
            {/* More options */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setEventMenuOpen(eventMenuOpen === event.id ? null : event.id);
                }}
                className="p-1 hover:bg-muted rounded transition-colors"
              >
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </button>
              
              {eventMenuOpen === event.id && (
                <div className="absolute right-0 top-full mt-1 w-40 bg-popover border border-border rounded-lg shadow-lg z-20 animate-scale-in">
                  <div className="py-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEventAction('edit', event.id, teamId);
                      }}
                      className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEventAction('duplicate', event.id, teamId);
                      }}
                      className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Duplicate
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEventAction('embed', event.id, teamId);
                      }}
                      className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      <Share className="h-4 w-4 mr-2" />
                      Embed
                    </button>
                    <div className="border-t border-border my-1"></div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEventAction('delete', event.id, teamId);
                      }}
                      className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{event.durations?.[0] || 30} min</span>
          </div>
          <span>{event.bookingsToday} bookings today</span>
        </div>
      </div>
    );
  };

  const currentTeam = teamData.find(team => team.id === selectedTeam);

  return (
    <div className="p-4">
      {/* Teams tabs with scroll */}
      <div className="relative mb-4">
        <div className="flex items-center">
          {canScrollLeft && (
            <button
              onClick={() => scrollTeamsContainer('left')}
              className="absolute left-0 z-10 p-2 bg-background border border-border rounded-full shadow-sm hover:bg-muted transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}
          
          <div
            id="teams-container"
            className="flex space-x-4 overflow-x-hidden scrollbar-none w-full px-8"
            onScroll={(e) => {
              const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
              setCanScrollLeft(scrollLeft > 0);
              setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
            }}
          >
            {teamData.map((team, index) => (
              <React.Fragment key={team.id}>
                {index === 1 && <div className="w-px h-8 bg-border flex-shrink-0"></div>}
                <button
                  onClick={() => setSelectedTeam(team.id)}
                  className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedTeam === team.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {team.logo && <span className="text-lg">{team.logo}</span>}
                  <span>{team.id === 'personal' ? 'Personal' : team.name}</span>
                </button>
              </React.Fragment>
            ))}
          </div>
          
          {canScrollRight && (
            <button
              onClick={() => scrollTeamsContainer('right')}
              className="absolute right-0 z-10 p-2 bg-background border border-border rounded-full shadow-sm hover:bg-muted transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      
      {/* Create Event Button */}
      <div className="mb-4 relative">
        <button
          onClick={() => setShowTeamDropdown(!showTeamDropdown)}
          className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>New</span>
        </button>
        
        {showTeamDropdown && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-popover border border-border rounded-lg shadow-lg z-20 animate-scale-in">
            <div className="py-1">
              {teamData.map((team) => (
                <button
                  key={team.id}
                  onClick={() => handleTeamSelect(team.id)}
                  className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors"
                >
                  {team.logo && <span className="mr-2">{team.logo}</span>}
                  {team.id === 'personal' ? 'Personal' : team.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Event Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentTeam?.eventTypes.map((event) => (
          <EventTile key={event.id} event={event} teamId={selectedTeam} />
        ))}
      </div>
      
      {/* Create Event Modal */}
      {showCreateModal && (
        <CreateEventModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          selectedTeam={selectedTeam}
          teams={teamData}
        />
      )}
    </div>
  );
};