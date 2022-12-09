import React, { FC } from 'react';

interface Props {
	className?: string;
}

const ExternalLinkIcon: FC<Props> = ({ className }) => {
	return (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 1000 1000"
			enableBackground="new 0 0 1000 1000"
			className={className}
		>
			<g>
				<g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
					<path
						fill="currentColor"
						d="M6093.4,4976.9c-231.1-85-281.6-204.6-284.2-653.5c0-294.9,8-348,61.1-451.6c108.9-215.2,138.1-223.1,969.6-239.1l722.5-13.3L5687,1746.8C4656.3,716.1,3795.7-157.9,3774.4-197.7c-47.8-93-47.8-241.7,0-334.7c21.3-39.8,156.7-188.6,302.8-334.7c241.7-239.1,273.6-263,385.2-273.6c66.4-8,154.1-5.3,196.6,2.6c50.5,13.3,658.8,603,1960.4,1904.6C7658,1802.6,8516,2649.9,8526.6,2649.9c10.6,0,18.6-326.7,18.6-727.8c0-709.3,2.6-727.8,61.1-812.9c111.6-164.7,193.9-188.6,634.9-180.6c425,8,464.9,21.2,589.7,191.3c55.8,71.7,55.8,103.6,63.7,1803.7l5.3,1732l-58.4,119.5c-37.2,69.1-98.3,140.8-154.1,172.7c-90.3,50.5-140.8,53.1-1793.1,58.4C6518.4,5011.5,6175.8,5006.1,6093.4,4976.9z"
					/>
					<path
						fill="currentColor"
						d="M1001.2,3895.8c-297.5-50.5-579.1-244.4-735.8-504.7c-178-294.9-170-106.3-162-3904.9l8-3437.3l85-178c95.6-201.9,278.9-414.4,443.6-510c268.3-156.7,85-148.7,3814.6-148.7c3062.8,0,3432,5.3,3562.2,42.5c382.5,114.2,680.1,435.7,765.1,828.8c21.3,98.3,29.2,818.2,29.2,2356.2V657.7h-677.4h-677.4v-2045.4v-2045.4H4454.4H1452.7v2988.4v2988.4h2045.4h2045.4v690.7V3925l-2196.8-2.7C2135.4,3919.7,1080.8,3909.1,1001.2,3895.8z"
					/>
				</g>
			</g>
		</svg>
	);
};

export default ExternalLinkIcon;
