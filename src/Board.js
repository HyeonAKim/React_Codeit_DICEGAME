import Dice from "./Dice";
import './Board.css';

function Board({name, color, gameHistory, sum=0, classNames=''}) {
  const num = gameHistory[gameHistory.length -1] || 1; 
  const className = `Board App-board ${classNames}`

  return (
      <div className={className}>
        <h2 className="Board-heading">{name}</h2>
        <Dice color={color} num={num}/>
        <h2 className="Board-heading">총점</h2>
        <p>{sum}</p>
        <h2 className="Board-heading">기록</h2>
        <p>{gameHistory.join(', ')}</p>
      </div>
  );
}

export default Board; 