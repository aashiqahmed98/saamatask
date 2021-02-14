import { BrowserRouter as Router, Route } from 'react-router-dom';

// screens
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <Router>
      <Route path='/' exact component={LoginScreen} />
      <Route path='/home' exact component={HomeScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
    </Router>
  );
}

export default App;
