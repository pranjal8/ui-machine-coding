import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import './App.css'

function App() {
  return (
    <div>

      <ProgressBar progress={70} />
    </div>
  );
}

export default App;
