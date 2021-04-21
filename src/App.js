import React,{lazy, Suspense} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route} from 'react-router-dom';
import ErrorBoundary from './components/error-boundary/error-boundary';
import Loading from './components/loading/loading';

// !! Lazy loading => improve loading speed
const ListParks = lazy(()=>import('./pages/list-all-parks-fed-duck/list-parks'))
const FedDuck = lazy(()=>import('./pages/info-fed-duck-in-park/fed-duck'))

function App() {
  return (
    <div className="App">
      <Switch>
        <ErrorBoundary>
                <Suspense fallback={
                    // --------------------------------------------------------
                    // ----- // ! Loading when waiting for data come back -----
                    // --------------------------------------------------------
                    <Loading/>

              }>
                  <Route exact path="/selectionTest-React" component={ListParks}/>
                  <Route exact path="/selectionTest-React/infoDuckFed" component={FedDuck}/>
              </Suspense>

        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
