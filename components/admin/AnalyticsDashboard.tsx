'use client';

import { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Users,
  Heart,
  Calendar,
  MessageSquare,
  Eye,
  MousePointer,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';

// Mock analytics data
const overviewStats = [
  {
    title: 'Total Visitors',
    value: '24,567',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    period: 'Last 30 days',
  },
  {
    title: 'Page Views',
    value: '89,234',
    change: '+8.2%',
    trend: 'up',
    icon: Eye,
    period: 'Last 30 days',
  },
  {
    title: 'Donations',
    value: '₹2,45,678',
    change: '+15.3%',
    trend: 'up',
    icon: Heart,
    period: 'Last 30 days',
  },
  {
    title: 'Avg. Session Duration',
    value: '3m 42s',
    change: '-2.1%',
    trend: 'down',
    icon: Clock,
    period: 'Last 30 days',
  },
];

const trafficSources = [
  { source: 'Organic Search', visitors: 12456, percentage: 45.2, color: 'bg-blue-500' },
  { source: 'Direct', visitors: 8234, percentage: 29.8, color: 'bg-green-500' },
  { source: 'Social Media', visitors: 4567, percentage: 16.5, color: 'bg-purple-500' },
  { source: 'Referral', visitors: 2345, percentage: 8.5, color: 'bg-orange-500' },
];

const topPages = [
  { page: '/', views: 15234, bounce_rate: 32.1, avg_time: '2m 45s' },
  { page: '/donate', views: 8765, bounce_rate: 28.5, avg_time: '4m 12s' },
  { page: '/gallery', views: 6543, bounce_rate: 45.2, avg_time: '3m 28s' },
  { page: '/volunteer', views: 5432, bounce_rate: 35.8, avg_time: '3m 55s' },
  { page: '/about', views: 4321, bounce_rate: 38.9, avg_time: '2m 18s' },
];

const deviceStats = [
  { device: 'Desktop', users: 14567, percentage: 52.8, icon: Monitor },
  { device: 'Mobile', users: 10234, percentage: 37.1, icon: Smartphone },
  { device: 'Tablet', users: 2789, percentage: 10.1, icon: Monitor },
];

const conversionFunnels = [
  { step: 'Visitors', count: 24567, percentage: 100, color: 'bg-blue-500' },
  { step: 'Engaged Users', count: 18234, percentage: 74.2, color: 'bg-green-500' },
  { step: 'Donation Page Views', count: 8765, percentage: 35.7, color: 'bg-yellow-500' },
  { step: 'Donation Form Started', count: 3456, percentage: 14.1, color: 'bg-orange-500' },
  { step: 'Donations Completed', count: 1234, percentage: 5.0, color: 'bg-red-500' },
];

export default function AnalyticsDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  return (
    <div className="space-y-6">
      {/* Period Selector */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {['7d', '30d', '90d', '1y'].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedPeriod === period
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {period === '7d' && 'Last 7 days'}
              {period === '30d' && 'Last 30 days'}
              {period === '90d' && 'Last 90 days'}
              {period === '1y' && 'Last year'}
            </button>
          ))}
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Export Report
        </button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <div
            key={stat.title}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.title}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {stat.period}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <div
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Traffic Sources
          </h3>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={source.source} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${source.color}`}></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {source.source}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {source.visitors.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 w-12 text-right">
                    {source.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Stats */}
        <div
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Device Usage
          </h3>
          <div className="space-y-4">
            {deviceStats.map((device, index) => (
              <div key={device.device} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <device.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {device.device}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {device.users.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 w-12 text-right">
                    {device.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Top Pages
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Page
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Bounce Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Avg. Time
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {topPages.map((page, index) => (
                <tr key={page.page} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {page.page}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {page.views.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {page.bounce_rate}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {page.avg_time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Conversion Funnel */}
      <div
        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Donation Conversion Funnel
        </h3>
        <div className="space-y-4">
          {conversionFunnels.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {step.step}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {step.count.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {step.percentage}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${step.color}`}
                  style={{ width: `${step.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Activity */}
      <div
        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Real-time Activity
          </h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Live</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              47
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              156
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Page Views (Last Hour)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              3
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Donations (Today)</div>
          </div>
        </div>
      </div>
    </div>
  );
}