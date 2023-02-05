import { useState } from "react";
import Board from './Board';
import Button from "./Button";
import logImage from './assets/logo.png'; 
import './App.css'; 

function random(n) {
  return Math.ceil(Math.random() * n);
}

function getResult(me, other) {
  if (me > other) return '승리';
  if (me < other) return '패배';
  return '무승부'; 
}

function App() {
  //자식 component를 부모 component로 올려주는것을 component lifting리프팅 이라고함 
 
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);
  const mySum = myHistory.reduce((a, b) => a + b, 0); 
  const otherSum = otherHistory.reduce((a, b) => a + b, 0); 
  const result = getResult(mySum, otherSum);
  let myClass = '' ; 
  let otherClass = ''; 

  if (result==='승리') {
    myClass = 'Board-winner';
    otherClass = ''; 
  } else if (result==='패배'){
    myClass = ''; 
    otherClass = 'Board-winner';
    
  } 

  // num 을 변경하기 위해서는 setNum을 활용해야한다. 
  const handleRollClick = () => {
    const nextMyNum = random(6) ; 
    const nextOtherNum = random(6) ; 
    setMyHistory([...myHistory, nextMyNum]); 
    setOtherHistory([...otherHistory, nextOtherNum]); 
  }

  const handleClearClick =() => {
    setMyHistory([]); 
    setOtherHistory([]); 
  }
  return (
    <div className='App'>
      <div>
        <img className='App-logo' src={logImage} alt="logo"></img>
        <h1 className='App-title' >주사위게임</h1>
        <Button className='App-button' color='blue' onClick={handleRollClick}>던지기</Button>
        <Button className='App-button' color='red' onClick={handleClearClick}>처음부터</Button>
      </div>
      <div className='App-boards'>
        <Board name="나" color="blue" gameHistory={myHistory} sum={mySum} classNames={myClass}/>
        <Board name="상대" color="red" gameHistory={otherHistory} sum={otherSum} classNames={otherClass}/>
      </div>
    </div>
  );
}

export default App; 