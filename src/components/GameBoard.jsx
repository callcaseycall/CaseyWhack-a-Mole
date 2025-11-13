import { useContext } from "react";
import { GameContext } from "./GameContext.js";

export default function GameBoard() {
  const { score, restart } = useContext(GameContext);

  return (
    <div>
      <div className="mb-4">
        <h2>Score: {score}</h2>
        <button className="btn btn-warning" onClick={restart}>
          Restart
        </button>
      </div>
      <div className="holes=grid">
        {Array.from({ length: 9 }, (_, i) => (
          <Hole key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

function Hole({ index }) {
  const { moleIndex, whackMole, isPlaying } = useContext(GameContext);

  const handleClick = () => {
    if (isPlaying && index === moleIndex) {
      whackMole();
    }
  };

  return (
    <div className="hole" onClick={handleClick}>
      {index === moleIndex && <div className="mole"></div>}
    </div>
  );
}
