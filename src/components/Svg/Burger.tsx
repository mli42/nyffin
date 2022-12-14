import React, { FC } from 'react';

interface Props {
	className?: string;
}

const Burger: FC<Props> = ({ className }) => {
	return (
		<svg
			width="30"
			height="20"
			viewBox="0 0 30 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M0 20H30V16.6667H0V20ZM0 11.6667H30V8.33333H0V11.6667ZM0 0V3.33333H30V0H0Z"
				fill="white"
			/>
		</svg>
	);
};

export default Burger;
