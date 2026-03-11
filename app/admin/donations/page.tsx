import { Metadata } from 'next';
import DonationManagement from '@/components/admin/DonationManagement';

export const metadata: Metadata = {
  title: 'Donation Management | Admin | Moksha Seva',
  description: 'Track and manage donations, receipts, and donor information',
};

export default function AdminDonationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Donation Management</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Track donations, manage receipts, and analyze donor patterns
        </p>
      </div>

      <DonationManagement />
    </div>
  );
}