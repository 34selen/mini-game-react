import './App.css';
import Rock_sissor_paper from './rock-sissor-paper.js';
import { Route, Routes } from "react-router-dom";
import MainScreen from "./mainScreen.js"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainScreen />}/>
        <Route path="/rock-sissor-paper" element={<Rock_sissor_paper />} />
        
      </Routes>
    
    </div>
  );
}

export default App;
