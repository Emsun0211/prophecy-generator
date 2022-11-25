import React from "react";

export const About = () => {
	return (
		<section className='flex items-center justify-center p-8 m-auto w-full md:w-3/4  '>
			<div>
				<h2 className='md:text-5xl text-2xl text-blue-900 w-1/2 text-center'>
					What We Do at ProphecyGenerator{" "}
				</h2>
			</div>
			<section className='w-1/2 mx-2'>
				<div className='bg-sky-100 p-2 mb-2 rounded flex items-center'>
					<p>Prophecies Documentation</p>
				</div>
				<div className='bg-sky-100 p-2 mb-2 rounded flex items-center'>
					<p>Prophecies Tracking</p>
				</div>
				<div className='bg-sky-100 p-2 mb-2 rounded flex items-center'>
					<p>Prophecies Search</p>
				</div>
				<div className='bg-sky-100 p-2 mb-2 rounded flex items-center'>
					<p>Prophecies Translation</p>
				</div>
			</section>
		</section>
	);
};
