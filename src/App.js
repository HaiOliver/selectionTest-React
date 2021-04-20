
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route} from 'react-router-dom';
import FedDuck from './pages/info-fed-duck-in-park/fed-duck';
import ListParks from './pages/list-all-parks-fed-duck/list-parks';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ListParks}/>
        <Route exact path="/infoDuckFed" component={FedDuck}/>
      </Switch>
    </div>
  );
}

export default App;
