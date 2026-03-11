import { Metadata } from 'next';
import VolunteerManagement from '@/components/admin/VolunteerManagement';

export const metadata: Metadata = {
  title: 'Volunteer Management | Admin | Moksha Seva',
  description: 'Manage volunteer applications, schedules, and activities',
};

export default function AdminVolunteersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Volunteer Management</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage volunteer applications, schedules, and track their contributions
        </p>
      </div>

      <VolunteerManagement />
    </div>
  );
}