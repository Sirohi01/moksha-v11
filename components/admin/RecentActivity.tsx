'use client';

import { motion } from 'framer-motion';
import { Heart, User, MessageSquare, Calendar, FileText } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'donation',
    title: 'New donation received',
    description: 'Anonymous donor contributed ₹5,000',
    time: '2 minutes ago',
    icon: Heart,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    id: 2,
    type: 'volunteer',
    title: 'Volunteer application',
    description: 'Rahul Kumar applied to become a volunteer',
    time: '15 minutes ago',
    icon: User,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: 3,
    type: 'message',
    title: 'New contact message',
    description: 'Priya Sharma sent a message through contact form',
    time: '1 hour ago',
    icon: MessageSquare,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    id: 4,
    type: 'service',
    title: 'Service completed',
    description: 'Cremation service completed in Delhi',
    time: '2 hours ago',
    icon: Calendar,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    id: 5,
    type: 'content',
    title: 'Story published',
    description: 'New success story added to the website',
    time: '3 hours ago',
    icon: FileText,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
];

export default function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Latest updates and activities
        </p>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className={`p-2 rounded-full ${activity.bgColor} dark:bg-opacity-20`}>
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  {activity.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            View all activities
          </button>
        </div>
      </div>
    </motion.div>
  );
}