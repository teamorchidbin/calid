
interface EventType {
  id: string;
  title: string;
  description: string;
  duration: number;
  url: string;
  isActive: boolean;
  durations?: number[];
  bookingsToday: number;
}

interface Team {
  id: string;
  name: string;
  avatar: string;
  url: string;
  eventTypes: EventType[];
}

const generateEventTypes = (teamName: string, count: number): EventType[] => {
  const eventTitles = [
    'Quick Chat', 'Deep Dive Discussion', '1-on-1 Meeting', 'Team Sync',
    'Product Review', 'Strategy Session', 'Demo Call', 'Feedback Session',
    'Planning Meeting', 'Check-in Call', 'Brainstorm Session', 'Status Update'
  ];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `${teamName.toLowerCase()}-${i + 1}`,
    title: eventTitles[i % eventTitles.length],
    description: `${eventTitles[i % eventTitles.length]} for ${teamName} team members`,
    duration: [15, 30, 45, 60][i % 4],
    url: `/${teamName.toLowerCase()}-${eventTitles[i % eventTitles.length].toLowerCase().replace(/\s+/g, '-')}`,
    isActive: Math.random() > 0.2,
    durations: [15, 30, 45, 60].slice(0, Math.floor(Math.random() * 3) + 2),
    bookingsToday: Math.floor(Math.random() * 10)
  }));
};

export const mockTeams: Team[] = [
  {
    id: 'personal',
    name: 'Sanskar Yadav',
    avatar: 'SY',
    url: 'sanskar',
    eventTypes: [
      {
        id: '1',
        title: 'Product Hunt Chats',
        description: 'The essence of Product Hunt reflects in communities- Select a time suitable for you, and let\'s talk products!',
        duration: 30,
        url: '/sanskar/product-hunt-chats',
        isActive: true,
        durations: [15, 30, 45, 60],
        bookingsToday: 3
      },
      {
        id: '2',
        title: 'Interviews',
        description: 'Let\'s chat about how your skills can be an asset for our team. No stress, just good vibes and great questions!',
        duration: 30,
        url: '/sanskar/interviews',
        isActive: true,
        durations: [30, 60],
        bookingsToday: 1
      },
      {
        id: '3',
        title: 'Product Demo',
        description: 'Witness innovation in action! Reserve a time for a personalized demo of our next-gen scheduler (THIS SITE)',
        duration: 30,
        url: '/sanskar/product-demo',
        isActive: true,
        durations: [30, 45],
        bookingsToday: 5
      },
      {
        id: '4',
        title: 'Everything Else',
        description: 'Open Agenda! Let\'s brainstorm over coffee or talk about your favorite singer. Whatever it is, I\'m all ears! ✓',
        duration: 15,
        url: '/sanskar/everything-else',
        isActive: true,
        durations: [15, 30, 60],
        bookingsToday: 2
      }
    ]
  },
  ...Array.from({ length: 9 }, (_, i) => ({
    id: `team-${i + 1}`,
    name: ['Engineering', 'Marketing', 'Sales', 'Design', 'Product', 'Support', 'HR', 'Finance', 'Operations'][i],
    avatar: ['EN', 'MK', 'SL', 'DS', 'PD', 'SP', 'HR', 'FN', 'OP'][i],
    url: ['engineering', 'marketing', 'sales', 'design', 'product', 'support', 'hr', 'finance', 'operations'][i],
    eventTypes: generateEventTypes(['Engineering', 'Marketing', 'Sales', 'Design', 'Product', 'Support', 'HR', 'Finance', 'Operations'][i], 10)
  }))
];
