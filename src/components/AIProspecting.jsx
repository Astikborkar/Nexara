import React, { useState } from 'react';
import { mockProspects } from '../data/mockData';
import { Target, Search, Sparkles, Filter, CheckCircle2, ChevronRight, RefreshCw, Cpu, MessageSquare, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AIProspecting() {
  const [prospects, setProspects] = useState(mockProspects);
  const [selectedProspect, setSelectedProspect] = useState(mockProspects[0]);
  const [filterIntent, setFilterIntent] = useState('All');
  const [isScanning, setIsScanning] = useState(false);
  const [scanLog, setScanLog] = useState('');

  const handleRunScanner = () => {
    setIsScanning(true);
    setScanLog('Connected to 6sense & LinkedIn Intent Harvester...');
    
    setTimeout(() => {
      setScanLog('Extracting buying signals: 14 companies hiring VP Sales / SDRs...');
    }, 1000);

    setTimeout(() => {
      setScanLog('Executing LLM ICP Fit Model on scraped decision makers...');
    }, 2000);

    setTimeout(() => {
      const newProspect = {
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

      setProspects([newProspect, ...prospects]);
      setSelectedProspect(newProspect);
      setIsScanning(false);
      setScanLog('');

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 3200);
  };

  const filteredProspects = prospects.filter(p => {
    if (filterIntent === 'All') return true;
    if (filterIntent === 'Qualified') return p.status === 'AI Qualified';
    if (filterIntent === 'Active') return p.status === 'Outbound Active';
    return true;
  });

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <Target size={20} color="#818cf8" />
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800' }}>
              AI-Driven Prospecting & Qualification Engine
            </h2>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Real-time intent harvesting, company de-anonymization, and 15-parameter LLM scoring for high-leverage outbound.
          </p>
        </div>

        <button 
          onClick={handleRunScanner} 
          disabled={isScanning}
          className="btn btn-primary"
        >
          {isScanning ? <RefreshCw className="spin" size={16} /> : <Sparkles size={16} />}
          {isScanning ? 'Scanning Web & Signals...' : 'Run Autonomous Lead Scanner'}
        </button>
      </div>

      {/* Scanning status banner */}
      {isScanning && (
        <div className="glass-panel-glow" style={{ padding: '14px 20px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Cpu className="spin" size={18} color="#38bdf8" />
          <span style={{ fontSize: '0.88rem', color: '#7dd3fc', fontFamily: 'var(--font-mono)' }}>
            {scanLog}
          </span>
        </div>
      )}

      {/* Main Grid: Left Prospect List, Right Detailed AI Analysis */}
      <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '24px' }}>
        {/* Left Column: Prospect Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Filters */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
            {['All', 'Qualified', 'Active'].map(tab => (
              <button
                key={tab}
                onClick={() => setFilterIntent(tab)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  border: filterIntent === tab ? '1px solid #818cf8' : '1px solid var(--border-color)',
                  background: filterIntent === tab ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                  color: filterIntent === tab ? '#ffffff' : 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                {tab} Prospects
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '650px', overflowY: 'auto', paddingRight: '4px' }}>
            {filteredProspects.map(p => {
              const isSelected = selectedProspect.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedProspect(p)}
                  className="glass-panel"
                  style={{
                    padding: '16px',
                    cursor: 'pointer',
                    borderRadius: 'var(--radius-md)',
                    border: isSelected ? '1px solid var(--border-color-glow)' : '1px solid var(--border-color)',
                    background: isSelected ? 'rgba(31, 41, 55, 0.9)' : 'var(--bg-card)',
                    boxShadow: isSelected ? '0 0 15px rgba(99, 102, 241, 0.25)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div>
                      <h4 style={{ fontSize: '0.98rem', fontWeight: '700', color: '#fff' }}>{p.name}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{p.title} • {p.company}</p>
                    </div>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(56, 189, 248, 0.2) 100%)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '4px 8px',
                      fontSize: '0.85rem',
                      fontWeight: '800',
                      color: '#6ee7b7'
                    }}>
                      {p.fitScore} Fit
                    </div>
                  </div>

                  <div style={{ fontSize: '0.75rem', color: '#93c5fd', background: 'rgba(56, 189, 248, 0.1)', padding: '6px 10px', borderRadius: '4px', marginBottom: '10px' }}>
                    <Zap size={12} style={{ display: 'inline', marginRight: '4px' }} /> {p.intentSignal}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    <span>{p.employees} • {p.revenue}</span>
                    <span className="badge badge-primary">{p.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Deep AI Qualification Breakdown */}
        {selectedProspect && (
          <div className="glass-panel" style={{ padding: '28px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Prospect Top Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-color)', paddingBottom: '18px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{selectedProspect.name}</h3>
                  <span className="badge badge-accent"><CheckCircle2 size={12} /> AI Scored {selectedProspect.fitScore}/100</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {selectedProspect.title} at <strong>{selectedProspect.company}</strong> ({selectedProspect.industry})
                </p>
                <div style={{ display: 'flex', gap: '14px', marginTop: '8px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  <span>📍 {selectedProspect.location}</span>
                  <span>✉️ {selectedProspect.email}</span>
                  <span>🔗 {selectedProspect.linkedin}</span>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Annual Revenue</span>
                <strong style={{ fontSize: '1.1rem', color: '#facc15' }}>{selectedProspect.revenue}</strong>
              </div>
            </div>

            {/* AI Fit Factor Matrix */}
            <div>
              <h4 style={{ fontSize: '0.92rem', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px', color: '#a5b4fc' }}>
                <Sparkles size={16} /> Multi-Parameter LLM ICP Evaluation Breakdown
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedProspect.scoredFactors.map((f, idx) => (
                  <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>
                      <span>{f.factor}</span>
                      <span style={{ color: '#6ee7b7' }}>{f.score}% Score</span>
                    </div>
                    <div style={{ height: '6px', width: '100%', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${f.score}%`, background: 'linear-gradient(90deg, #6366f1, #10b981)', borderRadius: '3px' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Buying Intent */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Detected Tech Stack</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                  {selectedProspect.techStack.map((tech, i) => (
                    <span key={i} style={{ background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '3px 8px', borderRadius: '4px', fontSize: '0.75rem', color: '#c7d2fe' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Primary Intent Signal</span>
                <p style={{ fontSize: '0.85rem', color: '#38bdf8', marginTop: '6px', fontWeight: '600' }}>
                  {selectedProspect.intentSignal}
                </p>
              </div>
            </div>

            {/* AI Generated Hyper-Personalized Opening Hook */}
            <div style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)', border: '1px solid var(--border-color-glow)', padding: '18px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#818cf8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MessageSquare size={14} /> Autonomous AI Prospecting Personalization Hook
                </span>
                <span style={{ fontSize: '0.7rem', color: '#6ee7b7' }}>Ready for Sequence Dispatch</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#e0e7ff', fontStyle: 'italic', lineHeight: '1.5' }}>
                "{selectedProspect.aiHook}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
