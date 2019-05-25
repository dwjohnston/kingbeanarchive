import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data/data.json";
console.log(data);
function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          {data.map(row => <tr>

            {Object.values(row).map(item => <td>
              {item}
            </td>)}
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
