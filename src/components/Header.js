import React from 'react';
import Hero from '../assests/images/hero.svg';

const Header = () => {
	return (
		<header
			name="main"
			className="h-screen w-full dark:bg-gray-900 dark:text-white"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-5/6 md:h-full px-2 md:flex-row">
				<div className="flex flex-col justify-center h-full px-1">
					<h2 className="text-3xl sm:text-6xl font-bold">
						Hi all, I'm <span className="text-custom-blue">Suvesh Moza</span>
					</h2>
					<p className="py-3 max-w-md font-semibold">
						A passionate Web Developer having an experience of building
						Full-Stack web applications with JavaScript.
					</p>
					<div className="text-center md:text-left">
						<a
							href="https://drive.google.com/file/d/1WIyyVKp9UJaSqJlw_sMnNF0LelAFIe1o/view"
							className="bg-transparent cursor-pointer hover:bg-custom-blue text-custom-blue font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
							target="_blank"
							rel="noopener noreferrer"
						>
							My Resume
						</a>
					</div>
				</div>
				<div>
					<img
						src={Hero}
						alt="my portfolio"
						className="mx-auto w-2/3 md:w-4/5"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
