'use client';
import { useRecurrenceStore } from '../store/recurrenceStore';

const frequencies = ['daily', 'weekly', 'monthly', 'yearly'] as const;

export default function RecurrenceOptions() {
  const frequency = useRecurrenceStore((state) => state.frequency);
  const setFrequency = useRecurrenceStore((state) => state.setFrequency);

  return (
    <div className="mb-6">
      <label className="block font-semibold mb-2 text-gray-700">Repeat:</label>
      <div className="flex gap-3 flex-wrap">
        {frequencies.map((freq) => (
          <button
            key={freq}
            onClick={() => setFrequency(freq)}
            className={`px-4 py-2 rounded-xl border text-sm font-medium transition ${
              frequency === freq
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {freq.charAt(0).toUpperCase() + freq.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
