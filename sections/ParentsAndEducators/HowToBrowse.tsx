import StandardLayout from '@/components/StandardLayout';
import Text from '@/components/Text';
import { Box, Typography, Grid, Link } from '@mui/material';

const content = {
	title: 'How to browse the library:',
	description:
		'Follow these steps to easily navigate and use our library resources:',
	features: [
		{
			number: 1,
			title: 'Choose a Grade Level',
		},
		{
			number: 2,
			title: 'Choose a Topic',
		},
		{
			number: 3,
			title: 'Download What You Need',
		},
	],
};

const FeatureItem = ({
	number,
	title,
	description,
}: {
	number: number;
	title: string;
	description?: string;
}) => {
	return (
		<Box
			sx={{
				p: 3,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: { xs: 0, md: 1 },
			}}
		>
			<Box
				sx={{
					width: 40,
					height: 40,
					borderRadius: '50%',
					backgroundColor: 'PrimaryPurple',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					mb: 2,
				}}
			>
				<Typography variant="h6" color="white">
					{number}
				</Typography>
			</Box>
			<Text variant={'h6'} color="PrimaryPurple" sx={{ fontSize: '20px' }}>
				{title}
			</Text>
			<Text variant={'body1'} color={'Grey900'} sx={{ textAlign: 'center' }}>
				{description}
			</Text>
		</Box>
	);
};

const CallOutSection = () => {
	return (
		<Box
			sx={{
				backgroundColor: 'Grey200',
				p: 3,
				mt: 6,
				borderRadius: 4,
				textAlign: 'center',
				marginX: 'auto',
				maxWidth: { xs: '90%', sm: '90%', md: '720px' },
			}}
		>
			<Text
				variant="h6"
				color="PrimaryPurple"
				sx={{ textAlign: 'center', mb: 1 }}
			>
				Please Note:
			</Text>
			<Typography variant="body1" color="Grey800" sx={{ textAlign: 'center' }}>
				These resources should only be used with their intended audiences, in
				order to maintain the integrity and safety of the material. Please{' '}
				<Link
					href="mailto:thepreventionproject@ally.org"
					sx={{ color: 'PrimaryPurple' }}
				>
					contact us
				</Link>{' '}
				if you wish to distribute them widely or feature them on your website.
			</Typography>
		</Box>
	);
};

const HowToBrowseSection = () => {
	return (
		<StandardLayout sx={{ py: { xs: 4, md: 8 } }}>
			<Text variant={'h4'} color="PrimaryPurple" sx={{ textAlign: 'center' }}>
				{content.title}
			</Text>
			<Grid container>
				{content.features.map((feature) => (
					<Grid item xs={12} md={4} key={feature.number}>
						<FeatureItem {...feature} />
					</Grid>
				))}
			</Grid>
			<CallOutSection />
		</StandardLayout>
	);
};

export default HowToBrowseSection;
