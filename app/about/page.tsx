import Donate from "@/sections/Donate";
import GenericHero from "@/sections/Heros/GenericHero";
import LearnMore from "@/sections/LearnMore";
import WhoWeAreSection from "@/sections/WhoWeAreSection";
export default function About() {
  return (
    <>
      <GenericHero
        text={"About us"}
        subtext={
          "We believe that every young person in Canada deserves access to light-hearted, age-appropriate learning to keep themselves and others safe from exploitation."
        }
      />
      <WhoWeAreSection />
      <LearnMore />
      <Donate />
    </>
  );
}
