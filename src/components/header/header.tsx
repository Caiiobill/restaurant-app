import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';

// IMAGES
import Logo from '../../assets/images/chef1.png';
import Avatar from '../../assets/images/avatar.png';

// STORES
import { useCartStore } from '../../stores/cart';

const Header: React.FC = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const { cart, showCart, setShowCart } = useCartStore();

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = () => {
		const headerTag = document.querySelector('#header')! as HTMLElement;
		if (window.pageYOffset > 1) {
			headerTag.style.backgroundColor = 'white';
			headerTag.style.borderBottomWidth = '1px';
		} else {
			headerTag.style.borderBottomWidth = '';
			headerTag.style.backgroundColor = 'transparent';
		}
	};

	return (
		<header
			id="header"
			className="fixed z-50 w-screen p-3 px-4 md:px-16 transition-all ease-in-out duration-100"
		>
			{/** desktop and tablet */}
			<div className="hidden md:flex w-full h-full items-center justify-between">
				<Link to={'/'} className="flex items-center gap-2">
					<img src={Logo} alt="Logo" className="w-[7rem] object-cover" />
					<p className="text-headingColor text-xl font-bold">Rei do Suco</p>
				</Link>

				<div className="flex items-center gap-8">
					<motion.ul
						initial={{ opacity: 0, x: 200 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 200 }}
						className="flex items-center gap-8"
					>
						<li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
							Início
						</li>
						<li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
							Menu
						</li>
						<li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
							Sobre Nós
						</li>
					</motion.ul>

					<div
						className="relative flex items-center justify-center"
						onClick={() => setShowCart(!showCart)}
					>
						<MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
						{cart && cart.length > 0 && (
							<div className="absolute -top-4 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
								<p className="text-xs text-white font-semibold">{cart.length}</p>
							</div>
						)}
					</div>

					<motion.img
						whileTap={{ scale: 0.6 }}
						src={Avatar}
						alt="imagem que simboliza um usuário"
						className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-lg"
					/>
				</div>
			</div>

			{/** mobile */}
			<div className="flex items-center justify-between md:hidden w-full h-full">
				<div
					className="relative flex items-center justify-center"
					onClick={() => setShowCart(!showCart)}
				>
					<MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
					{cart && cart.length > 0 && (
						<div className="absolute -top-4 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
							<p className="text-xs text-white font-semibold">{cart.length}</p>
						</div>
					)}
				</div>

				<Link to={'/'} className="flex items-center gap-2">
					<img src={Logo} alt="Logo" className="w-[5rem] object-cover" />
					<p className="text-headingColor text-xl font-bold">Rei do Suco</p>
				</Link>

				<div className="relative">
					<motion.img
						whileTap={{ scale: 0.6 }}
						src={Avatar}
						alt="imagem que simboliza um usuário"
						className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-lg"
						onClick={() => setMenuIsOpen(!menuIsOpen)}
					/>

					{menuIsOpen && (
						<motion.div
							initial={{ opacity: 0, scale: 0.6 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.6 }}
							className="w-40 bg-white shadow-lg rounded-lg flex flex-col absolute top-12 right-0 py-2 border"
						>
							<ul className="flex flex-col items-center gap-5">
								<Link
									to={'/'}
									className="text-base text-textColor cursor-pointer hover:text-headingColor hover:bg-slate-100 w-full py-2 text-center duration-100 transition-all ease-in-out"
								>
									Início
								</Link>
								<li className="text-base text-textColor cursor-pointer hover:text-headingColor hover:bg-slate-100 w-full py-2 text-center duration-100 transition-all ease-in-out">
									Menu
								</li>
								<li className="text-base text-textColor cursor-pointer hover:text-headingColor hover:bg-slate-100 w-full py-2 text-center duration-100 transition-all ease-in-out">
									Sobre Nós
								</li>
							</ul>
						</motion.div>
					)}
				</div>
			</div>
		</header>
	);
};

export { Header };
