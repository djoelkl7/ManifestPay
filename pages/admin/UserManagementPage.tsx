
import React, { useState, useMemo } from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Search, Download, Plus, Check, MoreVertical } from 'lucide-react';

interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    password?: string;
    status: 'Active' | 'Frozen' | 'Offline';
    type: 'Standard' | 'Premium' | 'Platinum';
    balance: number;
}

type SortField = 'name' | 'email' | 'status' | 'type';
type SortOrder = 'asc' | 'desc';

const UserManagementPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteConfirmation, setDeleteConfirmation] = useState<{ ids: string[]; type: 'single' | 'bulk' } | null>(null);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
    
    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    // Sorting State
    const [sortField, setSortField] = useState<SortField>('name');
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
    
    // Mock Users
    const [users, setUsers] = useState<User[]>([
        { id: 'U1001', name: 'John Doe', email: 'john@example.com', username: 'johndoe', balance: 47450.75, status: 'Active', type: 'Premium' },
        { id: 'U1002', name: 'Sarah Smith', email: 'sarah@example.com', username: 'sarahs', balance: 1250.00, status: 'Active', type: 'Standard' },
        { id: 'U1003', name: 'Michael Brown', email: 'mike.b@test.com', username: 'mikeb', balance: 0.00, status: 'Frozen', type: 'Standard' },
        { id: 'U1004', name: 'Emily Davis', email: 'emily.d@test.com', username: 'emilyd', balance: 145000.50, status: 'Active', type: 'Platinum' },
        { id: 'U1005', name: 'Robert Wilson', email: 'r.wilson@test.com', username: 'rwilson', balance: 500.00, status: 'Offline', type: 'Standard' },
        { id: 'U1006', name: 'James Thompson', email: 'j.thompson@example.com', username: 'jamest', balance: 8900.00, status: 'Active', type: 'Premium' },
        { id: 'U1007', name: 'Patricia Garcia', email: 'p.garcia@test.com', username: 'garciap', balance: 12000.00, status: 'Active', type: 'Standard' },
        { id: 'U1008', name: 'David Miller', email: 'd.miller@example.com', username: 'millerd', balance: 450.00, status: 'Frozen', type: 'Standard' },
        { id: 'U1009', name: 'Linda Martinez', email: 'linda.m@test.com', username: 'martinezl', balance: 250000.00, status: 'Active', type: 'Platinum' },
        { id: 'U1010', name: 'William Taylor', email: 'w.taylor@example.com', username: 'taylorw', balance: 15.00, status: 'Offline', type: 'Standard' },
    ]);

    const handleSort = (field: SortField) => {
        if (sortField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortOrder('asc');
        }
    };

    const sortedUsers = useMemo(() => {
        const result = [...users].sort((a, b) => {
            const fieldA = a[sortField].toLowerCase();
            const fieldB = b[sortField].toLowerCase();
            if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
            if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
        return result;
    }, [users, sortField, sortOrder]);

    const filteredUsers = useMemo(() => {
        return sortedUsers.filter(u => 
            u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            u.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [sortedUsers, searchTerm]);

    // Pagination Logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        status: 'Active' as User['status'],
        type: 'Standard' as User['type'],
    });

    const filteredUsersCount = filteredUsers.length;

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedUserIds(currentUsers.map(u => u.id));
        } else {
            setSelectedUserIds([]);
        }
    };

    const handleSelectUser = (id: string) => {
        setSelectedUserIds(prev => 
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleBulkAction = (action: 'Active' | 'Frozen' | 'Delete') => {
        if (action === 'Delete') {
            setDeleteConfirmation({ ids: selectedUserIds, type: 'bulk' });
        } else {
            setUsers(users.map(u => 
                selectedUserIds.includes(u.id) ? { ...u, status: action as User['status'] } : u
            ));
            setSelectedUserIds([]);
        }
    };

    const confirmDelete = () => {
        if (deleteConfirmation) {
            setUsers(users.filter(u => !deleteConfirmation.ids.includes(u.id)));
            if (deleteConfirmation.type === 'bulk') {
                setSelectedUserIds([]);
            }
            setDeleteConfirmation(null);
        }
    };

    const handleExportCSV = () => {
        const headers = ['ID', 'Name', 'Email', 'Username', 'Balance', 'Status', 'Type'];
        const csvContent = [
            headers.join(','),
            ...users.map(u => [
                u.id,
                `"${u.name}"`,
                u.email,
                u.username,
                u.balance,
                u.status,
                u.type
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `users_export_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleOpenModal = (user: User | null = null) => {
        if (user) {
            setEditingUser(user);
            setFormData({
                name: user.name,
                email: user.email,
                username: user.username,
                password: '', // Don't show existing password
                status: user.status,
                type: user.type,
            });
        } else {
            setEditingUser(null);
            setFormData({
                name: '',
                email: '',
                username: '',
                password: '',
                status: 'Active',
                type: 'Standard',
            });
        }
        setIsModalOpen(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingUser) {
            setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...formData, password: formData.password || u.password } : u));
        } else {
            const newUser: User = {
                id: `U${Math.floor(1000 + Math.random() * 9000)}`,
                ...formData,
                balance: 0,
            };
            setUsers([...users, newUser]);
        }
        setIsModalOpen(false);
    };

    return (
        <AnimatedSection>
            <div className="bg-white dark:bg-primary-gray p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Manage user accounts, credentials, and availability.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        {selectedUserIds.length > 0 && (
                            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg animate-fade-in">
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300 px-2">
                                    {selectedUserIds.length} selected
                                </span>
                                <button 
                                    onClick={() => handleBulkAction('Active')}
                                    className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded hover:bg-green-600 transition-colors"
                                >
                                    Activate
                                </button>
                                <button 
                                    onClick={() => handleBulkAction('Frozen')}
                                    className="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded hover:bg-yellow-600 transition-colors"
                                >
                                    Freeze
                                </button>
                                <button 
                                    onClick={() => handleBulkAction('Delete')}
                                    className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded hover:bg-red-600 transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                        <div className="relative flex-grow md:w-64">
                             <input 
                                type="text" 
                                placeholder="Search users..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                             />
                             <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <button 
                            onClick={handleExportCSV}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors whitespace-nowrap flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Export CSV
                        </button>
                        <button 
                            onClick={() => handleOpenModal()}
                            className="bg-electric-blue text-white px-4 py-2 rounded-lg font-bold hover:bg-electric-blue/80 transition-colors whitespace-nowrap"
                        >
                            Add User
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                            <tr>
                                <th className="p-4 w-10">
                                    <input 
                                        type="checkbox" 
                                        className="rounded border-gray-300 text-electric-blue focus:ring-electric-blue"
                                        checked={selectedUserIds.length === currentUsers.length && currentUsers.length > 0}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th 
                                    className="p-4 font-semibold cursor-pointer group"
                                    onClick={() => handleSort('name')}
                                >
                                    <div className="flex items-center">
                                        User Details
                                        {sortField === 'name' ? (
                                            sortOrder === 'asc' ? <ChevronUp size={14} className="ml-1 text-electric-blue" /> : <ChevronDown size={14} className="ml-1 text-electric-blue" />
                                        ) : <MoreVertical size={14} className="ml-1 opacity-0 group-hover:opacity-100" />}
                                    </div>
                                </th>
                                <th className="p-4 font-semibold">Username</th>
                                <th 
                                    className="p-4 font-semibold cursor-pointer group"
                                    onClick={() => handleSort('type')}
                                >
                                    <div className="flex items-center">
                                        Account Type
                                        {sortField === 'type' ? (
                                            sortOrder === 'asc' ? <ChevronUp size={14} className="ml-1 text-electric-blue" /> : <ChevronDown size={14} className="ml-1 text-electric-blue" />
                                        ) : <MoreVertical size={14} className="ml-1 opacity-0 group-hover:opacity-100" />}
                                    </div>
                                </th>
                                <th 
                                    className="p-4 font-semibold cursor-pointer group"
                                    onClick={() => handleSort('status')}
                                >
                                    <div className="flex items-center">
                                        Availability
                                        {sortField === 'status' ? (
                                            sortOrder === 'asc' ? <ChevronUp size={14} className="ml-1 text-electric-blue" /> : <ChevronDown size={14} className="ml-1 text-electric-blue" />
                                        ) : <MoreVertical size={14} className="ml-1 opacity-0 group-hover:opacity-100" />}
                                    </div>
                                </th>
                                <th className="p-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {currentUsers.map(user => (
                                <tr key={user.id} className={`hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${selectedUserIds.includes(user.id) ? 'bg-electric-blue/5 dark:bg-electric-blue/10' : ''}`}>
                                    <td className="p-4">
                                        <input 
                                            type="checkbox" 
                                            className="rounded border-gray-300 text-electric-blue focus:ring-electric-blue"
                                            checked={selectedUserIds.includes(user.id)}
                                            onChange={() => handleSelectUser(user.id)}
                                        />
                                    </td>
                                    <td className="p-4">
                                        <div className="font-bold text-gray-900 dark:text-white">{user.name}</div>
                                        <div className="text-sm text-gray-500">{user.email}</div>
                                    </td>
                                    <td className="p-4 text-gray-900 dark:text-white font-medium">
                                        @{user.username}
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                                            user.type === 'Platinum' ? 'bg-purple-100 text-purple-700' :
                                            user.type === 'Premium' ? 'bg-blue-100 text-blue-700' :
                                            'bg-gray-100 text-gray-700'
                                        }`}>{user.type}</span>
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                                            user.status === 'Offline' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' :
                                            'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                        }`}>
                                            <span className={`w-2 h-2 rounded-full mr-1.5 ${
                                                user.status === 'Active' ? 'bg-green-500' : 
                                                user.status === 'Offline' ? 'bg-gray-500' :
                                                'bg-red-500'
                                            }`}></span>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right space-x-2">
                                        <button 
                                            onClick={() => handleOpenModal(user)}
                                            className="text-blue-500 hover:text-blue-700 font-medium text-sm"
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => setDeleteConfirmation({ ids: [user.id], type: 'single' })}
                                            className="text-red-500 hover:text-red-700 font-medium text-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{indexOfFirstUser + 1}</span> to <span className="font-semibold text-gray-900 dark:text-white">{Math.min(indexOfLastUser, filteredUsersCount)}</span> of <span className="font-semibold text-gray-900 dark:text-white">{filteredUsersCount}</span> users
                    </p>
                    <div className="flex items-center space-x-2">
                        <button 
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                                    currentPage === page 
                                        ? 'bg-electric-blue text-white shadow-lg shadow-electric-blue/20' 
                                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 border border-transparent'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button 
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-primary-gray rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">
                        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                {editingUser ? 'Edit User' : 'Create New User'}
                            </h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <form onSubmit={handleSave} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                                <input 
                                    type="email" 
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.username}
                                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                                    <input 
                                        type="password" 
                                        placeholder={editingUser ? 'Leave blank to keep' : 'Enter password'}
                                        required={!editingUser}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Availability</label>
                                    <select 
                                        value={formData.status}
                                        onChange={(e) => setFormData({ ...formData, status: e.target.value as User['status'] })}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Offline">Offline</option>
                                        <option value="Frozen">Frozen</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Account Type</label>
                                    <select 
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value as User['type'] })}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                                    >
                                        <option value="Standard">Standard</option>
                                        <option value="Premium">Premium</option>
                                        <option value="Platinum">Platinum</option>
                                    </select>
                                </div>
                            </div>
                            <div className="pt-4 flex gap-3">
                                <button 
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="flex-1 px-4 py-2.5 bg-electric-blue text-white rounded-lg font-bold hover:bg-electric-blue/80 transition-colors"
                                >
                                    {editingUser ? 'Update User' : 'Create User'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {deleteConfirmation && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
                    <AnimatedSection>
                        <div className="bg-white dark:bg-primary-gray rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden border border-white/5">
                            <div className="p-8 text-center">
                                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 15c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Confirm Destruction</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    {deleteConfirmation.type === 'bulk' 
                                        ? `You are about to permanently purge ${deleteConfirmation.ids.length} user records from the terminal. This action is irreversible.`
                                        : `You are about to permanently purge this user record from the terminal. This action is irreversible.`
                                    }
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 dark:bg-gray-800/50 flex gap-3">
                                <button 
                                    onClick={() => setDeleteConfirmation(null)}
                                    className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Abort
                                </button>
                                <button 
                                    onClick={confirmDelete}
                                    className="flex-1 px-4 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20"
                                >
                                    Confirm Purge
                                </button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            )}
        </AnimatedSection>
    );
};

export default UserManagementPage;
