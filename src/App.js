import React, { useContext } from "react";
import Board from "./components/board/Board";
import Start from "./components/start/Start";
import "./index.css";
import Modal from "./components/modal/Modal";
import GameContext from "./context/gameContext";
import ParticlesContainer from "./components/ParticlesContainer";
import TypeWriterEffect from "./components/TypeWriterEffect";

const App = () => {
	const { screen } = useContext(GameContext);
	return (
		<div className='app relative'>
			<div className='absolute mx-auto font-serif  z-50 top-[2%] p-5 text-3xl'>
				<div className='relative text-left top-0 left-0'>
					<TypeWriterEffect />
				</div>
			</div>
			<div className='absolute -z-10 inset-0 left-0  top-0 '>
				<ParticlesContainer />
			</div>
			<div className='container'>
				{screen === "start" ? <Start /> : <Board />}
			</div>
			<Modal />
		</div>
	);
};

export default App;
