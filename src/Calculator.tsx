import { useState, MouseEvent } from 'react';
import './Calculator.css';

function Calculator() {
  const [data, setData] = useState('');
  const keypad_num = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
  const keypad_operator = ['/', '*', '-', '+'];
  const keypad_operatorBtn = ['÷', '×', '−', '+'];

  const onClickClear = () => setData(data.slice(0, data.length - 1));
  const onClickAC = () => setData('');
  const onClickKeypads = (e: MouseEvent<HTMLButtonElement>) => {
    setData(data + e.currentTarget.value);
  };
  const onClickEqualSign = () => {
    try {
      const EV = String(eval(data));
      if (EV.length > 3 && EV.includes('.')) {
        setData(String(eval(data).toFixed(4)));
      } else setData(EV);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="wrapper">
      <div className="result_input">{data}</div>
      <div className="digits flex">
        {keypad_num.map((item) => {
          return (
            <button onClick={onClickKeypads} value={item} key={item}>
              {item}
            </button>
          );
        })}
      </div>
      <div className="modifiers subgrid">
        <button onClick={onClickClear}>CLEAR</button>
        <button onClick={onClickAC}>AC</button>
        <button onClick={onClickKeypads} value="%">
          %
        </button>
      </div>
      <div className="operations subgrid">
        {keypad_operator.map((item, i) => {
          return (
            <button onClick={onClickKeypads} value={item} key={item}>
              {keypad_operatorBtn[i]}
            </button>
          );
        })}
        <button onClick={onClickEqualSign}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
