import React from "react";
import gospel from '../assets/preach.jpg'

const Hero = () => {
	return (
		<div>
			<div className="flex flex-column-reverse flex-md-row justify-content-around align-items-center">
				<div className="md:mx-8">
				<h1 className="px-4 text-blue-500 font-bold">Prophecies at the palm of your hands</h1>
				<p className="px-4">Get powerful life changing prophecies to hold onto and strengthen your spiritual life</p>
				</div>
				<img src={gospel} className="img-fluid w-50" alt="preach"></img>
			</div>
		</div>
	)
};

export default Hero