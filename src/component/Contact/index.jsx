import React from "react";

export const Contact = () => {
	return (
		<div className='bg-blue-200 mb-6'>
			<h2 className='text-center'>Contact Us</h2>
			<form className='flex flex-col justfiy-center items-center text-center px-10 md:w-1/2 m-auto'>
				<div className='w-full mb-4 mb:1/2'>
					<label htmlFor='Name' className='mb-2 font-bold'>
						Email:
					</label>
					<br />
					<input
						type='email'
						placeholder='Enter your email'
						className='p-2 w-full rounded '
						required
					/>
				</div>
				<div className='w-full mb-4 mb:w-1/2'>
					<label htmlFor='Message' className='mb-2 font-bold'>
						Message:
					</label>
					<br />
					<textarea placeholder='Enter your message' className='w-full p-2 ' />
				</div>
				<button
					type='submit'
					className='bg-blue-900 p-2 my-2 mb-4 rounded text-white w-full mb:w-1/2'>
					Send
				</button>
			</form>
		</div>
	);
};
