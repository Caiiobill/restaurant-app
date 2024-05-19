import create from 'zustand';
import { persist } from 'zustand/middleware';

import { Product } from './products';

export interface CartProduct {
	id: string;
	img?: string;
	name: string;
	description?: string;
	price: number;
	category: string;
	qty: number;
}

interface State {
	cart: CartProduct[];
	totalAmount: number;
	fee: number;
	showCart: boolean;
	addToCart: (product: Product) => void;
	removeFromCart: (product: Product) => void;
	setShowCart: (value: boolean) => void;
	clearCart: () => void;
}

export const useCartStore = create(
	persist<State>(
		(set) => ({
			cart: [],
			totalAmount: 0,
			fee: 5,
			showCart: false,
			addToCart: (product: Product) =>
				set((state) => {
					const inCart = state.cart.find((p) => p.id === product.id);

					if (inCart) {
						state.cart.map((p) => {
							if (p.id === product.id) {
								p.qty++;
							}

							return p;
						});
					} else {
						state.cart = [...state.cart, { ...product, qty: 1 }];
					}

					return { ...state, totalAmount: state.totalAmount + product.price };
				}),
			removeFromCart: (product: Product) =>
				set((state) => {
					const inCart = state.cart.find((p) => p.id === product.id);

					if (inCart) {
						inCart.qty--;
						state.totalAmount = state.totalAmount - inCart.price;
						if (inCart.qty < 1) {
							state.cart = state.cart.filter((p) => p.id !== product.id);
						}
					}

					return { ...state };
				}),
			setShowCart: (value: boolean) => set((state) => ({ ...state, showCart: value })),
			clearCart: () => {
				set({ cart: [], totalAmount: 0 });
			},
		}),
		{
			name: 'cartStore',
			getStorage: () => sessionStorage,
		},
	),
);
