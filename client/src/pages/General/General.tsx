import Interval from "./interval/Interval";
import HeroSection from "./heroSection/HeroSection";
import FeaturesSection from "./featuresSection/FeaturesSection";
import MissionSection from "./missionSection/MissionSection";
import CommunitySection from "./communitySection/CommunitySection";
import CallToActionSection from "./callToActionSection/CallToActionSection";

function General() {
  return (
    <>
      <HeroSection />
      <Interval />
      <FeaturesSection />
      <MissionSection />
      <CommunitySection />
      <CallToActionSection />
    </>
  );
}

export default General;
