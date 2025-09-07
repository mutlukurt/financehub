import React, { useState } from 'react';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Search, 
  ChevronDown, 
  ChevronRight,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react';
import { mockSupportTickets } from '../data/mockData';

export const Support: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'faq' | 'tickets' | 'contact'>('faq');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [newTicket, setNewTicket] = useState({
    title: '',
    description: '',
    category: 'Technical Issue',
    priority: 'Medium'
  });

  const faqs = [
    {
      question: "How do I transfer money to another account?",
      answer: "To transfer money, go to the Dashboard, click on 'Transfer' in the metrics section, enter the recipient details, amount, and confirm the transaction. You'll receive a confirmation email once the transfer is complete."
    },
    {
      question: "What are the transaction limits?",
      answer: "Daily transaction limits vary by account type: Basic accounts have a $5,000 daily limit, Premium accounts have a $25,000 limit, and Enterprise accounts have custom limits. You can view your specific limits in Settings."
    },
    {
      question: "How do I upgrade to Premium?",
      answer: "Click the 'Upgrade to Pro' button in the sidebar or go to Settings > Account Management. Choose your preferred plan and complete the payment process. Premium features will be activated immediately."
    },
    {
      question: "Is my financial data secure?",
      answer: "Yes, we use bank-level encryption (256-bit SSL) to protect your data. We're also compliant with PCI DSS standards and never store your banking credentials on our servers."
    },
    {
      question: "How do I export my transaction history?",
      answer: "Go to Settings > Account Management and click 'Export Data'. You can choose the date range and format (CSV, PDF, or Excel). The export will be emailed to your registered address."
    },
    {
      question: "What should I do if I notice unauthorized transactions?",
      answer: "Immediately contact our support team and report the unauthorized transactions. We'll freeze your account temporarily and investigate. You're protected by our fraud guarantee policy."
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'In Progress': return <AlertCircle className="h-4 w-4 text-blue-500" />;
      case 'Resolved': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Closed': return <XCircle className="h-4 w-4 text-gray-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'text-red-600 bg-red-100 dark:bg-red-900/30';
      case 'High': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/30';
      case 'Medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
      case 'Low': return 'text-green-600 bg-green-100 dark:bg-green-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-700';
    }
  };

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit to backend
    console.log('New ticket:', newTicket);
    setNewTicket({ title: '', description: '', category: 'Technical Issue', priority: 'Medium' });
    alert('Support ticket submitted successfully!');
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 pb-24 lg:pb-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Support Center
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Get help with your account and find answers to common questions
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
          {[
            { key: 'faq', label: 'FAQ', icon: HelpCircle },
            { key: 'tickets', label: 'Support Tickets', icon: MessageCircle },
            { key: 'contact', label: 'Contact Us', icon: Phone }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === key
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Tab */}
      {activeTab === 'faq' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-medium text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    {expandedFaq === index ? (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Support Tickets Tab */}
      {activeTab === 'tickets' && (
        <div className="space-y-6">
          {/* Create New Ticket */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Plus className="h-5 w-5 text-blue-600" />
              Create New Ticket
            </h3>
            <form onSubmit={handleSubmitTicket} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={newTicket.category}
                    onChange={(e) => setNewTicket(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Technical Issue">Technical Issue</option>
                    <option value="Account Access">Account Access</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Billing">Billing</option>
                    <option value="Feature Request">Feature Request</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Priority
                  </label>
                  <select
                    value={newTicket.priority}
                    onChange={(e) => setNewTicket(prev => ({ ...prev, priority: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Critical">Critical</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={newTicket.title}
                  onChange={(e) => setNewTicket(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief description of your issue"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  value={newTicket.description}
                  onChange={(e) => setNewTicket(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Please provide detailed information about your issue"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Submit Ticket
              </button>
            </form>
          </div>

          {/* Existing Tickets */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Your Support Tickets
            </h3>
            <div className="space-y-4">
              {mockSupportTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        {ticket.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {ticket.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Created: {new Date(ticket.createdAt).toLocaleDateString()}</span>
                        <span>Updated: {new Date(ticket.updatedAt).toLocaleDateString()}</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                          {ticket.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority}
                      </span>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(ticket.status)}
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {ticket.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contact Tab */}
      {activeTab === 'contact' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Phone Support</h4>
                  <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Email Support</h4>
                  <p className="text-gray-600 dark:text-gray-300">support@financehub.com</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                  <MessageCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Live Chat</h4>
                  <p className="text-gray-600 dark:text-gray-300">Available 24/7</p>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Start Chat →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Business Hours
            </h3>
            <div className="space-y-4">
              {[
                { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
                { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
                { day: 'Sunday', hours: 'Closed' },
                { day: 'Holidays', hours: 'Limited Support' }
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                  <span className="font-medium text-gray-900 dark:text-white">{day}</span>
                  <span className="text-gray-600 dark:text-gray-300">{hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2">
                Emergency Support
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                For urgent security issues or account emergencies, call our 24/7 emergency line: 
                <span className="font-semibold"> +1 (555) 911-HELP</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};