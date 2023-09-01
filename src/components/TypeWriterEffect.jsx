import { Cursor, useTypewriter } from "react-simple-typewriter";
const TypeWriterEffect = () => {
	const [text] = useTypewriter({
		words: ["Good Luck", "Have Fun"],
		loop: true,
		typeSpeed: 50,
		deleteSpeed: 80,
		delaySpeed: 4000,
	});
	return (
		<div className='text-tictactoe-o_light '>
			<span>{text}</span>
			<Cursor
				cursorBlinking='false'
				cursorStyle='|'
				cursorColor='#F31559'
				curs
			/>
		</div>
	);
};

export default TypeWriterEffect;
