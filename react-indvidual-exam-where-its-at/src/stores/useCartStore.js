import { create } from 'zustand';

// >Här har jag fått hjälp av Konrad samt en del ai...
export const useCartStore = create((set) => ({
	cart: [],
	tickets: [],

	setTickets: (newTickets) =>
		set((state) => ({
			tickets: [...state.tickets, ...newTickets],
		})),

	addToCart: (event) =>
		set((state) => {
			const existing = state.cart.find((i) => i.id === event.id);

			if (existing) {
				return {
					cart: state.cart.map((i) => (i.id === event.id ? { ...i, qty: i.qty + event.qty } : i)),
				};
			}

			return {
				cart: [...state.cart, { ...event }],
			};
		}),

	removeFromCart: (id) => {
		set((state) => {
			const existing = state.cart.find((e) => e.id === id);

			if (!existing) return state;

			if (existing.qty === 1) {
				return {
					cart: state.cart.filter((e) => e.id !== id),
				};
			}

			return {
				cart: state.cart.map((e) => (e.id === id ? { ...e, qty: e.qty - 1 } : e)),
			};
		});
	},

	increaseQty: (id) =>
		set((state) => ({
			cart: state.cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)),
		})),

	decreaseQty: (id) =>
		set((state) => ({
			cart: state.cart.map((item) => (item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item)),
		})),

	clearCart: () => set({ cart: [] }),
}));
