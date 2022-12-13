// Libraries
import React from "react";
import Wave from "react-wavify";

const BottomWave = () => (
	<Wave
		fill="#1f2260"
		paused={false} /*GIRL U MAKE ME DIZZY*/
		options={{
			height: 100,
			amplitude: 30,
			speed: 0.15,
			points: 5,
		}}
	/>
);

export default BottomWave;
