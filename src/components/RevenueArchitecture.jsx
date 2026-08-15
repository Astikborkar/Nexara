import React, { useState } from 'react';
import { mockArchitectureNodes } from '../data/mockData';
import { Cpu, Zap, ArrowRight, Layers, Database, ShieldCheck, Code, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

export default function RevenueArchitecture() {
  const [selectedNode, setSelectedNode] = useState(mockArchitectureNodes[0]);

  const getNodeCodeSnippet = (id) => {
    switch(id) {
      case 'node-1':
        return `// Intent Harvester & De-anonymizer Engine
export async function harvestIntentSignals(domain) {
  const [techStack, hiringSignals, fundingEvents] = await Promise.all([
    fetchTechStack(domain),
    scrapeHiringFeeds(domain, ["VP Sales", "SDR", "RevOps"]),
    fetchCrunchbaseEvents(domain)
  ]);
  
  return {
    domain,
    intentScore: calculateSignalStrength({ techStack, hiringSignals, fundingEvents }),
    triggerPayload: { techStack, hiringSignals, fundingEvents }
  };
}`;
      case 'node-2':
        return `// 15-Parameter LLM Fit Scoring Matrix
export async function scoreLeadWithLLM(prospect) {
  const prompt = \`Evaluate ICP fit for \${prospect.company} (\${prospect.industry}, \${prospect.revenue}).\`;
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "system", content: "Output JSON fit score 0-100 and 3 scoring factors." }, { role: "user", content: prompt }],
    response_format: { type: "json_object" }
  });
  return JSON.parse(response.choices[0].message.content);
}`;
      case 'node-3':
        return `// Omnichannel Outbound Sequence Orchestrator
export async function dispatchSequenceStep(prospect, step) {
  if (step.type === 'Email') {
    await sendPersonalizedEmail({ to: prospect.email, hook: prospect.aiHook });
  } else if (step.type === 'LinkedIn') {
    await queueLinkedInConnection({ profileUrl: prospect.linkedin });
  } else if (step.type === 'AI Call') {
    await triggerVoiceAgent({ phone: prospect.phone, prompt: prospect.aiHook });
  }
}`;
      case 'node-4':
        return `// Bi-Directional CRM Schema Sync Engine
export async function syncToHubSpotCRM(deal) {
  const payload = {
    properties: {
      dealname: deal.company,
      amount: deal.value,
      dealstage: mapStageToHubspotId(deal.stage),
      ai_fit_score: deal.fitScore,
      attribution_channel: deal.source
    }
  };
  return await hubspotClient.crm.deals.basicApi.create(payload);
}`;
      case 'node-5':
        return `// Real-Time Rep Meeting Copilot & Brief Generator
export async function generateExecutiveBrief(prospectId) {
  const context = await pineconeIndex.query({ vector: prospectEmbeddings, topK: 5 });
  const brief = await summarizeContextForRep(context);
  return { brief, surfacedBattlecards: ["B1-Salesforce-Counter", "B4-SOC2-Security"] };
}`;
      case 'node-6':
        return `// Multi-Touch Revenue Attribution & Velocity Engine
export function calculateAttribution(dealId, touchpoints) {
  const totalValue = getDealValue(dealId);
  return touchpoints.map(tp => ({
    channel: tp.channel,
    weightedRevenue: totalValue * tp.weight,
    touchpointTimestamp: tp.timestamp
  }));
}`;
      default:
        return `// Nexara Revenue Engine Architecture`;
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Top Hero Banner */}
      <div className="glass-panel-glow" style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}>
        <div style={{ maxWidth: '850px' }}>
          <span className="badge badge-accent" style={{ marginBottom: '12px' }}>
            <Cpu size={14} /> Revenue System Architecture & Infrastructure Ownership
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '12px' }}>
            Nexara Autonomous <span className="gradient-text">Revenue Infrastructure Blueprint</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            This system replaces legacy manual SDR workflows with scalable, high-leverage software architecture. 
            From intent ingestion to real-time rep copilots and CRM synchronization, every node is engineered for zero data loss, sub-second latency, and maximum pipeline leverage.
          </p>
        </div>
      </div>

      {/* Interactive System Flow Grid */}
      <div>
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Layers size={18} color="#818cf8" /> Click Any Architecture Module to Inspect Code Logic & Payload Schema
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          {mockArchitectureNodes.map((node, index) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className="glass-panel"
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  border: isSelected ? '1px solid #38bdf8' : '1px solid var(--border-color)',
                  background: isSelected ? 'rgba(31, 41, 55, 0.95)' : 'var(--bg-card)',
                  boxShadow: isSelected ? '0 0 20px rgba(56, 189, 248, 0.25)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                    NODE 0{index + 1}
                  </span>
                  <span className="badge badge-primary" style={{ fontSize: '0.68rem' }}>{node.type}</span>
                </div>

                <h4 style={{ fontSize: '1.02rem', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>
                  {node.name}
                </h4>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  {node.description}
                </p>

                <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontWeight: '600', color: '#6ee7b7' }}>
                  <Code size={14} /> Inspect Module Payload & Code Logic <ArrowRight size={12} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Architecture Node Inspector */}
      {selectedNode && (
        <div className="glass-panel-glow" style={{ padding: '28px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Terminal size={20} color="#38bdf8" />
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>{selectedNode.name} Inspector</h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Type: {selectedNode.type} • Target: Nexara Revenue Stack</span>
              </div>
            </div>

            <span className="badge badge-accent">Production Ready</span>
          </div>

          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#a5b4fc', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }}>
              Implementation Code Logic & Webhook Schema:
            </span>
            <pre style={{
              background: '#040711',
              padding: '20px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.84rem',
              color: '#38bdf8',
              overflowX: 'auto',
              lineHeight: '1.6'
            }}>
              <code>{getNodeCodeSnippet(selectedNode.id)}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
