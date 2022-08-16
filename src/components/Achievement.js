import React from 'react';
import achievementImg from '../assests/images/achievements.svg';
import AchievementList from './AchievementList';

const Achievement = () => {
	return (
		<div className="p-2 my-8 w-full md:h-screen md:my-0">
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-5/6 md:h-full px-2 md:flex-row">
				<div className="flex flex-col justify-center h-full px-1">
					<h2 className="text-2xl sm:text-6xl font-bold text-center">
						Certificates <span className="text-custom-blue">&</span>{' '}
						Achievements
					</h2>
					<AchievementList />
				</div>
				<div>
					<img
						src={achievementImg}
						alt="my portfolio"
						className="mx-auto w-1/3 md:w-4/5"
					/>
				</div>
			</div>
		</div>
	);
};

export default Achievement;
