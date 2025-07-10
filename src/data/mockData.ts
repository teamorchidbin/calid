
// Event types for Tech team
const techEvents = [
  {
    id: 'tech1',
    title: 'Code Review',
    durations: [30],
    description: 'Code review and feedback session',
    isActive: true,
    url: '/tech/code-review',
    color: '#007ee5',
    bookingsToday: 8
  },
  {
    id: 'tech2',
    title: 'Technical Architecture',
    durations: [90],
    description: 'System architecture planning and discussion',
    isActive: true,
    url: '/tech/architecture',
    color: '#007ee5',
    bookingsToday: 3
  },
  {
    id: 'tech3',
    title: 'Bug Triage',
    durations: [45],
    description: 'Bug prioritization and assignment',
    isActive: true,
    url: '/tech/bug-triage',
    color: '#007ee5',
    bookingsToday: 5
  },
  {
    id: 'tech4',
    title: 'Sprint Planning',
    durations: [120],
    description: 'Sprint planning and story estimation',
    isActive: true,
    url: '/tech/sprint-planning',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: 'tech5',
    title: 'Technical Interview',
    durations: [60],
    description: 'Technical interview for candidates',
    isActive: true,
    url: '/tech/interview',
    color: '#007ee5',
    bookingsToday: 4
  },
  {
    id: 'tech6',
    title: 'Database Review',
    durations: [45],
    description: 'Database schema and performance review',
    isActive: true,
    url: '/tech/database-review',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: 'tech7',
    title: 'API Design Session',
    durations: [60],
    description: 'API design and documentation',
    isActive: true,
    url: '/tech/api-design',
    color: '#007ee5',
    bookingsToday: 3
  },
  {
    id: 'tech8',
    title: 'DevOps Sync',
    durations: [30],
    description: 'DevOps and deployment discussion',
    isActive: true,
    url: '/tech/devops',
    color: '#007ee5',
    bookingsToday: 6
  },
  {
    id: 'tech9',
    title: 'Security Review',
    durations: [45],
    description: 'Security audit and vulnerability assessment',
    isActive: true,
    url: '/tech/security',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: 'tech10',
    title: 'Tech Stack Discussion',
    durations: [60],
    description: 'Technology stack evaluation and selection',
    isActive: true,
    url: '/tech/stack',
    color: '#007ee5',
    bookingsToday: 1
  }
];

// Event types for Design team
const designEvents = [
  {
    id: 'design1',
    title: 'Design Review',
    durations: [45],
    description: 'Design critique and feedback session',
    isActive: true,
    url: '/design/review',
    color: '#007ee5',
    bookingsToday: 7
  },
  {
    id: 'design2',
    title: 'User Research',
    durations: [60],
    description: 'User interviews and research sessions',
    isActive: true,
    url: '/design/research',
    color: '#007ee5',
    bookingsToday: 4
  },
  {
    id: 'design3',
    title: 'Wireframe Session',
    durations: [90],
    description: 'Wireframing and prototyping session',
    isActive: true,
    url: '/design/wireframe',
    color: '#007ee5',
    bookingsToday: 3
  },
  {
    id: 'design4',
    title: 'Brand Guidelines',
    durations: [60],
    description: 'Brand identity and guidelines discussion',
    isActive: true,
    url: '/design/brand',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: 'design5',
    title: 'UI/UX Consultation',
    durations: [45],
    description: 'UI/UX design consultation',
    isActive: true,
    url: '/design/consultation',
    color: '#007ee5',
    bookingsToday: 8
  },
  {
    id: 'design6',
    title: 'Design System Review',
    durations: [60],
    description: 'Design system components and standards',
    isActive: true,
    url: '/design/system',
    color: '#007ee5',
    bookingsToday: 3
  },
  {
    id: 'design7',
    title: 'Creative Brainstorm',
    durations: [90],
    description: 'Creative ideation and brainstorming',
    isActive: true,
    url: '/design/brainstorm',
    color: '#007ee5',
    bookingsToday: 5
  },
  {
    id: 'design8',
    title: 'Accessibility Review',
    durations: [45],
    description: 'Design accessibility audit and improvements',
    isActive: true,
    url: '/design/accessibility',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: 'design9',
    title: 'Portfolio Review',
    durations: [60],
    description: 'Design portfolio review and feedback',
    isActive: true,
    url: '/design/portfolio',
    color: '#007ee5',
    bookingsToday: 4
  },
  {
    id: 'design10',
    title: 'Visual Design Sync',
    durations: [30],
    description: 'Visual design alignment and updates',
    isActive: true,
    url: '/design/visual',
    color: '#007ee5',
    bookingsToday: 6
  }
];

