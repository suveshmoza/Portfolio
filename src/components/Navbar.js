import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
const navLinks = [
	{ id: 1, name: 'Skills' },
	{ id: 2, name: 'Projects' },
	{ id: 3, name: 'Experience' },
	{ id: 4, name: 'Github' },
	{ id: 5, name: 'Contact Me' },
];

const Navbar = () => {
	const [nav, setNav] = useState(false);

	return (
		<nav className="bg-white border border-gray-800 p-4">
			<div className="container mx-auto flex justify-between items-center">
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
								className="mx-1 px-3 py-1 text-lg font-medium transition ease-in-out delay-130  hover:-translate hover:scale-110 duration-200"
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
								className="px-4 cursor-pointer capitalize py-4 text-xl transition ease-in-out delay-130  hover:-translate hover:scale-110 duration-200 hover:bg-slate-100"
							>
								<a href="#">{name}</a>
							</li>
						))}
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
