import React from "react";
import Gbenga from "../../assets/gbenga.png";

export const OurTeam = () => {
	return (
		<>
			<h2 className='text-3xl text-center mb-4'>Meet Our Team</h2>
			<section className='flex justify-between sm:justify-center p-8 sm:p-1 md:w-2/3 m-auto w-full flex-col md:flex-row my-8'>
				<div className='flex flex-col justify-center bg-blue-900 text-white mx-3 text-center p-2 mb-3 items-center w-4/5 '>
					<div
						className='rounded my-3 bg-white '
						style={{ width: "180px", height: "180px" }}>
						<img src={Gbenga} style={{ width: "100%" }} alt='' />
					</div>
					<div className='font-bold mb-2'>Akinnukawe Gbenga</div>
					<div className='font-semibold'>FRONTEND DEVELOPER</div>
				</div>

				<div className='flex flex-col justify-center bg-blue-900 text-white mx-3 text-center p-2 mb-3 items-center w-4/5 '>
					<div
						className='rounded my-3 bg-white '
						style={{ width: "180px", height: "180px" }}>
						<img src={Gbenga} style={{ width: "100%" }} alt='' />
					</div>
					<div className='font-bold mb-2'>Akinnukawe Gbenga</div>
					<div className='font-semibold'>FRONTEND DEVELOPER</div>
				</div>

				<div className='flex flex-col justify-center bg-blue-900 text-white mx-3 text-center p-2 mb-3 items-center w-4/5 '>
					<div
						className='rounded my-3 bg-white '
						style={{ width: "180px", height: "180px" }}>
						<img src={Gbenga} style={{ width: "100%" }} alt='' />
					</div>
					<div className='font-bold mb-2'>Akinnukawe Gbenga</div>
					<div className='font-semibold'>FRONTEND DEVELOPER</div>
				</div>
			</section>
		</>
	);
};
