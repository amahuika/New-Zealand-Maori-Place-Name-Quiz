import "./App.css";

import GameSection from "./components/gameSection/GameSection";
import Header from "./components/header/Header";
import Results from "./components/results/Results";

function App() {
  return (
    <div className="app">
      <Header />
      <GameSection />
      <Results />
    </div>
  );
}

export default App;
