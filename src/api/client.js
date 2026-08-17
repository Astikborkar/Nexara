const API_BASE = '/api';

export async function fetchProspects() {
  try {
    const res = await fetch(`${API_BASE}/prospects`);
    if (res.ok) return await res.json();
  } catch (e) {
    console.warn("Backend API offline, fallback to mock data:", e);
  }
  return null;
}

export async function scanNewProspectApi() {
  try {
    const res = await fetch(`${API_BASE}/prospects/scan`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
      const data = await res.json();
      return data.prospect;
    }
  } catch (e) {
    console.error("API scan error:", e);
  }
  return null;
}

export async function fetchDeals() {
  try {
    const res = await fetch(`${API_BASE}/deals`);
    if (res.ok) return await res.json();
  } catch (e) {
    console.warn("Backend API offline:", e);
  }
  return null;
}

export async function updateDealStageApi(dealId, newStage) {
  try {
    const res = await fetch(`${API_BASE}/deals/${dealId}/stage`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stage: newStage })
    });
    if (res.ok) return await res.json();
  } catch (e) {
    console.error("API deal update error:", e);
  }
  return null;
}

export async function classifyReplyApi(emailText, emailType) {
  try {
    const res = await fetch(`${API_BASE}/classifier/classify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailText, emailType })
    });
    if (res.ok) return await res.json();
  } catch (e) {
    console.error("API classifier error:", e);
  }
  return null;
}

export async function sendEmailApi(to, subject, body) {
  try {
    const res = await fetch(`${API_BASE}/copilot/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to, subject, body })
    });
    if (res.ok) return await res.json();
  } catch (e) {
    console.error("API send email error:", e);
  }
  return null;
}

export async function logCrmApi(dealId, activity) {
  try {
    const res = await fetch(`${API_BASE}/copilot/log-crm`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dealId, activity })
    });
    if (res.ok) return await res.json();
  } catch (e) {
    console.error("API log CRM error:", e);
  }
  return null;
}

export async function fetchKpiMetrics() {
  try {
    const res = await fetch(`${API_BASE}/kpi`);
    if (res.ok) return await res.json();
  } catch (e) {
    console.warn("API fetch KPI error:", e);
  }
  return null;
}
