import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";

const LibraryTitle = () => {
	return (
		<StandardLayout
			sx={{
				backgroundColor: "PrimaryBlue",
				padding: { xs: 4, md: 6 },
			}}
		>
			<Text
				variant="h3"
				sx={{ textAlign: "center", fontSize: { xs: "36px", md: "44px" } }}
			>
				The Prevention Project Library
			</Text>
		</StandardLayout>
	);
};

export default LibraryTitle;
