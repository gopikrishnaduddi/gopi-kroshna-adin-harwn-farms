import React from 'react';

const map = {
  Delivered:    'bg-green-100 text-green-700',
  Processing:   'bg-yellow-100 text-yellow-700',
  Shipped:      'bg-blue-100 text-blue-700',
  Cancelled:    'bg-red-100 text-red-600',
  Active:       'bg-green-100 text-green-700',
  Pending:      'bg-yellow-100 text-yellow-700',
  Unsubscribed: 'bg-red-100 text-red-600',
};

export default function StatusBadge({ status }) {
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${map[status] || 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );
}
