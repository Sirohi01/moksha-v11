import { Metadata } from 'next';
import UserManagement from '@/components/admin/UserManagement';

export const metadata: Metadata = {
  title: 'User Management | Admin | Moksha Seva',
  description: 'Manage users, volunteers, and administrators',
};

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">User Management</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage users, volunteers, and system administrators
        </p>
      </div>

      <UserManagement />
    </div>
  );
}