export const scrollToHelpRightNow = () => {
  const yOffset = -120;
  const section = document.getElementById("help-right-now");
  if (section) {
    const scrollPosition =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  }
};
