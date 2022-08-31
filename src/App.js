import { Route, Switch } from 'react-router-dom';
import './App.css';
import './details.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Details from './Pages/Details';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/user/:user' component={Details} />
      </Switch>
    </div>
  );
}

export default App;
