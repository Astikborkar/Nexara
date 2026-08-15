import React, { useState } from 'react';
import { mockSequences } from '../data/mockData';
import { Send, Mail, Linkedin, PhoneCall, Sparkles, CheckCircle2, Play, ArrowRight, CornerDownRight, Zap } from 'lucide-react';

export default function OutboundAutomation() {
  const [selectedSeq, setSelectedSeq] = useState(mockSequences[0]);
  const [selectedVariant, setSelectedVariant] = useState('A');
  const [selectedStep, setSelectedStep] = useState(1);
  const [replyCategory, setReplyCategory] = useState(null);

  const stepPreviews = {
    1: {
      A: `Hi {{FirstName}},\n\nNoticed {{CompanyName}} is expanding your SDR team by 12 reps this quarter while scaling outbound pipeline.\n\nStandard SDR activity management caps rep capacity at ~50 manual touches/day. We engineered an autonomous AI revenue infrastructure for enterprise sales teams that quadruples qualified meetings without adding rep headcount.\n\nWould you be open to an 8-minute pipeline architecture review this Thursday at 2 PM CT?\n\nBest,\nNexara Revenue Engine`,
      B: `Hi {{FirstName}},\n\nMost CROs scaling {{Industry}} companies face a bottleneck: reps spend 70% of their time on data entry and manual follow-ups rather than live closing calls.\n\nOur autonomous outbound architecture automates ICP scraping, LLM personalization, and CRM logging with 0 latency. Result: 18.2% positive reply rates across Tier 1 accounts.\n\nShould I send over our 3-page Nexara Revenue Infrastructure Case Study?\n\nBest,\nNexara Revenue Engine`
    },
    2: {
      A: `LinkedIn Note: Hi {{FirstName}}, saw your recent post regarding SDR team expansion at {{CompanyName}}. Built an automated qualification pipeline for enterprise RevOps teams—would love to connect!`,
      B: `LinkedIn Note: Hi {{FirstName}}, congrats on the growth at {{CompanyName}}. Sent an audit breakdown to your email—happy to connect here!`
    },
    3: {
      A: `Hi {{FirstName}},\n\nFollowing up on my previous note. Here is how CloudScale Logic reduced rep data-entry latency by 85% using Nexara's bi-directional webhook architecture.\n\nLink: nexaralabsusa.com/case-study-cloudscale\n\nBest,\nNexara Revenue Engine`,
      B: `Hi {{FirstName}},\n\nQuick 30-second video breakdown showing our 15-parameter LLM fit scoring engine in action for {{CompanyName}}.\n\nVideo: nexaralabsusa.com/demo-video\n\nBest,\nNexara Revenue Engine`
    },
    4: {
      A: `[AI Voice Agent Script]: "Hi {{FirstName}}, this is Nexara's automated AI SDR assistant following up on our email regarding {{CompanyName}}'s outbound pipeline. Are you free for a brief 2-minute chat?"`,
      B: `[AI Voice Agent Script]: "Hi {{FirstName}}, reaching out from Nexara regarding your pipeline velocity audit. Would you like us to text over the executive brief?"`
    },
    5: {
      A: `Hi {{FirstName}},\n\nFinal check-in before I close out this campaign thread. Here is a direct link to test our interactive sandbox demo: localhost:3000.\n\nBest,\nNexara Revenue Engine`,
      B: `Hi {{FirstName}},\n\nShould I pause outreach for {{CompanyName}} for Q3, or would next Tuesday at 10 AM CT work better for a brief review?\n\nBest,\nNexara Revenue Engine`
    }
  };

  const handleTestClassifier = (emailType) => {
    if (emailType === 'interested') {
      setReplyCategory({
        type: 'Interested (Meeting Request)',
        confidence: '99.2%',
        action: 'AI Auto-Booked Meeting & Dispatched Calendar Invite',
        sentiment: 'High Positive Intent',
        color: '#10b981'
      });
    } else if (emailType === 'objection') {
      setReplyCategory({
        type: 'Objection: Stack Conflict',
        confidence: '96.5%',
        action: 'Surfaced Competitor Battlecard B1 & Drafted Counter-Email',
        sentiment: 'Neutral / Technical Barrier',
        color: '#f59e0b'
      });
    } else if (emailType === 'ooo') {
      setReplyCategory({
        type: 'Out of Office',
        confidence: '100%',
        action: 'Rescheduled Sequence Step 4 to Return Date + 1 Day',
        sentiment: 'Passive',
        color: '#9ca3af'
      });
    }
  };

  const currentPreview = stepPreviews[selectedStep]?.[selectedVariant] || stepPreviews[1]['A'];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <Send size={20} color="#38bdf8" />
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800' }}>
              Automated Omnichannel Outbound & Sequence Orchestration
            </h2>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Multi-touch cadences across Email, LinkedIn, and AI Voice with real-time response classification and spintax optimization.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <span className="badge badge-accent"><Zap size={12} /> Active Campaign Engine</span>
        </div>
      </div>

      {/* Campaign Performance Bar */}
      <div className="glass-panel-glow" style={{ padding: '20px 28px', borderRadius: 'var(--radius-md)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Enrolled Prospects</span>
          <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff' }}>{selectedSeq.totalEnrolled.toLocaleString()}</h3>
        </div>
        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Open Rate</span>
          <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#38bdf8' }}>{selectedSeq.openRate}</h3>
        </div>
        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Positive Reply Rate</span>
          <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#6ee7b7' }}>{selectedSeq.replyRate}</h3>
        </div>
        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Booked Meeting Conversion</span>
          <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#facc15' }}>{selectedSeq.meetingRate}</h3>
        </div>
      </div>

      {/* Main Grid: Left Cadence Visualizer, Right A/B Copy Generator & Reply Classifier */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '24px' }}>
        {/* Left Column: Sequence Touchpoints */}
        <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Play size={16} color="#818cf8" /> Omnichannel Touchpoint Cadence Flow (Click any Step)
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {selectedSeq.steps.map((step) => {
              const isSelected = selectedStep === step.step;
              const getIcon = (t) => {
                if (t === 'Email') return <Mail size={16} color="#38bdf8" />;
                if (t === 'LinkedIn') return <Linkedin size={16} color="#0ea5e9" />;
                if (t === 'AI Call') return <PhoneCall size={16} color="#10b981" />;
                return <Mail size={16} />;
              };

              return (
                <div 
                  key={step.step} 
                  onClick={() => setSelectedStep(step.step)}
                  style={{
                    background: isSelected ? 'rgba(31, 41, 55, 0.95)' : 'rgba(255, 255, 255, 0.03)',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    border: isSelected ? '1px solid #38bdf8' : '1px solid var(--border-color)',
                    boxShadow: isSelected ? '0 0 15px rgba(56, 189, 248, 0.25)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      background: isSelected ? '#6366f1' : 'rgba(255, 255, 255, 0.07)',
                      color: '#fff',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      fontSize: '0.85rem'
                    }}>
                      {step.step}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {getIcon(step.type)}
                        <span style={{ fontSize: '0.9rem', fontWeight: '700', color: isSelected ? '#fff' : 'var(--text-main)' }}>{step.name}</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Delay: {step.delay} • Type: {step.type}</span>
                    </div>
                  </div>

                  <span className="badge badge-accent" style={{ fontSize: '0.7rem' }}>
                    {isSelected ? 'Viewing Step' : 'Active'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: A/B Copy Simulator & Classifier */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* A/B Copy Optimizer */}
          <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={16} color="#c084fc" /> Step {selectedStep} Preview & A/B Copy Generator
              </h3>

              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={() => setSelectedVariant('A')}
                  style={{
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    background: selectedVariant === 'A' ? '#6366f1' : 'rgba(255, 255, 255, 0.1)',
                    color: '#fff'
                  }}
                >
                  Variant A
                </button>
                <button
                  onClick={() => setSelectedVariant('B')}
                  style={{
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    background: selectedVariant === 'B' ? '#6366f1' : 'rgba(255, 255, 255, 0.1)',
                    color: '#fff'
                  }}
                >
                  Variant B
                </button>
              </div>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', whiteSpace: 'pre-line', color: '#e0e7ff', lineHeight: '1.6' }}>
              {currentPreview}
            </div>
          </div>

          {/* AI Reply Classification Engine */}
          <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '10px' }}>
              Autonomous Inbound Reply Classifier Simulator
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Simulate an incoming email response to test natural language intent detection and CRM workflow dispatch.
            </p>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
              <button onClick={() => handleTestClassifier('interested')} className="btn btn-secondary btn-sm">
                Test: "Looks great, let's talk Thursday"
              </button>
              <button onClick={() => handleTestClassifier('objection')} className="btn btn-secondary btn-sm">
                Test: "We use Salesloft already"
              </button>
              <button onClick={() => handleTestClassifier('ooo')} className="btn btn-secondary btn-sm">
                Test: "Out of office until Aug 22"
              </button>
            </div>

            {replyCategory && (
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: 'var(--radius-sm)', border: `1px solid ${replyCategory.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: '800', color: replyCategory.color }}>
                    Classified as: {replyCategory.type}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Confidence: {replyCategory.confidence}</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CornerDownRight size={14} color={replyCategory.color} /> Automated Action: <strong>{replyCategory.action}</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
