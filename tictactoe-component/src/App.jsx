import { useState } from 'react'
import './App.css'

const intialValues = () => Array(9).fill(null);
function App() {
  const [board, setBoard] = useState(intialValues());
  const [isXNext, setXNext] = useState('')

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] &&
        board[a] === board[b] &&
        board[b] == board[c]
      ) {
        return board[a];
      }
    }
    return null;
  }

  const getMessage = () => {
    const winner = calculateWinner();
    if (winner) return `Player ${winner} won`;
    if (!board.includes(null)) return `It's a draw`
    return ` Player ${isXNext ? 'O' : 'X'} Turn`
  };

  const handleClick = (index) => {
    if (!calculateWinner()) {
      const newBoard = [...board];
      newBoard[index] = isXNext ? 'O' : 'X';
      setBoard(newBoard);
      setXNext(!isXNext);
    }
  }
  return (
    <div className="game-container">
      <div className="game-player">
        {getMessage()}
      </div>
      <div className="game-button-container">
        {
          board.map((b, index) => {
            return (
              <button
                type="button"
                key={index}
                className='game-button'
                onClick={() => handleClick(index)}
                disabled={b != null}
              >
                {b}
              </button>
            )
          })
        }
      </div>
    </div>
  )

}

export default App
