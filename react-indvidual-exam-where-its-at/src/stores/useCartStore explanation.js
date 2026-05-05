export const useCartStore = create((set) => ({
    // 🛒 cart: själva varukorgen – en array av event-objekt
    cart: [],

    // ➕ addToCart: lägger till ett event i varukorgen
    addToCart: (event) =>
        set((state) => {
            // Kolla om eventet redan finns i cart
            const existing = state.cart.find((i) => i.id === event.id);

            // Om eventet redan finns → öka qty med event.qty
            if (existing) {
                return {
                    cart: state.cart.map((i) =>
                        i.id === event.id
                            ? { ...i, qty: i.qty + event.qty } // uppdatera befintlig
                            : i // lämna övriga orörda
                    ),
                };
            }

            // Om eventet inte finns → lägg till det som nytt objekt
            return {
                cart: [...state.cart, { ...event }],
            };
        }),

    // ➖ removeFromCart: minskar qty eller tar bort helt
    removeFromCart: (id) => {
        set((state) => {
            // Hitta eventet i cart
            const existing = state.cart.find((e) => e.id === id);

            // Om det inte finns → gör ingenting
            if (!existing) return state;

            // Om qty är 1 → ta bort hela eventet från cart
            if (existing.qty === 1) {
                return {
                    cart: state.cart.filter((e) => e.id !== id),
                };
            }

            // Annars → minska qty med 1
            return {
                cart: state.cart.map((e) =>
                    e.id === id ? { ...e, qty: e.qty - 1 } : e
                ),
            };
        });
    },

    // 🔼 increaseQty: ökar qty med 1 (används på OrderPage)
    increaseQty: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id
                    ? { ...item, qty: item.qty + 1 } // öka qty
                    : item
            ),
        })),

    // 🔽 decreaseQty: minskar qty med 1 men aldrig under 1
    decreaseQty: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 } // minska qty
                    : item // om qty redan är 1 → lämna som det är
            ),
        })),
}));
