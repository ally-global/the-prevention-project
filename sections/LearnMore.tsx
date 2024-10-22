"use client";

import StandardLayout from "@/components/StandardLayout";
import { Box, Stack } from "@mui/material";

import Image from "next/image";

import TitleAndParagraph from "@/components/TitleAndParagraph";
import TwoColumnLayout, { ColumnWrapOrder } from "@/components/TwoColumnLayout";
import AllyButton from "@/components/AllyButton";
import Link from "next/link";

const LearnMore = () => {
	return (
		<Box sx={{ backgroundColor: "PrimaryPurple", py: 8 }}>
			<StandardLayout>
				<TwoColumnLayout
					columnWrapOrderOnMobile={ColumnWrapOrder.NORMAL}
					leftCol={6}
					rightCol={5}
				>
					<Stack spacing={4} sx={{ mb: { xs: 4, sm: 4, md: 0 } }}>
						<TitleAndParagraph
							title={
								"Educate your students, community or staff with an ExEd expert."
							}
							paragraph={
								<>
									The Exploitation Education Institute offers SEE school
									presentations, online curriculum and lessons, as well as
									training sessions for parent advisory committees, educators,
									social service providers and law enforcement. Our programs
									have reached over 100,000 individuals to date and are
									supported by government bodies and key stakeholders. These
									uniquely interactive and root-based presentations were the
									inspiration behind The Prevention Project.
								</>
							}
						/>
						<Link
							href={"https://www.exploitationeducation.org/contact"}
							target={"_blank"}
							style={{ textDecoration: "none" }}
						>
							<AllyButton color={"PurpleDark"} text={"INQUIRE HERE"} />
						</Link>
					</Stack>
					<Box
						sx={{
							img: { maxWidth: "100%", height: "auto", borderRadius: "16px" },
						}}
					>
						<Image
							src={"/images/about-purple-section.jpg"}
							alt={"Presentation"}
							width={800}
							height={600}
						/>
					</Box>
				</TwoColumnLayout>
			</StandardLayout>
		</Box>
	);
};

export default LearnMore;
