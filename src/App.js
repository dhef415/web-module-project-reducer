import React,{ useReducer} from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { addOne, applyNumber, changeOperation, clearDisplay, setMemory, memoryRecall, memoryClear } from './actions';

import reducer, { initialState } from './reducers';

function App() {
  //setting access to state: 
  //export from where state is held
  //import to where we need access
  //create  [state + dispatch] with useReducer and initialize with reducer and initialState as arguments
  //check if you have access with console.log
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddOne = ()=>{
    dispatch(addOne());
    console.log('working');
  };

  const handleApply = (number)=>{
    dispatch(applyNumber(number));
    console.log('apply number');
  };

  const handleOpClick = (operator) => {
    dispatch(changeOperation(operator));
    console.log('operator change');
  }

  const handleClear = () => {
    dispatch(clearDisplay());
    console.log('clear');
  }

  const handleMemory = (number) => {
    dispatch(setMemory(number));
    console.log('set to memory');
  }

  const handleRecall = (number) => {
    dispatch(memoryRecall(number));
    console.log('mem recall')
  }

  const handleMemClear = () => {
    dispatch(memoryClear());
    console.log('memory clear');
  }


  console.log(state);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemory} />
              <CalcButton value={"MR"} onClick={handleRecall} />
              <CalcButton value={"MC"} onClick={handleMemClear} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=> handleApply(1)}/>
              <CalcButton value={2} onClick={()=> handleApply(2)} />
              <CalcButton value={3} onClick={()=> handleApply(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=> handleApply(4)} />
              <CalcButton value={5} onClick={()=> handleApply(5)} />
              <CalcButton value={6} onClick={()=> handleApply(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=> handleApply(7)} />
              <CalcButton value={8} onClick={()=> handleApply(8)} />
              <CalcButton value={9} onClick={()=> handleApply(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=> handleOpClick('+')}/>
              <CalcButton value={"*"} onClick={()=> handleOpClick('*')}/>
              <CalcButton value={"-"} onClick={()=> handleOpClick('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
