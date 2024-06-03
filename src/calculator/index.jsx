import React, { useState } from 'react';
import './calculator.scss';

const Calculator = () => {
    const [input, setInput] = useState('0');

    const handleButtonClick = (value) => {
        if (value === 'AC') {
            setInput('0');
        } else if (value === 'DEL') {
            setInput(input.length > 1 ? input.slice(0, -1) : '0');
        } else if (value === '=') {
            try {
                setInput(eval(input).toString());
            } catch {
                setInput('Error');
            }
        } else if (value === '+/-') {
            setInput(input.charAt(0) === '-' ? input.slice(1) : '-' + input);
        } else {
            setInput(input === '0' ? value : input + value);
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <input type="text" value={input} placeholder="0" disabled />
            </div>
            <div className="row">
                {['AC', 'DEL', '%', '/'].map((item) => (
                    <button key={item} type="button" className="opr" onClick={() => handleButtonClick(item)}>
                        {item}
                    </button>
                ))}
            </div>
            <div className="row">
                {[7, 8, 9, '*'].map((item) => (
                    <button key={item} type="button" onClick={() => handleButtonClick(item.toString())}>
                        {item}
                    </button>
                ))}
            </div>
            <div className="row">
                {[4, 5, 6, '+'].map((item) => (
                    <button key={item} type="button" onClick={() => handleButtonClick(item.toString())}>
                        {item}
                    </button>
                ))}
            </div>
            <div className="row">
                {[1, 2, 3, '-'].map((item) => (
                    <button key={item} type="button" onClick={() => handleButtonClick(item.toString())}>
                        {item}
                    </button>
                ))}
            </div>
            <div className="row">
                {['+/-', 0, '.', '='].map((item) => (
                    <button
                        key={item}
                        type="button"
                        id={item === '+/-' ? 'plusMinus' : item === '=' ? 'eqBtn' : ''}
                        className={item === '.' ? 'opr' : ''}
                        onClick={() => handleButtonClick(item.toString())}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
