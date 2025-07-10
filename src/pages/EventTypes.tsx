
import React, { useState, useRef, useEffect } from 'react';
import { Plus, MoreHorizontal, Eye, Edit, Copy as CopyIcon, Code, Trash2, ArrowUp, ArrowDown, Search, Copy, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { CreateEventModal } from '../components/CreateEventModal';
import { useNavigate } from 'react-router-dom';
import { mockTeams } from '../data/mockData';
import { Switch } from '../components/ui/switch';

export const EventTypes = () => {
  const [selectedTeam, setSelectedTeam] = useState('personal');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [showNewDropdown, setShowNewDropdown] = useState(false);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const [showMoreOptions, setShowMoreOptions] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [copiedPublicLink, setCopiedPublicLink] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [eventStates, setEventStates] = useState<{[key: string]: boolean}>({});
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [selectedTeamForCreate, setSelectedTeamForCreate] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const currentTeam = mockTeams.find(t => t.id === selectedTeam) || mockTeams[0];
  const filteredEvents = currentTeam.eventTypes.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Initialize event states
  useEffect(() => {
    const initialStates: {[key: string]: boolean} = {};
    mockTeams.forEach(team => {
      team.eventTypes.forEach(event => {
        initialStates[event.id] = event.isActive;
      });
    });
    setEventStates(initialStates);
  }, []);

  // Check scroll position
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      const resizeObserver = new ResizeObserver(checkScroll);
      resizeObserver.observe(container);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        resizeObserver.disconnect();
      };
    }
  }, []);

  const scrollTeams = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleEventClick = (eventId: string) => {
    navigate(`/event/${eventId}/setup`);
  };

  const handleCopyLink = (eventId: string, url: string) => {
    navigator.clipboard.writeText(`https://cal.id${url}`);
    setCopiedLink(eventId);
    setTimeout(() => setCopiedLink(null), 1500);
  };

  const handleCopyPublicLink = () => {
    const publicUrl = selectedTeam === 'personal' ? 'https://cal.id/sanskar' : `https://cal.id/${currentTeam.url}`;
    navigator.clipboard.writeText(publicUrl);
    setCopiedPublicLink(true);
    setTimeout(() => setCopiedPublicLink(false), 1500);
  };

  const handleToggleEvent = (eventId: string, checked: boolean) => {
    setEventStates(prev => ({
      ...prev,
      [eventId]: checked
    }));
  };

  const handleArrowClick = (eventId: string, direction: 'up' | 'down') => {
    setDraggedItem(eventId);
    console.log(`Moving event ${eventId} ${direction}`);
    setTimeout(() => setDraggedItem(null), 1000);
  };

  const handleMenuAction = (action: string, eventId: string) => {
    setShowMoreOptions(null);
    switch (action) {
      case 'edit':
        handleEventClick(eventId);
        break;
      case 'duplicate':
        console.log('Duplicating event', eventId);
        break;
      case 'embed':
        console.log('Embed event', eventId);
        break;
      case 'delete':
        console.log('Deleting event', eventId);
        break;
    }
  };

  const handleCreateEventClick = (teamId: string) => {
    setSelectedTeamForCreate(teamId);
    setSelectedTeam(teamId);
    setShowNewDropdown(false);
    setIsCreateModalOpen(true);
  };

  const handleCreateEvent = (eventData: any) => {
    const newEventId = `event-${Date.now()}`;
    console.log('Creating new event:', eventData);
    navigate(`/event/${newEventId}/setup`);
  };

  return (
    <div className="p-6 space-y-6 w-full max-w-full overflow-hidden">
      {/* Team Selector */}
      <div className="flex items-center justify-between bg-background/95 backdrop-blur-sm sticky top-16 z-10 py-4 -mx-6 px-6 border-b border-border/40 w-full">
        <div className="flex items-center space-x-4 w-full min-w-0">
          {/* Personal Profile - Fixed */}
          <div className="flex items-center bg-muted/50 rounded-lg p-1">
            <button
              onClick={() => setSelectedTeam('personal')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all whitespace-nowrap ${
                selectedTeam === 'personal'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium mr-2 ${
                selectedTeam === 'personal' ? 'bg-primary text-primary-foreground' : 'bg-muted-foreground/20'
              }`}>
                {mockTeams[0].logo}
              </div>
              <span className="hidden sm:inline">Sanskar Yadav</span>
              <span className="sm:hidden">SK</span>
            </button>
          </div>
          
          {/* Separator Line */}
          <div className="w-px h-6 bg-border flex-shrink-0"></div>
          
          {/* Teams - Scrollable */}
          <div className="flex items-center flex-1 relative min-w-0">
            {canScrollLeft && (
              <button
                onClick={() => scrollTeams('left')}
                className="absolute left-0 z-10 p-1 bg-background border border-border rounded-full shadow-sm hover:bg-muted transition-colors flex-shrink-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
            
            <div 
              ref={scrollContainerRef}
              className="flex space-x-2 overflow-x-auto scrollbar-none flex-1 px-6 min-w-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {mockTeams.slice(1).map((team) => (
                <button
                  key={team.id}
                  onClick={() => setSelectedTeam(team.id)}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-all flex-shrink-0 min-w-fit ${
                    selectedTeam === team.id
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium mr-2 ${
                    selectedTeam === team.id ? 'bg-primary-foreground text-primary' : 'bg-muted-foreground/20'
                  }`}>
                    {team.logo}
                  </div>
                  {team.name}
                </button>
              ))}
            </div>
            
            {canScrollRight && (
              <button
                onClick={() => scrollTeams('right')}
                className="absolute right-0 z-10 p-1 bg-background border border-border rounded-full shadow-sm hover:bg-muted transition-colors flex-shrink-0"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search Bar and New Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 flex-1 w-full">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-sm"
            />
          </div>
          
          <div className="relative flex items-center space-x-2">
            <div className="flex items-center space-x-2 px-3 py-2 bg-muted/70 text-muted-foreground text-xs rounded-md hover:bg-muted transition-colors">
              <span className="text-xs truncate">
                {selectedTeam === 'personal' ? 'cal.id/sanskar' : `cal.id/${currentTeam.url}`}
              </span>
              <button onClick={handleCopyPublicLink}>
                <Copy className="h-3 w-3" />
              </button>
              <button className="p-1">
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
            {copiedPublicLink && (
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-foreground text-background text-xs rounded animate-fade-in whitespace-nowrap">
                Copied
              </div>
            )}
          </div>
        </div>
        
        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setShowNewDropdown(!showNewDropdown)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            New
          </button>
          
          {showNewDropdown && (
            <div className="absolute right-0 top-full mt-1 w-48 bg-popover border border-border rounded-lg shadow-lg animate-scale-in z-10">
              <div className="py-1">
                {mockTeams.map((team) => (
                  <button
                    key={team.id}
                    onClick={() => handleCreateEventClick(team.id)}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-muted transition-colors flex items-center"
                  >
                    <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium mr-2">
                      {team.logo}
                    </div>
                    {team.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Event Types List */}
      <div className="space-y-3">
        {filteredEvents.map((event) => {
          const isEventActive = eventStates[event.id] ?? event.isActive;
          return (
            <div
              key={event.id}
              className="relative group animate-fade-in"
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => {
                if (draggedItem !== event.id) {
                  setHoveredEvent(null);
                }
              }}
            >
              {/* Move buttons */}
              {(hoveredEvent === event.id || draggedItem === event.id) && (
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1 z-10">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleArrowClick(event.id, 'up');
                    }}
                    className="p-1.5 bg-background border border-border rounded hover:bg-muted shadow-sm transition-all animate-arrow-popup"
                  >
                    <ArrowUp className="h-3 w-3 text-muted-foreground" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleArrowClick(event.id, 'down');
                    }}
                    className="p-1.5 bg-background border border-border rounded hover:bg-muted shadow-sm transition-all animate-arrow-popup"
                  >
                    <ArrowDown className="h-3 w-3 text-muted-foreground" />
                  </button>
                </div>
              )}

              <div 
                onClick={() => handleEventClick(event.id)}
                className={`bg-card border border-border rounded-lg p-4 hover:border-border/60 transition-all hover:shadow-sm cursor-pointer ${
                  !isEventActive ? 'opacity-50' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-3 space-y-2 sm:space-y-0 sm:space-x-3">
                      <h3 className="text-base font-medium text-foreground">
                        {event.title}
                      </h3>
                      <div className="relative">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopyLink(event.id, event.url);
                          }}
                          className="flex items-center space-x-1 px-2 py-1 bg-muted/70 text-muted-foreground text-xs rounded hover:bg-muted transition-colors"
                        >
                          <Copy className="h-3 w-3" />
                          <span className="text-xs">Copy</span>
                        </button>
                        {copiedLink === event.id && (
                          <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 bg-foreground text-background text-xs rounded animate-fade-in whitespace-nowrap">
                            Copied
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{event.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      <div className="flex items-center space-x-2">
                        {event.durations?.map((duration) => (
                          <span key={duration} className="inline-flex items-center px-2 py-1 bg-muted text-foreground text-xs rounded">
                            {duration}m
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {event.bookingsToday} bookings today
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4" onClick={(e) => e.stopPropagation()}>
                    <Switch 
                      checked={isEventActive} 
                      onCheckedChange={(checked) => handleToggleEvent(event.id, checked)}
                    />
                    <button className="p-2 hover:bg-muted rounded-md transition-colors">
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <div className="relative">
                      <button
                        onClick={() => setShowMoreOptions(showMoreOptions === event.id ? null : event.id)}
                        className="p-2 hover:bg-muted rounded-md transition-colors"
                      >
                        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                      </button>
                      
                      {showMoreOptions === event.id && (
                        <div className="absolute right-0 top-full mt-1 w-40 bg-popover border border-border rounded-lg shadow-lg animate-scale-in z-10">
                          <div className="py-1">
                            <button 
                              onClick={() => handleMenuAction('edit', event.id)}
                              className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors"
                            >
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </button>
                            <button 
                              onClick={() => handleMenuAction('duplicate', event.id)}
                              className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors"
                            >
                              <CopyIcon className="h-4 w-4 mr-2" />
                              Duplicate
                            </button>
                            <button 
                              onClick={() => handleMenuAction('embed', event.id)}
                              className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors"
                            >
                              <Code className="h-4 w-4 mr-2" />
                              Embed
                            </button>
                            <button 
                              onClick={() => handleMenuAction('delete', event.id)}
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
              </div>
            </div>
          );
        })}
      </div>

      <CreateEventModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateEvent}
        teams={mockTeams}
        selectedTeam={selectedTeamForCreate}
      />
    </div>
  );
};
