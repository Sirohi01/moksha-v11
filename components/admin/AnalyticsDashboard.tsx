'use client';

import { TrendingUp, TrendingDown, Users, Heart, Calendar, Eye } from 'lucide-react';

const analyticsData = [
  {
    title: 'Website Traffic',
    value: '45,678',
    change: '+12.5%',
    trend: 'up',
    icon: Eye,
    period: 'This month',
    data: [12, 19, 15, 25, 22, 30, 28],
  },
  {
    title: 'Donation Conversion',
    value: '3.2%',
    change: '+0.8%',
    trend: 'up',
    icon: Heart,
    period: 'This month',
    data: [2.1, 2.4, 2.8, 3.0, 2.9, 3.2, 3.1],
  },
  {
    title: 'Volunteer Signups',
    value: '234',
    change: '+18.2%',
    trend: 'up',
    icon: Users,
    period: 'This month',
    data: [15, 22, 18, 28, 25, 34, 30],
  },
  {
    title: 'Service Requests',
    value: '156',
    change: '-5.3%',
    trend: 'down',
    icon: Calendar,
    period: 'This month',
    data: [25, 22, 20, 18, 16, 15, 14],
  },
];

const topPages = [
  { page: '/donate', views: 12456, percentage: 35 },
  { page: '/volunteer', views: 8934, percentage: 25 },
  { page: '/services', views: 6789, percentage: 19 },
  { page: '/about', views: 4567, percentage: 13 },
  { page: '/contact', views: 2890, percentage: 8 },
];

const trafficSources = [
  { source: 'Direct', visitors: 15678, percentage: 42 },
  { source: 'Google Search', visitors: 12345, percentage: 33 },
  { source: 'Social Media', visitors: 5678, percentage: 15 },
  { source: 'Referrals', visitors: 2890, percentage: 8 },
  { source: 'Email', visitors: 1234, percentage: 2 },
];

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsData.map((item, index) => (
          <div
            key={item.title}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {item.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {item.change}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {item.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{item.title}</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{item.period}</div>
            </div>
            
            {/* Simple chart representation */}
            <div className="mt-4">
              <div className="flex items-end gap-1 h-8">
                {item.data.map((value, idx) => (
                  <div
                    key={idx}
                    className="bg-blue-200 dark:bg-blue-800 rounded-sm flex-1"
                    style={{ height: `${(value / Math.max(...item.data)) * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Top Pages
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Most visited pages this month
            </p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {page.page}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {page.views.toLocaleString()} views
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${page.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white w-8">
                      {page.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Traffic Sources
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Where visitors are coming from
            </p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={source.source} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {source.source}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {source.visitors.toLocaleString()} visitors
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white w-8">
                      {source.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}