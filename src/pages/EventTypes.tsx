import React, { useState } from 'react';
import { Plus, MoreHorizontal, Copy, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CreateEventModal } from '../components/CreateEventModal';
import { useNavigate } from 'react-router-dom';

interface Team {
  id: string;
  name: string;
  description: string;
  eventTypes: EventType[];
}

interface EventType {
  id: string;
  title: string;
  description: string;
  url: string;
  durations: number[];
  bookingsToday: number;
  isActive: boolean;
}

export const EventTypes = () => {
  const [teams, setTeams] = useState<Team[]>([
    {
      id: 'team-1',
      name: 'Product & Design',
      description: 'The team working on the product and design.',
      eventTypes: [
        {
          id: 'event-1',
          title: 'Product Hunt Chats',
          description: 'The essence of Product Hunt reflects in communities- Select a time suitable for you, and let\'s talk products!',
          url: 'product-hunt-chats',
          durations: [15, 30, 45],
          bookingsToday: 3,
          isActive: true,
        },
        {
          id: 'event-2',
          title: 'Discovery Call',
          description: 'A 30 minute call to discover if we are a good fit for each other.',
          url: 'discovery-call',
          durations: [30],
          bookingsToday: 1,
          isActive: false,
        },
      ],
    },
  ]);
  const [selectedTeamId, setSelectedTeamId] = useState('team-1');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const navigate = useNavigate();

  const selectedTeam = teams.find(team => team.id === selectedTeamId);
  const eventTypes = selectedTeam ? selectedTeam.eventTypes : [];

  const handleTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTeamId(event.target.value);
  };

  const handleCreateEvent = (eventData: any) => {
    console.log('Creating event with data:', eventData);
    
    const newEvent = {
      id: Date.now().toString(),
      title: eventData.title,
      description: eventData.description,
      url: eventData.url,
      durations: eventData.durations || [15],
      bookingsToday: 0,
      isActive: true
    };

    console.log('New event object:', newEvent);
    
    setTeams(prevTeams => {
      const updatedTeams = prevTeams.map(team => {
        if (team.id === selectedTeamId) {
          const updatedTeam = {
            ...team,
            eventTypes: [...team.eventTypes, newEvent]
          };
          console.log('Updated team:', updatedTeam);
          return updatedTeam;
        }
        return team;
      });
      console.log('Updated teams:', updatedTeams);
      return updatedTeams;
    });

    setIsCreateModalOpen(false);
    console.log('Navigating to:', `/event/${newEvent.id}/setup`);
    navigate(`/event/${newEvent.id}/setup`);
  };

  const handleEventTypeToggle = (eventId: string) => {
    setTeams(prevTeams => {
      return prevTeams.map(team => {
        if (team.id === selectedTeamId) {
          return {
            ...team,
            eventTypes: team.eventTypes.map(eventType => {
              if (eventType.id === eventId) {
                return { ...eventType, isActive: !eventType.isActive };
              }
              return eventType;
            })
          };
        }
        return team;
      });
    });
  };

  const handleEventTypeDuplicate = (eventId: string) => {
    setTeams(prevTeams => {
      return prevTeams.map(team => {
        if (team.id === selectedTeamId) {
          const eventToDuplicate = team.eventTypes.find(eventType => eventType.id === eventId);
          if (eventToDuplicate) {
            const duplicatedEvent = {
              ...eventToDuplicate,
              id: Date.now().toString(),
              title: `${eventToDuplicate.title} (Copy)`,
              url: `${eventToDuplicate.url}-copy`,
            };
            return {
              ...team,
              eventTypes: [...team.eventTypes, duplicatedEvent],
            };
          }
        }
        return team;
      });
    });
  };

  const handleEventTypeDelete = (eventId: string) => {
    setTeams(prevTeams => {
      return prevTeams.map(team => {
        if (team.id === selectedTeamId) {
          return {
            ...team,
            eventTypes: team.eventTypes.filter(eventType => eventType.id !== eventId),
          };
        }
        return team;
      });
    });
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Event Types</h1>
          <p className="text-muted-foreground">Create event types to share for people to book on your calendar.</p>
        </div>
        <Button onClick={() => setIsCreateModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          New Event Type
        </Button>
      </div>

      <div className="mb-4">
        <Label htmlFor="team">Team</Label>
        <select id="team" value={selectedTeamId} onChange={handleTeamChange} className="w-full px-4 py-2 border rounded-md bg-background">
          {teams.map(team => (
            <option key={team.id} value={team.id}>{team.name}</option>
          ))}
        </select>
      </div>

      <Table>
        <TableCaption>A list of your event types.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Event Type</TableHead>
            <TableHead>Bookings Today</TableHead>
            <TableHead>Active</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventTypes.map((eventType) => (
            <TableRow key={eventType.id}>
              <TableCell className="font-medium">{eventType.title}</TableCell>
              <TableCell>{eventType.bookingsToday}</TableCell>
              <TableCell>
                <Switch checked={eventType.isActive} onCheckedChange={() => handleEventTypeToggle(eventType.id)} id={`active-${eventType.id}`} />
                <Label htmlFor={`active-${eventType.id}`} className="sr-only">Active</Label>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => navigate(`/event/${eventType.id}/setup`)}>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleEventTypeDuplicate(eventType.id)}>
                      <Copy className="w-4 h-4 mr-2" />
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem className="text-destructive focus:bg-destructive/50">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete your event type
                              and remove your data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleEventTypeDelete(eventType.id)}>Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CreateEventModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        teams={[
          { id: 'personal', name: 'Personal', avatar: 'S', url: 'sanskar' },
          ...teams.map(team => ({ ...team, avatar: team.name.charAt(0), url: team.name.toLowerCase().replace(/\s+/g, '-') }))
        ]}
        selectedTeam={selectedTeamId}
        onCreateEvent={handleCreateEvent}
      />
    </div>
  );
};