// Event types for Marketing team
const marketingEvents = [
  {
    id: 'marketing1',
    title: 'Campaign Review',
    durations: [45],
    description: 'Marketing campaign performance review',
    isActive: true,
    url: '/marketing/campaign',
    color: '#007ee5',
    bookingsToday: 6
  },
  {
    id: 'marketing2',
    title: 'Content Planning',
    durations: [60],
    description: 'Content strategy and planning session',
    isActive: true,
    url: '/marketing/content',
    color: '#007ee5',
    bookingsToday: 4
  },
  {
    id: 'marketing3',
    title: 'SEO Strategy',
    durations: [45],
    description: 'SEO strategy and optimization planning',
    isActive: true,
    url: '/marketing/seo',
    color: '#007ee5',
    bookingsToday: 3
  },
  {
    id: 'marketing4',
    title: 'Social Media Planning',
    durations: [30],
    description: 'Social media content and strategy',
    isActive: true,
    url: '/marketing/social',
    color: '#007ee5',
    bookingsToday: 8
  },
  {
    id: 'marketing5',
    title: 'Brand Strategy',
    durations: [90],
    description: 'Brand positioning and strategy session',
    isActive: true,
    url: '/marketing/brand',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: 'marketing6',
    title: 'Lead Generation',
    durations: [45],
    description: 'Lead generation strategy and tactics',
    isActive: true,
    url: '/marketing/leads',
    color: '#007ee5',
    bookingsToday: 5
  },
  {
    id: 'marketing7',
    title: 'Analytics Review',
    durations: [60],
    description: 'Marketing analytics and performance review',
    isActive: true,
    url: '/marketing/analytics',
    color: '#007ee5',
    bookingsToday: 3
  },
  {
    id: 'marketing8',
    title: 'Email Campaign',
    durations: [30],
    description: 'Email marketing strategy and execution',
    isActive: true,
    url: '/marketing/email',
    color: '#007ee5',
    bookingsToday: 7
  },
  {
    id: 'marketing9',
    title: 'PR Strategy',
    durations: [60],
    description: 'Public relations and media strategy',
    isActive: true,
    url: '/marketing/pr',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: 'marketing10',
    title: 'Growth Hacking',
    durations: [45],
    description: 'Growth hacking and experimentation',
    isActive: true,
    url: '/marketing/growth',
    color: '#007ee5',
    bookingsToday: 4
  }
];

// Event types for Sales team
const salesEvents = [
  {
    id: 'sales1',
    title: 'Sales Pitch',
    durations: [30],
    description: 'Product demonstration and sales pitch',
    isActive: true,
    url: '/sales/pitch',
    color: '#007ee5',
    bookingsToday: 12
  },
  {
    id: 'sales2',
    title: 'Client Consultation',
    durations: [45],
    description: 'Initial client consultation and needs assessment',
    isActive: true,
    url: '/sales/consultation',
    color: '#007ee5',
    bookingsToday: 8
  },
  {
    id: 'sales3',
    title: 'Deal Review',
    durations: [30],
    description: 'Sales deal review and strategy',
    isActive: true,
    url: '/sales/deal-review',
    color: '#007ee5',
    bookingsToday: 6
  },
  {
    id: 'sales4',
    title: 'Proposal Discussion',
    durations: [60],
    description: 'Proposal presentation and discussion',
    isActive: true,
    url: '/sales/proposal',
    color: '#007ee5',
    bookingsToday: 4
  },
  {
    id: 'sales5',
    title: 'Contract Negotiation',
    durations: [90],
    description: 'Contract terms and negotiation meeting',
    isActive: true,
    url: '/sales/negotiation',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: 'sales6',
    title: 'Follow-up Call',
    durations: [15],
    description: 'Client follow-up and relationship building',
    isActive: true,
    url: '/sales/followup',
    color: '#007ee5',
    bookingsToday: 15
  },
  {
    id: 'sales7',
    title: 'Pipeline Review',
    durations: [45],
    description: 'Sales pipeline review and forecasting',
    isActive: true,
    url: '/sales/pipeline',
    color: '#007ee5',
    bookingsToday: 3
  },
  {
    id: 'sales8',
    title: 'Customer Success',
    durations: [30],
    description: 'Customer success and retention discussion',
    isActive: true,
    url: '/sales/success',
    color: '#007ee5',
    bookingsToday: 7
  },
  {
    id: 'sales9',
    title: 'Competitive Analysis',
    durations: [60],
    description: 'Competitive landscape and positioning',
    isActive: true,
    url: '/sales/competitive',
    color: '#007ee5',
    bookingsToday: 2
  },
  {
    id: 'sales10',
    title: 'Training Session',
    durations: [90],
    description: 'Sales training and skill development',
    isActive: true,
    url: '/sales/training',
    color: '#007ee5',
    bookingsToday: 1
  }
];

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
  }
];

export const mockTeams = [
  {
    id: 'personal',
    name: 'Sanskar Yadav',
    logo: 'SY',
    avatar: 'SY',
    url: 'sanskar',
    eventTypes: personalEvents
  },
  {
    id: 'tech',
    name: 'Tech',
    logo: 'TC',
    avatar: 'TC',
    url: 'tech',
    eventTypes: techEvents
  },
  {
    id: 'design',
    name: 'Design',
    logo: 'DS',
    avatar: 'DS',
    url: 'design',
    eventTypes: designEvents
  },
  {
    id: 'marketing',
    name: 'Marketing',
    logo: 'MK',
    avatar: 'MK',
    url: 'marketing',
    eventTypes: marketingEvents
  },
  {
    id: 'sales',
    name: 'Sales',
    logo: 'SL',
    avatar: 'SL',
    url: 'sales',
    eventTypes: salesEvents
  }
];
