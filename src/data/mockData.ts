
// Event types for personal account
const personalEvents = [
  {
    id: '1',
    title: '15 Minute Meeting',
    duration: 15,
    description: 'A quick 15-minute meeting',
    enabled: true,
    url: '15min',
    color: '#007ee5'
  },
  {
    id: '2',
    title: '30 Minute Meeting',
    duration: 30,
    description: 'A standard 30-minute meeting',
    enabled: true,
    url: '30min',
    color: '#007ee5'
  },
  {
    id: '3',
    title: '1 Hour Meeting',
    duration: 60,
    description: 'An hour-long meeting for detailed discussions',
    enabled: true,
    url: '1hour',
    color: '#007ee5'
  },
  {
    id: '4',
    title: 'Coffee Chat',
    duration: 30,
    description: 'Casual coffee meeting',
    enabled: false,
    url: 'coffee-chat',
    color: '#007ee5'
  },
  {
    id: '5',
    title: 'Strategy Session',
    duration: 90,
    description: 'Deep dive strategy planning session',
    enabled: true,
    url: 'strategy-session',
    color: '#007ee5'
  },
  {
    id: '6',
    title: 'Quick Sync',
    duration: 15,
    description: 'Quick synchronization meeting',
    enabled: true,
    url: 'quick-sync',
    color: '#007ee5'
  },
  {
    id: '7',
    title: 'Project Review',
    duration: 45,
    description: 'Review project progress and next steps',
    enabled: false,
    url: 'project-review',
    color: '#007ee5'
  },
  {
    id: '8',
    title: 'Client Consultation',
    duration: 60,
    description: 'Initial client consultation meeting',
    enabled: true,
    url: 'client-consultation',
    color: '#007ee5'
  },
  {
    id: '9',
    title: 'Team Standup',
    duration: 30,
    description: 'Daily team standup meeting',
    enabled: true,
    url: 'team-standup',
    color: '#007ee5'
  },
  {
    id: '10',
    title: 'Brainstorming Session',
    duration: 60,
    description: 'Creative brainstorming and ideation',
    enabled: false,
    url: 'brainstorming',
    color: '#007ee5'
  },
  {
    id: '11',
    title: 'Demo Call',
    duration: 30,
    description: 'Product demonstration call',
    enabled: true,
    url: 'demo-call',
    color: '#007ee5'
  },
  {
    id: '12',
    title: 'Feedback Session',
    duration: 45,
    description: 'Feedback and improvement discussion',
    enabled: true,
    url: 'feedback-session',
    color: '#007ee5'
  },
  {
    id: '13',
    title: 'Workshop',
    duration: 120,
    description: 'Interactive workshop session',
    enabled: false,
    url: 'workshop',
    color: '#007ee5'
  },
  {
    id: '14',
    title: 'Office Hours',
    duration: 60,
    description: 'Open office hours for questions',
    enabled: true,
    url: 'office-hours',
    color: '#007ee5'
  },
  {
    id: '15',
    title: 'Discovery Call',
    duration: 45,
    description: 'Initial discovery and requirements gathering',
    enabled: true,
    url: 'discovery-call',
    color: '#007ee5'
  }
];

