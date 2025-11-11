import React from 'react';

const Mybills = () => {
    return (
        <div>
            <h1>User's can manage their Bills here</h1>
            <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Electricity Bill
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">#INV-2034</span>
      </div>

      {/* Bill details */}
      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <div className="flex justify-between">
          <span>Billing Period:</span>
          <span className="font-medium">Oct 2025</span>
        </div>
        <div className="flex justify-between">
          <span>Due Date:</span>
          <span className="font-medium text-red-500">Nov 15, 2025</span>
        </div>
        <div className="flex justify-between">
          <span>Amount Due:</span>
          <span className="font-semibold text-lg text-green-600">$85.60</span>
        </div>
        <div className="flex justify-between">
          <span>Status:</span>
          <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
            Pending
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-gray-200 dark:border-gray-700"></div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View Details
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
          Pay Now
        </button>
      </div>
    </div>
            

            
        </div>
    );
};

export default Mybills;