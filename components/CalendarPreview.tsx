'use client';
import { useRecurrenceStore } from '../store/recurrenceStore';

export default function CalendarPreview() {
  const { frequency, startDate, endDate, selectedDays } = useRecurrenceStore();

  return (
    <div className="mt-6 p-4 border rounded-md bg-gray-50">
      <h3 className="text-lg font-semibold mb-3 text-indigo-700">📆 Preview</h3>
      <ul className="text-sm text-gray-700 space-y-1">
        <li><strong>Frequency:</strong> {frequency}</li>
        <li><strong>Start Date:</strong> {startDate || 'Not selected'}</li>
        <li><strong>End Date:</strong> {endDate || 'Not specified'}</li>
        <li><strong>Selected Days:</strong> {selectedDays.length > 0 ? selectedDays.join(', ') : 'None selected'}</li>
      </ul>
    </div>
  );
}
