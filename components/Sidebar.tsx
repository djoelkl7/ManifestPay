import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  Banknote, 
  History, 
  FileText, 
  Send, 
  Receipt, 
  Bell, 
  Settings,
  CircleUser
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Users', path: '/dashboard/users', icon: <Users size={20} /> },
    { name: 'Cards', path: '/dashboard/cards', icon: <CreditCard size={20} /> },
    { name: 'Loans', path: '/dashboard/loans', icon: <Banknote size={20} /> },
    { name: 'Transactions', path: '/dashboard/transactions', icon: <History size={20} /> },
    { name: 'Accounts', path: '/dashboard/accounts', icon: <CircleUser size={20} /> },
    { name: 'Send Money', path: '/transfers/send', icon: <Send size={20} /> },
    { name: 'Pay Bills', path: '/transfers/pay-bills', icon: <Receipt size={20} /> },
    { name: 'Statements', path: '/dashboard/statements', icon: <FileText size={20} /> },
    { name: 'Notifications', path: '/dashboard/notifications', icon: <Bell size={20} /> },
    { name: 'Settings', path: '/profile', icon: <Settings size={20} /> },
  ];

  return (
    <div className="bg-primary-gray rounded-xl shadow-2xl overflow-hidden sticky top-24 border border-white/5">
      <div className="p-5 bg-black/40 border-b border-white/5">
        <h2 className="text-white font-display font-bold text-sm tracking-widest uppercase flex items-center">
          <span className="w-1.5 h-1.5 bg-primary-red rounded-full mr-2.5 animate-pulse"></span>
          Core Banking
        </h2>
      </div>
      <nav className="p-2.5">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end={item.path === '/dashboard'} 
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all duration-300 group ${
                    isActive
                      ? 'bg-primary-red text-white font-semibold shadow-lg shadow-primary-red/20'
                      : 'text-white/40 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <span className="mr-3 transition-transform group-hover:scale-110">{item.icon}</span>
                <span className="text-sm tracking-tight">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
