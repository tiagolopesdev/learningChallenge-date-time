import './App.css';
import { React, useState } from 'react';

export const Home = () => {

  const[dateCurrent, setDateCurrent] = useState([]);
  const[dateFind, setDateFind] = useState('');

  const AssingDateTimeCurrent = () => {        
    var date = new Date();    

    setDateCurrent(dateCurrent => 
      [
        ...dateCurrent, 
        `Date: ${date.toLocaleDateString()} Time: ${date.toLocaleTimeString()}`
      ]
    );
  };
  
  const ResetList = () => {
    setDateCurrent([]);
  };

  const SearchValue = (event) => {

    console.log('Value e: ', event.target.value);

    setDateFind(dateCurrent.at(parseInt(event.target.value)));
  };

  return (
    <>
      <button onClick={AssingDateTimeCurrent}>++</button>

      <div>
        <p>Pesquise</p>
        <input type='text' onChange={SearchValue}></input>
        <input type='submit' value='Search' />
      </div>
      <p>
        {dateFind === undefined ?
          'Value founded: não encontrado' :
          `Value founded: ${dateFind}`
        }
      </p>
      <button onClick={ResetList} >RESET</button>
      <>
        {dateCurrent.map((item, index) => {
          return (
            <div>
              <i>{`Index: ${index}`}</i>
              <strong>{` - ${item}`}</strong> 
            </div>
          )
        })}
      </>
    </>
  );
};
