import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
	{ id: 1, name: 'Skills' },
	{ id: 2, name: 'Projects' },
	{ id: 3, name: 'Achievements' },
	{ id: 4, name: 'About' },
	{ id: 5, name: 'Github' },
	{ id: 6, name: 'Contact Me' },
];

const Navbar = () => {
	const [nav, setNav] = useState(false);

	return (
		<div className="flex bg-neutral-100 justify-between items-center w-full h-20 px-4 fixed">
			<div>
				<a href="#" className="font-medium text-2xl">
					Suvesh Moza
				</a>
			</div>
			<div>
				<ul className="hidden  md:flex">
					{navLinks.map(({ id, name }) => (
						<li
							key={id}
							className="mx-1 px-3 py-1 text-lg font-medium hover:text-custom-blue"
						>
							<a href="#">{name}</a>
						</li>
					))}
				</ul>
			</div>
			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 text-black md:hidden"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>
			{nav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white md:hidden">
					{navLinks.map(({ id, name }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-4 text-xl hover:text-custom-blue"
						>
							<a href="#">{name}</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Navbar;
