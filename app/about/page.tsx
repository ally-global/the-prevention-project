import Donate from "@/sections/Donate";
import GenericHero from "@/sections/Heros/GenericHero";
import LearnMore from "@/sections/LearnMore";
export default function About() {
  return (
    <>
      <GenericHero
        text={
          "Lorem ipsum dolor sit amet, consectetuer adipicing elit, sed diam nonummy nibh euismod tincuidum up laroot doloree magna aliquam"
        }
      />
      <LearnMore />
      <Donate />
    </>
  );
}
