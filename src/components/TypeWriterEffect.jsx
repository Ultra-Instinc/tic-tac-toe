import { Cursor, useTypewriter } from "react-simple-typewriter";
const TypeWriterEffect = () => {
	const [text] = useTypewriter({
		words: ["I hope that you Have Fun", "I hope that you Enjoy"],
		loop: true,
		typeSpeed: 10,
		deleteSpeed: 5,
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
