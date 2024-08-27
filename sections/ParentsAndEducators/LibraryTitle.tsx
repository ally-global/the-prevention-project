import StandardLayout from '@/components/StandardLayout';
import Text from '@/components/Text';

const LibraryTitle = () => {
	return (
		<StandardLayout
			sx={{
				backgroundColor: 'PrimaryBlue',
				padding: 6,
			}}
		>
			<Text variant="h3" sx={{ textAlign: 'center' }}>
				The Prevention Project Library
			</Text>
		</StandardLayout>
	);
};

export default LibraryTitle;
