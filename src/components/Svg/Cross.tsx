import React, { FC } from 'react';

interface Props {
	className?: string;
}

const Cross: FC<Props> = ({ className }) => {
	return (
		<svg
			width="25"
			height="25"
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M25 2.51786L22.4821 0L12.5 9.98214L2.51786 0L0 2.51786L9.98214 12.5L0 22.4821L2.51786 25L12.5 15.0179L22.4821 25L25 22.4821L15.0179 12.5L25 2.51786Z"
				fill="white"
			/>
		</svg>
	);
};

export default Cross;
