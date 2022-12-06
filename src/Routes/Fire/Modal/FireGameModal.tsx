import { Dispatch, SetStateAction } from 'react';

interface Props {
  modalOpened: boolean,
  modalHandler: Dispatch<SetStateAction<boolean>>,
}

export default function FireGameModal({ modalOpened, modalHandler }: Props) {
  return (
    <div
      id="fireGameModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      hidden={modalOpened}
    >
      <div className="relative w-full h-full max-w-lg md:h-auto" style={{ left: '50%', top: '20%', transform: 'translateX(-50%)' }}>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Game rules
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => modalHandler(!modalOpened)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6 text-center">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              You can pick between 3 levels of risk.
              <br />
              <br />
              Low - reward 2x
              <br />
              Medium - reward 4x
              <br />
              Hard - reward 10x
              <br />
              <br />
              The point of the game is to set all the pieces in
              <br />
              designed areas and hope they will not get burned by fire.
              <br />
              If any of the pieces gets burned, you lose.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Good luck!
            </p>
          </div>
          <div
            className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => modalHandler(!modalOpened)}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
