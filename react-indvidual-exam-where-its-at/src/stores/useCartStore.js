import { create } from 'zustand';

// >Här har jag fått hjälp av Konrad samt felsökningshjälp av ai...
export const useCartStore = create((set) => ({
	cart: [],
	tickets: [],
	setTickets: (tickets) => set({ tickets }),

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

// export const useCartStore = create((set) => ({
// 	cart: 0,
// 	decreaseCart: () => set((state) => ({ cart: state.cart - 1 })),
// 	increaseCart: () => set((state) => ({ cart: state.cart + 1 })),
// }));
// export const useCartStore = create((set) => ({
// 	cart: [],

// 	addToCart: (event) => {
// 		set((state) => {
// 			const eventInCart = state.cart.find((e) => e.id === event.id);
// 			if (eventInCart) {
// 				return {
// 					cart: state.cart.map((e) => {
// 						if (e.id === event.id) {
// 							return { ...e, qty: e.qty + 1 };
// 						} else return e;
// 					}),
// 				};
// 			} else {
// 				return {
// 					cart: [...state.cart, { ...event, qty: 1 }],
// 				};
// 			}
// 		});
// 	},
// 	removeFromCart: (id) => {
// 		set((state) => {
// 			const eventInCart = state.cart.find((e) => e.id === id);
// 			if (eventInCart.qty === 1) {
// 				return {
// 					cart: state.cart.filter((e) => e.id !== id),
// 				};
// 			} else {
// 				return {
// 					cart: state.cart.map((e) => {
// 						if (e.id === id) {
// 							return { ...e, qty: e.qty - 1 };
// 						} else return e;
// 					}),
// 				};
// 			}
// 		});
// 	},
// }));

// export const useCartStore = create((set) => ({
//     cart: [],

//     addToCart: (event, qty) => {
//         set((state) => {
//             const existing = state.cart.find((e) => e.id === event.id);

//             if (existing) {
//                 return {
//                     cart: state.cart.map((e) =>
//                         e.id === event.id
//                             ? { ...e, qty: e.qty + qty }
//                             : e
//                     ),
//                 };
//             }

//             return {
//                 cart: [...state.cart, { ...event, qty }],
//             };
//         });
//     },

//     removeFromCart: (id) => {
//         set((state) => {
//             const existing = state.cart.find((e) => e.id === id);

//             if (!existing) return state;

//             if (existing.qty === 1) {
//                 return {
//                     cart: state.cart.filter((e) => e.id !== id),
//                 };
//             }

//             return {
//                 cart: state.cart.map((e) =>
//                     e.id === id ? { ...e, qty: e.qty - 1 } : e
//                 ),
//             };
//         });
//     },
// }));

// Loopa igenom CartItems
// För varje cartitem
//// Slumpa fram seat + section
//// Loopa igenom cartitem.qty
////// Skapa biljetten - ticket.section = section, ticket.seat = seat + i, (kopia av cartitem, men skicka med properties), generera id (UUID)
