import { DashboardData } from '../types';
import { UserProfile, UtilityTool, Message, AnalyticsData, SupportTicket } from '../types';

export const mockData: DashboardData = {
  brandName: "FinanceHub",
  user: {
    name: "John Smith",
    avatar: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
  },
  metrics: {
    cardTransfer: "$2,450",
    bankTransfer: "$890",
    sameBank: "$345"
  },
  savedThisMonth: "$567.8",
  transactions: [
    {
      id: "1",
      type: "Shopping",
      description: "Grocery Store Purchase",
      date: "Today, 14:25",
      amount: -125,
      icon: "ShoppingBag"
    },
    {
      id: "2",
      type: "Salary",
      description: "Monthly Salary Payment",
      date: "Today, 09:00",
      amount: 3500,
      icon: "DollarSign"
    },
    {
      id: "3",
      type: "Subscription",
      description: "Netflix Subscription",
      date: "Yesterday, 18:30",
      amount: -15.99,
      icon: "Tv"
    },
    {
      id: "4",
      type: "Transfer",
      description: "From Savings Account",
      date: "Yesterday, 10:15",
      amount: 200,
      icon: "ArrowDownLeft"
    },
    {
      id: "5",
      type: "Utilities",
      description: "Electric Bill Payment",
      date: "2 days ago, 16:45",
      amount: -89.50,
      icon: "Zap"
    }
  ],
  transfers: [
    {
      id: "1",
      recipient: "Alice Johnson",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      date: "Today, 15:30",
      amount: 75
    },
    {
      id: "2",
      recipient: "Bob Williams",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      date: "Today, 10:15",
      amount: -50
    },
    {
      id: "3",
      recipient: "Carol Davis",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      date: "Yesterday, 20:45",
      amount: 150
    },
    {
      id: "4",
      recipient: "David Miller",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      date: "Yesterday, 12:30",
      amount: -25
    }
  ],
  planProgress: 85,
  cardDetails: {
    number: "4532 1234 5678 9012",
    holder: "John Smith",
    expiry: "08/26"
  },
  savingsChart: [
    { period: "Jan", amount: 120 },
    { period: "Feb", amount: 190 },
    { period: "Mar", amount: 280 },
    { period: "Apr", amount: 220 },
    { period: "May", amount: 350 },
    { period: "Jun", amount: 420 },
    { period: "Jul", amount: 380 },
    { period: "Aug", amount: 460 },
    { period: "Sep", amount: 520 },
    { period: "Oct", amount: 480 },
    { period: "Nov", amount: 540 },
    { period: "Dec", amount: 567 }
  ]
};

export const mockUserProfile: UserProfile = {
  id: "user-001",
  name: "John Smith",
  email: "john.smith@example.com",
  phone: "+1 (555) 123-4567",
  avatar: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
  joinDate: "2022-03-15",
  accountType: "Premium",
  preferences: {
    notifications: true,
    darkMode: false,
    language: "English",
    currency: "USD"
  }
};

export const mockUtilities: UtilityTool[] = [
  {
    id: "util-001",
    name: "Loan Calculator",
    description: "Calculate monthly payments and total interest for loans",
    icon: "Calculator",
    category: "Calculator",
    isActive: true
  },
  {
    id: "util-002",
    name: "Currency Converter",
    description: "Convert between different currencies with live rates",
    icon: "ArrowLeftRight",
    category: "Converter",
    isActive: true
  },
  {
    id: "util-003",
    name: "Budget Tracker",
    description: "Track your monthly budget and expenses",
    icon: "PieChart",
    category: "Tracker",
    isActive: true
  },
  {
    id: "util-004",
    name: "Investment Planner",
    description: "Plan your investment portfolio and track returns",
    icon: "TrendingUp",
    category: "Planner",
    isActive: false
  }
];

export const mockMessages: Message[] = [
  {
    id: "msg-001",
    sender: "FinanceHub Support",
    subject: "Welcome to Premium Account",
    content: "Congratulations on upgrading to Premium! You now have access to advanced features...",
    timestamp: "2024-01-15T10:30:00Z",
    isRead: false,
    isImportant: true,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
  },
  {
    id: "msg-002",
    sender: "Security Team",
    subject: "Security Alert: New Login Detected",
    content: "We detected a new login to your account from a new device...",
    timestamp: "2024-01-14T15:45:00Z",
    isRead: true,
    isImportant: true,
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
  },
  {
    id: "msg-003",
    sender: "Marketing Team",
    subject: "New Features Available",
    content: "Check out our latest features including advanced analytics and reporting tools...",
    timestamp: "2024-01-13T09:15:00Z",
    isRead: true,
    isImportant: false,
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
  }
];

export const mockAnalytics: AnalyticsData = {
  totalTransactions: 1247,
  totalAmount: 45678.90,
  monthlyGrowth: 12.5,
  categoryBreakdown: [
    { category: "Food & Dining", amount: 1250, percentage: 25 },
    { category: "Transportation", amount: 800, percentage: 16 },
    { category: "Shopping", amount: 950, percentage: 19 },
    { category: "Bills & Utilities", amount: 600, percentage: 12 },
    { category: "Entertainment", amount: 400, percentage: 8 },
    { category: "Others", amount: 1000, percentage: 20 }
  ],
  monthlyTrends: [
    { month: "Jan", income: 5000, expenses: 3200 },
    { month: "Feb", income: 5200, expenses: 3400 },
    { month: "Mar", income: 4800, expenses: 3100 },
    { month: "Apr", income: 5500, expenses: 3600 },
    { month: "May", income: 5300, expenses: 3300 },
    { month: "Jun", income: 5700, expenses: 3800 }
  ]
};

export const mockSupportTickets: SupportTicket[] = [
  {
    id: "ticket-001",
    title: "Unable to transfer funds",
    description: "I'm having trouble transferring money to my savings account. The transaction keeps failing.",
    status: "In Progress",
    priority: "High",
    createdAt: "2024-01-15T14:30:00Z",
    updatedAt: "2024-01-15T16:45:00Z",
    category: "Technical Issue"
  },
  {
    id: "ticket-002",
    title: "Question about premium features",
    description: "I'd like to know more about the premium account benefits and pricing.",
    status: "Resolved",
    priority: "Medium",
    createdAt: "2024-01-14T10:15:00Z",
    updatedAt: "2024-01-14T11:30:00Z",
    category: "General Inquiry"
  },
  {
    id: "ticket-003",
    title: "Mobile app login issues",
    description: "I can't log into the mobile app using my credentials.",
    status: "Open",
    priority: "Medium",
    createdAt: "2024-01-13T09:20:00Z",
    updatedAt: "2024-01-13T09:20:00Z",
    category: "Account Access"
  }
];