'use client';

import { TrendingUp, TrendingDown, Users, Heart, Calendar, MessageSquare } from 'lucide-react';

const stats = [
  {
    title: 'Total Donations',
    value: '₹2,45,678',
    change: '+12.5%',
    trend: 'up',
    icon: Heart,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Active Volunteers',
    value: '156',
    change: '+8.2%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Services Completed',
    value: '89',
    change: '+15.3%',
    trend: 'up',
    icon: Calendar,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Messages',
    value: '23',
    change: '-2.1%',
    trend: 'down',
    icon: MessageSquare,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.title}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.title}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                {stat.value}
              </p>
            </div>
            <div className={`p-3 rounded-full ${stat.bgColor} dark:bg-opacity-20`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
          <div className="flex items-center mt-4">
            {stat.trend === 'up' ? (
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
            )}
            <span
              className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.change}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
              from last month
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}