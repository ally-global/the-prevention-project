import HelpRightNowSection from '@/sections/HelpRightNowSection';
import ParentsAndEducatorsHero from '@/sections/Heros/ParentsAndEducatorsHero';
import LibrarySection, { Section } from '@/sections/LibrarySection';
import EducatorGuidesInfo from '@/sections/ParentsAndEducators/EducatorGuidesInfo';
import HowToBrowseSection from '@/sections/ParentsAndEducators/HowToBrowse';
import LibraryTitle from '@/sections/ParentsAndEducators/LibraryTitle';
import QuestionsSection from '@/sections/ParentsAndEducators/Questions';
import WhatDoIDoSection from '@/sections/WhatDoIDoSection';
import { Stack } from '@mui/material';

export default function Library() {
	return (
		<>
			<ParentsAndEducatorsHero
				title="For Parents and Educators"
				text="Find the tools you need to facilitate conversations about safety, consent and exploitation prevention."
			/>
			<HowToBrowseSection />
			<EducatorGuidesInfo />
			<LibraryTitle />
			<LibrarySection section={Section.THREE_TO_FIVE} />
			<LibrarySection section={Section.SIX_TO_SEVEN} />
			<LibrarySection section={Section.EIGHT_TO_TWELVE} />
			<QuestionsSection />
			<Stack
				spacing={9}
				sx={{
					backgroundImage: 'linear-gradient(to bottom right, #673BDC, #00B8C5)',
				}}
			>
				<WhatDoIDoSection overflow />
				<HelpRightNowSection />
			</Stack>
		</>
	);
}
