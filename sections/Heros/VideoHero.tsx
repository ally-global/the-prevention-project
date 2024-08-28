'use client';

import Hero from '@/components/Hero';
import { Box, Stack } from '@mui/material';
import ChooseYourGradeSection from '@/sections/ChooseYourGradeSection';
import StandardLayout from '@/components/StandardLayout';
import Text from '@/components/Text';
import useDevice from '@/hooks/useDevice';

type PositionsType = {
	[key: string]: {
		width: string;
		top?: string;
		left?: string;
		right?: string;
		bottom?: string;
	};
};

const VideoHero = () => {
	const { xsScreen: isMobile, smScreen: isTablet } = useDevice();

	const mobilePositions: PositionsType = {
		topLeft: {
			width: '150px',
			top: '-12px',
			left: '6px',
		},
		middleLeft: {
			width: '83px',
			top: '46px',
			left: '-24px',
		},
		bottomLeft: {
			width: '102px',
			left: '-12px',
			bottom: '20px',
		},
		topRight: {
			width: '106px',
			top: '36px',
			right: '-30px',
		},
		middleRight: {
			width: '134px',
			bottom: '42px',
			right: '-28px',
		},
		bottomRight: { width: '102px', right: '12px', bottom: '-12px' },
	};

	const tabletPositions: PositionsType = {
		topLeft: {
			width: '220px',
			top: '10px',
			left: '-90px',
		},
		middleLeft: {
			width: '186px',
			top: '100px',
			left: '-118px',
		},
		bottomLeft: {
			width: '160px',
			left: '-68px',
			bottom: '-12px',
		},
		topRight: {
			width: '170px',
			top: '16px',
			right: '-90px',
		},
		middleRight: {
			width: '200px',
			top: '130px',
			left: '-90px',
		},
		bottomRight: { width: '160px', right: '-60px', bottom: '8px' },
	};

	const positions: PositionsType = {
		topLeft: {
			width: '302px',
			top: '24px',
			left: '-180px',
		},
		middleLeft: {
			width: '290px',
			top: '140px',
			left: '-212px',
		},
		bottomLeft: {
			width: '218px',
			left: '-124px',
			bottom: '-24px',
		},
		topRight: {
			width: '226px',
			top: '22px',
			right: '-164px',
		},
		middleRight: {
			width: '291px',
			top: '160px',
			left: '-100px',
		},
		bottomRight: { width: '190px', right: '-112px', bottom: '20px' },
	};

	const mobileTextStyle = {
		fontSize: '10px',
		lineHeight: '12px',
		fontWeight: '500',
		padding: '6px',
		borderRadius: 3,
		textAlign: 'center',
	};

	const tabletTextStyles = {
		fontSize: '16px',
		lineHeight: '18px',
		fontWeight: '700',
		padding: '6px',
		borderRadius: 3,
		textAlign: 'center',
	};

	const textStyles = {
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: '700',
		padding: '6px',
		borderRadius: 3,
		textAlign: 'center',
	};

	const responsivePositions = (position: string) =>
		isMobile
			? mobilePositions[position]
			: isTablet
			? tabletPositions[position]
			: positions[position];

	const responsiveTextStyles = isMobile
		? mobileTextStyle
		: isTablet
		? tabletTextStyles
		: textStyles;

	return (
		<Hero
			sx={{
				backgroundImage:
					'linear-gradient(to bottom, transparent, 75%, white), linear-gradient(to right, #673BDC, #00B8C5)',
				height: {
					xs: 'auto',
				},
				marginBottom: { xs: 4, sm: 6 },
			}}
		>
			<Box sx={{ py: { xs: 0, sm: 2 } }}>
				<StandardLayout>
					<Stack
						display="flex"
						flexDirection="column"
						alignItems="center"
						spacing={4}
					>
						<Text
							variant="h3"
							sx={{
								maxWidth: '900px',
								textAlign: 'center',
								fontSize: { xs: '18px', sm: '32px', md: '50px' },
							}}
						>
							Welcome to The Prevention Project
						</Text>
						<Stack
							direction="row"
							justifyContent="center"
							sx={{ width: '100%', padding: { xs: 2, md: 4 } }}
						>
							<Box
								sx={{
									zIndex: 1,
									position: 'relative',
								}}
							>
								<span
									style={{
										...responsivePositions('topLeft'),
										position: 'absolute',
									}}
								>
									<Text
										variant="h6"
										sx={{
											backgroundColor: 'PrimaryBlue',
											...responsiveTextStyles,
										}}
									>
										What&apos;s the problem with information sharing online?
									</Text>
								</span>
								<span
									style={{
										...responsivePositions('middleLeft'),
										position: 'absolute',
									}}
								>
									<Text
										variant="h6"
										sx={{
											backgroundColor: 'Blue',
											...responsiveTextStyles,
										}}
									>
										Is sugar dating online safe?
									</Text>
								</span>
								<span
									style={{
										...responsivePositions('bottomLeft'),
										position: 'absolute',
									}}
								>
									<Text
										variant="h6"
										sx={{
											backgroundColor: 'PrimaryPurple',
											...responsiveTextStyles,
										}}
									>
										How can AI be used against me?
									</Text>
								</span>
							</Box>
							<Box
								sx={{
									height: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									width: { xs: '100%', sm: '80%' },
									maxWidth: '600px',
								}}
							>
								<video
									loop
									autoPlay
									muted
									width={'100%'}
									style={{
										borderRadius: 15,
									}}
								>
									<source
										src={'/videos/TPP-Header-Reel.mp4'}
										type="video/mp4"
									/>
								</video>
							</Box>
							<Box
								sx={{
									zIndex: 1,
									position: 'relative',
								}}
							>
								<span
									style={{
										...responsivePositions('topRight'),
										position: 'absolute',
									}}
								>
									<Text
										variant="h6"
										sx={{
											backgroundColor: 'Blue',
											...responsiveTextStyles,
										}}
									>
										What does consent really look like?
									</Text>
								</span>
								<span
									style={{
										...responsivePositions('middleRight'),
										position: 'absolute',
									}}
								>
									<Text
										variant="h6"
										sx={{
											backgroundColor: 'PrimaryPurple',
											...responsiveTextStyles,
										}}
									>
										Is my online romance real?
									</Text>
								</span>
								<span
									style={{
										...responsivePositions('bottomRight'),
										position: 'absolute',
									}}
								>
									<Text
										variant="h6"
										sx={{
											backgroundColor: 'PrimaryBlue',
											...responsiveTextStyles,
										}}
									>
										Is sharing nudes really a crime?
									</Text>
								</span>
							</Box>
						</Stack>
					</Stack>
				</StandardLayout>
				<StandardLayout sx={{ pt: { xs: 4, sm: 4, md: 6 } }}>
					<Stack
						spacing={4}
						alignItems={'center'}
						sx={{ mb: { xs: 2, md: 4 } }}
					>
						<Text
							variant="body1"
							color="PurpleDark"
							sx={{
								maxWidth: { xs: '90%', md: '700px' },
								textAlign: 'center',
								marginX: 'auto',
							}}
						>
							Let&apos;s learn about this and more, so that we can create a
							safer world for ourselves and for others — both online and face to
							face.
						</Text>
						<Text
							color="PurpleDark"
							variant="h6"
							sx={{ textAlign: 'center', fontSize: { xs: '16px', sm: '18px' } }}
						>
							Choose a grade below to get started.
						</Text>
					</Stack>
				</StandardLayout>
				<ChooseYourGradeSection />
			</Box>
		</Hero>
	);
};

export default VideoHero;
