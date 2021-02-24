import React from 'react';
import './App.css';
import CounterParams from './components/CounterParams/CounterParams';
import Counter from './components/Counter/Counter';


export type CounterDataType = {
  startCounter: number
  endCounter: number
  editMode: boolean
}


function App() {

  const [counterData, setCounterData] = React.useState<CounterDataType>({
    startCounter: 10,
    endCounter: 25,
    editMode: false
  }) 


  const transferData = (minValue: number, maxValue: number, editMode: boolean) => {
    setCounterData({
      ...counterData, 
      startCounter: minValue, 
      endCounter: maxValue, 
      editMode: editMode
    })
  }

  const viewCounterInfo = (editMode: boolean) => {
      setCounterData({...counterData, editMode: editMode})
  }


  return (
    <div className='app__wrapper'>
        <div className='app__inner'>
            <CounterParams 
            transferData={transferData} 
            counterData={counterData} 
            viewCounterInfo={viewCounterInfo}/>
            <Counter counterData={counterData}/>
        </div>
    </div>
  );
}

export default App;
