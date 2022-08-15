import React from 'react';
import SkillImg from '../assests/images/skill.svg';

const icons = [
	{ iconClass: 'fa-brands  fa-html5 p-2', color: 'e34c26' },
	{ iconClass: 'fa-brands fa-css3-alt p-2', color: '264de4' },
	{ iconClass: 'fa-brands fa-sass p-2', color: 'CD6799' },
	{ iconClass: 'fa-brands fa-bootstrap p-2', color: '8c14fb' },
	{ iconClass: 'fa-brands fa-square-js p-2', color: 'F0DB4F' },
	{ iconClass: 'fa-brands fa-react p-2', color: '61DBFB' },
	{ iconClass: 'fa-brands fa-node p-2', color: '3C873A' },
	{ iconClass: 'fa-solid fa-database p-2', color: '3C873A' },
	{ iconClass: 'fa-brands fa-git-alt p-2', color: 'F1502F' },
	{ iconClass: 'fa-brands fa-ethereum p-2', color: '8b8b8b' },
];

const Skills = () => {
	return (
		<div className="h-screen w-full ">
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-5/6 md:h-full px-2 md:flex-row">
				<div>
					<img
						src={SkillImg}
						alt="about image"
						className="mx-auto w-2/3 md:w-4/5"
					/>
				</div>
				<div className="flex flex-col justify-center items-center h-full w-full">
					<h2 className="text-2xl sm:text-6xl font-bold">
						Sk<span className="text-custom-blue">i</span>lls
					</h2>
					<div className="grid grid-cols-3 md:grid-cols-4 gap-4 py-3 max-w-md text-6xl text-center">
						{icons.map(({ iconClass, color }) => (
							<i className={iconClass} style={{ color: `#${color}` }}></i>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
