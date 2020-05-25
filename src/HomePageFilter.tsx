import React from 'react';

const HomePageFilter = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg">
			<filter id="red-filter">
				<feColorMatrix
					type="matrix"
					values="0.39     0     0     0     0
							0     0     0     0     0
							0     0     0     0     0
							0     0     0     .7     0 "
				/>
			</filter>
		</svg>
	);
};

export default HomePageFilter;
