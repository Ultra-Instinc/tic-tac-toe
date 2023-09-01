import React, { useContext } from "react";
import Board from "./components/board/Board";
import Start from "./components/start/Start";
import "./index.css";
import Modal from "./components/modal/Modal";
import GameContext from "./context/gameContext";
import ParticlesContainer from "./components/ParticlesContainer";

const App = () => {
	const { screen } = useContext(GameContext);
	return (
		<div className='app relative'>
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
