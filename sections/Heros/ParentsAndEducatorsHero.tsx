import Hero from "@/components/Hero";
import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import { Stack } from "@mui/material";
import { ReactNode } from "react";

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
				background: "linear-gradient(to right, #673BDC, #00B8C5)",
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
					spacing={4}
				>
					{title ? (
						<Text
							variant="h5"
							sx={{
								textAlign: 'center',
								maxWidth: '900px',
							}}
						>
							{title}
						</Text>
					) : null}
					<Text
						variant="h4"
						sx={{
							textAlign: 'center',
							maxWidth: '700px',
						}}
					>
						{text}
					</Text>
					{subtext ? (
						<Text
							variant="body1"
							sx={{
								textAlign: 'center',
								maxWidth: '700px',
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
