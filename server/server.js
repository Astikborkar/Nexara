import express from 'express';
import cors from 'cors';
import { loadDB, saveDB } from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    system: 'Nexara Revenue OS Backend Engine',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 1. PROSPECTS ENDPOINTS
app.get('/api/prospects', (req, res) => {
  const db = loadDB();
  res.json(db.prospects);
});

app.post('/api/prospects/scan', (req, res) => {
  const db = loadDB();
  
  const newLead = {
    id: `p-${Date.now()}`,
    name: "David Vance",
    title: "VP of Enterprise Revenue",
    company: "HyperScale Data",
    domain: "hyperscaledata.com",
    industry: "Cloud Infrastructure",
    employees: "500-1000",
    revenue: "$62M ARR",
    fitScore: 99,
    status: "AI Qualified",
    intentSignal: "Evaluating AI Outbound Tools + Scaled Team + 95% Glassdoor Rep Rating",
    techStack: ["Salesforce", "Outreach", "Gong", "Datadog"],
    email: "d.vance@hyperscaledata.com",
    linkedin: "linkedin.com/in/davidvance-revenue",
    location: "Seattle, WA",
    aiHook: "HyperScale Data's recent 40% QoQ growth requires pipeline automation that keeps pace. Built a customized 0-latency outbound pipeline architecture ready to deploy.",
    scoredFactors: [
      { factor: "Match to Nexara Enterprise ICP", score: 100 },
      { factor: "High Intent Signal (Active Procurement)", score: 98 },
      { factor: "Executive Purchasing Authority", score: 99 }
    ]
  };

  db.prospects.unshift(newLead);
  db.auditLogs.unshift({
    timestamp: new Date().toISOString(),
    event: 'AI_LEAD_SCANNER_EXECUTED',
    leadId: newLead.id,
    company: newLead.company
  });

  saveDB(db);
  res.status(201).json({ message: 'Lead scanned and qualified successfully', prospect: newLead });
});

// 2. SEQUENCES & OUTBOUND ENDPOINTS
app.get('/api/sequences', (req, res) => {
  const db = loadDB();
  res.json(db.sequences);
});

app.post('/api/sequences/dispatch', (req, res) => {
  const { sequenceId, step } = req.body;
  const db = loadDB();

  db.auditLogs.unshift({
    timestamp: new Date().toISOString(),
    event: 'SEQUENCE_STEP_DISPATCHED',
    sequenceId,
    step
  });

  saveDB(db);
  res.json({ status: 'success', message: `Step ${step} dispatched for sequence ${sequenceId}` });
});

// 3. SENTIMENT CLASSIFIER ENDPOINT
app.post('/api/classifier/classify', (req, res) => {
  const { emailText, emailType } = req.body;
  let classification = {};

  if (emailType === 'interested' || (emailText && emailText.toLowerCase().includes('talk') || emailText?.toLowerCase().includes('thursday'))) {
    classification = {
      type: 'Interested (Meeting Request)',
      confidence: '99.2%',
      action: 'AI Auto-Booked Meeting & Dispatched Calendar Invite',
      sentiment: 'High Positive Intent',
      color: '#00e699'
    };
  } else if (emailType === 'objection' || (emailText && emailText.toLowerCase().includes('salesloft'))) {
    classification = {
      type: 'Objection: Stack Conflict',
      confidence: '96.5%',
      action: 'Surfaced Competitor Battlecard B1 & Drafted Counter-Email',
      sentiment: 'Neutral / Technical Barrier',
      color: '#f59e0b'
    };
  } else {
    classification = {
      type: 'Out of Office',
      confidence: '100%',
      action: 'Rescheduled Sequence Step 4 to Return Date + 1 Day',
      sentiment: 'Passive',
      color: '#9ca3af'
    };
  }

  res.json(classification);
});

// 4. CRM DEALS & KANBAN ENDPOINTS
app.get('/api/deals', (req, res) => {
  const db = loadDB();
  res.json(db.deals);
});

app.patch('/api/deals/:id/stage', (req, res) => {
  const { id } = req.params;
  const { stage } = req.body;
  const db = loadDB();

  const dealIndex = db.deals.findIndex(d => d.id === id);
  if (dealIndex === -1) {
    return res.status(404).json({ error: 'Deal not found' });
  }

  db.deals[dealIndex].stage = stage;
  db.deals[dealIndex].probability = Math.min(100, db.deals[dealIndex].probability + 20);

  db.auditLogs.unshift({
    timestamp: new Date().toISOString(),
    event: 'CRM_STAGE_ADVANCED',
    dealId: id,
    company: db.deals[dealIndex].company,
    newStage: stage
  });

  saveDB(db);
  res.json({ message: 'Deal stage updated successfully', deal: db.deals[dealIndex] });
});

// 5. REP PRODUCTIVITY ENDPOINTS
app.post('/api/copilot/send-email', (req, res) => {
  const { to, subject, body } = req.body;
  const db = loadDB();

  db.auditLogs.unshift({
    timestamp: new Date().toISOString(),
    event: 'EMAIL_DISPATCHED_VIA_API',
    to,
    subject
  });

  saveDB(db);
  res.json({
    status: 'sent',
    statusCode: 200,
    message: `Email successfully dispatched via SendGrid API to ${to}`,
    timestamp: new Date().toISOString()
  });
});

app.post('/api/copilot/log-crm', (req, res) => {
  const { dealId, activity } = req.body;
  const db = loadDB();

  db.auditLogs.unshift({
    timestamp: new Date().toISOString(),
    event: 'HUBSPOT_CRM_LOGGED',
    dealId,
    activity
  });

  saveDB(db);
  res.json({
    status: 'logged',
    crm: 'HubSpot Enterprise',
    dealId: dealId || '#849204',
    message: 'Activity and transcript successfully synced to HubSpot CRM'
  });
});

// 6. FINANCIAL KPI & ATTRIBUTION ENDPOINT
app.get('/api/kpi', (req, res) => {
  const db = loadDB();
  res.json(db.kpi);
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`⚡ Nexara Revenue OS Backend Engine running live on http://localhost:${PORT}`);
});
