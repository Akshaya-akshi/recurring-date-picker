
'use client';


import FrequencySelector from './RecurrenceOptions';
import DateSelector from './DateSelector';
import CustomPattern from './CustomPattern';
import CalendarPreview from './CalendarPreview';

export default function RecurringDatePicker() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-md border border-gray-200">
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
        Recurring Date Picker
      </h1>

      <FrequencySelector />
      <DateSelector />
      <CustomPattern />
      <CalendarPreview />
    </div>
  );
}
