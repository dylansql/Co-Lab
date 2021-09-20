import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Music from './Music'
import PhoVideography from './PhoVideography'
import Venudio from './Venudio'
import Home from './Home'
import Navbar from './Navbar'
import './App.css'

import { useEffect, useState } from 'react'
import axios from 'axios'
import ReviewList from './ReviewList'
import FinalList from './FinalList'

const BASE = process.env.REACT_APP_AIRTABLE_BASE
const KEY = process.env.REACT_APP_AIRTABLE_KEY

const URL = `https://api.airtable.com/v0/${BASE}/Artist`

const config = {
  headers: {
    Authorization: `Bearer ${KEY}`,
  },
};

function App() {
  const [list, setList] = useState([]);

  useEffect(() =>  {
    const fetchData = async () => {
      try {
        const res = await axios.get(URL, config)
        setList(res.data.records)
        console.log(res)
      } catch(error) {
        console.log(error)
      }
  }
    fetchData()
  }, []);
  
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
                      <Route path="/category/:type">
                        <ReviewList list={list} />
                      </Route>
                      <Route path="/category/:type/experience/:finalType">
                        <FinalList newList={newlist} />
                      </Route>
                  </Switch>
              </div>
      </div>
    </Router>
    );
  }
  
export default App;
