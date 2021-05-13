import './App.css';
import Tab from './components/Tab';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const tabs = ['Tab 1','Tab 2','Tab 3'];
  return (
    <div className="App">
      <Tab list={tabs}/>
    </div>
  );
}

export default App;