// Event types for team accounts
const teamEvents = [
  {
    id: 't1',
    title: 'Team Meeting',
    duration: 30,
    description: 'Regular team meeting',
    enabled: true,
    url: 'team-meeting',
    color: '#007ee5'
  },
  {
    id: 't2',
    title: 'All Hands',
    duration: 60,
    description: 'Company-wide all hands meeting',
    enabled: true,
    url: 'all-hands',
    color: '#007ee5'
  },
  {
    id: 't3',
    title: 'Sprint Planning',
    duration: 90,
    description: 'Sprint planning session',
    enabled: true,
    url: 'sprint-planning',
    color: '#007ee5'
  },
  {
    id: 't4',
    title: 'Retrospective',
    duration: 60,
    description: 'Sprint retrospective meeting',
    enabled: false,
    url: 'retrospective',
    color: '#007ee5'
  },
  {
    id: 't5',
    title: 'Design Review',
    duration: 45,
    description: 'Design review and feedback session',
    enabled: true,
    url: 'design-review',
    color: '#007ee5'
  },
  {
    id: 't6',
    title: 'Code Review',
    duration: 30,
    description: 'Code review meeting',
    enabled: true,
    url: 'code-review',
    color: '#007ee5'
  },
  {
    id: 't7',
    title: 'Architecture Discussion',
    duration: 60,
    description: 'Technical architecture discussion',
    enabled: false,
    url: 'architecture-discussion',
    color: '#007ee5'
  },
  {
    id: 't8',
    title: 'Product Demo',
    duration: 30,
    description: 'Product demonstration for stakeholders',
    enabled: true,
    url: 'product-demo',
    color: '#007ee5'
  },
  {
    id: 't9',
    title: 'User Research',
    duration: 45,
    description: 'User research and feedback session',
    enabled: true,
    url: 'user-research',
    color: '#007ee5'
  },
  {
    id: 't10',
    title: 'Sales Meeting',
    duration: 30,
    description: 'Sales team meeting',
    enabled: false,
    url: 'sales-meeting',
    color: '#007ee5'
  },
  {
    id: 't11',
    title: 'Marketing Review',
    duration: 45,
    description: 'Marketing campaign review',
    enabled: true,
    url: 'marketing-review',
    color: '#007ee5'
  },
  {
    id: 't12',
    title: 'Training Session',
    duration: 90,
    description: 'Team training and development',
    enabled: true,
    url: 'training-session',
    color: '#007ee5'
  },
  {
    id: 't13',
    title: 'Budget Review',
    duration: 60,
    description: 'Budget and financial review',
    enabled: false,
    url: 'budget-review',
    color: '#007ee5'
  },
  {
    id: 't14',
    title: 'Performance Review',
    duration: 60,
    description: 'Employee performance review',
    enabled: true,
    url: 'performance-review',
    color: '#007ee5'
  },
  {
    id: 't15',
    title: 'Client Onboarding',
    duration: 45,
    description: 'New client onboarding session',
    enabled: true,
    url: 'client-onboarding',
    color: '#007ee5'
  }
];

export const mockTeams = [
  {
    id: 'personal',
    name: 'Personal',
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
  },
  {
    id: 'operations',
    name: 'Operations',
    logo: 'OP',
    url: 'operations',
    eventTypes: teamEvents
  },
  {
    id: 'consulting',
    name: 'Consulting',
    logo: 'CO',
    url: 'consulting',
    eventTypes: teamEvents
  },
  {
    id: 'research-lab',
    name: 'Research Lab',
    logo: 'RL',
    url: 'research-lab',
    eventTypes: teamEvents
  },
  {
    id: 'innovation-lab',
    name: 'Innovation Lab',
    logo: 'IL',
    url: 'innovation-lab',
    eventTypes: teamEvents
  },
  {
    id: 'business-dev',
    name: 'Business Dev',
    logo: 'BD',
    url: 'business-dev',
    eventTypes: teamEvents
  },
  {
    id: 'customer-success',
    name: 'Customer Success',
    logo: 'CS',
    url: 'customer-success',
    eventTypes: teamEvents
  },
  {
    id: 'data-science',
    name: 'Data Science',
    logo: 'DS',
    url: 'data-science',
    eventTypes: teamEvents
  },
  {
    id: 'security-team',
    name: 'Security Team',
    logo: 'SE',
    url: 'security-team',
    eventTypes: teamEvents
  },
  {
    id: 'quality-assurance',
    name: 'Quality Assurance',
    logo: 'QA',
    url: 'quality-assurance',
    eventTypes: teamEvents
  },
  {
    id: 'partnerships',
    name: 'Partnerships',
    logo: 'PA',
    url: 'partnerships',
    eventTypes: teamEvents
  },
  {
    id: 'legal-team',
    name: 'Legal Team',
    logo: 'LT',
    url: 'legal-team',
    eventTypes: teamEvents
  },
  {
    id: 'content-team',
    name: 'Content Team',
    logo: 'CT',
    url: 'content-team',
    eventTypes: teamEvents
  },
  {
    id: 'analytics-team',
    name: 'Analytics Team',
    logo: 'AT',
    url: 'analytics-team',
    eventTypes: teamEvents
  },
  {
    id: 'growth-team',
    name: 'Growth Team',
    logo: 'GT',
    url: 'growth-team',
    eventTypes: teamEvents
  }
];
