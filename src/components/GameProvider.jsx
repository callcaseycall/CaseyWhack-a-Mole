import { useState } from "react";
import { GameContext } from "./GameContext.js";

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState(0);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setMoleIndex(Math.floor(Math.random() * 9));
  };

  const whackMole = () => {
    setScore(score + 1);
    setMoleIndex(Math.floor(Math.random() * 9));
  };

  const restart = () => {
    setIsPlaying(false);
  };

  const value = {
    isPlaying,
    score,
    moleIndex,
    startGame,
    whackMole,
    restart,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
