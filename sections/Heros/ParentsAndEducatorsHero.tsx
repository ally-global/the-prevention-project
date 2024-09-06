import Hero from '@/components/Hero';
import StandardLayout from '@/components/StandardLayout';
import Text from '@/components/Text';
import { Stack } from '@mui/material';
import { ReactNode } from 'react';

const ParentsAndEducatorsHero = ({
	text,
	title,
	subtext,
}: {
	text: string;
	title?: string;
	subtext?: ReactNode;
}) => {
	return (
		<Hero
			sx={{
				background: 'linear-gradient(to right, #673BDC, #00B8C5)',
				pb: {
					xs: 6,
					sm: 6,
					md: 12,
					lg: 12,
					xl: 12,
				},
			}}
		>
			<StandardLayout>
				<Stack
					sx={{
						display: 'flex',
						alignItems: { xs: 'start', sm: 'center' },
					}}
					spacing={4}
				>
					{title ? (
						<Text
							variant="h5"
							sx={{
								maxWidth: '900px',
								textAlign: { xs: 'left', sm: 'center' },
							}}
						>
							{title}
						</Text>
					) : null}
					<Text
						variant="h4"
						sx={{
							maxWidth: '700px',
							textAlign: { xs: 'left', sm: 'center' },
						}}
					>
						{text}
					</Text>
					{subtext ? (
						<Text
							variant="body1"
							sx={{
								maxWidth: '700px',
								textAlign: { xs: 'left', sm: 'center' },
							}}
						>
							{subtext}
						</Text>
					) : (
						<></>
					)}
				</Stack>
			</StandardLayout>
		</Hero>
	);
};

export default ParentsAndEducatorsHero;
