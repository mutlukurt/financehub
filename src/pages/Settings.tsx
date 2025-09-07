import React, { useState } from 'react';
import { 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  CreditCard, 
  Download, 
  Trash2,
  Moon,
  Sun,
  Smartphone,
  Mail,
  Lock
} from 'lucide-react';

interface SettingsProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'private',
    dataSharing: false,
    analytics: true
  });

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const handlePrivacyChange = (key: string, value: boolean | string) => {
    setPrivacy(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 pb-20 lg:pb-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Customize your FinanceHub experience
        </p>
      </div>

      <div className="space-y-6">
        {/* Appearance */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Palette className="h-5 w-5 text-blue-600" />
            Appearance
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Dark Mode</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Switch between light and dark themes</p>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
                {isDarkMode ? (
                  <Moon className="absolute left-1 h-3 w-3 text-blue-600" />
                ) : (
                  <Sun className="absolute right-1 h-3 w-3 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Bell className="h-5 w-5 text-blue-600" />
            Notifications
          </h3>
          <div className="space-y-4">
            {[
              { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email', icon: Mail },
              { key: 'push', label: 'Push Notifications', desc: 'Get notified on your device', icon: Smartphone },
              { key: 'sms', label: 'SMS Notifications', desc: 'Receive text messages', icon: Smartphone },
              { key: 'marketing', label: 'Marketing Emails', desc: 'Promotional content and offers', icon: Mail }
            ].map(({ key, label, desc, icon: Icon }) => (
              <div key={key} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{label}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications[key as keyof typeof notifications]}
                    onChange={(e) => handleNotificationChange(key, e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            Privacy & Security
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Profile Visibility
              </label>
              <select
                value={privacy.profileVisibility}
                onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="friends">Friends Only</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Data Sharing</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Share anonymized data for improvements</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={privacy.dataSharing}
                  onChange={(e) => handlePrivacyChange('dataSharing', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Analytics</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Help us improve with usage analytics</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={privacy.analytics}
                  onChange={(e) => handlePrivacyChange('analytics', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="pt-4 space-y-2">
              <button className="w-full text-left p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3">
                <Lock className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Change Password</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Update your account password</p>
                </div>
              </button>
              <button className="w-full text-left p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3">
                <Shield className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Add extra security to your account</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Account Management */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-blue-600" />
            Account Management
          </h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3">
              <Download className="h-4 w-4 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Export Data</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Download your account data</p>
              </div>
            </button>
            <button className="w-full text-left p-3 border border-red-200 dark:border-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-3">
              <Trash2 className="h-4 w-4 text-red-600" />
              <div>
                <p className="font-medium text-red-600">Delete Account</p>
                <p className="text-sm text-red-500">Permanently delete your account and data</p>
              </div>
            </button>
          </div>
        </div>

        {/* Language & Region */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-600" />
            Language & Region
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Language
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="tr">Türkçe</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Currency
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="TRY">TRY (₺)</option>
                <option value="JPY">JPY (¥)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};