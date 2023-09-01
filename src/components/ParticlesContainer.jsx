import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);
	const particlesLoaded = useCallback(async () => {}, []);

	return (
		<Particles
			className='w-full h-full absolute translate -z-10'
			id='tsparticles'
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: { enable: false },
				background: {
					color: {
						value: "",
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onHover: {
							enable: true,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 40,
						},
						repulse: {
							distance: 120,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: "#F31559",
					},
					links: {
						color: "#22A699",
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							dufault: "bounce",
						},
						random: false,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 400,
						},
						value: 80,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 2, max: 5 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticlesContainer;
