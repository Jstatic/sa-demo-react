import React, {useState, useEffect} from 'react';
import './App.scss';
import Input from './components/Input';
import Table from './components/Table';
import gear from './assets/gear.svg';
import classNames from 'classnames';

export default function App() {
  const [appState, updateAppState] = useState('start');
  const [valA, updateValA] = useState('Value A');
  const [valB, updateValB] = useState('Value B');

  const moveState = (val) => {
    updateAppState(val);
  }
  useEffect(() => {
    if (appState === 'loading') {
     setTimeout(() => {updateAppState('results')}, 2000); 
    }
  }, [appState]);
  return (
    <div className="App">
      <header className="App-header">
        <a href="/"><h1>App Name</h1></a>
      </header>
      <div className={classNames('App-body', appState)}>
        { appState === 'start' &&
        <div className="App-body-inner">
          <h2>Instructions go here</h2>
          <form onSubmit={() => {moveState('loading')}} className="Home-form">
            <div><Input update={(val) => updateValA(val)} text={valA} type={"text"} /></div>
            <div><Input update={(val) => updateValB(val)} text={valB} type={"text"} /></div>
            <div><Input text={"Submit"} type={"submit"} /></div>
          </form>
        </div>
        }
        { appState === 'loading' &&
        <>
          <div className="loading">
            <img src={gear} />
            <span>Loading results</span>
          </div>
        </>
        }
        { appState === 'results' &&
          <div className="App-body-inner">
            <form onSubmit={() => {moveState('loading')}} className="Home-form">
              <p>Instructions go here</p>
              <div><Input update={(val) => updateValA(val)} text={valA} type={"text"} /></div>
              <div><Input update={(val) => updateValB(val)} text={valB} type={"text"} /></div>
              <div><Input text={"Submit"} type={"submit"} /></div>
            </form>
            <div className="Results-frame">
              <br />
              <p>Results</p>
              <Table />
            </div>
          </div>
        }
      </div>
    </div>
  );
}