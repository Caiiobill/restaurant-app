export const formatPrice = (value: string) => {
	const [int, float] = value.split(',');
	return `${int},${float ? float?.padEnd(2, '0') : '00'}`;
};
