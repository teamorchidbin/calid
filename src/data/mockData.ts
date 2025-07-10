
export const mockTeams = [
  {
    id: 'personal',
    name: 'Sanskar Yadav',
    avatar: 'SY',
    url: 'sanskar',
    logo: '👤',
    eventTypes: Array.from({ length: 15 }, (_, i) => ({
      id: `personal-${i + 1}`,
      title: `Personal ${['Meeting', 'Call', 'Session', 'Chat', 'Discussion'][i % 5]} ${i + 1}`,
      description: 'Personal meeting description',
      url: `/sanskar/event-${i + 1}`,
      durations: [15, 30, 45, 60][i % 4] ? [[15, 30, 45, 60][i % 4]] : [30],
      isActive: i % 4 !== 0,
      bookingsToday: Math.floor(Math.random() * 8)
    }))
  },
  {
    id: 'design-team',
    name: 'Design Team',
    avatar: 'DT',
    url: 'design-team',
    logo: '🎨',
    eventTypes: Array.from({ length: 15 }, (_, i) => ({
      id: `dt-${i + 1}`,
      title: `Design ${['Review', 'Critique', 'Workshop', 'Brainstorm', 'Sync'][i % 5]} ${i + 1}`,
      description: 'Design team meeting description',
      url: `/design-team/event-${i + 1}`,
      durations: [[15, 30, 45, 60][i % 4]],
      isActive: i % 3 !== 0,
      bookingsToday: Math.floor(Math.random() * 6)
    }))
  },
  {
    id: 'dev-team',
    name: 'Development Team',
    avatar: 'DV',
    url: 'dev-team',
    logo: '💻',
    eventTypes: Array.from({ length: 15 }, (_, i) => ({
      id: `dv-${i + 1}`,
      title: `Dev ${['Standup', 'Review', 'Planning', 'Demo', 'Retro'][i % 5]} ${i + 1}`,
      description: 'Development team meeting description',
      url: `/dev-team/event-${i + 1}`,
      durations: [[15, 30, 45, 60, 90][i % 5]],
      isActive: i % 4 !== 0,
      bookingsToday: Math.floor(Math.random() * 8)
    }))
  },
  {
    id: 'marketing-team',
    name: 'Marketing Team',
    avatar: 'MT',
    url: 'marketing-team',
    logo: '📈',
    eventTypes: Array.from({ length: 15 }, (_, i) => ({
      id: `mt-${i + 1}`,
      title: `Marketing ${['Campaign', 'Strategy', 'Analysis', 'Creative', 'Social'][i % 5]} ${i + 1}`,
      description: 'Marketing team meeting description',
      url: `/marketing-team/event-${i + 1}`,
      durations: [[30, 45, 60][i % 3]],
      isActive: i % 5 !== 0,
      bookingsToday: Math.floor(Math.random() * 5)
    }))
  },
  {
    id: 'sales-team',
    name: 'Sales Team',
    avatar: 'ST',
    url: 'sales-team',
    logo: '💼',
    eventTypes: [
      {
        id: 'dt-1',
        title: 'Design Review',
        description: 'Review and feedback session for design work.',
        url: '/design-team/design-review',
        durations: [30, 45],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'dt-2',
        title: 'User Research',
        description: 'User interview and research session.',
        url: '/design-team/user-research',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'dt-3',
        title: 'Design Workshop',
        description: 'Collaborative design thinking workshop.',
        url: '/design-team/design-workshop',
        durations: [90, 120],
        isActive: true,
        bookingsToday: 0
      },
      {
        id: 'dt-4',
        title: 'Prototype Testing',
        description: 'Testing prototypes with stakeholders.',
        url: '/design-team/prototype-testing',
        durations: [30, 45],
        isActive: false,
        bookingsToday: 0
      },
      {
        id: 'dt-5',
        title: 'Brand Discussion',
        description: 'Brand guidelines and visual identity discussion.',
        url: '/design-team/brand-discussion',
        durations: [60],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'dt-6',
        title: 'Design Critique',
        description: 'Critical feedback session for design improvements.',
        url: '/design-team/design-critique',
        durations: [45],
        isActive: true,
        bookingsToday: 3
      },
      {
        id: 'dt-7',
        title: 'UI/UX Consultation',
        description: 'Consultation on user interface and experience design.',
        url: '/design-team/ui-ux-consultation',
        durations: [30, 60],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'dt-8',
        title: 'Design System Review',
        description: 'Review and update design system components.',
        url: '/design-team/design-system-review',
        durations: [60, 90],
        isActive: false,
        bookingsToday: 0
      },
      {
        id: 'dt-9',
        title: 'Accessibility Audit',
        description: 'Review designs for accessibility compliance.',
        url: '/design-team/accessibility-audit',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'dt-10',
        title: 'Creative Brainstorm',
        description: 'Creative ideation and brainstorming session.',
        url: '/design-team/creative-brainstorm',
        durations: [60, 90],
        isActive: true,
        bookingsToday: 0
      }
    ]
  },
  {
    id: 'dev-team',
    name: 'Development Team',
    avatar: 'DV',
    url: 'dev-team',
    eventTypes: [
      {
        id: 'dv-1',
        title: 'Code Review',
        description: 'Technical code review and feedback session.',
        url: '/dev-team/code-review',
        durations: [30, 45],
        isActive: true,
        bookingsToday: 4
      },
      {
        id: 'dv-2',
        title: 'Technical Discussion',
        description: 'Deep technical architecture discussions.',
        url: '/dev-team/technical-discussion',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'dv-3',
        title: 'Bug Triage',
        description: 'Bug analysis and prioritization meeting.',
        url: '/dev-team/bug-triage',
        durations: [30],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'dv-4',
        title: 'Sprint Planning',
        description: 'Agile sprint planning and estimation.',
        url: '/dev-team/sprint-planning',
        durations: [60, 90],
        isActive: true,
        bookingsToday: 0
      },
      {
        id: 'dv-5',
        title: 'Pair Programming',
        description: 'Collaborative coding session.',
        url: '/dev-team/pair-programming',
        durations: [60, 120],
        isActive: true,
        bookingsToday: 3
      },
      {
        id: 'dv-6',
        title: 'API Design',
        description: 'API architecture and design discussion.',
        url: '/dev-team/api-design',
        durations: [45, 60],
        isActive: false,
        bookingsToday: 0
      },
      {
        id: 'dv-7',
        title: 'Database Review',
        description: 'Database schema and performance review.',
        url: '/dev-team/database-review',
        durations: [45],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'dv-8',
        title: 'Security Audit',
        description: 'Code security review and vulnerability assessment.',
        url: '/dev-team/security-audit',
        durations: [60, 90],
        isActive: true,
        bookingsToday: 0
      },
      {
        id: 'dv-9',
        title: 'Performance Optimization',
        description: 'Application performance tuning session.',
        url: '/dev-team/performance-optimization',
        durations: [60],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'dv-10',
        title: 'Tech Stack Discussion',
        description: 'Technology selection and evaluation meeting.',
        url: '/dev-team/tech-stack-discussion',
        durations: [45, 60],
        isActive: false,
        bookingsToday: 0
      }
    ]
  },
  {
    id: 'marketing-team',
    name: 'Marketing Team',
    avatar: 'MT',
    url: 'marketing-team',
    eventTypes: [
      {
        id: 'mt-1',
        title: 'Campaign Planning',
        description: 'Marketing campaign strategy and planning.',
        url: '/marketing-team/campaign-planning',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'mt-2',
        title: 'Content Review',
        description: 'Content creation and approval session.',
        url: '/marketing-team/content-review',
        durations: [30, 45],
        isActive: true,
        bookingsToday: 3
      },
      {
        id: 'mt-3',
        title: 'Social Media Strategy',
        description: 'Social media planning and content strategy.',
        url: '/marketing-team/social-media-strategy',
        durations: [30, 60],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'mt-4',
        title: 'Analytics Review',
        description: 'Marketing metrics and performance analysis.',
        url: '/marketing-team/analytics-review',
        durations: [45],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'mt-5',
        title: 'Brand Workshop',
        description: 'Brand positioning and messaging workshop.',
        url: '/marketing-team/brand-workshop',
        durations: [90, 120],
        isActive: false,
        bookingsToday: 0
      },
      {
        id: 'mt-6',
        title: 'SEO Consultation',
        description: 'Search engine optimization strategy session.',
        url: '/marketing-team/seo-consultation',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'mt-7',
        title: 'Email Campaign',
        description: 'Email marketing campaign planning.',
        url: '/marketing-team/email-campaign',
        durations: [30, 45],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'mt-8',
        title: 'Influencer Outreach',
        description: 'Influencer partnership and collaboration planning.',
        url: '/marketing-team/influencer-outreach',
        durations: [30],
        isActive: true,
        bookingsToday: 0
      },
      {
        id: 'mt-9',
        title: 'PR Strategy',
        description: 'Public relations and media strategy session.',
        url: '/marketing-team/pr-strategy',
        durations: [60],
        isActive: false,
        bookingsToday: 0
      },
      {
        id: 'mt-10',
        title: 'Market Research',
        description: 'Market analysis and competitive research.',
        url: '/marketing-team/market-research',
        durations: [60, 90],
        isActive: true,
        bookingsToday: 1
      }
    ]
  },
  {
    id: 'sales-team',
    name: 'Sales Team',
    avatar: 'ST',
    url: 'sales-team',
    eventTypes: [
      {
        id: 'st-1',
        title: 'Sales Demo',
        description: 'Product demonstration for potential clients.',
        url: '/sales-team/sales-demo',
        durations: [30, 45],
        isActive: true,
        bookingsToday: 5
      },
      {
        id: 'st-2',
        title: 'Discovery Call',
        description: 'Initial client discovery and needs assessment.',
        url: '/sales-team/discovery-call',
        durations: [30],
        isActive: true,
        bookingsToday: 3
      },
      {
        id: 'st-3',
        title: 'Proposal Review',
        description: 'Sales proposal presentation and discussion.',
        url: '/sales-team/proposal-review',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'st-4',
        title: 'Contract Negotiation',
        description: 'Contract terms and pricing negotiation.',
        url: '/sales-team/contract-negotiation',
        durations: [60],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'st-5',
        title: 'Client Onboarding',
        description: 'New client onboarding and setup session.',
        url: '/sales-team/client-onboarding',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'st-6',
        title: 'Sales Training',
        description: 'Sales team training and skill development.',
        url: '/sales-team/sales-training',
        durations: [60, 90],
        isActive: false,
        bookingsToday: 0
      },
      {
        id: 'st-7',
        title: 'Pipeline Review',
        description: 'Sales pipeline analysis and forecasting.',
        url: '/sales-team/pipeline-review',
        durations: [45],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'st-8',
        title: 'Customer Follow-up',
        description: 'Post-sale customer satisfaction check.',
        url: '/sales-team/customer-follow-up',
        durations: [15, 30],
        isActive: true,
        bookingsToday: 4
      },
      {
        id: 'st-9',
        title: 'Competitive Analysis',
        description: 'Competitor research and strategy session.',
        url: '/sales-team/competitive-analysis',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 0
      },
      {
        id: 'st-10',
        title: 'Renewal Discussion',
        description: 'Contract renewal and upselling opportunity.',
        url: '/sales-team/renewal-discussion',
        durations: [30, 45],
        isActive: true,
        bookingsToday: 2
      }
    ]
  },
  {
    id: 'product-team',
    name: 'Product Team',
    avatar: 'PT',
    url: 'product-team',
    eventTypes: [
      {
        id: 'pt-1',
        title: 'Product Roadmap',
        description: 'Product strategy and roadmap planning.',
        url: '/product-team/product-roadmap',
        durations: [60, 90],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'pt-2',
        title: 'Feature Review',
        description: 'Product feature analysis and prioritization.',
        url: '/product-team/feature-review',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'pt-3',
        title: 'User Feedback Session',
        description: 'Customer feedback analysis and product improvements.',
        url: '/product-team/user-feedback-session',
        durations: [45],
        isActive: true,
        bookingsToday: 3
      },
      {
        id: 'pt-4',
        title: 'Product Launch',
        description: 'Product launch planning and coordination.',
        url: '/product-team/product-launch',
        durations: [60, 90],
        isActive: false,
        bookingsToday: 0
      },
      {
        id: 'pt-5',
        title: 'Market Analysis',
        description: 'Product market fit and competitive analysis.',
        url: '/product-team/market-analysis',
        durations: [60],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'pt-6',
        title: 'Beta Testing Review',
        description: 'Beta testing results and feedback review.',
        url: '/product-team/beta-testing-review',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'pt-7',
        title: 'Product Metrics',
        description: 'Product performance metrics and KPI review.',
        url: '/product-team/product-metrics',
        durations: [30, 45],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'pt-8',
        title: 'Stakeholder Alignment',
        description: 'Cross-functional stakeholder alignment meeting.',
        url: '/product-team/stakeholder-alignment',
        durations: [60],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'pt-9',
        title: 'Technical Feasibility',
        description: 'Technical feasibility assessment for new features.',
        url: '/product-team/technical-feasibility',
        durations: [45, 60],
        isActive: false,
        bookingsToday: 0
      },
      {
        id: 'pt-10',
        title: 'Product Vision',
        description: 'Long-term product vision and strategy session.',
        url: '/product-team/product-vision',
        durations: [90, 120],
        isActive: true,
        bookingsToday: 0
      }
    ]
  },
  {
    id: 'hr-team',
    name: 'HR Team',
    avatar: 'HR',
    url: 'hr-team',
    eventTypes: [
      {
        id: 'hr-1',
        title: 'Job Interview',
        description: 'Candidate interview and assessment session.',
        url: '/hr-team/job-interview',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 4
      },
      {
        id: 'hr-2',
        title: 'Performance Review',
        description: 'Employee performance evaluation meeting.',
        url: '/hr-team/performance-review',
        durations: [60],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'hr-3',
        title: 'Team Building',
        description: 'Team building and employee engagement activity.',
        url: '/hr-team/team-building',
        durations: [90, 120],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'hr-4',
        title: 'Policy Discussion',
        description: 'HR policy review and employee guidelines.',
        url: '/hr-team/policy-discussion',
        durations: [30, 45],
        isActive: false,
        bookingsToday: 0
      },
      {
        id: 'hr-5',
        title: 'Career Development',
        description: 'Employee career planning and development.',
        url: '/hr-team/career-development',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'hr-6',
        title: 'Conflict Resolution',
        description: 'Workplace conflict mediation and resolution.',
        url: '/hr-team/conflict-resolution',
        durations: [60],
        isActive: true,
        bookingsToday: 0
      },
      {
        id: 'hr-7',
        title: 'Benefits Review',
        description: 'Employee benefits and compensation review.',
        url: '/hr-team/benefits-review',
        durations: [30, 45],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'hr-8',
        title: 'Training Session',
        description: 'Employee training and skill development.',
        url: '/hr-team/training-session',
        durations: [60, 90],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'hr-9',
        title: 'Exit Interview',
        description: 'Employee departure interview and feedback.',
        url: '/hr-team/exit-interview',
        durations: [45],
        isActive: true,
        bookingsToday: 0
      },
      {
        id: 'hr-10',
        title: 'Recruitment Strategy',
        description: 'Hiring strategy and talent acquisition planning.',
        url: '/hr-team/recruitment-strategy',
        durations: [60, 90],
        isActive: false,
        bookingsToday: 0
      }
    ]
  },
  {
    id: 'finance-team',
    name: 'Finance Team',
    avatar: 'FT',
    url: 'finance-team',
    eventTypes: [
      {
        id: 'ft-1',
        title: 'Budget Planning',
        description: 'Annual budget planning and financial forecasting.',
        url: '/finance-team/budget-planning',
        durations: [60, 90],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'ft-2',
        title: 'Financial Review',
        description: 'Monthly financial performance review.',
        url: '/finance-team/financial-review',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'ft-3',
        title: 'Investment Analysis',
        description: 'Investment opportunity evaluation and analysis.',
        url: '/finance-team/investment-analysis',
        durations: [60],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'ft-4',
        title: 'Tax Consultation',
        description: 'Tax planning and compliance consultation.',
        url: '/finance-team/tax-consultation',
        durations: [45, 60],
        isActive: false,
        bookingsToday: 0
      },
      {
        id: 'ft-5',
        title: 'Audit Preparation',
        description: 'Financial audit preparation and documentation.',
        url: '/finance-team/audit-preparation',
        durations: [60, 90],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'ft-6',
        title: 'Cash Flow Analysis',
        description: 'Cash flow management and liquidity planning.',
        url: '/finance-team/cash-flow-analysis',
        durations: [45],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'ft-7',
        title: 'Cost Optimization',
        description: 'Cost reduction and efficiency improvement.',
        url: '/finance-team/cost-optimization',
        durations: [60],
        isActive: true,
        bookingsToday: 0
      },
      {
        id: 'ft-8',
        title: 'Risk Assessment',
        description: 'Financial risk evaluation and mitigation.',
        url: '/finance-team/risk-assessment',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'ft-9',
        title: 'Pricing Strategy',
        description: 'Product pricing and revenue optimization.',
        url: '/finance-team/pricing-strategy',
        durations: [45],
        isActive: false,
        bookingsToday: 0
      },
      {
        id: 'ft-10',
        title: 'Financial Reporting',
        description: 'Financial statements and reporting review.',
        url: '/finance-team/financial-reporting',
        durations: [30, 45],
        isActive: true,
        bookingsToday: 3
      }
    ]
  },
  {
    id: 'operations-team',
    name: 'Operations Team',
    avatar: 'OT',
    url: 'operations-team',
    eventTypes: [
      {
        id: 'ot-1',
        title: 'Process Optimization',
        description: 'Business process improvement and optimization.',
        url: '/operations-team/process-optimization',
        durations: [60, 90],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'ot-2',
        title: 'Vendor Meeting',
        description: 'Vendor relationship management and negotiations.',
        url: '/operations-team/vendor-meeting',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'ot-3',
        title: 'Quality Assurance',
        description: 'Quality control and assurance review.',
        url: '/operations-team/quality-assurance',
        durations: [45],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'ot-4',
        title: 'Supply Chain Review',
        description: 'Supply chain management and logistics planning.',
        url: '/operations-team/supply-chain-review',
        durations: [60],
        isActive: false,
        bookingsToday: 0
      },
      {
        id: 'ot-5',
        title: 'Facility Management',
        description: 'Office and facility operations management.',
        url: '/operations-team/facility-management',
        durations: [30, 45],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'ot-6',
        title: 'Technology Integration',
        description: 'System integration and operational technology.',
        url: '/operations-team/technology-integration',
        durations: [60, 90],
        isActive: true,
        bookingsToday: 0
      },
      {
        id: 'ot-7',
        title: 'Compliance Check',
        description: 'Regulatory compliance and audit preparation.',
        url: '/operations-team/compliance-check',
        durations: [45, 60],
        isActive: true,
        bookingsToday: 1
      },
      {
        id: 'ot-8',
        title: 'Inventory Planning',
        description: 'Inventory management and stock optimization.',
        url: '/operations-team/inventory-planning',
        durations: [45],
        isActive: true,
        bookingsToday: 2
      },
      {
        id: 'ot-9',
        title: 'Customer Service Review',
        description: 'Customer service operations and improvement.',
        url: '/operations-team/customer-service-review',
        durations: [60],
        isActive: false,
        bookingsToday: 0
      },
      {
        id: 'ot-10',
        title: 'Emergency Planning',
        description: 'Business continuity and emergency response planning.',
        url: '/operations-team/emergency-planning',
        durations: [90, 120],
        isActive: true,
        bookingsToday: 0
      }
    ]
  }
];
