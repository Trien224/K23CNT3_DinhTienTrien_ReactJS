import logo from './logo.svg';
import './App.css';
import DttFunComp from './components/DttFunComp';
import DttComp from './components/DttComp';
import DttClassComp from './components/DttClassComp';
 //object
function DttApp() {
  const users={
  FullName:'TrumTrien',
  age:20,
  phone:"0968212516"
}
  return (
    <div className="Container border mt-3">
        <img src={logo} className="App-logo" alt="logo" /> 
        <h1>Demo Component - Props - State</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React </a> 
      <header className='alert alert-info'>
         <DttFunComp name="Dinh tien trien" arddress="10,Xom pho " e="^0^!"/>
    </header>
    <div className='alert alert-info'>
        <DttComp renderInfo={users}/> 
        </div>
    <DttClassComp/>
        <DttClassComp renderName="CNTT3" renderUsers={users}/>
    </div>
  );
}

export default DttApp;
