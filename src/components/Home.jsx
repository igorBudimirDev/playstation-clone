import HeroMobile from "../components/HeroMobile";
import HeroMd from "../components/HeroMd";
import HeroXl from "../components/HeroXl";
import PostHero from "../components/PostHero";
import Feel from "../components/Feel";
import Forspoken from "../components/Forspoken";
import NewReleases from "../components/NewReleases";
import ExplorePS4 from "../components/ExplorePS4";
import Merchandise from "../components/Merchandise";
import FollowUs from "../components/FollowUs";

const Home = () => {
  return (
    <>
      <HeroMobile />
      <HeroMd />
      <HeroXl />
      <PostHero />
      <Feel />
      <Forspoken />
      <NewReleases />
      <ExplorePS4 />
      <Merchandise />
      <FollowUs />
    </>
  );
};

export default Home;
