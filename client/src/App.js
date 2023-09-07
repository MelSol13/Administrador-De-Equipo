import {Routes, Route} from "react-router-dom";
import PlayersList from "./components/PlayersList";
import AddPlayers from "./components/AddPlayer";
import PlayerStatus from "./components/PlayerStatus";

const App = () => {
  return(
    <div className="container">
      <Routes>
        <Route path="/players/list" element={<PlayersList/>} />
        <Route path="/players/addplayer" element={<AddPlayers/>} />
        <Route path="/players/status" element={<PlayerStatus/>}/>
      </Routes>
    </div>
  )
}

export default App;
