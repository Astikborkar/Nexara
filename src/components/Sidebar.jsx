import React from 'react';
import { 
  LayoutDashboard, 
  Target, 
  Send, 
  Kanban, 
  Bot, 
  TrendingUp, 
  BookOpen, 
  Cpu, 
  ShieldCheck
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'overview', label: 'Executive Summary', icon: LayoutDashboard, badge: 'Pillars' },
    { id: 'prospecting', label: 'AI Prospecting & Qualification', icon: Target, badge: '98% Fit' },
    { id: 'outbound', label: 'Automated Outbound & Follow-Up', icon: Send, badge: 'Multi-touch' },
    { id: 'pipeline', label: 'CRM & Pipeline Architecture', icon: Kanban, badge: '$3.45M' },
    { id: 'productivity', label: 'Rep Productivity & AI Copilot', icon: Bot, badge: '+18.5h/wk' },
    { id: 'kpi', label: 'KPI Dashboards & Attribution', icon: TrendingUp, badge: 'Live ROI' },
    { id: 'playbooks', label: 'Playbooks & Conversion Opt.', icon: BookOpen, badge: 'Battlecards' },
    { id: 'architecture', label: 'Revenue Infrastructure Leverage', icon: Cpu, badge: 'Blueprint' }
  ];

  return (
    <aside style={{
      width: '280px',
      background: 'rgba(5, 8, 7, 0.98)',
      borderRight: '1px solid rgba(0, 230, 153, 0.15)',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      gap: '8px'
    }}>
      <div style={{ padding: '0 12px 16px 12px' }}>
        <p style={{
          fontSize: '0.68rem',
          fontWeight: '700',
          color: '#00e699',
          textTransform: 'uppercase',
          letterSpacing: '1.5px'
        }}>
          VERIFIED SYSTEM NAVIGATION
        </p>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '11px 14px',
                borderRadius: 'var(--radius-md)',
                background: isActive ? 'linear-gradient(135deg, rgba(0, 230, 153, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)' : 'transparent',
                border: isActive ? '1px solid rgba(0, 230, 153, 0.4)' : '1px solid transparent',
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-main)',
                fontSize: '0.88rem',
                fontWeight: isActive ? '700' : '500'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(0, 230, 153, 0.05)';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-muted)';
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Icon size={18} color={isActive ? '#00e699' : '#64748b'} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span style={{
                  fontSize: '0.68rem',
                  padding: '2px 7px',
                  borderRadius: '10px',
                  background: isActive ? 'rgba(0, 230, 153, 0.3)' : 'rgba(255, 255, 255, 0.06)',
                  color: isActive ? '#33ffbb' : 'var(--text-dim)',
                  fontWeight: '600'
                }}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Profile / Callout Box */}
      <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
        <div className="glass-panel" style={{ padding: '16px', borderRadius: 'var(--radius-md)', borderColor: 'rgba(0, 230, 153, 0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <ShieldCheck size={16} color="#00e699" />
            <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#00e699', letterSpacing: '0.5px' }}>
              RESEARCH ACCESS PORTAL
            </span>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
            Nexara Labs USA platform engineered for verified revenue infrastructure leverage.
          </p>
        </div>
      </div>
    </aside>
  );
}
