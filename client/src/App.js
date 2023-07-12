import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
        <div>
            <NavBar/>
            <Todo/>
        </div>
    </div>
  );
}

export default App;
