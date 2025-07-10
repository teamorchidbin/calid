

// Event types for personal account
const personalEvents = [
  {
    id: '1',
    title: '15 Minute Meeting',
    durations: [15],
    description: 'A quick 15-minute meeting',
    isActive: true,
    url: '/sanskar/15min',
    color: '#007ee5',
    bookingsToday: 3
  },
  {
    id: '2',
    title: '30 Minute Meeting',
    durations: [30],
    description: 'A standard 30-minute meeting',
    isActive: true,
    url: '/sanskar/30min',
    color: '#007ee5',
    bookingsToday: 7
  },
  {
    id: '3',
    title: '1 Hour Meeting',
    durations: [60],
    description: 'An hour-long meeting for detailed discussions',
    isActive: true,
    url: '/sanskar/1hour',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: '4',
    title: 'Coffee Chat',
    durations: [30],
    description: 'Casual coffee meeting',
    isActive: false,
    url: '/sanskar/coffee-chat',
    color: '#007ee5',
    bookingsToday: 0
  },
  {
    id: '5',
    title: 'Strategy Session',
    durations: [90],
    description: 'Deep dive strategy planning session',
    isActive: true,
    url: '/sanskar/strategy-session',
    color: '#007ee5',
    bookingsToday: 1
  },
  {
    id: '6',
    title: 'Quick Sync',
    durations: [15],
    description: 'Quick synchronization meeting',
    isActive: true,
    url: '/sanskar/quick-sync',
    color: '#007ee5',
    bookingsToday: 5
  },
  {
    id: '7',
    title: 'Project Review',
    durations: [45],
    description: 'Review project progress and next steps',
    isActive: false,
    url: '/sanskar/project-review',
    color: '#007ee5',
    bookingsToday: 0
  },
  {
    id: '8',
    title: 'Client Consultation',
    durations: [60],
    description: 'Initial client consultation meeting',
    isActive: true,
    url: '/sanskar/client-consultation',
    color: '#007ee5',
    bookingsToday: 4
  },
  {
    id: '9',
    title: 'Team Standup',
    durations: [30],
    description: 'Daily team standup meeting',
    isActive: true,
    url: '/sanskar/team-standup',
    color: '#007ee5',
    bookingsToday: 12
  },
  {
    id: '10',
    title: 'Brainstorming Session',
    durations: [60],
    description: 'Creative brainstorming and ideation',
    isActive: true,
    url: '/sanskar/brainstorming',
    color: '#007ee5',
    bookingsToday: 8
  },
  {
    id: '11',
    title: 'Demo Call',
    durations: [30],
    description: 'Product demonstration call',
    isActive: true,
    url: '/sanskar/demo-call',
    color: '#007ee5',
    bookingsToday: 6
  },
  {
    id: '12',
    title: 'Feedback Session',
    durations: [45],
    description: 'Feedback and improvement discussion',
    isActive: true,
    url: '/sanskar/feedback-session',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: '13',
    title: 'Workshop',
    durations: [120],
    description: 'Interactive workshop session',
    isActive: true,
    url: '/sanskar/workshop',
    color: '#007ee5',
    bookingsToday: 3
  },
  {
    id: '14',
    title: 'Office Hours',
    durations: [60],
    description: 'Open office hours for questions',
    isActive: true,
    url: '/sanskar/office-hours',
    color: '#007ee5',
    bookingsToday: 8
  },
  {
    id: '15',
    title: 'Discovery Call',
    durations: [45],
    description: 'Initial discovery and requirements gathering',
    isActive: true,
    url: '/sanskar/discovery-call',
    color: '#007ee5',
    bookingsToday: 3
  }
];

