import './App.css';
import Todos from './components/todolist/Todos';
import Nav from './components/navbar/Nav';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />

        <Todos />
      </header>
    </div>
  );
}

export default App;
