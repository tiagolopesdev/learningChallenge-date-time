import './App.css';
import { React, useState } from 'react';
import { Message } from '../message';
import { Button } from '../buttons';
 
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
    console.log('Chamando função');
    //setDateCurrent([]);
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
      <Message 
        dateFind={dateFind}
      />
      <>
      <Button 
        textDisplay={'RESET'} 
        onClick={() => { ResetList() }}             
      />
      </>
      {/* <Button 
        textDisplay={'RESET'}
        onClick={() => ResetList()}
      /> */}
      {/* <button onClick={ResetList} >RESET</button> */}
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
