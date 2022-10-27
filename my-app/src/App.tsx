import React from 'react';
import { FC } from 'react';
import HelloWorld from './components/HelloWorld';
import List from './components/List';
import logo from './logo.svg';
import './App.css';

const liste = [
  {name: 'Marie France'},
  {name: 'Titanic'},
  {name:'Mars'},
  {name:'Jupiter'},
]

const App: FC = () => {
  return (
    <div className="App">
      <HelloWorld />
      <List data={liste} />
    </div>
  );
}

export default App;