// Event types for team accounts
const teamEvents = [
  {
    id: 't1',
    title: 'Team Meeting',
    durations: [30],
    description: 'Regular team meeting',
    isActive: true,
    url: '/team/team-meeting',
    color: '#007ee5',
    bookingsToday: 5
  },
  {
    id: 't2',
    title: 'All Hands',
    durations: [60],
    description: 'Company-wide all hands meeting',
    isActive: true,
    url: '/team/all-hands',
    color: '#007ee5',
    bookingsToday: 1
  },
  {
    id: 't3',
    title: 'Sprint Planning',
    durations: [90],
    description: 'Sprint planning session',
    isActive: true,
    url: '/team/sprint-planning',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: 't4',
    title: 'Retrospective',
    durations: [60],
    description: 'Sprint retrospective meeting',
    isActive: false,
    url: '/team/retrospective',
    color: '#007ee5',
    bookingsToday: 0
  },
  {
    id: 't5',
    title: 'Design Review',
    durations: [45],
    description: 'Design review and feedback session',
    isActive: true,
    url: '/team/design-review',
    color: '#007ee5',
    bookingsToday: 3
  },
  {
    id: 't6',
    title: 'Code Review',
    durations: [30],
    description: 'Code review meeting',
    isActive: true,
    url: '/team/code-review',
    color: '#007ee5',
    bookingsToday: 8
  },
  {
    id: 't7',
    title: 'Architecture Discussion',
    durations: [60],
    description: 'Technical architecture discussion',
    isActive: false,
    url: '/team/architecture-discussion',
    color: '#007ee5',
    bookingsToday: 0
  },
  {
    id: 't8',
    title: 'Product Demo',
    durations: [30],
    description: 'Product demonstration for stakeholders',
    isActive: true,
    url: '/team/product-demo',
    color: '#007ee5',
    bookingsToday: 4
  },
  {
    id: 't9',
    title: 'User Research',
    durations: [45],
    description: 'User research and feedback session',
    isActive: true,
    url: '/team/user-research',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: 't10',
    title: 'Sales Meeting',
    durations: [30],
    description: 'Sales team meeting',
    isActive: true,
    url: '/team/sales-meeting',
    color: '#007ee5',
    bookingsToday: 7
  },
  {
    id: 't11',
    title: 'Marketing Review',
    durations: [45],
    description: 'Marketing campaign review',
    isActive: true,
    url: '/team/marketing-review',
    color: '#007ee5',
    bookingsToday: 3
  },
  {
    id: 't12',
    title: 'Training Session',
    durations: [90],
    description: 'Team training and development',
    isActive: true,
    url: '/team/training-session',
    color: '#007ee5',
    bookingsToday: 1
  },
  {
    id: 't13',
    title: 'Budget Review',
    durations: [60],
    description: 'Budget and financial review',
    isActive: true,
    url: '/team/budget-review',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: 't14',
    title: 'Performance Review',
    durations: [60],
    description: 'Employee performance review',
    isActive: true,
    url: '/team/performance-review',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: 't15',
    title: 'Client Onboarding',
    durations: [45],
    description: 'New client onboarding session',
    isActive: true,
    url: '/team/client-onboarding',
    color: '#007ee5',
    bookingsToday: 6
  }
];

export const mockTeams = [
  {
    id: 'personal',
    name: 'Sanskar Yadav',
    logo: 'SY',
    url: 'sanskar',
    eventTypes: personalEvents
  },
  {
    id: 'acme-corp',
    name: 'Acme Corp',
    logo: 'AC',
    url: 'acme-corp',
    eventTypes: teamEvents
  },
  {
    id: 'product-team',
    name: 'Product Team',
    logo: 'PT',
    url: 'product-team',
    eventTypes: teamEvents
  },
  {
    id: 'design-studio',
    name: 'Design Studio',
    logo: 'DS',
    url: 'design-studio',
    eventTypes: teamEvents
  },
  {
    id: 'marketing-hub',
    name: 'Marketing Hub',
    logo: 'MH',
    url: 'marketing-hub',
    eventTypes: teamEvents
  },
  {
    id: 'sales-team',
    name: 'Sales Team',
    logo: 'ST',
    url: 'sales-team',
    eventTypes: teamEvents
  },
  {
    id: 'engineering',
    name: 'Engineering',
    logo: 'EN',
    url: 'engineering',
    eventTypes: teamEvents
  },
  {
    id: 'support-team',
    name: 'Support Team',
    logo: 'SP',
    url: 'support-team',
    eventTypes: teamEvents
  },
  {
    id: 'hr-team',
    name: 'HR Team',
    logo: 'HR',
    url: 'hr-team',
    eventTypes: teamEvents
  },
  {
    id: 'finance-team',
    name: 'Finance Team',
    logo: 'FT',
    url: 'finance-team',
    eventTypes: teamEvents
  }
];

