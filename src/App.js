import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import rawdata from "./data/data.json";
function App() {

  const [data, updateData] = useState(rawdata);
  const [filter, updateFilter] = useState('');


  const artists = data.reduce((acc, cur) => {

    const currentArray = acc[cur.ARTIST] || [];
    return {
      ...acc,
      [cur.ARTIST]: [...currentArray, cur]
    }
  }, {});

  console.log(artists);


  const displayData = (filter === '') ? data : data.filter(v => v.ARTIST.toUpperCase().startsWith(filter.toUpperCase()))
  return (
    <div className="App">
      {filter}
      <div>
        <input
          value={filter}
          placeholder="Artist"
          onChange={e => updateFilter(e.target.value)} />
      </div>


      <ul>

        {Object.keys(artists).map(str =>
          <li><a href="#" onClick={() => updateFilter(str)}> {str}</a></li>
        )}
      </ul>
      <table>
        <tbody>
          {displayData.map(row => <tr>

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
