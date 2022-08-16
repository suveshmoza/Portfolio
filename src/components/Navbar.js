import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Switcher from './Switcher';

const navLinks = [
	{ id: 1, link: 'Skills' },
	{ id: 2, link: 'Projects' },
	{ id: 3, link: 'Achievements' },
	{ id: 4, link: 'About' },
	{ id: 6, link: 'Contact Me' },
];

const Navbar = () => {
	const [nav, setNav] = useState(false);

	return (
		<nav className="flex bg-slate-100  dark:bg-gray-800 dark:text-white justify-between items-center w-full h-20 px-4 fixed">
			<div>
				<Link
					to="main"
					smooth
					duration={500}
					className="cursor-pointer font-medium text-2xl"
				>
					Suvesh Moza
				</Link>
			</div>
			<div>
				<ul className="hidden  md:flex">
					{navLinks.map(({ id, link }) => (
						<li
							key={id}
							className="mx-1 px-3 py-1 text-lg font-medium hover:text-custom-blue"
						>
							<Link className="cursor-pointer" to={link} smooth duration={500}>
								{link}
							</Link>
						</li>
					))}
					<Switcher />
				</ul>
			</div>
			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 text-black dark:text-white md:hidden"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>
			{nav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white md:hidden dark:bg-gray-900 dark:text-white	">
					{navLinks.map(({ id, link }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-4 text-xl hover:text-custom-blue"
						>
							<Link
								onClick={() => setNav(!nav)}
								to={link}
								smooth
								duration={500}
							>
								{link}
							</Link>
						</li>
					))}
					<Switcher />
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
