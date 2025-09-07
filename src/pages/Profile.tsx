import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, Shield, Settings, Camera, Save, Edit3 } from 'lucide-react';
import { mockUserProfile } from '../data/mockData';

export const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(mockUserProfile);

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setProfile(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      setProfile(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 pb-20 lg:pb-8">
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Profile Settings
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Manage your account information and preferences
            </p>
          </div>
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105"
          >
            {isEditing ? <Save className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-900"
                />
                <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {profile.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{profile.email}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                profile.accountType === 'Premium' 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}>
                {profile.accountType} Account
              </span>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white font-medium">{profile.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white font-medium">{profile.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white font-medium">{profile.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Member Since
                </label>
                <p className="text-gray-900 dark:text-white font-medium">
                  {new Date(profile.joinDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Settings className="h-5 w-5 text-blue-600" />
              Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email Notifications</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Receive email updates about your account</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.preferences.notifications}
                    onChange={(e) => handleInputChange('preferences.notifications', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Language
                  </label>
                  <select
                    value={profile.preferences.language}
                    onChange={(e) => handleInputChange('preferences.language', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Currency
                  </label>
                  <select
                    value={profile.preferences.currency}
                    onChange={(e) => handleInputChange('preferences.currency', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="JPY">JPY (¥)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Security
            </h3>
            <div className="space-y-4">
              <button className="w-full text-left p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Change Password</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Update your account password</p>
                  </div>
                  <div className="text-blue-600">→</div>
                </div>
              </button>
              <button className="w-full text-left p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Add an extra layer of security</p>
                  </div>
                  <div className="text-blue-600">→</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};