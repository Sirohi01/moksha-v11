'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plus, Upload, Send, FileText, Users, Image } from 'lucide-react';

const actions = [
  {
    title: 'Add New Story',
    description: 'Share a success story',
    href: '/admin/stories/new',
    icon: Plus,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Upload Images',
    description: 'Add to gallery',
    href: '/admin/gallery/upload',
    icon: Upload,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Send Newsletter',
    description: 'Email subscribers',
    href: '/admin/newsletter',
    icon: Send,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Create Campaign',
    description: 'Start new campaign',
    href: '/admin/campaigns/new',
    icon: FileText,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    title: 'Manage Volunteers',
    description: 'Review applications',
    href: '/admin/volunteers',
    icon: Users,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
  {
    title: 'Update Gallery',
    description: 'Organize images',
    href: '/admin/gallery',
    icon: Image,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
  },
];

export default function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Quick Actions
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Common administrative tasks
        </p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link
                href={action.href}
                className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${action.bgColor} dark:bg-opacity-20 group-hover:scale-110 transition-transform`}>
                    <action.icon className={`w-5 h-5 ${action.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}