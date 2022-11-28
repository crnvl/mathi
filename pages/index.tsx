import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
	const router = useRouter();

	const [calc, setCalc] = useState<string>();
	const [inputValue, setInputValue] = useState<string>('');
	const [error, setError] = useState<string>();

	const setupState = () => {
		const operators = ['+', '-', '*'];
		const firstNumber = Math.floor(Math.random() * 100);
		const secondNumber = Math.floor(Math.random() * 100);
		const operator = operators[Math.floor(Math.random() * operators.length)];

		setCalc(`${firstNumber} ${operator} ${secondNumber}`);
		setInputValue('');
		setError(undefined);

		document.getElementById('calc')?.focus();
	};
	useEffect(setupState, []);

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!calc) return;

		const input = e.target.value.replace(',', '.');
		if (!/^[0-9.-]*$/.test(input)) return;

		const result = eval(calc);
		if (input === result.toString()) {
			setupState();
			return;
		}

		setError('Incorrect!');
		setInputValue(input);
	}

	const errorField = () => {
		if (!error || inputValue.length <= 0) return (<></>);
		return (
			<span className='margin-auto flex justify-center text-rose-600'>
				{error}
			</span>
		);
	}

	return <>
		<Head>
			<title>math | qwq.sh</title>
			<meta name="description" content="Train your mental arithmetic skills." />
		</Head>
		<div className='flex h-screen w-screen justify-center bg-red-200'>
			<div className="m-auto">
				<div className='flex flex-col items-center gap-2'>
					<h1 className='py-2 text-5xl font-serif'>{calc}</h1>
					<div className='flex flex-col w-full justify-center gap-2'>
						<input
							id='calc'
							type="text"
							className="rounded-md text-center text-gray-800 py-2 focus:shadow-md outline-none border-white transition ease-in-out duration-300"
							value={inputValue}
							onChange={handleInput}
						/>
						{errorField()}
					</div>
				</div>
			</div>
			<div className='absolute bottom-5 font-bold'>
				<p><a href='https://github.com/angelsflyinhell/mathi' className='underline'>GitHub</a> | <a href='https://qwq.sh' className='underline'>qwq.sh</a></p>
			</div>
		</div>
	</>
}

export default Home
