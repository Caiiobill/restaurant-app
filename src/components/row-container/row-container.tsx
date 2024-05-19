import React, { memo } from 'react';

// STORES
import { Product } from '../../stores/products';

// COMPONENTS
import { ProductCard } from './components/product-card';

interface RowContainerProps {
	flag: boolean;
	products: Product[];
}

const RowContainer: React.FC<RowContainerProps> = memo(({ flag, products }) => {
	return (
		<div
			id="rowContainer"
			className={`w-full my-12 flex items-center justify-between scroll-smooth ${
				flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'
			}`}
		>
			{products.map((product, index) => (
				<ProductCard key={product.id + index} product={product} />
			))}
		</div>
	);
});

export { RowContainer };
