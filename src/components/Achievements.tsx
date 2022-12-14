import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import Medal from './Svg/Medal';
import PlayButton from './Svg/PlayButton';
import Trophy from './Svg/Trophy';
import axios from 'axios';
import Link from './Svg/Link';

const Achievements = () => {
	const [AchievementsData, setAchievementsData] = useState<IAchievement[]>([]);
	const rank_suffix = ['st', 'nd', 'rd', 'th'];
	const rank_color = [
		'text-[#FFDC82]',
		'text-[#B4B4B4]',
		'text-[#C07300]',
		'text-[#D8D8D8]',
	];

	useEffect(() => {
		axios
			.get<IAchievement[]>('/config/achievements-data.json')
			.then((res) => setAchievementsData(res.data))
			.catch(console.error);
	}, []);

	const get_rank_color = (rank: number) => {
		if (rank < 4 && rank != 0) return rank_color[rank - 1];
		else return rank_color[3];
	};
	const date_format = (date: string) => {
		let first_line = 'AS OF';
		let second_line = 'NOW';
		if (date != '') {
			first_line = date.slice(0, date.lastIndexOf('.'));
			second_line = date.slice(date.lastIndexOf('.') + 1);
		}
		return (
			<div className="min-w-[55px] text-[20px] text-center">
				<p className={date == '' ? 'text-[18px]' : ''}>{first_line}</p>
				<p
					className={
						'font-bold text-[22px] mt-[-10px] ' +
						(date == '' && 'text-nyffinRed')
					}
				>
					{second_line}
				</p>
			</div>
		);
	};

	return (
		<div className="mt-[150px] mb-[150px] sm:mb-[250px]">
			<SectionTitle
				title="All our achievements"
				subtitle=""
				backtext="Achievements"
				mainColor="text-white"
				secondColor="text-nyffinBlack"
				backtextColor="text-black/[.35]"
				placement="top-[50%] left-[50%] translate-x-[-50%]"
				className="before:block before:absolute before:-inset-0 before:skew-y-[8deg] before:bg-nyffinRed "
				id="achievements"
			/>

			<p className="max-w-[810px] px-[30px] mx-auto my-[70px] sm:my-[120px] sm:text-center text-justify text-[18px]">
				Depuis 2021, tant dans la réalité virtuelle que dans la réalité
				augmentée, nos équipes ont remporté plusieurs prix avec l'ambition
				d'en gagner d'autres.
			</p>
			<div className="max-w-[800px] min-[840px]:mx-auto border-y divide-y mx-[20px]">
				{AchievementsData.map((achievement, id) => {
					return (
						<div
							key={id}
							className="flex flex-row flex-wrap min-[460px]:flex-nowrap py-[5px] items-center gap-x-[40px] justify-between"
						>
							<div className="flex items-center gap-3 min-w-[100px]">
								{achievement.rank < 4 && achievement.rank != 0 ? (
									<Trophy
										className={
											'w-[40px] h-[40px] ' +
											get_rank_color(achievement.rank)
										}
									/>
								) : (
									<Medal
										className={
											'w-[35px] h-[35px] mx-[2.5px] ' +
											get_rank_color(achievement.rank)
										}
									/>
								)}
								<p
									className={
										'text-[20px] ' +
										(achievement.rank == 0
											? 'italic ml-[-4px] text-[18px]'
											: '')
									}
								>
									{achievement.rank != 0
										? achievement.rank +
										  rank_suffix[
												achievement.rank < 5
													? achievement.rank - 1
													: 3
										  ]
										: 'TBD'}
								</p>
							</div>
							{date_format(achievement.date)}
							<div
								className="text-[20px] order-4 min-[460px]:order-3 grow"
								style={{ flexBasis: '70%' }}
							>
								{achievement.event_name}
							</div>
							<div className="w-[35px] order-3 min-[460px]:order-4">
								{achievement.url != '' && (
									<a
										href={achievement.url}
										target="_blank"
										rel="noreferrer"
									>
										{achievement.url_type == 'video' ? (
											<PlayButton className="text-nyffinRed w-[22px] h-[22px]" />
										) : (
											<Link className="text-nyffinRed w-[22px] h-[22px]" />
										)}
									</a>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Achievements;
