import { useState } from "react";
import BigNav from "./components/BigNav";
import Hero from "./components/Hero";
import PhoneNav from "./components/PhoneNav";

function App() {
 
  return (
    <div className="App">
      <PhoneNav />
      <BigNav />
      <Hero />
    </div>
  );
}

export default App;
