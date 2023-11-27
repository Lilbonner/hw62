import './App.css';
import { Route, Routes } from "react-router-dom";
import Toolbar from "../src/Toolbar/Toolbar";
import Home from "../src/Pages/Home/Home"


function App() {
  return (
    <div>
      <Toolbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

