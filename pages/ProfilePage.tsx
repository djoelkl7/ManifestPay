
import React, { useState, useRef } from 'react';
import { useUser } from '../contexts/UserContext';
import { useForm } from '../hooks/useForm';
import AnimatedSection from '../components/AnimatedSection';

type Tab = 'profile' | 'security' | 'card' | 'sub-profiles';

interface SubProfile {
  id: string;
  name: string;
  role: string;
  status: 'Active' | 'Inactive';
  username?: string;
  cardNumber?: string;
}

const ProfilePage: React.FC = () => {
  const { user, updateUser } = useUser();
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [subProfiles, setSubProfiles] = useState<SubProfile[]>([
    { id: '1', name: 'Ahmad Dolmat', role: 'Family Member', status: 'Active', username: 'ahmad_d', cardNumber: '**** **** **** 1122' },
    { id: '2', name: 'Siti Dolmat', role: 'Dependent', status: 'Active', username: 'siti_d', cardNumber: '**** **** **** 3344' },
  ]);
  const [showAddSubProfile, setShowAddSubProfile] = useState(false);
  const [newSubProfile, setNewSubProfile] = useState({ name: '', role: '', username: '', password: '', cardNumber: '' });

  const profileForm = useForm({
    initialValues: {
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || '',
      dob: user?.dob || '',
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.name.trim()) errors.name = 'Name is required.';
      if (!values.email.trim()) errors.email = 'Email is required.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Invalid email.';
      return errors;
    },
    onSubmit: (values) => {
      setTimeout(() => {
        updateUser(values);
        setUpdateSuccess(true);
        setTimeout(() => setUpdateSuccess(false), 3000);
        profileForm.setIsSubmitting(false);
      }, 1000);
    },
  });

  const securityForm = useForm({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors: any = {};
      if (values.newPassword && values.newPassword.length < 8) errors.newPassword = 'Password must be at least 8 characters.';
      if (values.newPassword !== values.confirmPassword) errors.confirmPassword = 'Passwords do not match.';
      return errors;
    },
    onSubmit: (values) => {
      setTimeout(() => {
        alert('Password updated successfully!');
        securityForm.setIsSubmitting(false);
        securityForm.resetForm();
      }, 1000);
    },
  });

  const cardForm = useForm({
    initialValues: {
      pin: '****',
      limit: '5000',
    },
    validate: (values) => {
      const errors: any = {};
      if (values.pin.length !== 4 && values.pin !== '****') errors.pin = 'PIN must be 4 digits.';
      return errors;
    },
    onSubmit: (values) => {
      setTimeout(() => {
        alert('Card settings updated!');
        cardForm.setIsSubmitting(false);
      }, 1000);
    },
  });

  const handleUploadClick = () => fileInputRef.current?.click();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => updateUser({ avatar: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  const handleAddSubProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSubProfile.name && newSubProfile.role) {
      setSubProfiles([...subProfiles, { ...newSubProfile, id: Date.now().toString(), status: 'Active' }]);
      setNewSubProfile({ name: '', role: '' });
      setShowAddSubProfile(false);
    }
  };

  if (!user) return null;

  return (
    <main className="min-h-screen bg-light-bg dark:bg-primary-dark py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection>
          <div className="bg-white dark:bg-primary-gray rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="p-8 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="relative group">
                  {user.avatar ? (
                    <img src={user.avatar} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-primary-red" />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-4 border-gray-200 dark:border-gray-700">
                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
                    </div>
                  )}
                  <button onClick={handleUploadClick} className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Upload new profile picture">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </button>
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                </div>
                <div className="flex gap-4">
                  <button onClick={handleUploadClick} className="text-xs font-bold text-primary-red hover:underline">Change Photo</button>
                  {user.avatar && (
                    <button onClick={() => updateUser({ avatar: undefined })} className="text-xs font-bold text-gray-500 hover:text-red-500 hover:underline">Remove</button>
                  )}
                </div>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
                <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
                <span className="mt-2 inline-block px-3 py-1 bg-primary-red/10 text-primary-red text-xs font-bold rounded-full uppercase tracking-wider">Premium Member</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-100 dark:border-gray-800 overflow-x-auto">
              {(['profile', 'security', 'card', 'sub-profiles'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
                    activeTab === tab 
                      ? 'border-primary-red text-primary-red' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-8">
              {activeTab === 'profile' && (
                <form onSubmit={profileForm.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                    <input name="name" value={profileForm.values.name} onChange={profileForm.handleChange} className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                    <input name="email" value={profileForm.values.email} onChange={profileForm.handleChange} className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                    <input name="phone" value={profileForm.values.phone} onChange={profileForm.handleChange} className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Date of Birth</label>
                    <input type="date" name="dob" value={profileForm.values.dob} onChange={profileForm.handleChange} className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Residential Address</label>
                    <textarea name="address" value={profileForm.values.address} onChange={profileForm.handleChange} rows={3} className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none" />
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button type="submit" disabled={profileForm.isSubmitting} className="bg-primary-red text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors disabled:opacity-50">
                      {profileForm.isSubmitting ? 'Saving...' : 'Save Profile Changes'}
                    </button>
                    {updateSuccess && <span className="ml-4 text-green-500 font-medium">Changes saved!</span>}
                  </div>
                </form>
              )}

              {activeTab === 'security' && (
                <form onSubmit={securityForm.handleSubmit} className="max-w-md space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Current Password</label>
                    <input type="password" name="currentPassword" value={securityForm.values.currentPassword} onChange={securityForm.handleChange} className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">New Password</label>
                    <input type="password" name="newPassword" value={securityForm.values.newPassword} onChange={securityForm.handleChange} className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none" />
                    {securityForm.errors.newPassword && <p className="text-xs text-red-500">{securityForm.errors.newPassword}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Confirm New Password</label>
                    <input type="password" name="confirmPassword" value={securityForm.values.confirmPassword} onChange={securityForm.handleChange} className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none" />
                    {securityForm.errors.confirmPassword && <p className="text-xs text-red-500">{securityForm.errors.confirmPassword}</p>}
                  </div>
                  <button type="submit" disabled={securityForm.isSubmitting} className="w-full bg-primary-red text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors">
                    Update Password
                  </button>
                </form>
              )}

              {activeTab === 'card' && user.card && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="relative w-full h-56 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white shadow-2xl overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-20">
                         <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-xl font-bold tracking-widest text-white">ManifestPay</span>
                        <span className="text-sm opacity-60 italic">{user.card.type}</span>
                      </div>
                      <div className="mt-8">
                        <p className="text-2xl font-mono tracking-[0.2em]">{user.card.number}</p>
                      </div>
                      <div className="mt-8 flex justify-between items-end">
                        <div>
                          <p className="text-[10px] uppercase opacity-50">Card Holder</p>
                          <p className="text-sm font-medium uppercase">{user.name}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase opacity-50">Expires</p>
                          <p className="text-sm font-medium">{user.card.expiry}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button onClick={() => updateUser({ card: { ...user.card!, isFrozen: !user.card!.isFrozen } })} className={`flex-1 py-3 rounded-xl font-bold transition-colors ${user.card.isFrozen ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'}`}>
                        {user.card.isFrozen ? 'Unfreeze Card' : 'Freeze Card'}
                      </button>
                      <button className="flex-1 py-3 bg-primary-red/10 text-primary-red rounded-xl font-bold hover:bg-primary-red/20 transition-colors">
                        Report Lost
                      </button>
                    </div>
                  </div>

                  <form onSubmit={cardForm.handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Card Holder Name</label>
                      <input type="text" name="name" value={user.name} readOnly className="w-full p-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none opacity-60" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Expiry Date</label>
                            <input type="text" value={user.card.expiry} readOnly className="w-full p-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none opacity-60" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">CVV</label>
                            <input type="password" value={user.card.cvv} readOnly className="w-full p-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none opacity-60" />
                        </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Card PIN</label>
                      <input type="password" name="pin" value={cardForm.values.pin} onChange={cardForm.handleChange} className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none" />
                      {cardForm.errors.pin && <p className="text-xs text-red-500">{cardForm.errors.pin}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Daily Spending Limit ($)</label>
                      <input type="number" name="limit" value={cardForm.values.limit} onChange={cardForm.handleChange} className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none" />
                    </div>
                    <button type="submit" disabled={cardForm.isSubmitting} className="w-full bg-primary-red text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors">
                      Update Card Settings
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'sub-profiles' && (
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Linked Profiles</h3>
                    <button onClick={() => setShowAddSubProfile(true)} className="bg-primary-red text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors text-sm">
                      + Create New Profile
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subProfiles.map(profile => (
                      <div key={profile.id} className="p-4 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl flex justify-between items-center">
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white">{profile.name}</p>
                          <p className="text-xs text-gray-500">{profile.role}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">{profile.status}</span>
                          <button className="text-gray-400 hover:text-primary-red transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {showAddSubProfile && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                      <div className="bg-white dark:bg-primary-gray rounded-2xl p-8 w-full max-w-md shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create Sub-Profile</h3>
                        <form onSubmit={handleAddSubProfile} className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Profile Name</label>
                            <input 
                              required
                              value={newSubProfile.name}
                              onChange={e => setNewSubProfile({...newSubProfile, name: e.target.value})}
                              className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none" 
                              placeholder="e.g. John Doe Jr."
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Role / Relationship</label>
                            <select 
                              required
                              value={newSubProfile.role}
                              onChange={e => setNewSubProfile({...newSubProfile, role: e.target.value})}
                              className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none"
                            >
                              <option value="">Select Role</option>
                              <option value="Family Member">Family Member</option>
                              <option value="Dependent">Dependent</option>
                              <option value="Business Partner">Business Partner</option>
                            </select>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                                <input 
                                    required
                                    value={newSubProfile.username}
                                    onChange={e => setNewSubProfile({...newSubProfile, username: e.target.value})}
                                    className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none" 
                                    placeholder="username"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                                <input 
                                    type="password"
                                    required
                                    value={newSubProfile.password}
                                    onChange={e => setNewSubProfile({...newSubProfile, password: e.target.value})}
                                    className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none" 
                                    placeholder="password"
                                />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Debit Card Number</label>
                            <input 
                                required
                                value={newSubProfile.cardNumber}
                                onChange={e => setNewSubProfile({...newSubProfile, cardNumber: e.target.value})}
                                className="w-full p-3 bg-gray-50 dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-red outline-none" 
                                placeholder="0000 0000 0000 0000"
                            />
                          </div>
                          <div className="flex gap-4 pt-4">
                            <button type="button" onClick={() => setShowAddSubProfile(false)} className="flex-1 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                              Cancel
                            </button>
                            <button type="submit" className="flex-1 py-3 bg-primary-red text-white rounded-xl font-bold hover:bg-red-700 transition-colors">
                              Create Profile
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default ProfilePage;
