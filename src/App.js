import React from 'react';
import {
	Header,
	Navbar,
	About,
	Skills,
	Projects,
	Achievement,
	Footer,
} from './components';
const App = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<Skills />
			<Projects />
			<Achievement />
			<About />
			<Footer />
		</div>
	);
};

export default App;
