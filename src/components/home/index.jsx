import './App.css';
import { React, useState } from 'react';
import { Message } from '../message';
import { Button } from '../buttons';
import { Input } from '../input';
 
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
    setDateFind(
      event.target.value === '' ? 
        '' : 
        dateCurrent.at(parseInt(event.target.value))
    );
  };

  return (
    <>
      <Button 
        textDisplay={'ADD TIME'}
        onClick={AssingDateTimeCurrent}
      />
      <p>Pesquise</p>
      <Input 
        type={'text'}
        onChange={SearchValue}
      />
      <Message 
        dateFind={dateFind}
      />
      <Button 
        textDisplay={'RESET'}
        onClick={() => ResetList()}
      />
      <>
        {dateCurrent.map((item, index) => {
          return (
            <div key={`${item}-${index}`}>
              <i>{`Index: ${index}`}</i>
              <strong>{` - ${item}`}</strong> 
            </div>
          )
        })}
      </>
    </>
  );
};
