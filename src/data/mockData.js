export const mockProspects = [
  {
    id: "p1",
    name: "Alex Thorne",
    title: "VP of Sales Operations",
    company: "CloudScale Logic",
    domain: "cloudscalelogic.io",
    industry: "Enterprise SaaS",
    employees: "250-500",
    revenue: "$45M ARR",
    fitScore: 98,
    status: "AI Qualified",
    intentSignal: "Hiring 12 SDRs + Switched from Salesforce to HubSpot",
    techStack: ["HubSpot", "Outreach", "Gong", "Clearbit"],
    email: "alex.thorne@cloudscalelogic.io",
    linkedin: "linkedin.com/in/alex-thorne-salesops",
    location: "Austin, TX",
    aiHook: "Noticed CloudScale is expanding the SDR team by 12 reps this quarter while scaling outbound pipeline. Built an automated qualification workflow that quadruples SDR throughput without adding headcount.",
    scoredFactors: [
      { factor: "ICP Fit (Tech & Team Size)", score: 99 },
      { factor: "High Intent Signal (Hiring SDRs)", score: 97 },
      { factor: "Decision Maker Authority", score: 98 }
    ]
  },
  {
    id: "p2",
    name: "Samantha Reed",
    title: "Chief Revenue Officer",
    company: "DataVanguard Inc",
    domain: "datavanguard.com",
    industry: "Cybersecurity & Data Infra",
    employees: "500-1000",
    revenue: "$85M ARR",
    fitScore: 95,
    status: "Outbound Active",
    intentSignal: "Series C Raised $60M + Low Pipeline Velocity Alert",
    techStack: ["Salesforce Enterprise", "Apollo", "Chili Piper", "Chorus"],
    email: "s.reed@datavanguard.com",
    linkedin: "linkedin.com/in/samanthareed-cro",
    location: "San Francisco, CA",
    aiHook: "Congrats on the $60M Series C! Noticed your SDR-to-AE handoff latency is high. Implemented an autonomous AI scheduler & lead router for DataVanguard-scale security tech.",
    scoredFactors: [
      { factor: "Growth Capital Available", score: 100 },
      { factor: "Pipeline Latency Pain Point", score: 94 },
      { factor: "C-Level Executive Access", score: 92 }
    ]
  },
  {
    id: "p3",
    name: "Marcus Vance",
    title: "Head of Growth & Outbound",
    company: "ApexFlow Technologies",
    domain: "apexflow.ai",
    industry: "AI & Workflow Automation",
    employees: "100-250",
    revenue: "$18M ARR",
    fitScore: 91,
    status: "Meeting Booked",
    intentSignal: "Posted on LinkedIn seeking AI SDR tools + High email bounce rate",
    techStack: ["Close CRM", "Instantly", "Clay", "OpenAI API"],
    email: "marcus@apexflow.ai",
    linkedin: "linkedin.com/in/marcusvance-growth",
    location: "New York, NY",
    aiHook: "Saw your post on LinkedIn regarding Clay + Instantly rate limits. We deployed a unified AI pipeline router that handles 50k personalized touches daily with 99.4% deliverability.",
    scoredFactors: [
      { factor: "Active Search for Solutions", score: 96 },
      { factor: "Tech Stack Compatibility", score: 93 },
      { factor: "Budget Allocation Speed", score: 85 }
    ]
  },
  {
    id: "p4",
    name: "Elena Rostova",
    title: "Director of Revenue Engineering",
    company: "FinVertex Solutions",
    domain: "finvertex.com",
    industry: "Fintech & Banking APIs",
    employees: "1000+",
    revenue: "$140M ARR",
    fitScore: 89,
    status: "AI Qualified",
    intentSignal: "Evaluating Revenue Attribution & Outbound AI tools",
    techStack: ["Salesforce", "Marketo", "Gong", "6sense"],
    email: "elena.r@finvertex.com",
    linkedin: "linkedin.com/in/elena-rostova-revops",
    location: "Boston, MA",
    aiHook: "FinVertex's multi-touch attribution across enterprise deal cycles can be simplified. Our architecture seamlessly maps 6sense intent to automated AI sequences.",
    scoredFactors: [
      { factor: "Enterprise Scale", score: 95 },
      { factor: "Complex Tech Stack Fit", score: 88 },
      { factor: "Evaluation Stage", score: 84 }
    ]
  }
];

