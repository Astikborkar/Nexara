import React, { useState } from 'react';
import { mockBattlecards } from '../data/mockData';
import { BookOpen, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, Sparkles, MessageSquare, Zap, Search } from 'lucide-react';

export default function PlaybooksOptimization() {
  const [selectedCard, setSelectedCard] = useState(mockBattlecards[0]);
  const [customObjection, setCustomObjection] = useState('');
  const [generatedScript, setGeneratedScript] = useState(null);

  const handleGenerateScript = (objectionType) => {
    let scriptObj = {
      trigger: objectionType || customObjection,
      framework: 'Feel-Felt-Found + Leverage Proof',
      talkingPoint: 'I understand budget freeze is top of mind this quarter. That is actually why most of our customers reach out—because replacing 2 manual SDR requisitions with our automated AI engine reduces CAC by 62% in the first 90 days.',
      battlecardRef: 'Battlecard B-4: Budget Freeze Counter'
    };
    setGeneratedScript(scriptObj);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Banner */}
      <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <BookOpen size={20} color="#f472b6" />
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800' }}>
              Sales Playbooks & Conversion Optimization Engine
            </h2>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Real-time battlecard surfacing, objection matrix, and rep conversion optimization tactics.
          </p>
        </div>

        <div className="badge badge-purple" style={{ padding: '6px 12px' }}>
          <Zap size={12} /> Playbook Version 3.4
        </div>
      </div>

      {/* Main Grid: Left Competitor & Objection Battlecards, Right Interactive Objection Generator */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '24px' }}>
        {/* Left Column: Battlecards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} color="#f472b6" /> Active Battlecards & Competitor Matrix
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {mockBattlecards.map((b) => {
              const isSelected = selectedCard.id === b.id;
              return (
                <div
                  key={b.id}
                  onClick={() => setSelectedCard(b)}
                  className="glass-panel"
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-md)',
                    border: isSelected ? '1px solid #f472b6' : '1px solid var(--border-color)',
                    background: isSelected ? 'rgba(31, 41, 55, 0.9)' : 'var(--bg-card)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <span className="badge badge-purple" style={{ fontSize: '0.7rem' }}>{b.type}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Trigger: {b.triggerKeyword}</span>
                  </div>

                  <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
                    {b.topic}
                  </h4>

                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '12px' }}>
                    {b.counterStrategy}
                  </p>

                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#a5b4fc', textTransform: 'uppercase' }}>Key Talking Points:</span>
                    <ul style={{ fontSize: '0.8rem', color: '#e0e7ff', marginTop: '6px', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {b.talkingPoints.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Objection Response Generator */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="glass-panel-glow" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="#38bdf8" /> Tactical Objection Handling Script Engine
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Select a common sales objection to generate an immediate high-converting rep script.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              {['Budget Freeze / No Capital', 'Timing is Bad / Next Quarter', 'Relying on Inbound Only', 'Security / Data Compliance'].map((obj, i) => (
                <button
                  key={i}
                  onClick={() => handleGenerateScript(obj)}
                  className="btn btn-secondary btn-sm"
                >
                  {obj}
                </button>
              ))}
            </div>

            {generatedScript && (
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color-glow)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#6ee7b7' }}>
                    Trigger: {generatedScript.trigger}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{generatedScript.framework}</span>
                </div>

                <div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Recommended Rep Response Script:</span>
                  <p style={{ fontSize: '0.88rem', color: '#f3e8ff', fontStyle: 'italic', marginTop: '6px', lineHeight: '1.5' }}>
                    "{generatedScript.talkingPoint}"
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Funnel Optimization Analysis */}
          <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={18} color="#f59e0b" /> Funnel Bottleneck Diagnostic & Playbook
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong style={{ fontSize: '0.85rem', color: '#fff' }}>Meeting Booked → Technical Validation</strong>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Latency: 5.2 days • Dropoff: 14%</p>
                </div>
                <span className="badge badge-warning">Playbook #4 Applied</span>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong style={{ fontSize: '0.85rem', color: '#fff' }}>Technical Validation → Closed Won</strong>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Latency: 12.4 days • Win Rate: 68%</p>
                </div>
                <span className="badge badge-accent">Optimal Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
