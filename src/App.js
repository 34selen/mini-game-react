import './App.css';
import Rock_sissor_paper from './rock-sissor-paper.js';
import Tic_Tac_Toe from "./tic-tac-toe";
import { Route, Routes } from "react-router-dom";
import MainScreen from "./mainScreen.js"
import ScreenWrapper from "./ScreenWrapper";
function App() {
  return (
    <div >
      <ScreenWrapper>
        <Routes>
          <Route path="/" element={<MainScreen />}/>
          <Route path="/rock-sissor-paper" element={<Rock_sissor_paper />} />
          <Route path="/tic-tac-toe" element={<Tic_Tac_Toe/>}/>
        </Routes>
      </ScreenWrapper>
    </div>
  );
}

export default App;
