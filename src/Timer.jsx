import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        setIsRunning(false);
                        clearInterval(timer);
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning, minutes, seconds]);

    const handleStart = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setMinutes(25);
        setSeconds(0);
    };

    const getRotation = (value, max) => {
        return ((value / max) * 360) + 90;
    };

    return (
        <div className="pomodoro-container">
            <div className="pomodoro-circle">
                <div className="time-display">
                    {String(minutes).padStart(2, '0')}:
                    {String(seconds).padStart(2, '0')}
                </div>
                <div 
                    className="hand minute-hand"
                    style={{ 
                        transform: `rotate(${getRotation(minutes, 60)}deg)`
                    }}
                />
                <div 
                    className="hand second-hand"
                    style={{ 
                        transform: `rotate(${getRotation(seconds, 60)}deg)`
                    }}
                />
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="hour-marker"
                        style={{
                            transform: `rotate(${i * 30}deg)`
                        }}
                    />
                ))}
            </div>
            <div className="controls">
                <button 
                    className="control-btn start-btn" 
                    onClick={handleStart}
                >
                    {isRunning ? 'Pause' : 'Start'}
                </button>
                <button 
                    className="control-btn reset-btn" 
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
            <style jsx>{`
                .pomodoro-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 2rem;
                    background: #1a1a1a;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                }

                .pomodoro-circle {
                    position: relative;
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    background: #2d2d2d;
                    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
                    margin-bottom: 2rem;
                }

                .time-display {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 3rem;
                    font-weight: bold;
                    color: #ffffff;
                }

                .hand {
                    position: absolute;
                    bottom: 50%;
                    left: 50%;
                    transform-origin: bottom;
                    border-radius: 4px;
                }

                .minute-hand {
                    width: 4px;
                    height: 35%;
                    background: #ff6b6b;
                }

                .second-hand {
                    width: 2px;
                    height: 40%;
                    background: #ffffff;
                }

                .hour-marker {
                    position: absolute;
                    width: 4px;
                    height: 15px;
                    background: #808080;
                    left: 50%;
                    transform-origin: 50% 150px;
                }

                .controls {
                    display: flex;
                    gap: 1rem;
                }

                .control-btn {
                    padding: 0.8rem 2rem;
                    font-size: 1.1rem;
                    border: none;
                    border-radius: 30px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .start-btn {
                    background: #2e7d32;
                    color: white;
                }

                .start-btn:hover {
                    background: #1b5e20;
                }

                .reset-btn {
                    background: #c62828;
                    color: white;
                }

                .reset-btn:hover {
                    background: #b71c1c;
                }
            `}</style>
        </div>
    );
};

export default Timer;