export const mockSequences = [
  {
    id: "seq-1",
    name: "Enterprise VP Sales Ops - Autonomous AI Persona",
    targetTier: "Tier 1 ($25M+ ARR)",
    channel: "Omnichannel (Email + LinkedIn + AI Voice)",
    totalEnrolled: 1420,
    openRate: "68.4%",
    replyRate: "18.2%",
    meetingRate: "6.8%",
    steps: [
      { step: 1, type: "Email", delay: "Day 1", name: "AI Personalised Hook (Intent Trigger)", active: true },
      { step: 2, type: "LinkedIn", delay: "Day 2", name: "Profile View + Connection Request with Custom Note", active: true },
      { step: 3, type: "Email", delay: "Day 4", name: "Value Proof Case Study (Dynamic Architecture)", active: true },
      { step: 4, type: "AI Call", delay: "Day 7", name: "Interactive AI Voice Pre-qualification (Opt-in)", active: true },
      { step: 5, type: "Email", delay: "Day 10", name: "Executive ROI & Frictionless Demo Link", active: true }
    ]
  },
  {
    id: "seq-2",
    name: "CRO Series B/C Scalers - Pipeline Speed Play",
    targetTier: "Tier 2 ($10M-$50M ARR)",
    channel: "Hyper-Personalized Email & Video",
    totalEnrolled: 890,
    openRate: "74.1%",
    replyRate: "22.5%",
    meetingRate: "9.1%",
    steps: [
      { step: 1, type: "Email", delay: "Day 1", name: "Pipeline Velocity Audit Offer", active: true },
      { step: 2, type: "Email", delay: "Day 3", name: "Interactive Loom Architecture Teaser", active: true },
      { step: 3, type: "LinkedIn", delay: "Day 6", name: "Voice Note on Recent Post", active: true },
      { step: 4, type: "Email", delay: "Day 9", name: "Final Breakaway: Benchmark Audit", active: true }
    ]
  }
];

export const mockPipelineDeals = [
  {
    id: "d1",
    company: "CloudScale Logic",
    contact: "Alex Thorne",
    value: 96000,
    stage: "Technical Validation",
    owner: "Nexara AI Engine / Rep Sarah",
    probability: 85,
    nextAction: "Automated Sandbox Provisioning & AI Security Audit",
    age: "14 days",
    source: "AI Outbound Sequence #1"
  },
  {
    id: "d2",
    company: "DataVanguard Inc",
    contact: "Samantha Reed",
    value: 145000,
    stage: "Meeting Booked",
    owner: "Nexara AI Engine / Rep David",
    probability: 60,
    nextAction: "Exec Discovery Brief Auto-generated for Rep David",
    age: "4 days",
    source: "LinkedIn Intent Signal Scraper"
  },
  {
    id: "d3",
    company: "ApexFlow Technologies",
    contact: "Marcus Vance",
    value: 72000,
    stage: "Outbound Active",
    owner: "Autonomous Agent Alpha",
    probability: 40,
    nextAction: "Step 3 Follow-up Email (Auto-scheduled 2:15 PM)",
    age: "2 days",
    source: "Clay + OpenAI Orchestration"
  },
  {
    id: "d4",
    company: "FinVertex Solutions",
    contact: "Elena Rostova",
    value: 210000,
    stage: "Closed Won",
    owner: "Rep Sarah",
    probability: 100,
    nextAction: "Automated Onboarding Sequence Triggered in HubSpot",
    age: "28 days",
    source: "Attribution Model: Multi-Touch Outbound"
  },
  {
    id: "d5",
    company: "Nexus Dynamics",
    contact: "Jordan Miller",
    value: 120000,
    stage: "AI Qualified",
    owner: "Autonomous Agent Beta",
    probability: 30,
    nextAction: "Sending Custom ROI Calculator Web Link",
    age: "1 day",
    source: "Website Visitor De-anonymizer API"
  }
];

