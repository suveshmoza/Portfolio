import React from 'react';
import Card from './Card';

const Projects = () => {
	const projects = [
		{
			title: 'Interviewify',
			imgUrl: 'https://iili.io/gKQG3X.png',
			liveLink: 'https://interviewify-andy.herokuapp.com/',
			githubLink: 'https://github.com/suveshmoza/Interviewify',
		},
		{
			title: 'CryptoCoinInfo',
			imgUrl: 'https://iili.io/gKZaHu.png',
			liveLink: 'https://cryptocoininfo-fqcwmfdyq-suveshmoza.vercel.app/',
			githubLink: 'https://github.com/suveshmoza/cryptocoininfo',
		},
		{
			title: 'Password Generator',
			imgUrl: 'https://iili.io/gKZeDv.png',
			liveLink: 'https://random-password-generator-black.vercel.app/',
			githubLink: 'https://github.com/suveshmoza/Random-Password-Generator',
		},
		{
			title: 'Vahan Saarthi',
			imgUrl: 'https://iili.io/gKZIol.png',
			liveLink:
				'https://vahan-saarthi-frontend-go6h82f32-suveshmoza.vercel.app/',
			githubLink: 'https://github.com/suveshmoza/Vahan-Saarthi-Frontend',
		},
		{
			title: 'Image Search',
			imgUrl: 'https://iili.io/gKZZx4.png',
			liveLink: 'https://image-search-virid.vercel.app/',
			githubLink: 'https://github.com/suveshmoza/Image-Search',
		},
		{
			title: 'CrowdCoin',
			imgUrl: 'https://iili.io/gKtbTJ.png',
			liveLink: 'https://github.com/suveshmoza/CrowdCoin',
			githubLink: 'https://github.com/suveshmoza/CrowdCoin',
		},
	];

	return (
		<div
			name="Projects"
			className="w-full pb-10 dark:bg-gray-900 dark:text-white"
		>
			<div className="max-w-screen-lg mx-auto h-5/6 md:h-full px-2 ">
				<h2 className="text-2xl md:text-6xl font-bold text-center p-2">
					Pro<span className="text-custom-blue">j</span>ects
				</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					{projects.map(({ title, imgUrl, liveLink, githubLink }) => (
						<Card
							title={title}
							imgUrl={imgUrl}
							liveLink={liveLink}
							githubLink={githubLink}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
