import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { dashboardDataState } from '../state/atoms';
import type { DashboardEntry } from '../state/atoms';

const Dashboard: React.FC = () => {
  const [data, setData] = useRecoilState(dashboardDataState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<DashboardEntry | null>(null);
  const [formData, setFormData] = useState<Partial<DashboardEntry>>({});

  const stats = [
    { label: 'Turnover', value: '$92,405', change: '+ 5.39%', icon: '🛒', color: '#FFF0F3' },
    { label: 'Profit', value: '$32,218', change: '+ 5.39%', icon: '$', color: '#EBF3FF' },
    { label: 'New customer', value: '298', change: '+ 6.84%', icon: '👤', color: '#F0F9FF' },
  ];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    let updated;
    if (editingEntry) {
      updated = data.map(item => item.id === editingEntry.id ? { ...item, ...formData } : item);
    } else {
      const newEntry: DashboardEntry = {
        id: Date.now().toString(),
        customerName: formData.customerName || 'Anonymous',
        company: formData.company || 'N/A',
        orderValue: formData.orderValue || '$0',
        orderDate: new Date().toLocaleDateString(),
        status: (formData.status as any) || 'New',
        avatar: '/3_Data/Lab_03/avatar.png',
      };
      updated = [...data, newEntry];
    }
    setData(updated as DashboardEntry[]);
    localStorage.setItem('chefify_dashboard_data', JSON.stringify(updated));
    setIsModalOpen(false);
    setEditingEntry(null);
  };

  const handleDelete = (id: string) => {
    const updated = data.filter(item => item.id !== id);
    setData(updated);
    localStorage.setItem('chefify_dashboard_data', JSON.stringify(updated));
  };

  const openEdit = (entry: DashboardEntry) => {
    setEditingEntry(entry);
    setFormData(entry);
    setIsModalOpen(true);
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-content">
        <h1 className="page-title">Dashboard</h1>

        <section className="overview-section">
          <h3>📊 Overview</h3>
          <div className="stats-grid">
            {stats.map(stat => (
              <div className="stat-card" key={stat.label} style={{ background: stat.color }}>
                <div className="stat-info">
                  <span className="stat-label">{stat.label}</span>
                  <h2 className="stat-value">{stat.value}</h2>
                  <span className="stat-change">▲ {stat.change} period of change</span>
                </div>
                <div className="stat-icon-wrapper">{stat.icon}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="report-section">
          <div className="report-header">
            <h3>📑 Detailed report</h3>
            <div className="report-actions">
              <button className="btn-add" onClick={() => { setEditingEntry(null); setFormData({}); setIsModalOpen(true); }}>+ Add Entry</button>
              <button className="btn-outline">Import</button>
              <button className="btn-outline">Export</button>
            </div>
          </div>

          <div className="table-wrapper">
            <table className="report-table">
              <thead>
                <tr>
                  <th>CUSTOMER NAME</th>
                  <th>COMPANY</th>
                  <th>ORDER VALUE</th>
                  <th>ORDER DATE</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td className="user-cell">
                      <img src={item.avatar} alt="" className="table-avatar" />
                      {item.customerName}
                    </td>
                    <td>{item.company}</td>
                    <td>{item.orderValue}</td>
                    <td>{item.orderDate}</td>
                    <td>
                      <span className={`status-badge ${item.status.toLowerCase()}`}>{item.status}</span>
                    </td>
                    <td>
                      <button className="action-btn" onClick={() => openEdit(item)}>Edit</button>
                      <button className="action-btn delete" onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">{editingEntry ? 'Edit Entry' : 'Add New Entry'}</h2>
            <form onSubmit={handleSave} className="crud-form">
              <div className="form-group">
                <label>Customer Name</label>
                <input type="text" value={formData.customerName || ''} onChange={e => setFormData({...formData, customerName: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" value={formData.company || ''} onChange={e => setFormData({...formData, company: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Order Value</label>
                <input type="text" value={formData.orderValue || ''} onChange={e => setFormData({...formData, orderValue: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select value={formData.status || 'New'} onChange={e => setFormData({...formData, status: e.target.value as any})}>
                  <option value="New">New</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="submit" className="btn-save">{editingEntry ? 'Update' : 'Create'}</button>
                <button type="button" className="btn-cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .dashboard-page { padding: 2rem; background: #fcfcfc; min-height: 100vh; font-family: var(--body); }
        .dashboard-content { max-width: 1400px; margin: 0 auto; }
        .page-title { font-size: 2rem; color: var(--primary); margin-bottom: 2rem; }
        
        .overview-section h3 { margin-bottom: 1.5rem; color: #444; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 3rem; }
        .stat-card { padding: 1.5rem 2rem; border-radius: 20px; display: flex; justify-content: space-between; align-items: center; }
        .stat-label { color: #666; font-size: 0.9rem; font-weight: 600; }
        .stat-value { font-size: 1.8rem; margin: 0.4rem 0; color: #222; }
        .stat-change { font-size: 0.8rem; color: #2e7d32; font-weight: 600; }
        .stat-icon-wrapper { width: 44px; height: 44px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }

        .report-section { background: #fff; padding: 2rem; border-radius: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); }
        .report-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
        .report-actions { display: flex; gap: 0.75rem; }
        
        .btn-add { background: var(--primary); color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 700; cursor: pointer; }
        .btn-outline { border: 1.5px solid var(--primary); color: var(--primary); background: transparent; padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 700; cursor: pointer; }

        .report-table { width: 100%; border-collapse: collapse; text-align: left; }
        .report-table th { padding: 1rem; font-size: 0.75rem; color: #999; text-transform: uppercase; border-bottom: 1px solid #eee; }
        .report-table td { padding: 1.25rem 1rem; border-bottom: 1px solid #f5f5f5; font-size: 0.9rem; color: #333; }
        
        .user-cell { display: flex; align-items: center; gap: 0.75rem; font-weight: 600; }
        .table-avatar { width: 32px; height: 32px; border-radius: 50%; }
        .status-badge { padding: 0.35rem 0.75rem; border-radius: 20px; font-size: 0.7rem; font-weight: 700; }
        .status-badge.new { background: #e0f2fe; color: #0369a1; }
        .status-badge.in-progress { background: #fef3c7; color: #92400e; }
        .status-badge.completed { background: #dcfce7; color: #166534; }
        
        .action-btn { background: none; border: none; color: var(--primary); font-weight: 600; cursor: pointer; margin-right: 1rem; }
        .action-btn.delete { color: #dc2626; }

        .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 3000; backdrop-filter: blur(4px); }
        .modal-content { background: white; padding: 2.5rem; border-radius: 24px; width: 90%; max-width: 450px; box-shadow: 0 20px 60px rgba(0,0,0,0.25); }
        .modal-title { margin-bottom: 1.5rem; font-size: 1.5rem; color: #222; }
        .crud-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600; font-size: 0.9rem; color: #555; }
        .form-group input, .form-group select { width: 100%; padding: 0.75rem; border: 1.5px solid #eee; border-radius: 12px; font-size: 1rem; outline-color: var(--primary); }
        .modal-actions { display: flex; gap: 1rem; margin-top: 1rem; }
        .btn-save { flex: 2; background: var(--primary); color: white; border: none; padding: 0.8rem; border-radius: 12px; font-weight: 700; cursor: pointer; }
        .btn-cancel { flex: 1; background: #f5f5f5; color: #666; border: none; padding: 0.8rem; border-radius: 12px; font-weight: 700; cursor: pointer; }
      `}</style>
    </div>
  );
};

export default Dashboard;
