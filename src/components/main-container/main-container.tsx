import React, { memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

// STORES
import { useProductsStore } from '../../stores/products';

// PAGES
import { Home } from '../../pages/home/home';

// COMPONENTS
import { RowContainer } from '../row-container/row-container';
import { MenuContainer } from '../menu-container/menu-container';
import { CartContainer } from '../cart-container/cart-container';
import { useCartStore } from '../../stores/cart';

const MainContainer: React.FC = memo(() => {
	const products = useProductsStore((state) => state.products);
	const fetchProducts = useProductsStore((state) => state.fetchProducts);
	const showCart = useCartStore((state) => state.showCart);

	useEffect(() => {
		(async () => await fetchProducts())();
	}, [fetchProducts]);

	const handleScroll = (scrollOffset: number) => {
		const rowContainerTag = document.querySelector('#rowContainer') as HTMLDivElement;
		rowContainerTag.scrollLeft += scrollOffset;
	};

	return (
		<div className="w-full h-auto flex flex-col items-center justify-center">
			<Home />

			{/** sessão dos salgados */}
			<section className="w-full my-12">
				<div className="w-full flex items-center justify-between">
					<p
						className="
						text-2xl
						font-semibold
						capitalize
						text-headingColor
						relative
						before:absolute
						before:rounded-lg
						before:content
						before:w-32
						before:h-1
						before:-bottom-1
						before:left-0
						before:bg-gradient-to-tr from-orange-500 to-orange-600
						transition-all
						ease-in-out
						duration-100"
					>
						Nossos deliciosos salgados
					</p>

					<div className="hidden md:flex gap-3 items-center">
						<motion.div
							onClick={() => handleScroll(-400)}
							whileTap={{
								scale: 0.75,
							}}
							className="
							w-8
							h-8
							rounded-lg
							bg-orange-300
							hover:bg-orange-500
							cursor-pointer
							transition-all
							duration-100
							ease-in-out
							hover:shadow-lg
							flex
							items-center
							justify-center"
						>
							<MdChevronLeft className="text-lg text-white" />
						</motion.div>

						<motion.div
							onClick={() => handleScroll(400)}
							whileTap={{
								scale: 0.75,
							}}
							className="
							w-8
							h-8
							rounded-lg
							bg-orange-300
							hover:bg-orange-500
							cursor-pointer
							transition-all
							duration-100
							ease-in-out
							hover:shadow-lg
							flex
							items-center
							justify-center"
						>
							<MdChevronRight className="text-lg text-white" />
						</motion.div>
					</div>
				</div>

				<RowContainer
					flag={true}
					products={products.filter((p) => p.category === 'snack')}
				/>
			</section>

			<MenuContainer />

			{showCart && <CartContainer />}
		</div>
	);
});

export { MainContainer };
