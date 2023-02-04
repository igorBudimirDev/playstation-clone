import { useState } from "react";
import BigNav from "./components/BigNav";
import HeroMobile from "./components/HeroMobile";
import HeroMd from "./components/HeroMd";
import PhoneNav from "./components/PhoneNav";
import HeroXl from "./components/HeroXl";

function App() {
  return (
    <div className="App">
      <PhoneNav />
      <BigNav />
      <HeroMobile />
      <HeroMd />
      <HeroXl />
    </div>
  );
}

export default App;
