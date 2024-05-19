import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { MdShoppingBasket } from 'react-icons/md';

import './styles.css';

// STORES
import { Product } from '../../../stores/products';
import { useCartStore } from '../../../stores/cart';

// UTILS
import { formatPrice } from '../../../utils/utils';

interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ product }) => {
	const { addToCart } = useCartStore();

	return (
		<div
			className="
					w-275
					min-w-[275px]
					md:w-300
					md:min-w-[300px]
					h-[175px]
					backdrop-blur-lg
					my-12
					bg-white
					rounded-lg
					py-2
					px-4
					flex
					flex-col
					items-center
					justify-evenly
					relative
					hover:drop-shadow-xl
					transition-all
					ease-in-out
					duration-100
					mx-2"
		>
			<div className="w-full flex items-center justify-between min-h-[96px]">
				<motion.div
					whileHover={{ scale: 1.2 }}
					className="w-[8rem] -mt-8 drop-shadow-2xl object-contain"
				>
					<img
						src={product.img}
						alt={product.name}
						className={`w-full img-content object-contain h-[${
							product.id === '14' ? '130px' : '180px'
						}]`}
					/>
				</motion.div>

				<motion.div
					whileTap={{ scale: 0.75 }}
					onClick={() => addToCart(product)}
					className="
							w-10
							h-10
							rounded-full
							bg-red-600
							flex
							items-center
							justify-center
							cursor-pointer
							hover:shadow-md"
				>
					<MdShoppingBasket className="text-white" />
				</motion.div>
			</div>

			<div
				className="
					w-full
					flex
					flex-col
					items-end
					justify-end"
			>
				<p className="text-textColor font-semibold text-lg md:text-base">{product.name}</p>
				<p className="mt-1 text-sm text-gray-500">{product.description}</p>
				<div className="flex items-center gap-8">
					<p className="text-lg text-headingColor font-semibold">
						<span className="text-sm text-red-500">$</span>{' '}
						{formatPrice(Number(product.price.toFixed(2)).toLocaleString('pt-BR'))}
					</p>
				</div>
			</div>
		</div>
	);
});

export { ProductCard };
