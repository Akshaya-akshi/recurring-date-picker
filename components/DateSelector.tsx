'use client';
import { useRecurrenceStore } from '../store/recurrenceStore';

export default function DateSelector() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div>
        <label className="block font-semibold text-gray-700 mb-1">Start Date:</label>
        <input
          type="date"
          className="w-full p-2 border rounded-md text-gray-700"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label className="block font-semibold text-gray-700 mb-1">End Date (optional):</label>
        <input
          type="date"
          className="w-full p-2 border rounded-md text-gray-700"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
  );
}
