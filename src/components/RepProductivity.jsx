import React, { useState } from 'react';
import { sendEmailApi, logCrmApi } from '../api/client';
import { Bot, Sparkles, FileText, CheckCircle2, PhoneCall, Zap, Play, RefreshCw, Database, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RepProductivity() {
  const [activeTab, setActiveTab] = useState('brief');
  const [activeCallSim, setActiveCallSim] = useState(false);
  const [callTranscript, setCallTranscript] = useState([
    { speaker: 'Prospect (Alex)', text: 'We like the automated outbound idea, but our security team is strict about SOC2 and storing CRM data in third-party LLMs.' }
  ]);

  // Action states for the 2 buttons
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [isLoggingCrm, setIsLoggingCrm] = useState(false);
  const [crmLogged, setCrmLogged] = useState(false);
  const [actionToast, setActionToast] = useState('');

  const handleSimulateCallObjection = () => {
    setActiveCallSim(true);
    setTimeout(() => {
      setCallTranscript(prev => [
        ...prev,
        { 
          speaker: 'AI Copilot Prompt (Real-Time)', 
          text: '💡 SURFACED BATTLECARD B1: Highlight zero-data-retention enterprise LLM gateway + SOC2 Type II compliance. Prompt rep: "We run our own private LLM proxy on AWS GovCloud with zero training on your CRM data."', 
          isAi: true 
        }
      ]);
    }, 1200);
  };

  const handleApproveSendEmail = async () => {
    setIsSendingEmail(true);
    setActionToast('Connecting to Express API & Dispatching Email via SendGrid...');

    const res = await sendEmailApi(
      'alex.thorne@cloudscalelogic.io',
      'Nexara Architecture & SOC2 Security Overview for CloudScale Logic',
      'Great speaking today...'
    );

    setIsSendingEmail(false);
    setEmailSent(true);
    setActionToast(res?.message || '✅ Follow-up Email Successfully Sent to Alex Thorne (VP Sales Ops)!');
    
    confetti({
      particleCount: 70,
      spread: 65,
      origin: { y: 0.6 }
    });
  };

  const handleLogToHubSpot = async () => {
    setIsLoggingCrm(true);
    setActionToast('Executing HubSpot Bi-Directional Webhook Sync via API...');

    const res = await logCrmApi('d1', 'Post-Call Followup Brief Logged');

    setIsLoggingCrm(false);
    setCrmLogged(true);
    setActionToast(res?.message || '✅ Meeting Brief & Email Transcript Logged to HubSpot CRM (Deal ID #849204)!');
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Banner */}
      <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <Bot size={20} color="#00e699" />
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800' }}>
              Rep Productivity Systems & AI SDR Copilot
            </h2>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Empowering reps with automated pre-meeting briefs, real-time in-call objection assistance, and instant CRM logging.
          </p>
        </div>

        <div className="badge badge-accent" style={{ padding: '8px 14px', fontSize: '0.82rem' }}>
          ⚡ Saves 18.5 Hours per Rep / Week
        </div>
      </div>

      {/* Toast Notification Alert */}
      {actionToast && (
        <div className="glass-panel-glow" style={{ padding: '14px 20px', borderRadius: 'var(--radius-sm)', background: 'rgba(0, 230, 153, 0.15)', borderColor: '#00e699', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={16} color="#00e699" />
          <span style={{ fontSize: '0.88rem', color: '#33ffbb', fontWeight: '600' }}>{actionToast}</span>
        </div>
      )}

      {/* Main Grid: Left Navigation Sub-tabs, Right Interactive Workspace */}
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '24px' }}>
        {/* Left Sub-tabs */}
        <div className="glass-panel" style={{ padding: '16px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '8px', height: 'fit-content' }}>
          <button
            onClick={() => setActiveTab('brief')}
            style={{
              padding: '12px 14px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.88rem',
              fontWeight: '700',
              border: activeTab === 'brief' ? '1px solid #00e699' : '1px solid transparent',
              background: activeTab === 'brief' ? 'rgba(0, 230, 153, 0.15)' : 'transparent',
              color: activeTab === 'brief' ? '#ffffff' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textAlign: 'left'
            }}
          >
            <FileText size={16} color="#00e699" /> Pre-Meeting Briefs
          </button>

          <button
            onClick={() => setActiveTab('copilot')}
            style={{
              padding: '12px 14px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.88rem',
              fontWeight: '700',
              border: activeTab === 'copilot' ? '1px solid #00e699' : '1px solid transparent',
              background: activeTab === 'copilot' ? 'rgba(0, 230, 153, 0.15)' : 'transparent',
              color: activeTab === 'copilot' ? '#ffffff' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textAlign: 'left'
            }}
          >
            <PhoneCall size={16} color="#38bdf8" /> Real-Time Call Copilot
          </button>

          <button
            onClick={() => setActiveTab('summary')}
            style={{
              padding: '12px 14px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.88rem',
              fontWeight: '700',
              border: activeTab === 'summary' ? '1px solid #00e699' : '1px solid transparent',
              background: activeTab === 'summary' ? 'rgba(0, 230, 153, 0.15)' : 'transparent',
              color: activeTab === 'summary' ? '#ffffff' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textAlign: 'left'
            }}
          >
            <Sparkles size={16} color="#00e699" /> Auto-Followup Generator
          </button>
        </div>

        {/* Right Tab Content */}
        <div>
          {/* Sub-tab 1: Executive Brief */}
          {activeTab === 'brief' && (
            <div className="glass-panel" style={{ padding: '28px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>
                    Automated Executive Brief: CloudScale Logic
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Generated 5 mins before meeting with Alex Thorne (VP Sales Ops)
                  </p>
                </div>
                <span className="badge badge-accent">SOC2 & Security Compliant</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: '700', color: '#00e699', marginBottom: '8px' }}>
                    1. Account & Tech Context
                  </h4>
                  <ul style={{ fontSize: '0.82rem', color: 'var(--text-muted)', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>$45M ARR Enterprise SaaS firm growing 35% YoY.</li>
                    <li>Switched from Salesforce to HubSpot 3 months ago.</li>
                    <li>Active stack: Outreach, Gong, Clearbit.</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: '700', color: '#33ffbb', marginBottom: '8px' }}>
                    2. Recommended Call Agenda
                  </h4>
                  <ul style={{ fontSize: '0.82rem', color: 'var(--text-muted)', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Confirm SDR team expansion bottleneck (12 new reps).</li>
                    <li>Demo zero-latency outbound automation pipeline.</li>
                    <li>Review CAC payback target (&lt; 5 months).</li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, rgba(0, 230, 153, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)', border: '1px solid rgba(0, 230, 153, 0.3)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: '700', color: '#00e699', marginBottom: '6px' }}>
                  🎯 Predicted Key Concern / Landmine
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                  Alex recently posted on LinkedIn about CRM data hygiene during migrations. Be prepared to show how Nexara validates email syntax & dedupes records before syncing back to HubSpot.
                </p>
              </div>
            </div>
          )}

          {/* Sub-tab 2: Real-Time Call Copilot */}
          {activeTab === 'copilot' && (
            <div className="glass-panel" style={{ padding: '28px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <PhoneCall size={18} color="#00e699" /> Live Call Voice Assistant & Objection Handler
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Listens to transcript in real-time and pops instant battlecard talking points onto the rep's screen.
                  </p>
                </div>

                <button onClick={handleSimulateCallObjection} className="btn btn-primary btn-sm">
                  <Play size={14} /> Simulate Prospect Objection
                </button>
              </div>

              {/* Transcript Stream Box */}
              <div style={{ background: 'rgba(11, 18, 15, 0.95)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '400px', overflowY: 'auto' }}>
                {callTranscript.map((t, idx) => (
                  <div 
                    key={idx} 
                    style={{
                      background: t.isAi ? 'rgba(0, 230, 153, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                      border: t.isAi ? '1px solid rgba(0, 230, 153, 0.4)' : '1px solid var(--border-color)',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', color: t.isAi ? '#00e699' : '#38bdf8', display: 'block', marginBottom: '4px' }}>
                      {t.speaker}
                    </span>
                    <p style={{ fontSize: '0.85rem', color: t.isAi ? '#33ffbb' : '#e2e8f0', lineHeight: '1.5' }}>
                      {t.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub-tab 3: Auto-Followup Generator */}
          {activeTab === 'summary' && (
            <div className="glass-panel" style={{ padding: '28px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={18} color="#00e699" /> Autonomous 1-Click Post-Call Follow-up Draft
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Synthesizes call transcript, extracts action items, and drafts follow-up email ready for rep approval.
                </p>
              </div>

              <div style={{ background: 'rgba(11, 18, 15, 0.9)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#e2e8f0', lineHeight: '1.6' }}>
                <p><strong>Subject:</strong> Nexara Architecture & SOC2 Security Overview for CloudScale Logic</p>
                <br />
                <p>Hi Alex,</p>
                <br />
                <p>Great speaking today. Loved learning about your plan to expand to 12 SDRs while maintaining tight outbound attribution in HubSpot.</p>
                <br />
                <p>As discussed, here are the 2 key resources you requested:</p>
                <p>1. <strong>Nexara Security Brief & SOC2 Type II Certification</strong> (Attached PDF)</p>
                <p>2. <strong>HubSpot Bi-Directional Webhook Architecture Diagram</strong></p>
                <br />
                <p>Looking forward to our technical sandbox review next Tuesday at 10 AM CT.</p>
                <br />
                <p>Best regards,</p>
                <p>David | Nexara Revenue Team</p>
              </div>

              {/* Action Buttons Row */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={handleApproveSendEmail}
                  disabled={isSendingEmail}
                  className="btn btn-primary"
                  style={{
                    opacity: emailSent ? 0.9 : 1
                  }}
                >
                  {isSendingEmail ? (
                    <RefreshCw className="spin" size={16} />
                  ) : emailSent ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    <Send size={16} />
                  )}
                  {isSendingEmail ? 'Dispatching Email via API...' : emailSent ? 'Email Sent to Alex Thorne!' : 'Approve & Send Email'}
                </button>

                <button
                  onClick={handleLogToHubSpot}
                  disabled={isLoggingCrm}
                  className="btn btn-secondary"
                  style={{
                    borderColor: crmLogged ? '#00e699' : undefined,
                    color: crmLogged ? '#00e699' : undefined
                  }}
                >
                  {isLoggingCrm ? (
                    <RefreshCw className="spin" size={16} />
                  ) : crmLogged ? (
                    <CheckCircle2 size={16} color="#00e699" />
                  ) : (
                    <Database size={16} />
                  )}
                  {isLoggingCrm ? 'Syncing to HubSpot...' : crmLogged ? 'Logged to HubSpot CRM ✓' : 'Log to HubSpot CRM'}
                </button>
              </div>

              {/* Status Confirmations */}
              {(emailSent || crmLogged) && (
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {emailSent && (
                    <span className="badge badge-accent">
                      ✉️ Sent to alex.thorne@cloudscalelogic.io (200 OK)
                    </span>
                  )}
                  {crmLogged && (
                    <span className="badge badge-primary">
                      🔗 Logged to HubSpot CRM (Deal Stage: Technical Validation)
                    </span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
