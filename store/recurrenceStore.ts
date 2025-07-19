import { create } from 'zustand';

type Frequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface RecurrenceState {
  frequency: Frequency;
  interval: number;
  selectedDays: string[];
  startDate: string;
  endDate?: string;
  setFrequency: (freq: Frequency) => void;
  setInterval: (i: number) => void;
  setSelectedDays: (days: string[]) => void;
  setStartDate: (date: string) => void;
  setEndDate: (date?: string) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  frequency: 'daily',
  interval: 1,
  selectedDays: [],
  startDate: '',
  endDate: '',
  setFrequency: (frequency) => set({ frequency }),
  setInterval: (interval) => set({ interval }),
  setSelectedDays: (selectedDays) => set({ selectedDays }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));
