import './App.css';
import Navigation from './components/Nav';
import Ide from './components/ide';
import { Col, Container, Row } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Ide />
    </div>
  );
}

export default App;
