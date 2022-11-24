import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Home: NextPage = () => {
	const router = useRouter();

	const operators = ['+', '-', '*'];
	const firstNumber = Math.floor(Math.random() * 100);
	const secondNumber = Math.floor(Math.random() * 100);
	const operator = operators[Math.floor(Math.random() * operators.length)];

	const [calc, setCalc] = useState(`${firstNumber} ${operator} ${secondNumber}`);

	const check = () => {
		const input = document.getElementById('calc') as HTMLInputElement
		const result = eval(calc);

		if (input.value === result.toString()) {
			alert('Correct!')
			router.reload();
		} else {
			alert('Incorrect!')
		}
	}

	return <>
		<Head>
			<title>math | qwq.sh</title>
			<meta name="description" content="Train your mental arithmetic skills." />
		</Head>
		<div className='flex h-screen w-screen justify-center bg-blue-200'>
			<div className="m-auto">
				<div className='flex flex-col items-center gap-2'>
					<h1 className='py-2 text-5xl font-serif'>{calc}</h1>
					<div className='flex flex-col w-full justify-center gap-2'>
						<input id='calc' type="text" className="rounded-md text-center text-gray-800 py-2 focus:shadow-md outline-none border-white transition ease-in-out duration-300" />
						<button onClick={check} className={
							`py-2
							w-full
							rounded-md
							transition ease-in-out duration-300
							hover:shadow-md outline-none active:border-black active:text-white active:bg-black
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
