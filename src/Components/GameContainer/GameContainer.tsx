import React from 'react';

export default function GameContainer(game: React.PropsWithChildren) {
  const { children } = game;
  return (
    <div
      id="gameContainer"
      className="w-4/5 h-4/5 md:my-0 my-10 border-8 border-opacity-60 border-gray-700 border-double"
    >
      {children}
    </div>
  );
}
