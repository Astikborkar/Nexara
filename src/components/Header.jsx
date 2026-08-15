import React from 'react';
import { ShieldCheck, Activity, Database, Sparkles } from 'lucide-react';

export default function Header({ activeTab, setActiveTab }) {
  return (
    <header style={{
      height: '76px',
      background: 'rgba(5, 8, 7, 0.95)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(0, 230, 153, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      position: 'sticky',
      top: 0,
      zIndex: 40,
      boxSizing: 'border-box'
    }}>
      {/* Left Title & Nexara Labs USA Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'nowrap' }}>
        <div style={{
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: 'drop-shadow(0 0 8px rgba(0, 230, 153, 0.3))'
        }}>
          🇺🇸
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '0.04em', lineHeight: '1.2', margin: 0, color: '#ffffff' }}>
              NEXARA <span style={{ fontWeight: '300', color: '#94a3b8' }}>LABS USA</span>
            </h1>
            <span className="badge badge-accent" style={{ fontSize: '0.68rem', padding: '3px 9px', whiteSpace: 'nowrap', flexShrink: 0 }}>
              <span className="pulse-dot"></span> Verified Revenue Engine
            </span>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#00e699', margin: '2px 0 0 0', padding: 0, lineHeight: '1.2', whiteSpace: 'nowrap', letterSpacing: '0.5px' }}>
            Autonomous Outbound Architecture & Pipeline Infrastructure
          </p>
        </div>
      </div>

      {/* Right Controls & Quick Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{
          background: 'rgba(0, 230, 153, 0.06)',
          padding: '6px 12px',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.8rem',
          border: '1px solid rgba(0, 230, 153, 0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Activity size={14} color="#00e699" />
          <span>Throughput: <strong style={{ color: '#00e699' }}>14.2k events/hr</strong></span>
        </div>

        <div style={{
          background: 'rgba(0, 230, 153, 0.06)',
          padding: '6px 12px',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.8rem',
          border: '1px solid rgba(0, 230, 153, 0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Database size={14} color="#00e699" />
          <span>CRM Sync: <strong style={{ color: '#33ffbb' }}>Healthy (0ms delay)</strong></span>
        </div>

        <button 
          onClick={() => setActiveTab('architecture')}
          className="btn btn-primary btn-sm"
        >
          <Sparkles size={14} /> View Infrastructure Blueprint
        </button>
      </div>
    </header>
  );
}
