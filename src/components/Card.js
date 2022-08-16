import React from 'react';

const Card = ({ imgUrl, title, liveLink, githubLink }) => {
	return (
		<div className="max-w-sm rounded-lg overflow-hidden shadow-lg	dark:shadow-custom-blue ">
			<img className="w-full" src={imgUrl} alt="project photo" />
			<div className="text-center font-bold text-xl  py-4">{title}</div>
			<div className="flex justify-center items-center md:text-center md:px-3">
				<a
					className="inline-block bg-gray-200 rounded px-6 py-2 md:px-8 text-xs font-semibold text-gray-700 mr-2 mb-3"
					target="_blank"
					rel="noopener noreferrer"
					href={liveLink}
				>
					<i class="fa-solid fa-up-right-from-square text-black"></i> Visit
				</a>
				<a
					className="inline-block bg-gray-200 rounded px-6 py-2 md:px-8 text-xs font-semibold text-gray-700 mr-2 mb-3"
					target="_blank"
					rel="noopener noreferrer"
					href={githubLink}
				>
					<i className="fa-brands fa-github text-black"></i> Github
				</a>
			</div>
		</div>
	);
};

export default Card;
