import React from 'react';
import { 
  Zap, 
  Target, 
  Send, 
  Kanban, 
  Bot, 
  TrendingUp, 
  BookOpen, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function Overview({ setActiveTab }) {
  const pillars = [
    {
      id: 'prospecting',
      title: '1. AI-Driven Prospecting & Qualification',
      desc: 'Autonomous lead scraping, buying intent monitoring (hiring alerts, tech stack shifts, funding), and 0-100 ML fit scoring before touchpoint.',
      metric: '98% ICP Accuracy',
      icon: Target,
      color: '#818cf8'
    },
    {
      id: 'outbound',
      title: '2. Automated Outbound & Follow-Up',
      desc: 'Omnichannel dynamic cadence (Email, LinkedIn, Voice) with LLM hyper-personalization based on recent prospect activity and auto-reply classification.',
      metric: '18.2% Reply Rate',
      icon: Send,
      color: '#38bdf8'
    },
    {
      id: 'pipeline',
      title: '3. CRM & Pipeline Architecture',
      desc: 'Clean bi-directional sync (HubSpot/Salesforce), automated deal routing, custom field mapping, and zero-latency stage progression triggers.',
      metric: '$3.45M Pipeline',
      icon: Kanban,
      color: '#34d399'
    },
    {
      id: 'productivity',
      title: '4. Rep Productivity Systems',
      desc: 'AI SDR Copilot supplying automated pre-meeting briefs, real-time call objection prompts, transcript auto-summaries, and follow-up email drafts.',
      metric: '+18.5 hrs saved/rep/wk',
      icon: Bot,
      color: '#c084fc'
    },
    {
      id: 'kpi',
      title: '5. KPI Dashboards & Attribution',
      desc: 'Real-time multi-touch revenue attribution, CAC payback velocity, channel ROI metrics, and executive funnel analytics.',
      metric: '4.2 Mo CAC Payback',
      icon: TrendingUp,
      color: '#facc15'
    },
    {
      id: 'playbooks',
      title: '6. Sales Playbooks & Conversion Optimization',
      desc: 'Interactive competitor battlecards, copy A/B variant simulator, and real-time objection handling engine for rep empowerment.',
      metric: '+34% Win Rate',
      icon: BookOpen,
      color: '#f472b6'
    }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Top Banner Hero */}
      <div className="glass-panel-glow" style={{ padding: '36px', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '820px' }}>
          <span className="badge badge-primary" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} /> Revenue Infrastructure Leverage Blueprint
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '14px' }}>
            Creating Leverage, <span className="gradient-text">Not Just Managing Activity</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
            Welcome to the interactive demonstration of Nexara's revenue engine architecture. 
            This system integrates AI-driven lead discovery, automated omnichannel outbound, zero-friction CRM pipelines, 
            and rep productivity copilots to multiply sales output exponentially.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button onClick={() => setActiveTab('architecture')} className="btn btn-primary">
              <Cpu size={16} /> Explore System Architecture Blueprint <ArrowRight size={16} />
            </button>
            <button onClick={() => setActiveTab('prospecting')} className="btn btn-secondary">
              <Target size={16} /> Live AI Prospecting Demo
            </button>
          </div>
        </div>
      </div>

      {/* 6 Core Operating Pillars Grid */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>
            Nexara Revenue Infrastructure Capability Matrix
          </h3>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Select any module to inspect live workflows & logic
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '20px'
        }}>
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className="glass-panel"
                style={{
                  padding: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: `rgba(${parseInt(pillar.color.slice(1,3),16)}, ${parseInt(pillar.color.slice(3,5),16)}, ${parseInt(pillar.color.slice(5,7),16)}, 0.15)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: pillar.color,
                      border: `1px solid ${pillar.color}40`
                    }}>
                      <Icon size={22} />
                    </div>
                    <span className="badge badge-accent">{pillar.metric}</span>
                  </div>

                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '8px', color: '#fff' }}>
                    {pillar.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    {pillar.desc}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  color: pillar.color
                }}>
                  Launch Module Demo <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Strategic Pillars Highlight */}
      <div className="glass-panel" style={{ padding: '28px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck color="#10b981" size={20} /> Revenue Leverage Principles for Nexara Labs
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', fontWeight: '700', color: '#a5b4fc' }}>
              <CheckCircle2 size={16} /> Autonomous Data Ingestion
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              No manual lead list purchasing or manual rep copy-pasting. Systems scrape, de-anonymize, and enrich signals automatically.
            </p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', fontWeight: '700', color: '#6ee7b7' }}>
              <CheckCircle2 size={16} /> Intelligent SDR Copilot
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Reps focus exclusively on closing conversations while AI handles research, objection battlecard surfacing, and post-call follow-ups.
            </p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', fontWeight: '700', color: '#7dd3fc' }}>
              <CheckCircle2 size={16} /> Full Pipeline Governance
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Deterministic CRM triggers ensure zero dropped leads, exact multi-touch attribution, and real-time visibility into ARR velocity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
