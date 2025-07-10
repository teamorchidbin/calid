
import React, { useState, useRef, useEffect } from 'react';
import { Plus, MoreHorizontal, Eye, Edit, Copy as CopyIcon, Code, Trash2, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, Search, Copy } from 'lucide-react';
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentTeam = mockTeams.find(t => t.id === selectedTeam) || mockTeams[0];
  const filteredEvents = currentTeam.eventTypes.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const checkScrollButtons = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    checkScrollButtons();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollButtons);
      return () => scrollElement.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

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

  const scrollTeams = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleArrowClick = (eventId: string, direction: 'up' | 'down') => {
    setDraggedItem(eventId);
    setTimeout(() => setDraggedItem(null), 2000);
  };

  return (
    <div className="p-4 space-y-4">
      {/* Team Selector with Horizontal Scroll */}
      <div className="flex items-center space-x-3 relative bg-background/95 backdrop-blur-sm sticky top-16 z-10 py-2 -mx-4 px-4 border-b border-border/40">
        <div className="flex items-center bg-muted/50 rounded-lg p-1">
          <button
            onClick={() => setSelectedTeam('personal')}
            className={`flex items-center px-2.5 py-1.5 text-sm font-medium rounded-md transition-all ${
              selectedTeam === 'personal'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className={`h-5 w-5 rounded-full flex items-center justify-center text-xs font-medium mr-2 ${
              selectedTeam === 'personal' ? 'bg-primary text-primary-foreground' : 'bg-muted-foreground/20'
            }`}>
              SY
            </div>
            Sanskar Yadav
          </button>
        </div>
        
        <div className="w-px h-6 bg-border"></div>
        
        <div className="flex items-center space-x-2">
          {canScrollLeft && (
            <button
              onClick={() => scrollTeams('left')}
              className="p-1 hover:bg-muted rounded-md transition-colors opacity-70 hover:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}
          
          <div
            ref={scrollRef}
            className="flex space-x-1 overflow-x-auto scrollbar-none max-w-2xl"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {mockTeams.slice(1).map((team) => (
              <button
                key={team.id}
                onClick={() => setSelectedTeam(team.id)}
                className={`flex items-center px-2.5 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-all flex-shrink-0 ${
                  selectedTeam === team.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <div className={`h-5 w-5 rounded-full flex items-center justify-center text-xs font-medium mr-2 ${
                  selectedTeam === team.id ? 'bg-primary-foreground text-primary' : 'bg-muted-foreground/20'
                }`}>
                  {team.avatar}
                </div>
                {team.name}
              </button>
            ))}
          </div>
          
          {canScrollRight && (
            <button
              onClick={() => scrollTeams('right')}
              className="p-1 hover:bg-muted rounded-md transition-colors opacity-70 hover:opacity-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Search Bar and New Button */}
      <div className="flex items-center justify-between space-x-3">
        <div className="flex items-center space-x-3 flex-1">
          <div className="relative w-52">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-sm"
            />
          </div>
          
          <div className="relative">
            <button
              onClick={handleCopyPublicLink}
              className="flex items-center space-x-2 px-2 py-1.5 bg-muted/70 text-muted-foreground text-xs rounded-md hover:bg-muted transition-colors"
            >
              <span className="text-xs">
                {selectedTeam === 'personal' ? 'cal.id/sanskar' : `cal.id/${currentTeam.url}`}
              </span>
              <Copy className="h-3 w-3" />
            </button>
            {copiedPublicLink && (
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-foreground text-background text-xs rounded animate-fade-in whitespace-nowrap">
                Copied
              </div>
            )}
          </div>
        </div>
        
        <div className="relative">
          <button
            onClick={() => setShowNewDropdown(!showNewDropdown)}
            className="inline-flex items-center px-3 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="h-4 w-4 mr-1.5" />
            New
          </button>
          
          {showNewDropdown && (
            <div className="absolute right-0 top-full mt-1 w-48 bg-popover border border-border rounded-lg shadow-lg animate-scale-in z-10">
              <div className="py-1">
                {mockTeams.map((team) => (
                  <button
                    key={team.id}
                    onClick={() => {
                      setSelectedTeam(team.id);
                      setIsCreateModalOpen(true);
                      setShowNewDropdown(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-muted transition-colors flex items-center"
                  >
                    <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium mr-2">
                      {team.avatar}
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
      <div className="space-y-2">
        {filteredEvents.map((event) => (
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
            {/* Move buttons - positioned to stick to tile */}
            {(hoveredEvent === event.id || draggedItem === event.id) && (
              <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-0.5 z-10">
                <button 
                  onClick={() => handleArrowClick(event.id, 'up')}
                  className="p-1 bg-background border border-border rounded hover:bg-muted shadow-sm transition-all"
                >
                  <ArrowUp className="h-3 w-3 text-muted-foreground" />
                </button>
                <button 
                  onClick={() => handleArrowClick(event.id, 'down')}
                  className="p-1 bg-background border border-border rounded hover:bg-muted shadow-sm transition-all"
                >
                  <ArrowDown className="h-3 w-3 text-muted-foreground" />
                </button>
              </div>
            )}

            <div 
              onClick={() => handleEventClick(event.id)}
              className="bg-card border border-border rounded-lg p-3 hover:border-border/60 transition-all hover:shadow-sm cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center mb-2 space-x-2">
                    <h3 className="text-base font-medium text-foreground">
                      {event.title}
                    </h3>
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyLink(event.id, event.url);
                        }}
                        className="flex items-center space-x-1 px-1.5 py-0.5 bg-muted/70 text-muted-foreground text-xs rounded hover:bg-muted transition-colors"
                      >
                        <Copy className="h-2.5 w-2.5" />
                        <span className="text-xs">Copy</span>
                      </button>
                      {copiedLink === event.id && (
                        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 bg-foreground text-background text-xs rounded animate-fade-in whitespace-nowrap">
                          Copied
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{event.description}</p>
                  <div className="flex items-center justify-between">
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
                
                <div className="flex items-center space-x-2 ml-3" onClick={(e) => e.stopPropagation()}>
                  <Switch checked={event.isActive} />
                  <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => setShowMoreOptions(showMoreOptions === event.id ? null : event.id)}
                      className="p-1.5 hover:bg-muted rounded-md transition-colors"
                    >
                      <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                    </button>
                    
                    {showMoreOptions === event.id && (
                      <div className="absolute right-0 top-full mt-1 w-40 bg-popover border border-border rounded-lg shadow-lg animate-scale-in z-10">
                        <div className="py-1">
                          <button 
                            onClick={() => handleEventClick(event.id)}
                            className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors"
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </button>
                          <button className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors">
                            <CopyIcon className="h-4 w-4 mr-2" />
                            Duplicate
                          </button>
                          <button className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors">
                            <Code className="h-4 w-4 mr-2" />
                            Embed
                          </button>
                          <button className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted transition-colors text-destructive">
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
        ))}
      </div>

      <CreateEventModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        teams={mockTeams}
        selectedTeam={selectedTeam}
      />
    </div>
  );
};
