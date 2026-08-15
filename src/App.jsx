import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import AIProspecting from './components/AIProspecting';
import OutboundAutomation from './components/OutboundAutomation';
import PipelineCRM from './components/PipelineCRM';
import RepProductivity from './components/RepProductivity';
import KPIDashboard from './components/KPIDashboard';
import PlaybooksOptimization from './components/PlaybooksOptimization';
import RevenueArchitecture from './components/RevenueArchitecture';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return <Overview setActiveTab={setActiveTab} />;
      case 'prospecting':
        return <AIProspecting />;
      case 'outbound':
        return <OutboundAutomation />;
      case 'pipeline':
        return <PipelineCRM />;
      case 'productivity':
        return <RepProductivity />;
      case 'kpi':
        return <KPIDashboard />;
      case 'playbooks':
        return <PlaybooksOptimization />;
      case 'architecture':
        return <RevenueArchitecture />;
      default:
        return <Overview setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="main-content">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="content-body">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
