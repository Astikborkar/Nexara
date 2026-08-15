import React from 'react';
import { Zap, ShieldCheck, Activity, Bell, Sparkles, Database } from 'lucide-react';

export default function Header({ activeTab, setActiveTab }) {
  return (
    <header style={{
      height: '76px',
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      position: 'sticky',
      top: 0,
      zIndex: 40,
      boxSizing: 'border-box'
    }}>
      {/* Left Title & Status */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'nowrap' }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #6366f1 0%, #0ea5e9 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
          flexShrink: 0
        }}>
          <Zap size={22} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: '1.2', margin: 0, padding: 0 }}>
              Nexara <span className="gradient-text">Revenue OS</span>
            </h1>
            <span className="badge badge-accent" style={{ fontSize: '0.7rem', padding: '3px 8px', whiteSpace: 'nowrap', flexShrink: 0 }}>
              <span className="pulse-dot"></span> Live Autonomous Engine
            </span>
          </div>
          <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', margin: '2px 0 0 0', padding: 0, lineHeight: '1.2', whiteSpace: 'nowrap' }}>
            AI Architecture + Outbound Automation + Pipeline Engineering
          </p>
        </div>
      </div>

      {/* Right Controls & Quick Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '6px 12px',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.8rem',
          border: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Activity size={14} color="#10b981" />
          <span>Throughput: <strong>14.2k events/hr</strong></span>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '6px 12px',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.8rem',
          border: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Database size={14} color="#818cf8" />
          <span>CRM Sync: <strong style={{ color: '#6ee7b7' }}>Healthy (0ms delay)</strong></span>
        </div>

        <button 
          onClick={() => setActiveTab('architecture')}
          className="btn btn-primary btn-sm"
        >
          <Sparkles size={14} /> View Architecture Leverage
        </button>
      </div>
    </header>
  );
}
