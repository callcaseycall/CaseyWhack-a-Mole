import { useContext } from "react";
import Welcome from "./components/Welcome.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { GameContext } from "./components/GameContext.js";

export default function App() {
  const { isPlaying } = useContext(GameContext);

  return (
    <div className="container-fluid p-0 text-center mt-5">
      {isPlaying ? <GameBoard /> : <Welcome />}
    </div>
  );
}