export const mockKpiData = {
  mrr: "$485,000",
  mrrGrowth: "+34.2%",
  pipelineGenerated: "$3,450,000",
  cacPaybackMonths: "4.2 Mos",
  salesVelocity: "$24,500 / day",
  outboundConversionRate: "4.8%",
  repTimeSaved: "18.5 hrs/rep/wk",
  attributionBreakdown: [
    { channel: "AI Outbound Email", percentage: 44, value: "$1.52M" },
    { channel: "LinkedIn Social Intent", percentage: 28, value: "$966K" },
    { channel: "De-anonymized Web Visitors", percentage: 16, value: "$552K" },
    { channel: "AI Voice & Inbound Warm Lead", percentage: 12, value: "$414K" }
  ],
  monthlyTrend: [
    { month: "Jan", pipeline: 1200, closed: 180, outboundTouches: 12000 },
    { month: "Feb", pipeline: 1650, closed: 240, outboundTouches: 18500 },
    { month: "Mar", pipeline: 2100, closed: 310, outboundTouches: 24000 },
    { month: "Apr", pipeline: 2750, closed: 420, outboundTouches: 31000 },
    { month: "May", pipeline: 3150, closed: 510, outboundTouches: 39000 },
    { month: "Jun", pipeline: 3450, closed: 620, outboundTouches: 48000 }
  ]
};

export const mockBattlecards = [
  {
    id: "b1",
    topic: "Overcoming 'We Already Have Salesforce + Salesloft'",
    type: "Objection Battlecard",
    triggerKeyword: "already use salesloft / existing stack",
    counterStrategy: "Focus on AI-layer leverage, not rip-and-replace. Nexara acts as the Autonomous Intelligence & Orchestration layer above legacy CRMs, doing 80% of the manual work before a rep opens Salesforce.",
    talkingPoints: [
      "We integrate natively into Salesforce/HubSpot via bi-directional webhooks.",
      "Legacy SDR tools require reps to click & write; Nexara generates, enriches, and scores autonomously.",
      "Result: Reps spend 85% of time on live closing calls rather than data entry."
    ]
  },
  {
    id: "b2",
    topic: "Nexara vs Generic AI SDR Tools (e.g. Regie, Artisan)",
    type: "Competitor Matrix",
    triggerKeyword: "how is this different from generic AI SDRs",
    counterStrategy: "Highlight end-to-end Revenue Infrastructure Ownership. Nexara doesn't just send emails—it manages complete pipeline architecture, rep productivity copilot, multi-touch attribution, and custom playbooks.",
    talkingPoints: [
      "Deep customization of ICP fit scoring (custom ML models, not standard prompts).",
      "Full CRM schema alignment and real-time bidirectional sync.",
      "In-call real-time rep copilot and automated deal velocity alerts."
    ]
  }
];

export const mockArchitectureNodes = [
  {
    id: "node-1",
    name: "Multi-Source Intent Harvester",
    type: "Ingestion Engine",
    description: "Monitors 6sense, LinkedIn hiring feeds, GitHub commits, and clearbit enrichment for real-time buying signals."
  },
  {
    id: "node-2",
    name: "LLM Qualification & Scoring Matrix",
    type: "AI Core",
    description: "Evaluates prospects against 15+ custom parameters. Assigns 0-100 fit score with natural language reasoning."
  },
  {
    id: "node-3",
    name: "Dynamic Outbound Orchestrator",
    type: "Sequencing",
    description: "Executes omnichannel touchpoints across Email, LinkedIn, and AI Voice with dynamic spintax & personalized hooks."
  },
  {
    id: "node-4",
    name: "CRM & Vector Database Sync",
    type: "Data Architecture",
    description: "Bi-directional sync with HubSpot/Salesforce and Pinecone vector store for rep context retrieval."
  },
  {
    id: "node-5",
    name: "Rep Copilot & Meeting Briefing Engine",
    type: "Productivity System",
    description: "Generates 1-page executive briefs prior to meetings, logs transcript summaries, and updates deal stage automatically."
  },
  {
    id: "node-6",
    name: "Real-time Attribution & KPI Engine",
    type: "Analytics & Governance",
    description: "Tracks multi-touch revenue attribution, CAC payback period, and rep pipeline velocity metrics."
  }
];
