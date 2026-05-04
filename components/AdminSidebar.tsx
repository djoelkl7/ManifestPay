
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar: React.FC = () => {
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
    )},
    { name: 'User Management', path: '/admin/users', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    )},
    { name: 'Transactions', path: '/admin/transactions', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    )},
    { name: 'Loan Approvals', path: '/admin/loans', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    )},
    { name: 'User Feedback', path: '/admin/feedback', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
    )},
  ];

  return (
    <div className="bg-primary-gray text-white rounded-2xl shadow-xl overflow-hidden sticky top-24 h-[calc(100vh-8rem)] border border-white/5">
      <div className="p-5 bg-black/40 border-b border-white/5">
        <h2 className="text-white font-bold text-lg flex items-center tracking-tight">
            <span className="bg-[#2F6BFF] w-2 h-2 rounded-full mr-2.5 animate-pulse"></span>
            Admin Core
        </h2>
        <p className="text-[10px] text-white/30 mt-1 uppercase tracking-widest font-mono">Terminal v2.0.4</p>
      </div>
      <nav className="p-3">
        <ul className="space-y-1.5">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end={item.path === '/admin'}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-[#2F6BFF] text-white font-bold shadow-lg shadow-[#2F6BFF]/20'
                      : 'text-white/40 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <span className="mr-3 opacity-70">{item.icon}</span>
                <span className="text-sm tracking-tight">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 w-full p-5 border-t border-white/5 bg-black/20">
          <div className="flex items-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2F6BFF] to-[#7B3EFF] flex items-center justify-center text-xs font-bold shadow-lg">ADM</div>
              <div className="ml-3">
                  <p className="text-sm font-bold text-white tracking-tight">System Admin</p>
                  <p className="text-[10px] text-soft-cyan uppercase tracking-widest font-bold">Encrypted</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
