import React, {useState, useContext} from 'react';
import { MyContext } from './App';
import './childStyle.css';

function Child() {
  const [isBlack, setColor] = useState(false);
  const {blackCount, setCount} = useContext(MyContext);
  const handleClick = () => {
    const num = !isBlack ? 1 : -1;
    setCount(blackCount + num);
    setColor(!isBlack);
  }

  return <div onClick={handleClick} className={isBlack ? 'cell clicked' : 'cell'}></div>;
}

export default Child;
