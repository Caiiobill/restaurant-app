import create from 'zustand';

// MOCK
import { data } from '../utils/mocks/data';

export interface Product {
	id: string;
	img?: string;
	name: string;
	description?: string;
	price: number;
	category: string;
}

interface State {
	products: Product[];
	loading: boolean;
	fetchProducts: () => Promise<void>;
}

export const useProductsStore = create<State>((set) => ({
	products: [],
	loading: false,
	fetchProducts: async () => {
		set((state) => ({ loading: true }));

		try {
			set((state) => ({ loading: false, products: data }));
		} catch (error) {
			console.log(error);
			set((state) => ({ loading: false }));
		}
	},
}));
