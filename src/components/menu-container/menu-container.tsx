import { memo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoFastFood } from 'react-icons/io5';

// @STORES
import { Product, useProductsStore } from '../../stores/products';

// IMAGES
import NotFound from '../../assets/images/NotFound.svg';

// COMPONENTS
import { RowContainer } from '../row-container/row-container';

const MenuContainer: React.FC = memo(() => {
	const products = useProductsStore((state) => state.products);

	const menuCategories = [
		{
			name: 'Salgados',
			// filterCategory: '1',
			filterCategory: 'snack',
		},
		{
			name: 'Sucos e Vitaminas',
			filterCategory: 'drinks',
			// filterCategory: '2',
		},
		{
			name: 'Lanches',
			filterCategory: 'lunch',
			// filterCategory: '3',
		},
	];
	const [filter, setFilter] = useState<string>();
	const [filteredProducts, setFilteredProducts] = useState<Product[]>();

	useEffect(() => setFilteredProducts(products), [products]);

	const handleSetFilter = (value: string) => {
		if (filter === value) {
			setFilter(undefined);
			setFilteredProducts(products);
		} else {
			setFilter(value);
			setFilteredProducts(products.filter((p) => p.category === value));
		}
	};

	return (
		<section id="menu" className="w-full my-12">
			<div className="w-full text-textColor flex flex-col items-center justify-center">
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
						duration-100
						mr-auto"
				>
					Nossos sucos, vitaminas e lanches
				</p>

				<div
					className="
						w-full
						flex
						items-center
						justify-start
						lg:justify-center
						py-6
						mt-12
						overflow-x-scroll
						scrollbar-none"
				>
					{menuCategories.map(({ name, filterCategory }) => {
						return (
							<motion.div
								key={name}
								whileTap={{ scale: 0.75 }}
								onClick={() => handleSetFilter(filterCategory)}
								className={`
									group
									${filter === filterCategory ? 'bg-cartNumBg' : 'bg-card'}
									w-24
									min-w-[94px]
									h-28
									cursor-pointer
									rounded-lg
									drop-shadow-xl
									flex
									flex-col
									gap-3
									mx-4
									items-center
									justify-center
									hover:bg-cartNumBg
									duration-150
									transition-all
									ease-in-out`}
							>
								<div
									className={`
									w-10 h-10 rounded-full shadow-lg ${
										filter === filterCategory ? 'bg-white' : 'bg-cartNumBg'
									} group-hover:bg-white flex items-center justify-center
								`}
								>
									<IoFastFood
										className={`
										${filter === filterCategory ? 'text-textColor' : 'text-card '} group-hover:text-textColor text-lg
									`}
									/>
								</div>

								<p
									className={`
									text-sm ${
										filter === filterCategory ? 'text-white' : 'text-textColor'
									} group-hover:text-white text-center h-[40px] flex items-center
								`}
								>
									{name}
								</p>
							</motion.div>
						);
					})}
				</div>

				<div className="w-full">
					{filteredProducts && filteredProducts.length ? (
						<RowContainer
							flag={false}
							products={
								filter
									? filteredProducts.filter((p) => p.category === filter)
									: filteredProducts
							}
						/>
					) : (
						<div className="w-full flex flex-col items-center justify-center">
							<img
								src={NotFound}
								alt="Imagem que simboliza que não há produtos para o filtro selecionado"
								className="h-340"
							/>
							<p className="text-xl text-headingColor font-semibold">
								Sem produtos para o filtro escolhido
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
});

export { MenuContainer };
