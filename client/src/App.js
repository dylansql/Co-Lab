import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Music from './Music'
import PhoVideography from './PhoVideography'
import Venudio from './Venudio'
import Home from './Home'
import Navbar from './Navbar'
import './App.css'

function App() {

  
  return (
    <Router>
      <div  className="App">
        <header>
          <Navbar />
            </header>
                <div>
                  <Switch>
                      <Route exact path="/">
                        <Home />
                          </Route>
                            <Route exact path="/Music">
                              <Music />
                                </Route>
                                  <Route exact path="/PhoVideography">
                                    <PhoVideography />
                                  </Route>
                              <Route exact path="/Venudio">
                          <Venudio />
                      </Route>
                  </Switch>
              </div>
      </div>
    </Router>
    );
  }
  
export default App;
