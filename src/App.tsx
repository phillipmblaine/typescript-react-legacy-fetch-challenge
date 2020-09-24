import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Clock from './components/Clock';
import Weather from './components/Weather/Weather';

// let testProp: string = 'Am I getting passed to the Clock component?';
// let optionalProp: string = 'You sure are!';

// function App() {
const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className='verticalCenter'>
        {/* <Clock testProp={testProp} optionalProp={optionalProp} /> */}
        <Weather />
      </div>
    </div>
  );
}

export default App;
