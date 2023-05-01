import React from 'react';
import demon from './demon.png';
import './App.css';
import { Grid } from './Grid';
import { IProject } from './App.types';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate  = useNavigate();
  const projectList: IProject[] = [{
    title: 'Offline Online Indicator',
    description: 'A simple offline online indicator which shows if the users are online or offline. If the user is offline, it shows the last time a user was online ',
    onClick: () => {navigate('/offline-online-indicator')},
  },
];

  return (
    <div className="App">
      <header className="App-header">
        <img src={demon} className="App-logo" alt="logo" />
        <Grid items={projectList} />
      </header>
    </div>
  );
}

export default App;
