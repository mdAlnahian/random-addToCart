
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavVar from './NavVar/NavVar';
import Book from './Book/Book';
import Accordian from './Accordian/Accordian';

function App() {
  return (
    <div className="App">

        <NavVar></NavVar>
        <Book></Book>
        <Accordian></Accordian>
    </div>
  );
}

export default App;
