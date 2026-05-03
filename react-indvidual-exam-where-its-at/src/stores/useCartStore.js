import { create } from 'zustand';

export const useCartStore = create((set) => ({
	cart: [],

	addToCart: (event) => {
		set((state) => {
			const eventInCart = state.cart.find((e) => e.id === event.id);
			if (eventInCart) {
				return {
					cart: state.cart.map((e) => {
						if (e.id === event.id) {
							return { ...e, qty: e.qty + 1 };
						} else return e;
					}),
				};
			} else {
				return {
					cart: [...state.cart, { ...event, qty: 1 }],
				};
			}
		});
	},
	removeFromCart: (id) => {
		set((state) => {
			const eventInCart = state.cart.find((e) => e.id === id);
			if (eventInCart.qty === 1) {
				return {
					cart: state.cart.filter((e) => e.id !== id),
				};
			} else {
				return {
					cart: state.cart.map((e) => {
						if (e.id === id) {
							return { ...e, qty: e.qty - 1 };
						} else return e;
					}),
				};
			}
		});
	},
}));

// export const useCartStore = create((set) => ({
// 	cart: 0,
// 	decreaseCart: () => set((state) => ({ cart: state.cart - 1 })),
// 	increaseCart: () => set((state) => ({ cart: state.cart + 1 })),
// }));
