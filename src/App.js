import './App.css';
import Navigation from './components/Nav';
import Ide from './components/ide';
import { Col, Container, Row } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Navigation />
            <Ide />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
