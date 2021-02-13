import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// screens
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <Router>
      <Container>
        <Route path='/' component={LoginScreen} />
      </Container>
    </Router>
  );
}

export default App;
