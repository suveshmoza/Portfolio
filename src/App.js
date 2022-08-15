import React from 'react';
import { Header, Navbar, About, Skills, Projects } from './components';
const App = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<Skills />
			<Projects />
			<About />
		</div>
	);
};

export default App;
