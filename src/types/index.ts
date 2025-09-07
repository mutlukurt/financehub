export interface User {
  name: string;
  avatar: string;
}

export interface Metrics {
  cardTransfer: string;
  bankTransfer: string;
  sameBank: string;
}

export interface Transaction {
  id: string;
  type: string;
  description: string;
  date: string;
  amount: number;
  icon: string;
}

export interface Transfer {
  id: string;
  recipient: string;
  avatar: string;
  date: string;
  amount: number;
}

export interface CardDetails {
  number: string;
  holder: string;
  expiry: string;
}

export interface DashboardData {
  brandName: string;
  user: User;
  metrics: Metrics;
  savedThisMonth: string;
  transactions: Transaction[];
  transfers: Transfer[];
  planProgress: number;
  cardDetails: CardDetails;
  savingsChart: { period: string; amount: number }[];
}

export type TimePeriod = 'Day' | 'Week' | 'Month' | 'Year';

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  active?: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  joinDate: string;
  accountType: 'Basic' | 'Premium' | 'Enterprise';
  preferences: {
    notifications: boolean;
    darkMode: boolean;
    language: string;
    currency: string;
  };
}

export interface UtilityTool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'Calculator' | 'Converter' | 'Tracker' | 'Planner';
  isActive: boolean;
}

export interface Message {
  id: string;
  sender: string;
  subject: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  isImportant: boolean;
  avatar: string;
}

export interface AnalyticsData {
  totalTransactions: number;
  totalAmount: number;
  monthlyGrowth: number;
  categoryBreakdown: { category: string; amount: number; percentage: number }[];
  monthlyTrends: { month: string; income: number; expenses: number }[];
}

export interface SupportTicket {
  id: string;
  title: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  createdAt: string;
  updatedAt: string;
  category: string;
}