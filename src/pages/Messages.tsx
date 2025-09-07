import React, { useState } from 'react';
import { Search, Star, Archive, Trash2, Reply, Forward, MoreHorizontal } from 'lucide-react';
import { mockMessages } from '../data/mockData';
import { Message } from '../types';

export const Messages: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'unread' | 'important'>('all');

  const filteredMessages = mockMessages.filter(message => {
    const matchesSearch = message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.sender.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'unread') return matchesSearch && !message.isRead;
    if (filter === 'important') return matchesSearch && message.isImportant;
    return matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 pb-24 lg:pb-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Messages
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Stay updated with important notifications and communications
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        {/* Messages List */}
        <div className={`lg:col-span-1 ${selectedMessage ? 'hidden lg:block' : ''}`}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col">
            {/* Search and Filters */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-2">
                {[
                  { key: 'all', label: 'All' },
                  { key: 'unread', label: 'Unread' },
                  { key: 'important', label: 'Important' }
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setFilter(key as any)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      filter === key
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => setSelectedMessage(message)}
                  className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    selectedMessage?.id === message.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                  } ${!message.isRead ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={message.avatar}
                      alt={message.sender}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className={`font-medium truncate ${
                          !message.isRead ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {message.sender}
                        </p>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {message.isImportant && (
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          )}
                          {!message.isRead && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className={`text-sm truncate mb-1 ${
                        !message.isRead ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {message.subject}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 truncate">
                        {message.content}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        {formatDate(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Detail */}
        <div className={`lg:col-span-2 ${!selectedMessage ? 'hidden lg:block' : ''}`}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col">
            {selectedMessage ? (
              <>
                {/* Message Header */}
                <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => setSelectedMessage(null)}
                      className="lg:hidden text-blue-600 hover:text-blue-700 font-medium"
                    >
                      ← Back
                    </button>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <Archive className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <Trash2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <MoreHorizontal className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <img
                      src={selectedMessage.avatar}
                      alt={selectedMessage.sender}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {selectedMessage.sender}
                        </h2>
                        {selectedMessage.isImportant && (
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedMessage.subject}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {formatDate(selectedMessage.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message Content */}
                <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedMessage.content}
                    </p>
                    
                    {selectedMessage.id === 'msg-001' && (
                      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Premium Features Now Available:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                          <li>Advanced Analytics Dashboard</li>
                          <li>Custom Budget Categories</li>
                          <li>Investment Portfolio Tracking</li>
                          <li>Priority Customer Support</li>
                          <li>Export Data in Multiple Formats</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Message Actions */}
                <div className="p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      <Reply className="h-4 w-4" />
                      Reply
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors">
                      <Forward className="h-4 w-4" />
                      Forward
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Select a message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Choose a message from the list to view its contents
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};