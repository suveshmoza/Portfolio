import React from 'react';

const AchievementList = () => {
	return (
		<ul className="text-lg font-semibold py-1">
			<li>
				<i class="text-xl fa-solid fa-circle-check text-custom-blue"></i>{' '}
				Completed The Web Developer Bootcamp on Udemy.
			</li>
			<li>
				<i class="text-xl fa-solid fa-circle-check text-custom-blue"></i>{' '}
				Completed The Modern JavaScript Bootcamp on Udemy.
			</li>
			<li>
				<i class="text-xl fa-solid fa-circle-check text-custom-blue"></i>{' '}
				Completed 30 Days of Solidity challenge on Codedamn.
			</li>
			<li>
				<i class="fa-solid fa-ranking-star text-custom-blue"></i> Top performer
				in DSA Marathon conducted by DSC UIET-KUK.
			</li>
			<li>
				<i class="fa-solid fa-ranking-star text-custom-blue"></i> GeeksForGeeks
				Institute Rank 5.
			</li>
			<li>
				<i class="text-xl fa-solid fa-clipboard-check text-custom-blue"></i>{' '}
				Solved 400+ coding problems.
			</li>
			<li>
				3<i className="fa-solid fa-star text-gold"></i> Coder @CodeChef and 5
				<i className="fa-solid fa-star text-gold"></i> Coder @HackerRank.
			</li>
		</ul>
	);
};

export default AchievementList;
