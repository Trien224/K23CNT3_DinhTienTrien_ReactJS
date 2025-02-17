import logo from './logo.svg';
import './App.css';
import DttJsxExpression from './components/DttJsxExpression';
import DttFunComp from './components/DttFunComp';
import DttClassComp from './components/DttClassComp';

function DttApp() {
  return (
    
    <div className="container border mt-3 bg-white" alt="img">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Reaact JS Day03 Đinh Tiến Triển
        </h1>
        <DttJsxExpression/>
        <hr/>
        {/* uer function components */}
        <DttFunComp/>
        <hr/>
        <DttClassComp/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default DttApp;
