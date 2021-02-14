import { BrowserRouter as Router, Route } from 'react-router-dom';

// screens
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen';

function App() {
  return (

    <Router>
        <Route path='/' exact component={LoginScreen} />
        <Route path='/home' exact component={HomeScreen} />
    </Router>
  );
}

export default App;
