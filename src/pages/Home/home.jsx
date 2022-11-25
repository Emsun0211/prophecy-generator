import React from "react";

import Hero from "../../component/Hero";


import { About } from "../../component/About";
import { Contact } from "../../component/Contact";
import { Header } from "../../component/Navbar";
import { OurTeam } from "../../component/OurTeam";
const Home = () => {
	return (
		<>
      <Hero/>
			<About />
			<OurTeam />
			<Contact />
		</>
	);

};

export default Home;
