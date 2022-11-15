import type { NextPage } from 'next'

const Home: NextPage = () => {
	return <>
		<div className='flex h-screen w-screen justify-center bg-red-50'>
			<div className="m-auto">
				<div className='flex flex-col items-center gap-2'>
					<h1 className='py-2 text-5xl font-serif'>69 - 42</h1>
					<div className='flex flex-col w-full justify-center gap-2'>
						<input type="text" className="rounded-md text-center text-gray-800 py-2 focus:shadow-lg outline-none border-white transition ease-in-out duration-300" />
						<button className={
							`py-2
							w-full
							rounded-md
							transition ease-in-out duration-300
							hover:shadow-lg outline-none active:border-black active:text-white active:bg-black
							hover:bg-white
							border-2 border-none
							flex justify-center items-center`
						}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</>
}

export default Home
