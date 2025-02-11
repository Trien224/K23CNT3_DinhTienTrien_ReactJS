import './App.css'; 
import Dttcompo from './components/DttComp';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>  Edit <code>src/App.js</code> and save to reload.</p>
        <a  className="App-link"  href="https://reactjs.org"  target="_blank" rel="noopener noreferrer">  Learn React </a>
      </header>
      <h1>Dinh Tien Trien - K23CNT3 - ReactJS</h1>
      <hr/>
      {/* Sử dụng component DttComp */}
      <Dttcompo DttName="Dinh Tien Trien" DttAddress="157 Xom Kho" />
    </div>
    
  );
}
export default App;
