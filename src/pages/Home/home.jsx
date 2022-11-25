import React from "react";
import { About } from "../../component/About";
import { Contact } from "../../component/Contact";
import { Header } from "../../component/Navbar";
import { OurTeam } from "../../component/OurTeam";
const Home = () => {
	return (
		<>
			<About />
			<OurTeam />
			<Contact />
		</>
	);
};

export default Home;
