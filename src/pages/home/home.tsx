import React, { memo } from 'react';
import './home.css';

// IMAGES
import Delivery from '../../assets/images/delivery.png';
import HeroBg from '../../assets/images/heroBg.png';

// MOCK
import { heroData } from '../../utils/mocks/data';

// UTILS
import { formatPrice } from '../../utils/utils';

const Home: React.FC = memo(() => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-4" id="home">
			<div className="py-2 flex-1 flex flex-col items-start justify-start gap-6">
				<div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full md:mt-6">
					<p className="text-base text-orange-500 font-semibold">Entrega rápida</p>
					<div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
						<img
							src={Delivery}
							alt="imagem ilustrativa de uma bicileta"
							className="w-full h-full object-contain"
						/>
					</div>
				</div>

				<p className="text-[2.5rem] font-bold tracking-wide text-headingColor">
					A Melhor Lanchonete Da{' '}
					<span className="text-orange-600 text-[3rem]">Sua Cidade</span>
				</p>

				<p className="text-base text-textColor text-justify">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt molestias
					dolores, blanditiis aperiam quidem itaque qui at quo odit id eaque recusandae
					laborum amet? Tempore voluptatibus officiis suscipit nihil animi?
				</p>

				<button
					className="text-white bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 sm:w-auto"
					type="button"
				>
					Peça Agora
				</button>
			</div>

			<div className="py-2 flex-1 flex items-center relative">
				<img
					src={HeroBg}
					alt="Imagem de fundo ilustrativa"
					className="ml-auto h-420 w-full lg:w-auto lg:h-650"
				/>
				{/** max 1440 min 1279 */}
				<div className="w-full h-full absolute top-0 left-0 flex items-center heroCardImages justify-center py-4 gap-4 flex-wrap">
					{heroData &&
						heroData.map((data) => {
							return (
								<div
									key={data.id}
									className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
								>
									<img
										src={data.imageSrc}
										alt={data.name}
										className="w-20 lg:w-40 -mt-10 lg:-mt-20 img-content max-h-[180px]"
									/>
									<p className="text-base lg:text-lg font-semibold text-textColor mt-2 lg:mt-4">
										{data.name}
									</p>
									<p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
										{data.desc}
									</p>

									<p className="text-sm font-semibold text-headingColor">
										<span className="text-xs text-red-600">$</span>{' '}
										{formatPrice(
											Number(data.price.toFixed(2)).toLocaleString('pt-BR'),
										)}
									</p>
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
});

export { Home };
