import { useState } from 'react';
import FireGame from './Game/FireGame';
import GameContainer from '../../Components/GameContainer/GameContainer';
import FireGameModal from './Modal/FireGameModal';
import FireGameAlert from './Alert/FireGameAlert';

export default function Fire() {
  const [modalHidden, setModalHidden] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  return (
    <GameContainer>
      <FireGame setShowAlert={setShowAlert} />
      <button
        type="button"
        className="absolute inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        style={{ right: '15px', bottom: '15px' }}
      >
        <span
          role="button"
          onKeyUp={() => {}}
          tabIndex={0}
          className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          onClick={() => setModalHidden(!modalHidden)}
        >
          Help
        </span>
      </button>
      <FireGameModal modalOpened={modalHidden} modalHandler={setModalHidden} />
      {showAlert ? <FireGameAlert alertHandler={setShowAlert} showAlert={showAlert} /> : ''}
    </GameContainer>
  );
}
