import React, { useState } from 'react';
import { mockKpiData } from '../data/mockData';
import { TrendingUp, DollarSign, Calendar, BarChart3, PieChart as PieIcon, ArrowUpRight, Zap, Calculator } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function KPIDashboard() {
  const [sdrCount, setSdrCount] = useState(4);
  const [avgDealSize, setAvgDealSize] = useState(85000);

  // Chart 1 Data: Monthly Pipeline & Closed Trend
  const lineData = {
    labels: mockKpiData.monthlyTrend.map(d => d.month),
    datasets: [
      {
        label: 'Pipeline Generated ($k)',
        data: mockKpiData.monthlyTrend.map(d => d.pipeline),
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Closed Won Revenue ($k)',
        data: mockKpiData.monthlyTrend.map(d => d.closed),
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#9ca3af', font: { family: 'Plus Jakarta Sans', size: 12 } }
      }
    },
    scales: {
      x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af' } },
      y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af' } }
    }
  };

  // Chart 2 Data: Revenue Attribution Breakdown
  const doughnutData = {
    labels: mockKpiData.attributionBreakdown.map(a => a.channel),
    datasets: [
      {
        data: mockKpiData.attributionBreakdown.map(a => a.percentage),
        backgroundColor: ['#6366f1', '#0ea5e9', '#10b981', '#a855f7'],
        borderColor: '#090d16',
        borderWidth: 2
      }
    ]
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#9ca3af', font: { family: 'Plus Jakarta Sans', size: 11 } }
      }
    }
  };

  // ROI Calculator Math
  const calculatedDealsPerMo = sdrCount * 3.5;
  const calculatedMonthlyArr = calculatedDealsPerMo * (avgDealSize / 12);
  const calculatedAnnualArr = calculatedMonthlyArr * 12;
  const legacyCost = sdrCount * 110000;
  const nexaraSystemCost = 45000 + (sdrCount * 12000);
  const totalSavings = legacyCost - nexaraSystemCost;

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Header */}
      <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <TrendingUp size={20} color="#facc15" />
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800' }}>
              KPI Dashboards & Multi-Touch Revenue Attribution
            </h2>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Real-time financial metrics, channel attribution breakdown, and ROI payback velocity.
          </p>
        </div>

        <div className="badge badge-accent" style={{ padding: '6px 12px' }}>
          <Zap size={12} /> Live Attribution Engine
        </div>
      </div>

      {/* Metric Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Monthly Recurring Revenue</span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: '6px' }}>
            <h3 style={{ fontSize: '1.7rem', fontWeight: '800', color: '#fff' }}>{mockKpiData.mrr}</h3>
            <span style={{ fontSize: '0.8rem', color: '#6ee7b7', fontWeight: '700', display: 'flex', alignItems: 'center' }}>
              <ArrowUpRight size={14} /> {mockKpiData.mrrGrowth}
            </span>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Pipeline Generated</span>
          <h3 style={{ fontSize: '1.7rem', fontWeight: '800', color: '#38bdf8', marginTop: '6px' }}>{mockKpiData.pipelineGenerated}</h3>
        </div>

        <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>CAC Payback Period</span>
          <h3 style={{ fontSize: '1.7rem', fontWeight: '800', color: '#facc15', marginTop: '6px' }}>{mockKpiData.cacPaybackMonths}</h3>
        </div>

        <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Outbound Sales Velocity</span>
          <h3 style={{ fontSize: '1.7rem', fontWeight: '800', color: '#6ee7b7', marginTop: '6px' }}>{mockKpiData.salesVelocity}</h3>
        </div>
      </div>

      {/* Charts Grid: Left Pipeline Velocity Trend, Right Channel Attribution */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '24px' }}>
        <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BarChart3 size={18} color="#6366f1" /> Monthly Outbound Pipeline vs Closed Revenue Velocity ($k)
          </h3>
          <Line data={lineData} options={lineOptions} height={200} />
        </div>

        <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PieIcon size={18} color="#0ea5e9" /> Revenue Channel Attribution
          </h3>
          <Doughnut data={doughnutData} options={doughnutOptions} height={200} />
        </div>
      </div>

      {/* Interactive ROI & Leverage Calculator */}
      <div className="glass-panel-glow" style={{ padding: '28px', borderRadius: 'var(--radius-md)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <Calculator size={20} color="#10b981" />
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>
            Nexara Revenue Infrastructure ROI & Leverage Calculator
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {/* Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.88rem', fontWeight: '600' }}>
                <span>Sales Team Size: <strong>{sdrCount} Reps</strong></span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="25" 
                value={sdrCount} 
                onChange={(e) => setSdrCount(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#6366f1', cursor: 'pointer' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.88rem', fontWeight: '600' }}>
                <span>Average Contract Value (ACV): <strong>${avgDealSize.toLocaleString()}</strong></span>
              </div>
              <input 
                type="range" 
                min="20000" 
                max="250000" 
                step="5000"
                value={avgDealSize} 
                onChange={(e) => setAvgDealSize(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#10b981', cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Results Summary */}
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Projected Net New ARR</span>
              <h4 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#6ee7b7' }}>
                ${(calculatedAnnualArr / 1000000).toFixed(2)}M
              </h4>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Annual Cost Savings vs Headcount</span>
              <h4 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#facc15' }}>
                ${(totalSavings / 1000).toFixed(0)}k / yr
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
