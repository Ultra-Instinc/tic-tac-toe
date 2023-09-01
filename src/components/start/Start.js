import React, { useContext } from "react";
import Xicon from "../../icons/Xicon";
import Oicon from "../../icons/Oicon";
import GameContext from "../../context/gameContext";
import ParticlesContainer from "../ParticlesContainer";

const Start = () => {
	const { activeUser, setActiveUser, changePlayMode } = useContext(GameContext);
	return (
		<div className='start'>
			<div className='start_header'>
				<Xicon size={60} />
				<Oicon size={60} />
			</div>
			<div className='card shadow_gray'>
				<h1 className=' text-[1.5rem]'>Pick player 1'st mark</h1>
				<div className='start_players'>
					<span
						className={`${
							activeUser === "x" ? "start_players--active" : ""
						} w-[50%] flex items-center  cursor-pointer justify-center py-[15px] px-[10px] rounded-[10px]`}
						onClick={() => setActiveUser("x")}>
						<Xicon
							size={100}
							color={activeUser === "x" ? "" : "light"}
						/>
					</span>
					<span
						className={`${
							activeUser === "o" ? "start_players--active" : ""
						} w-[50%] flex items-center  cursor-pointer justify-center py-[15px] px-[10px] rounded-[10px]`}
						onClick={() => setActiveUser("o")}>
						<Oicon
							size={100}
							color={activeUser === "o" ? "" : "light"}
						/>
					</span>
				</div>
				<p className=' text-tictactoe-text_light'>remember: x goes first</p>
			</div>
			<div className='start_btns'>
				<button
					className='btn btn_yellow'
					onClick={() => changePlayMode("cpu")}>
					new game (vs CPU)
				</button>
				<button
					className='btn btn_blue'
					onClick={() => changePlayMode("user")}>
					new game (vs Player)
				</button>
			</div>
		</div>
	);
};

export default Start;
