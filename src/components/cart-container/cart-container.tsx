import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { RiRefreshFill } from 'react-icons/ri';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

// STORES
import { useCartStore } from '../../stores/cart';

// IMAGES
import EmptyCart from '../../assets/images/emptyCart.svg';

// UTILS
import { formatPrice } from '../../utils/utils';

const CartContainer: React.FC = memo(() => {
	const {
		cart: storeCartProducts,
		showCart,
		setShowCart,
		addToCart,
		removeFromCart,
		totalAmount,
		fee,
		clearCart,
	} = useCartStore();

	const handleSubmit = () => {
		const formattedItems = storeCartProducts
			.map((p) => {
				return `${p.qty}x ${p.name}`;
			})
			.join(',\n');

		const message = `
Olá, eu gostaria de pedir:\n
${formattedItems}\n
Entrega: ${formatPrice(Number(fee.toFixed(2)).toLocaleString('pt-BR'))}
Total: ${formatPrice(Number((totalAmount + fee).toFixed(2)).toLocaleString('pt-BR'))}
`;

		const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
			process.env.REACT_APP_PHONE_CONTACT!,
		)}&text=${encodeURIComponent(message)}`;

		return url;
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: 200 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 200 }}
			className="fixed top-0 right-0 w-full md:w-375 h-[100vh] bg-white drop-shadow-md flex flex-col z-[101]"
		>
			<div className="w-full flex items-center justify-between p-4 cursor-pointer">
				<motion.div whileTap={{ scale: 0.75 }} onClick={() => setShowCart(!showCart)}>
					<MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
				</motion.div>
				<p className="text-textColor text-lg font-semibold">Carrinho</p>
				<motion.p
					whileTap={{ scale: 0.75 }}
					onClick={() => clearCart()}
					className="
						flex
						items-center
						gap-2
						p-1
						px-2
						my-2
						bg-gray-100
						rounded-md
						hover:shadow-md
						cursor-pointer
						text-textColor
						text-base"
				>
					Limpar <RiRefreshFill />
				</motion.p>
			</div>

			{/** bottom section */}
			{storeCartProducts && storeCartProducts.length > 0 ? (
				<div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
					<div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
						{/** cart item */}
						{storeCartProducts &&
							storeCartProducts.map((p) => {
								return (
									<div
										key={p.id}
										className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2"
									>
										<img
											src={p.img}
											alt="Imagem do produto no carrinho"
											className="w-20 h-20 max-w-[60px] rounded-full object-contain"
										/>
										{/** name item */}
										<div className="flex flex-col gap-2">
											<p className="text-base text-gray-50">{p.name}</p>
											<p className="text-sm block text-gray-300 font-semibold">
												R$
												{formatPrice(
													Number(p.price.toFixed(2)).toLocaleString(
														'pt-BR',
													),
												)}
											</p>
										</div>
										{/** button item */}
										<div className="group flex items-center gap-2 ml-auto cursor-pointer">
											<motion.div
												whileTap={{ scale: 0.75 }}
												onClick={() => removeFromCart(p)}
											>
												<BiMinus className="text-gray-50" />
											</motion.div>
											<p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
												{p.qty}
											</p>
											<motion.div
												whileTap={{ scale: 0.75 }}
												onClick={() => addToCart(p)}
											>
												<BiPlus className="text-gray-50" />
											</motion.div>
										</div>
									</div>
								);
							})}
					</div>

					{/** total item */}
					<div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
						<div className="w-full flex items-center justify-between">
							<p className="text-gray-400 text-lg">Sub Total</p>
							<p className="text-gray-400 text-lg">
								R$
								{formatPrice(
									Number(totalAmount.toFixed(2)).toLocaleString('pt-BR'),
								)}
							</p>
						</div>
						<div className="w-full flex items-center justify-between">
							<p className="text-gray-400 text-lg">Entrega</p>
							<p className="text-gray-400 text-lg">
								R$
								{formatPrice(Number(fee.toFixed(2)).toLocaleString('pt-BR'))}
							</p>
						</div>

						<div className="w-full border-b border-gray-600 my-2"></div>

						<div className="w-full flex items-center justify-between">
							<p className="text-gray-200 text-xl font-semibold">Total</p>
							<p className="text-gray-200 text-xl font-semibold">
								R$
								{formatPrice(
									Number((totalAmount + fee).toFixed(2)).toLocaleString('pt-BR'),
								)}
							</p>
						</div>

						<motion.a
							whileTap={{ scale: 0.8 }}
							href={handleSubmit()}
							target="_blank"
							className="w-full cursor-pointer text-center p-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
						>
							Comprar
						</motion.a>
					</div>
				</div>
			) : (
				<div className="w-full h-full flex flex-col items-center justify-center gap-6">
					<img src={EmptyCart} className="w-300" alt="" />
					<p className="text-xl text-textColor font-semibold">
						Adicione algo ao carrinho
					</p>
				</div>
			)}
		</motion.div>
	);
});

export { CartContainer };
