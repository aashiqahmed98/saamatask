import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// screens
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Container>
        <Route path='/' exact component={LoginScreen} />
        <Route path='/home' exact component={HomeScreen} />
      </Container>
    </Router>
  );
}

export default App;
