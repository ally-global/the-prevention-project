import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import { Stack, Link } from "@mui/material";

const QuestionsSection = () => {
	return (
		<StandardLayout sx={{ py: 6, marginX: "auto" }}>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={2}
				maxWidth={{ md: "497px" }}
			>
				<Text variant={"h4"} color="PrimaryPurple" sx={{ mb: 2 }}>
					Questions?
				</Text>
				<Text variant={"h6"} color="PrimaryPurple" sx={{ fontSize: "20px" }}>
					We&apos;re here to help.
				</Text>
				<Text variant={"body1"} color={"Grey900"} sx={{ textAlign: "center" }}>
					If you need further support, reach out to us by emailing{" "}
					<Link
						href="mailto:thepreventionproject@ally.org"
						sx={{ color: "PrimaryPurple" }}
					>
						thepreventionproject@ally.org
					</Link>{" "}
					We&apos;re committed to ensuring you feel equipped and empowered to
					use The Prevention Project effectively.
				</Text>
			</Stack>
		</StandardLayout>
	);
};

export default QuestionsSection;
