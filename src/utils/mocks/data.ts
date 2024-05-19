import Coxinha from '../../assets/images/coxinha.jpg';
import Pastel from '../../assets/images/pastel.jpg';
import PastelDeCarne from '../../assets/images/pastel-de-carne.jpg';
import EnroladinhoDeSalsicha from '../../assets/images/enroladinho-de-salsicha.png';
import BolinhaDeQueijo from '../../assets/images/bolinha-de-queijo.jpg';
import Esfirra from '../../assets/images/esfirra.jpg';
import SucoDeLaranja from '../../assets/images/suco-de-laranja.jpg';
import VitaminaDeAbacate from '../../assets/images/vitamina-de-abacate.jpg';
import SucoDeMaracuja from '../../assets/images/suco-de-maracuja.jpg';
import SucoDeUva from '../../assets/images/suco-de-uva.jpg';
import RefrigeranteCocaColaLata from '../../assets/images/d8.png';

import { Product } from '../../stores/products';

export const heroData = [
	{
		id: 1,
		name: 'Vitaminas',
		desc: 'Imagem ilustrativa',
		price: 5,
		imageSrc: VitaminaDeAbacate,
	},
	{
		id: 2,
		name: 'Sucos',
		desc: 'Imagem ilustrativa',
		price: 5,
		imageSrc: SucoDeLaranja,
	},
	{
		id: 3,
		name: 'Salgados',
		desc: 'Imagem ilustrativa',
		price: 2,
		imageSrc: Pastel,
	},
	{
		id: 4,
		name: 'Refrigerantes',
		desc: 'Imagem ilustrativa',
		price: 4,
		imageSrc: RefrigeranteCocaColaLata,
	},
];

export const data: Product[] = [
	{
		id: '1',
		name: 'Coxinha de frango',
		description: 'Coxinha de frango tradicional',
		price: 2,
		category: 'snack',
		img: Coxinha,
	},
	{
		id: '2',
		name: 'Pastel de Frango',
		description: 'Pastel de feira sabor frango',
		price: 2,
		category: 'snack',
		img: Pastel,
	},
	{
		id: '3',
		name: 'Pastel de Carne',
		description: 'Pastel de feira sabor carne',
		price: 2,
		category: 'snack',
		img: PastelDeCarne,
	},
	{
		id: '4',
		name: 'Pastel Misto',
		description: 'Pastel de feira sabor misto',
		price: 2,
		category: 'snack',
		img: Pastel,
	},
	{
		id: '5',
		name: 'Pastel de Queijo',
		description: 'Pastel de feira sabor queijo',
		price: 2,
		category: 'snack',
		img: Pastel,
	},
	{
		id: '6',
		name: 'Enroladinhode Salsicha',
		description: 'Enroladinho de salsicha tradicional',
		price: 2,
		category: 'snack',
		img: EnroladinhoDeSalsicha,
	},
	{
		id: '7',
		name: 'Bolinha de Queijo',
		description: 'Feito com massa de enroladinho',
		price: 2,
		category: 'snack',
		img: BolinhaDeQueijo,
	},
	{
		id: '8',
		name: 'Bolinha Mista',
		description: 'Feito com massa de enroladinho',
		price: 2,
		category: 'snack',
		img: BolinhaDeQueijo,
	},
	{
		id: '9',
		name: 'Esfirra de Frango',
		description: 'Esfirra de frango tradicional',
		price: 2,
		category: 'snack',
		img: Esfirra,
	},
	{
		id: '10',
		name: 'Esfirra de Carne',
		description: 'Esfirra de carne tradicional',
		price: 2,
		category: 'snack',
		img: Esfirra,
	},
	{
		id: '11',
		name: 'Esfirra Mista',
		description: 'Esfirra mista tradicional',
		price: 2,
		category: 'snack',
		img: Esfirra,
	},
	{
		id: '12',
		name: 'Suco de Laranja',
		description: 'Suco grande de laranja',
		price: 5,
		category: 'drinks',
		img: SucoDeLaranja,
	},
	{
		id: '13',
		name: 'Suco de Uva',
		description: 'Suco grande de uva',
		price: 5,
		category: 'drinks',
		img: SucoDeUva,
	},
	{
		id: '14',
		name: 'Vitamina de Abacate',
		description: 'Vitamina grande de abacate',
		price: 5,
		category: 'drinks',
		img: VitaminaDeAbacate,
	},
	{
		id: '15',
		name: 'Suco de Maracujá',
		description: 'Suco grande de maracujá',
		price: 5,
		category: 'drinks',
		img: SucoDeMaracuja,
	},
	{
		id: '16',
		name: 'Refrigerante Coca-Cola de lata',
		description: 'Refrigerante de cola tamanho lata',
		price: 4,
		category: 'drinks',
		img: RefrigeranteCocaColaLata,
	},
];
