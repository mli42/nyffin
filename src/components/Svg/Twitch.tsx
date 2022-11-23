import React, { FC } from 'react';

interface Props {
	className?: string;
}

const SvgTwitch: FC<Props> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
			className={className}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M2.547 1L1 4.776v15.433h5.5V23h3.093l2.922-2.791h4.47L23 14.462V1H2.547Zm18.39 12.478l-3.438 3.283H12l-2.922 2.791v-2.79h-4.64V2.97h16.499v10.508Zm-3.438-6.731v5.74h-2.062v-5.74H17.5Zm-5.499 0v5.74H9.938v-5.74H12Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default SvgTwitch;