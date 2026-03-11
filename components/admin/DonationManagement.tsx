'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Download,
  Receipt,
  Mail,
  Calendar,
  TrendingUp,
  TrendingDown,
  Heart,
  CreditCard,
  Banknote,
  Smartphone,
  Globe,
  Eye,
  Send,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';

interface Donation {
  id: string;
  donorName: string;
  donorEmail: string;
  amount: number;
  currency: string;
  method: 'card' | 'upi' | 'netbanking' | 'cash' | 'cheque';
  status: 'completed' | 'pending' | 'failed' | 'refunded';
  date: string;
  campaign?: string;
  receiptSent: boolean;
  taxExemption: boolean;
  notes?: string;
  transactionId?: string;
}

// Mock donation data
const mockDonations: Donation[] = [
  {
    id: 'DON-2024-001',
    donorName: 'Rajesh Kumar',
    donorEmail: 'rajesh.kumar@email.com',
    amount: 5000,
    currency: 'INR',
    method: 'upi',
    status: 'completed',
    date: '2024-03-11T10:30:00Z',
    campaign: 'Emergency Services',
    receiptSent: true,
    taxExemption: true,
    transactionId: 'TXN123456789',
  },
  {
    id: 'DON-2024-002',
    donorName: 'Priya Sharma',
    donorEmail: 'priya.sharma@email.com',
    amount: 10000,
    currency: 'INR',
    method: 'card',
    status: 'completed',
    date: '2024-03-10T15:45:00Z',
    campaign: 'Adopt a City',
    receiptSent: true,
    taxExemption: true,
    transactionId: 'TXN123456790',
  },
  {
    id: 'DON-2024-003',
    donorName: 'Anonymous',
    donorEmail: 'anonymous@donor.com',
    amount: 2500,
    currency: 'INR',
    method: 'netbanking',
    status: 'completed',
    date: '2024-03-09T09:15:00Z',
    receiptSent: false,
    taxExemption: false,
    transactionId: 'TXN123456791',
  },
  {
    id: 'DON-2024-004',
    donorName: 'Amit Patel',
    donorEmail: 'amit.patel@email.com',
    amount: 1000,
    currency: 'INR',
    method: 'upi',
    status: 'pending',
    date: '2024-03-11T14:20:00Z',
    campaign: 'General Fund',
    receiptSent: false,
    taxExemption: true,
    transactionId: 'TXN123456792',
  },
  {
    id: 'DON-2024-005',
    donorName: 'Sunita Devi',
    donorEmail: 'sunita.devi@email.com',
    amount: 500,
    currency: 'INR',
    method: 'cash',
    status: 'completed',
    date: '2024-03-08T11:00:00Z',
    receiptSent: true,
    taxExemption: false,
    notes: 'Cash donation at office',
  },
];

const donationStats = [
  {
    title: 'Total Donations',
    value: '₹2,45,678',
    change: '+12.5%',
    trend: 'up',
    icon: Heart,
    period: 'This month',
  },
  {
    title: 'Total Donors',
    value: '1,234',
    change: '+8.2%',
    trend: 'up',
    icon: Globe,
    period: 'This month',
  },
  {
    title: 'Average Donation',
    value: '₹3,456',
    change: '+5.1%',
    trend: 'up',
    icon: TrendingUp,
    period: 'This month',
  },
  {
    title: 'Pending Receipts',
    value: '23',
    change: '-15.3%',
    trend: 'down',
    icon: Receipt,
    period: 'This month',
  },
];

const paymentMethods = [
  { value: 'all', label: 'All Methods' },
  { value: 'card', label: 'Credit/Debit Card' },
  { value: 'upi', label: 'UPI' },
  { value: 'netbanking', label: 'Net Banking' },
  { value: 'cash', label: 'Cash' },
  { value: 'cheque', label: 'Cheque' },
];

const donationStatuses = [
  { value: 'all', label: 'All Status' },
  { value: 'completed', label: 'Completed' },
  { value: 'pending', label: 'Pending' },
  { value: 'failed', label: 'Failed' },
  { value: 'refunded', label: 'Refunded' },
];

