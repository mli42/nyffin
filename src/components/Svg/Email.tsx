import React, { FC, useState } from 'react';

interface Props {
	className?: string;
}

const EmailIcon = () => {
	return (
		<svg
			width="25"
			height="19"
			viewBox="0 0 25 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="mt-[3px]"
		>
			<path
				d="M24.5264 6.19141C24.7168 6.04004 25 6.18164 25 6.4209V16.4062C25 17.7002 23.9502 18.75 22.6562 18.75H2.34375C1.0498 18.75 0 17.7002 0 16.4062V6.42578C0 6.18164 0.27832 6.04492 0.473633 6.19629C1.56738 7.0459 3.01758 8.125 7.99805 11.7432C9.02832 12.4951 10.7666 14.0771 12.5 14.0674C14.2432 14.082 16.0156 12.4658 17.0068 11.7432C21.9873 8.125 23.4326 7.04102 24.5264 6.19141ZM12.5 12.5C13.6328 12.5195 15.2637 11.0742 16.084 10.4785C22.5635 5.77637 23.0566 5.36621 24.5508 4.19434C24.834 3.97461 25 3.63281 25 3.27148V2.34375C25 1.0498 23.9502 0 22.6562 0H2.34375C1.0498 0 0 1.0498 0 2.34375V3.27148C0 3.63281 0.166016 3.96973 0.449219 4.19434C1.94336 5.36133 2.43652 5.77637 8.91602 10.4785C9.73633 11.0742 11.3672 12.5195 12.5 12.5Z"
				fill="white"
			/>
		</svg>
	);
};

const OpenEmailIcon = () => {
	return (
		<svg
			width="25"
			height="25"
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="mt-[-2px]"
		>
			<path
				d="M8.59375 10.547H16.4062C16.8379 10.547 17.1875 10.1974 17.1875 9.76578V8.98453C17.1875 8.55288 16.8379 8.20328 16.4062 8.20328H8.59375C8.16211 8.20328 7.8125 8.55288 7.8125 8.98453V9.76578C7.8125 10.1974 8.16211 10.547 8.59375 10.547ZM7.8125 14.4533C7.8125 14.8849 8.16211 15.2345 8.59375 15.2345H16.4062C16.8379 15.2345 17.1875 14.8849 17.1875 14.4533V13.672C17.1875 13.2404 16.8379 12.8908 16.4062 12.8908H8.59375C8.16211 12.8908 7.8125 13.2404 7.8125 13.672V14.4533ZM12.5 20.3678C11.6982 20.3678 10.8965 20.1208 10.2119 19.6261L0 12.2492V22.6564C0 23.9508 1.04932 25.0002 2.34375 25.0002H22.6562C23.9507 25.0002 25 23.9508 25 22.6564V12.2492L14.7881 19.6261C14.1035 20.1203 13.3018 20.3678 12.5 20.3678ZM24.1021 7.95669C23.6699 7.61783 23.2603 7.29898 22.6562 6.84292V4.68765C22.6562 3.39322 21.6069 2.3439 20.3125 2.3439H16.5259C16.3774 2.23648 16.2393 2.13589 16.0845 2.02359C15.2637 1.42447 13.6328 -0.0169392 12.5 0.000150653C11.3672 -0.0169392 9.73682 1.42447 8.91553 2.02359C8.76074 2.13589 8.62256 2.23648 8.47412 2.3439H4.6875C3.39307 2.3439 2.34375 3.39322 2.34375 4.68765V6.84292C1.73975 7.29849 1.33008 7.61783 0.897949 7.95669C0.618241 8.1759 0.392048 8.45584 0.236481 8.77535C0.0809144 9.09486 4.81351e-05 9.44556 0 9.80093L0 10.321L4.6875 13.7072V4.68765H20.3125V13.7072L25 10.321V9.80093C25 9.08121 24.6689 8.40103 24.1021 7.95669V7.95669Z"
				fill="white"
			/>
		</svg>
	);
};

const Email: FC<Props> = ({ className }) => {
	const emailAddress = 'nyffin.esport@gmail.com';
	const [isHovering, setIsHovering] = useState(false);
	const [showCopyToast, setShowCopyToast] = useState(false);
	const [timer, setTimer] = useState<number>(0);

	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	const copyEmailToClipboard = () => {
		try {
			navigator.clipboard.writeText(emailAddress);
			setShowCopyToast(true);

			clearTimeout(timer);
			setTimer(
				setTimeout(() => {
					setShowCopyToast(false);
				}, 1500)
			);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div
			className={className + ' relative flex items-center cursor-pointer'}
			onClick={copyEmailToClipboard}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<span
				className={
					(showCopyToast ? ' opacity-100 ' : 'opacity-0 ') +
					'flex transition-opacity animate-bounce justify-center items-center absolute right-[30%] bottom-10 py-1 px-4 bg-nyffinRed rounded-md text-lg after:absolute after:top-[99%] after:left-[calc(50% - 10px)] after:border-t-[10px] after:border-t-nyffinRed after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent '
				}
				aria-hidden="true"
			>
				Copied !
			</span>
			{isHovering ? <OpenEmailIcon /> : <EmailIcon />}
			<p className="text-[22px] ml-2">{emailAddress}</p>
		</div>
	);
};

export default Email;
