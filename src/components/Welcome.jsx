import { useContext } from "react";
import { GameContext } from "./GameContext.js";

export default function Welcome() {
  const { startGame } = useContext(GameContext);

  return (
    <div className="welcome">
      <h1 className="display-4">Whack a Mole</h1>
      <p className="lead">Click the mole as fast as you can to score points!</p>
      <button className="btn btn-success btn-lg" onClick={startGame}>
        Play
      </button>
    </div>
  );
}
