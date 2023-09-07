import {Routes, Route} from "react-router-dom";
import PlayersList from "./components/PlayersList";
import AddPlayers from "./components/AddPlayer";

const App = () => {
  return(
    <div className="container">
      <Routes>
        <Route path="/players/list" element={<PlayersList/>} />
        <Route path="/players/addplayer" exact element={<AddPlayers/>} />
      </Routes>
    </div>
  )
}

export default App;