export default function DonationManagement() {
  const [donations, setDonations] = useState<Donation[]>(mockDonations);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedDonations, setSelectedDonations] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState('30d');

  const filteredDonations = donations.filter((donation) => {
    const matchesSearch =
      donation.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.donorEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMethod = selectedMethod === 'all' || donation.method === selectedMethod;
    const matchesStatus = selectedStatus === 'all' || donation.status === selectedStatus;
    return matchesSearch && matchesMethod && matchesStatus;
  });

  const handleSelectDonation = (donationId: string) => {
    setSelectedDonations((prev) =>
      prev.includes(donationId)
        ? prev.filter((id) => id !== donationId)
        : [...prev, donationId]
    );
  };

  const handleSelectAll = () => {
    if (selectedDonations.length === filteredDonations.length) {
      setSelectedDonations([]);
    } else {
      setSelectedDonations(filteredDonations.map((donation) => donation.id));
    }
  };

  const handleSendReceipt = (donationId: string) => {
    setDonations((prev) =>
      prev.map((donation) =>
        donation.id === donationId ? { ...donation, receiptSent: true } : donation
      )
    );
    toast.success('Receipt sent successfully');
  };

  const handleBulkSendReceipts = () => {
    if (selectedDonations.length === 0) return;

    setDonations((prev) =>
      prev.map((donation) =>
        selectedDonations.includes(donation.id) ? { ...donation, receiptSent: true } : donation
      )
    );
    toast.success(`Receipts sent to ${selectedDonations.length} donor(s)`);
    setSelectedDonations([]);
  };

  const getMethodIcon = (method: string) => {
    switch (method) {
      case 'card':
        return CreditCard;
      case 'upi':
        return Smartphone;
      case 'netbanking':
        return Globe;
      case 'cash':
        return Banknote;
      case 'cheque':
        return Receipt;
      default:
        return CreditCard;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-700 bg-green-100 dark:bg-green-900/20';
      case 'pending':
        return 'text-yellow-700 bg-yellow-100 dark:bg-yellow-900/20';
      case 'failed':
        return 'text-red-700 bg-red-100 dark:bg-red-900/20';
      case 'refunded':
        return 'text-purple-700 bg-purple-100 dark:bg-purple-900/20';
      default:
        return 'text-gray-700 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  const totalAmount = filteredDonations
    .filter((d) => d.status === 'completed')
    .reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {donationStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{stat.period}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search donations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Method Filter */}
          <select
            value={selectedMethod}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {paymentMethods.map((method) => (
              <option key={method.value} value={method.value}>
                {method.label}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {donationStatuses.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>

          {/* Date Range */}
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredDonations.length} donations
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-4">
              Total: ₹{totalAmount.toLocaleString()}
            </span>
          </div>
          {selectedDonations.length > 0 && (
            <button
              onClick={handleBulkSendReceipts}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Receipts ({selectedDonations.length})
            </button>
          )}
        </div>
      </div>

      {/* Donations Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Donations
            </h2>
            <button
              onClick={handleSelectAll}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              {selectedDonations.length === filteredDonations.length
                ? 'Deselect All'
                : 'Select All'}
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={
                      selectedDonations.length === filteredDonations.length &&
                      filteredDonations.length > 0
                    }
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Donation ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Donor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Receipt
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredDonations.map((donation, index) => {
                const MethodIcon = getMethodIcon(donation.method);

                return (
                  <motion.tr
                    key={donation.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedDonations.includes(donation.id)}
                        onChange={() => handleSelectDonation(donation.id)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {donation.id}
                      </div>
                      {donation.transactionId && (
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          {donation.transactionId}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {donation.donorName}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {donation.donorEmail}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900 dark:text-white">
                        ₹{donation.amount.toLocaleString()}
                      </div>
                      {donation.campaign && (
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          {donation.campaign}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <MethodIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">
                          {donation.method}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={cn(
                          'inline-flex px-2 py-1 rounded-full text-xs font-medium',
                          getStatusColor(donation.status)
                        )}
                      >
                        {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                      {new Date(donation.date).toLocaleDateString()}
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        {new Date(donation.date).toLocaleTimeString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {donation.receiptSent ? (
                        <span className="inline-flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                          <Receipt className="w-3 h-3" />
                          Sent
                        </span>
                      ) : (
                        <button
                          onClick={() => handleSendReceipt(donation.id)}
                          className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <Send className="w-3 h-3" />
                          Send
                        </button>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                          <Receipt className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                          <Mail className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}