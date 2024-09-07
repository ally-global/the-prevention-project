"use client";

import StandardLayout from "@/components/StandardLayout";
import { Box, Link, Stack } from "@mui/material";

import Image from "next/image";

import Text from "@/components/Text";
import TwoColumnLayout, { ColumnWrapOrder } from "@/components/TwoColumnLayout";
import useDevice from "@/hooks/useDevice";

const DownloadGuidesButtons = () => {
	const linkStyles = {
		color: "PrimaryPurple",
		backgroundColor: "white",
		borderRadius: 12,
		py: 1,
		px: 2,
		textDecoration: "none",
		fontSize: "16px",
		fontWeight: "bold",
		maxWidth: "332px",
	};

	return (
		<Stack spacing={4} sx={{ textAlign: "center" }} mt={6}>
			<Stack
				direction={{ xs: "column", sm: "row" }}
				spacing={2}
				sx={{ marginX: "auto" }}
				justifyContent="center"
				alignItems="center"
			>
				<Link
					target="_blank"
					href="https://tpp-educatorguidedownload.paperform.co/"
					sx={linkStyles}
				>
					DOWNLOAD ALL EDUCATOR FACILITATION GUIDES
				</Link>
				<Link
					target="_blank"
					href="https://tpp-allresourcedownload.paperform.co/"
					sx={linkStyles}
				>
					DOWNLOAD FULL LIBRARY OF RESOURCES
				</Link>
			</Stack>
			<Text
				variant="body1"
				sx={{
					width: { xs: "90%", md: "472px" },
					marginX: "auto",
					textAlign: "center",
				}}
			>
				Alternatively, browse the library below to download individual assets or
				specific chapters.
			</Text>
		</Stack>
	);
};

const EducatorGuidesInfo = () => {
	const { smScreen: isMobile } = useDevice();

	return (
		<Box
			sx={{
				background: `linear-gradient(90deg, #673BDC 0%, #00B8C5 100%)`,
				py: { xs: 6, sm: 8 },
			}}
		>
			<StandardLayout>
				<TwoColumnLayout
					columnWrapOrderOnMobile={ColumnWrapOrder.NORMAL}
					leftCol={5}
					rightCol={6}
				>
					<Box
						sx={{
							img: {
								maxWidth: { xs: "50%", md: "100%" },
								height: "auto",
								borderRadius: "16px",
								marginX: "auto",
								marginBottom: { xs: 4, md: 0 },
							},
							display: "flex",
						}}
					>
						<Image
							src={"/images/EFG-PDFs-Stacked.png"}
							alt={"Two PDFs stacked on top of each other"}
							width={800}
							height={400}
						/>
					</Box>

					<Box>
						<Stack spacing={3}>
							<Text
								variant="h6"
								sx={{
									backgroundColor: 'PrimaryBlue',
									py: 1,
									px: 2,
									borderRadius: 8,
									width: 'fit-content',
									fontSize: '16px',
								}}
							>
								NOW AVAILABLE!
							</Text>
							<Text variant="h4">Educator Facilitation Guides</Text>

							<Text variant="body1">
								These guides are designed to support classroom teachers, parents
								and youth leaders as they facilitate The Prevention Project
								resources with children and youth.
							</Text>

							<Text variant="h6">Each guide includes:</Text>
							<ul
								style={{
									listStyleType: 'square',
									paddingLeft: '20px',
								}}
							>
								<li>Essential background information on the topic</li>
								<li>Strategies for moderating sensitive discussions</li>
								<li>Tips for creating a safe environment for sharing</li>
								<li>Answers to commonly asked questions</li>
								<li>Extension activities</li>
								<li>
									Links to additional resources beyond The Prevention Project
								</li>
							</ul>
						</Stack>
					</Box>
				</TwoColumnLayout>
				<DownloadGuidesButtons />
			</StandardLayout>
		</Box>
	);
};

export default EducatorGuidesInfo;
