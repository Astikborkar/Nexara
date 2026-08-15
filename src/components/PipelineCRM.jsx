import React, { useState } from 'react';
import { mockPipelineDeals } from '../data/mockData';
import { Kanban, DollarSign, ArrowRight, ShieldCheck, RefreshCw, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PipelineCRM() {
  const [deals, setDeals] = useState(mockPipelineDeals);
  const [selectedDeal, setSelectedDeal] = useState(mockPipelineDeals[0]);
  const [syncToast, setSyncToast] = useState('');

  const stages = [
    "Discovered",
    "AI Qualified",
    "Outbound Active",
    "Meeting Booked",
    "Technical Validation",
    "Closed Won"
  ];

  const handleAdvanceStage = (dealId) => {
    const updated = deals.map(d => {
      if (d.id === dealId) {
        const currentIndex = stages.indexOf(d.stage);
        if (currentIndex < stages.length - 1) {
          const newStage = stages[currentIndex + 1];
          if (newStage === 'Closed Won') {
            confetti({ particleCount: 80, spread: 70, origin: { y: 0.5 } });
          }
          return { ...d, stage: newStage, probability: Math.min(100, d.probability + 20) };
        }
      }
      return d;
    });

    setDeals(updated);
    const targetDeal = updated.find(d => d.id === dealId);
    setSelectedDeal(targetDeal);

    setSyncToast(`HubSpot & Salesforce Bi-Directional Sync Triggered for ${targetDeal.company} -> Stage: ${targetDeal.stage}`);
    setTimeout(() => setSyncToast(''), 3500);
  };

  const totalValue = deals.reduce((acc, d) => acc + d.value, 0);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Banner */}
      <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <Kanban size={20} color="#34d399" />
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800' }}>
              CRM Architecture & Automated Pipeline Kanban
            </h2>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Zero-latency bi-directional sync, automated stage transition triggers, and deal routing.
          </p>
        </div>

        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Active Pipeline Value</span>
          <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#6ee7b7' }}>${totalValue.toLocaleString()}</h3>
        </div>
      </div>

      {/* Sync Toast Alert */}
      {syncToast && (
        <div className="glass-panel-glow" style={{ padding: '12px 20px', borderRadius: 'var(--radius-sm)', background: 'rgba(16, 185, 129, 0.15)', borderColor: '#10b981', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <CheckCircle2 size={16} color="#6ee7b7" />
          <span style={{ fontSize: '0.85rem', color: '#6ee7b7', fontWeight: '600' }}>{syncToast}</span>
        </div>
      )}

      {/* Kanban Board Columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '12px',
        overflowX: 'auto',
        paddingBottom: '8px'
      }}>
        {stages.map((stage) => {
          const stageDeals = deals.filter(d => d.stage === stage);
          const stageTotal = stageDeals.reduce((sum, d) => sum + d.value, 0);

          return (
            <div
              key={stage}
              style={{
                background: 'rgba(15, 23, 42, 0.7)',
                borderRadius: 'var(--radius-md)',
                padding: '14px',
                border: '1px solid var(--border-color)',
                minWidth: '220px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              {/* Stage Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff' }}>{stage}</h4>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>${(stageTotal / 1000).toFixed(0)}k • {stageDeals.length} deals</span>
                </div>
              </div>

              {/* Deal Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {stageDeals.map((deal) => {
                  const isSelected = selectedDeal?.id === deal.id;
                  return (
                    <div
                      key={deal.id}
                      onClick={() => setSelectedDeal(deal)}
                      className="glass-panel"
                      style={{
                        padding: '12px',
                        borderRadius: 'var(--radius-sm)',
                        border: isSelected ? '1px solid #34d399' : '1px solid var(--border-color)',
                        background: isSelected ? 'rgba(31, 41, 55, 0.9)' : 'var(--bg-card)',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <strong style={{ fontSize: '0.88rem', color: '#fff' }}>{deal.company}</strong>
                        <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#6ee7b7' }}>${(deal.value / 1000).toFixed(0)}k</span>
                      </div>

                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                        {deal.contact}
                      </p>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                        <span>Win: {deal.probability}%</span>
                        {stage !== 'Closed Won' && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAdvanceStage(deal.id);
                            }}
                            style={{
                              background: 'rgba(52, 211, 153, 0.15)',
                              border: '1px solid rgba(52, 211, 153, 0.3)',
                              color: '#6ee7b7',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '0.7rem',
                              fontWeight: '600',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '2px'
                            }}
                          >
                            Advance <ArrowRight size={10} />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}

                {stageDeals.length === 0 && (
                  <div style={{ padding: '20px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-dim)', border: '1px dashed var(--border-color)', borderRadius: 'var(--radius-sm)' }}>
                    No active deals in stage
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Deal Architecture & Audit Details */}
      {selectedDeal && (
        <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={16} color="#34d399" /> CRM Automation & Stage Audit for {selectedDeal.company}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Assigned Owner</span>
              <p style={{ fontSize: '0.88rem', fontWeight: '700', color: '#fff', marginTop: '4px' }}>{selectedDeal.owner}</p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Next Automated Trigger</span>
              <p style={{ fontSize: '0.88rem', fontWeight: '700', color: '#38bdf8', marginTop: '4px' }}>{selectedDeal.nextAction}</p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Lead Attribution Source</span>
              <p style={{ fontSize: '0.88rem', fontWeight: '700', color: '#a5b4fc', marginTop: '4px' }}>{selectedDeal.source}</p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>CRM Sync Protocol</span>
              <p style={{ fontSize: '0.88rem', fontWeight: '700', color: '#6ee7b7', marginTop: '4px' }}>HubSpot Webhook: 200 OK</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
