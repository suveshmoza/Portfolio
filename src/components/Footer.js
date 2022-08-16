import React from 'react';

const Footer = () => {
	return (
		<div name="Contact Me" className="h-screen w-full ">
			<div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-between h-5/6 md:h-full px-2 md:flex-row">
				<div className="flex flex-col justify-center">
					<div>
						<h1 className="text-2xl md:text-4xl font-bold">
							hellosuvesh@gmail.com
						</h1>
					</div>
					<div className="px-2 py-2 flex justify-evenly ">
						<a
							href="https://www.linkedin.com/in/suveshmoza/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="m-2 fa-brands fa-linkedin text-2xl md:text-4xl hover:text-linkedin"></i>
						</a>
						<a
							href="https://twitter.com/suveshmoza"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="m-2 fa-brands fa-twitter text-2xl md:text-4xl hover:text-twitter"></i>
						</a>
						<a
							href="https://www.instagram.com/suveshmoza/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="m-2 fa-brands fa-instagram text-2xl md:text-4xl hover:text-instagram"></i>
						</a>
						<a
							href="https://github.com/suveshmoza"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="m-2 fa-brands fa-github text-2xl md:text-4xl"></i>
						</a>
					</div>
				</div>
				<div className="flex flex-col justify-center h-full text-center p-4">
					<h1 className="text-2xl md:text-4xl font-bold">
						Have something to tell?
					</h1>
					<form
						action="https://getform.io/f/595ed973-ea66-4f05-a78a-470fc5c78c8e"
						className="flex flex-col items-center"
						method="POST"
					>
						<input
							className="p-2 m-2 rounded-lg w-full border-2 shadow"
							placeholder="Enter your name"
							type="text"
							name="name"
							required
						/>
						<input
							className="p-2 m-2 rounded-lg w-full border-2 shadow"
							placeholder="Enter your email"
							type="email"
							name="email"
							required
						/>
						<textarea
							className="w-full p-2 m-2 rounded-lg border-2 shadow"
							placeholder="Enter your message"
							rows="4"
							cols="50"
							name="message"
							required
						/>
						<button
							className="bg-custom-blue py-2 rounded-lg text-white w-1/3"
							type="submit"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Footer;
