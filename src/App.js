import './App.css';
import './global'
import Login from './Main/Login/Login'
import Header from './Header/Header';

//{global.config.isLogged === false ? <Login/> : <p>ciao</p> }


function App() {
  return (
    <div className="App">
      <Header/>
      
    </div>
  );
}

export default App;
