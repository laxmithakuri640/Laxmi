import React, { useState } from 'react';

export default function Result() {
  const [score, setScore] = useState('');
  const [grade, setGrade] = useState('');
  const [status, setStatus] = useState('');

  const evaluateScore = () => {
    const numericScore = Number(score);

    if (isNaN(numericScore) || score === '') {
      setGrade('');
      setStatus('Please enter a valid number.');
      return;
    }

    // Determine grade
    let calculatedGrade = '';
    if (numericScore >= 90) calculatedGrade = 'A+';
    else if (numericScore >= 80) calculatedGrade = 'A';
    else if (numericScore >= 70) calculatedGrade = 'B';
    else if (numericScore >= 60) calculatedGrade = 'C';
    else if (numericScore >= 50) calculatedGrade = 'D';
    else calculatedGrade = 'F';

    // Determine pass/fail
    const result = numericScore >= 40 ? 'Pass' : 'Fail';

    // Update state
    setGrade(calculatedGrade);
    setStatus(result);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Student Grade Evaluator</h2>

      <input
        type="number"
        placeholder="Enter your score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />

      <button onClick={evaluateScore} style={{ padding: '8px' }}>
        Evaluate
      </button>

      {grade && (
        <div style={{ marginTop: '20px' }}>
          <h3>Your Score: {score}</h3>
          <h3>Grade: {grade}</h3>
          <h3>Status: {status}</h3>
        </div>
      )}

      {status === 'Please enter a valid number.' && (
        <p style={{ color: 'red', marginTop: '10px' }}>{status}</p>
      )}
    </div>
  );
}