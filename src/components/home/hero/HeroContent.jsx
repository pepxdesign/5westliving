import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function HeroContent({ heroData }) {
  return (
    <FadeInStaggerTwo className="aximo-hero-content4">
      <FadeInStaggerTwoChildren>
        <h1>{heroData.title}</h1>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren>
        <p>{heroData.text}</p>
      </FadeInStaggerTwoChildren>
    </FadeInStaggerTwo>
  );
}

export default HeroContent;
