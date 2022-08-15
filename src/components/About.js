import React from 'react';
import AboutImg from '../assests/images/about.svg';

const About = () => {
	return (
		<div className="h-screen w-full ">
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-5/6 md:h-full px-2 md:flex-row">
				<div>
					<img
						src={AboutImg}
						alt="about image"
						className="mx-auto w-2/3 md:w-4/5"
					/>
				</div>
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-2xl sm:text-6xl text-center font-bold">
						About <span className="text-custom-blue">Me</span>
					</h2>
					<p className="py-3 max-w-md text-lg text-justify">
						I'm from Jammu and Kashmir, India. I'm currently a final year
						student at Univeristy Institute of Engineering and Technology
						Kurukshetra pursuing my Bachelors of Technology in Computer Science
						and Engineering. I love building projects, travelling, exploring new
						cultures and meeting people.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
