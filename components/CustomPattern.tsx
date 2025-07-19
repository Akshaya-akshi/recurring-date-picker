import { useRecurrenceStore } from '../store/recurrenceStore';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CustomPattern() {
  const { selectedDays, setSelectedDays } = useRecurrenceStore();

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className="mb-6">
      <label className="block font-semibold mb-2 text-gray-700">Select Days of the Week:</label>
      <div className="flex gap-2 flex-wrap">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => toggleDay(day)}
            className={`px-3 py-2 rounded-md border text-sm transition ${
              selectedDays.includes(day)
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
