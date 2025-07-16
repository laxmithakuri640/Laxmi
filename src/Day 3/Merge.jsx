import React from 'react'

export default function Merge() {
    // mergeArrays.js

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Merge into a third array (array3)
const array3 = [...array1, ...array2];

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Array 3 (merged):", array3);
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Merged Array:</h2>
      <ul>
        {array3.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
    </div>
  )
}