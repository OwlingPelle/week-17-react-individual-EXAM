import { create } from 'zustand';
import axios from 'axios';

export const useEventsStore = create((set) => ({
	events: [],
	loading: false,
	error: false,
	fetchEvents: () => {
		set({ loading: true });
		axios
			.get('https://santosnr6.github.io/Data/events.json')
			.then((response) => {
				set({ events: response.data, loading: false });
			})
			.catch(() => {
				set({ error: true, loading: false });
			});
	},
}));

// VÄNTA MED DENNA
