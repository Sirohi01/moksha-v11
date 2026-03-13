'use client';

import { useState, useEffect } from 'react';
import { adminAPI, formsAPI } from '@/lib/api';
import AdvancedDashboard from '@/components/admin/AdvancedDashboard';
import NotificationSystem from '@/components/admin/NotificationSystem';

interface Stats {
  totalReports: number;
  totalVolunteers: number;
  totalDonations: number;
  totalContacts: number;
  totalFeedback: number;
  totalBoardApplications: number;
  totalLegacyGiving: number;
  totalSchemes: number;
  totalExpansionRequests: number;
  recentActivities: Activity[];
}

interface Activity {
  _id: string;
  adminId: string;
  adminName: string;
  action: string;
  resource: string;
  resourceId: string;
  details: string;
  ipAddress: string;
  userAgent: string;
  createdAt: string;
}

type DashboardMode = 'standard' | 'advanced';

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [dashboardMode, setDashboardMode] = useState<DashboardMode>('standard');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Fetch all stats in parallel
      const [
        reportsData,
        volunteersData,
        donationsData,
        contactsData,
        feedbackData,
        boardData,
        legacyData,
        schemesData,
        expansionData,
        activitiesData
      ] = await Promise.all([
        formsAPI.getReports(1, 1),
        formsAPI.getVolunteers(1, 1),
        formsAPI.getDonations(1, 1),
        formsAPI.getContacts(1, 1),
        formsAPI.getFeedback(1, 1),
        formsAPI.getBoardApplications(1, 1),
        formsAPI.getLegacyGiving(1, 1),
        formsAPI.getSchemes(1, 1),
        formsAPI.getExpansionRequests(1, 1),
        adminAPI.getActivities(1, 5)
      ]);

      setStats({
        totalReports: reportsData.data.total || 0,
        totalVolunteers: volunteersData.data.total || 0,
        totalDonations: donationsData.data.total || 0,
        totalContacts: contactsData.data.total || 0,
        totalFeedback: feedbackData.data.total || 0,
        totalBoardApplications: boardData.data.total || 0,
        totalLegacyGiving: legacyData.data.total || 0,
        totalSchemes: schemesData.data.total || 0,
        totalExpansionRequests: expansionData.data.total || 0,
        recentActivities: activitiesData.data.activities || []
      });

    } catch (error: any) {
      console.error('Failed to fetch dashboard data:', error);
      setError(error.message || 'Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center">
          <span className="text-red-500 text-xl mr-3">⚠️</span>
          <div>
            <h3 className="text-red-800 font-medium">Error Loading Dashboard</h3>
            <p className="text-red-600 text-sm mt-1">{error}</p>
          </div>
        </div>
        <button
          onClick={fetchDashboardData}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!stats) return null;

  // If advanced mode is selected, show the advanced dashboard
  const renderAdvancedDashboard = dashboardMode === 'advanced';

  const statCards = [
    { title: 'Reports', count: stats.totalReports, icon: '📋', color: 'bg-blue-500', href: '/admin/reports' },
    { title: 'Volunteers', count: stats.totalVolunteers, icon: '🤝', color: 'bg-green-500', href: '/admin/volunteers' },
    { title: 'Donations', count: stats.totalDonations, icon: '💰', color: 'bg-yellow-500', href: '/admin/donations' },
    { title: 'Contacts', count: stats.totalContacts, icon: '📞', color: 'bg-purple-500', href: '/admin/contacts' },
    { title: 'Feedback', count: stats.totalFeedback, icon: '💬', color: 'bg-pink-500', href: '/admin/feedback' },
    { title: 'Board Applications', count: stats.totalBoardApplications, icon: '👔', color: 'bg-indigo-500', href: '/admin/board' },
    { title: 'Legacy Giving', count: stats.totalLegacyGiving, icon: '🌟', color: 'bg-orange-500', href: '/admin/legacy' },
    { title: 'Government Schemes', count: stats.totalSchemes, icon: '🏛️', color: 'bg-teal-500', href: '/admin/schemes' },
    { title: 'Expansion Requests', count: stats.totalExpansionRequests, icon: '🌍', color: 'bg-cyan-500', href: '/admin/expansion' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to Moksha Seva Admin Panel</p>
        </div>
        <div className="flex space-x-3">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setDashboardMode('standard' as const)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                dashboardMode === 'standard'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📊 Standard
            </button>
            <button
              onClick={() => setDashboardMode('advanced' as const)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                dashboardMode === 'advanced'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🚀 Advanced
            </button>
          </div>
          <button
            onClick={fetchDashboardData}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <span className="mr-2">🔄</span>
            Refresh
          </button>
        </div>
      </div>

      {/* Conditional Content */}
      {renderAdvancedDashboard ? (
        <AdvancedDashboard />
      ) : (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center">
              <div className={`${card.color} rounded-lg p-3 mr-4`}>
                <span className="text-white text-2xl">{card.icon}</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm">{card.title}</p>
                <p className="text-2xl font-bold text-gray-900">{card.count}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
        </div>
        <div className="p-6">
          {stats.recentActivities.length > 0 ? (
            <div className="space-y-4">
              {stats.recentActivities.map((activity) => (
                <div key={activity._id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">👤</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.adminName}</span> {activity.action} {activity.resource}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.details}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(activity.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <span className="text-gray-400 text-4xl">📝</span>
              <p className="text-gray-500 mt-2">No recent activities</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="/admin/reports"
            className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <span className="text-blue-600 text-xl mr-3">📋</span>
            <span className="text-blue-800 font-medium">View Reports</span>
          </a>
          <a
            href="/admin/volunteers"
            className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <span className="text-green-600 text-xl mr-3">🤝</span>
            <span className="text-green-800 font-medium">Manage Volunteers</span>
          </a>
          <a
            href="/admin/donations"
            className="flex items-center p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
          >
            <span className="text-yellow-600 text-xl mr-3">💰</span>
            <span className="text-yellow-800 font-medium">Track Donations</span>
          </a>
          <a
            href="/admin/activities"
            className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <span className="text-purple-600 text-xl mr-3">📈</span>
            <span className="text-purple-800 font-medium">Activity Logs</span>
          </a>
        </div>
      </div>
        </>
      )}
    </div>
  );
}