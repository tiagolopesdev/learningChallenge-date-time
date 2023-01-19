import './App.css';
import { React, useState, useEffect } from 'react';
import { Button } from '../buttons';

export const Home = () => {

  const[dateCurrent, setDateCurrent] = useState([]);
  const[dateFind, setDateFind] = useState('');

  // useEffect(() => {
  //   AssingDateTimeCurrent();
  // }, [dateCurrent]);

  const AssingDateTimeCurrent = () => {        
    var date = new Date();    
    
    //var dateInstance = `Date: ${date.toLocaleDateString()} Time: ${date.toLocaleTimeString()}`;

    setDateCurrent(dateCurrent => 
      [
        ...dateCurrent, 
        `Date: ${date.toLocaleDateString()} Time: ${date.toLocaleTimeString()}`
      ]
    );
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
