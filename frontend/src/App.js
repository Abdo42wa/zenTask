import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/NavigationBar'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import Phones from './screens/Phones';
import Computers from './screens/Computers';
import ConsoleGame from './screens/ConsoleGame';
import Manager from './screens/Manager'




function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/Manager" component={Manager} exact />
          <Route path="/Phones" component={Phones} exact/>
          <Route path="/Computers" component={Computers} exact/>
          <Route path="/Game Consoles" component={ConsoleGame} exact/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
