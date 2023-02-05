import { useState } from "react";
import BigNav from "./components/BigNav";
import HeroMobile from "./components/HeroMobile";
import HeroMd from "./components/HeroMd";
import PhoneNav from "./components/PhoneNav";
import HeroXl from "./components/HeroXl";
import PostHero from "./components/PostHero";
import Feel from "./components/Feel";
import Forspoken from "./components/Forspoken";
import NewReleases from "./components/NewReleases";

function App() {
  return (
    <div className="App">
      <PhoneNav />
      <BigNav />
      <HeroMobile />
      <HeroMd />
      <HeroXl />
      <PostHero />
      <Feel />
      <Forspoken />
      <NewReleases />
    </div>
  );
}

export default App;
