import { React, useEffect, useState } from 'react';
import { Message } from '../message';
import { Button } from '../buttons';
import { Input } from '../input';
import { Body, BodySearch, ResultList, ItemList } from './style';
 
export const Home = () => {

  const[dateCurrent, setDateCurrent] = useState([]);
  const[dateFind, setDateFind] = useState('');
  const[cleanList, setCleanList] = useState(false);

  useEffect(() => {
    ResetList();
  }, [cleanList]);

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
    if(cleanList) setCleanList(false);
  };

  const SearchValue = (event) => {
    setDateFind(
      event.target.value === '' ? 
        '' : 
        dateCurrent.at(parseInt(event.target.value))
    );
  };

  return (
    <Body>
      <div>
        <Button 
          textDisplay={'RESET'}
          onClick={() => setCleanList(true) }
        />
        <Button 
          textDisplay={'ADD TIME'}
          onClick={AssingDateTimeCurrent}
        />
      </div>
      <BodySearch>
        <p>Pesquise</p>
        <Input 
          type={'text'}
          onChange={SearchValue}
        />
      </BodySearch>
      <Message 
        dateFind={dateFind}
      />
      <ResultList>
        <>
          {dateCurrent.map((item, index) => {
            return (
              <ItemList key={`${item}-${index}`}>
                <i>{`Index: ${index}`}</i>
                <strong>{` - ${item}`}</strong> 
              </ItemList>
            )
          })}
        </>
      </ResultList>
    </Body>
  );
};
