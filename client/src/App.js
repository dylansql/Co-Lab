import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Music from './Music'
import PhoVideography from './PhoVideography'
import Venudio from './Venudio'
import Home from './Home'
import Navbar from './Navbar'
import './App.css'

import { useEffect, useState } from 'react'
import axios from 'axios'
import FinalList from './FinalList'
import Experience from './Experience'
import VenudioXP from './VenudioXP'
import StudioFinalList from './StudioFinalList'
import Create from './Create'
import './index.css'

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
  const [filteredList, setFilteredList] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() =>  {
    const fetchData = async () => {
      try {
        const res = await axios.get(URL, config)
        setList(res.data.records)
      } catch(error) {
        console.log(error)
      }
  }
    fetchData()
  }, [toggle]);

  // useEffect(() =>  {
  //   const fetchReviews = async () => {
  //     try {
  //       const res = await axios.get(URL, config)
  //       setList(res.data.records)
  //     } catch(error) {
  //       console.log(error)
  //     }
  // }
  //   fetchReviews()
  // }, [toggle]);
  

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
                      <Route exact path="/category/music">
                        <Music setToggle={setToggle} />
                      </Route>
                      <Route exact path="/category/music/:type/xpo">
                        <Experience setToggle={setToggle} list={list} setFilteredList={setFilteredList} />
                      </Route>
                      <Route exact path="/category/music/:type/xpo/:xpoType">
                        <FinalList filteredList={filteredList} />
                      </Route>

                      <Route exact path="/category/PhoVideography/">
                        <PhoVideography setToggle={setToggle} />
                      </Route>
                      <Route exact path="/category/PhoVideography/:type/xpo">
                        <Experience setToggle={setToggle} list={list} setFilteredList={setFilteredList} />
                      </Route>
                      <Route exact path="/category/PhoVideography/:type/xpo/:xpoType">
                        <FinalList filteredList={filteredList} />
                      </Route>


                      <Route exact path="/category/Venudio/">
                        <Venudio setToggle={setToggle} />
                      </Route>
                      <Route exact path="/category/Venudio/:type/xpo"> 
                        <VenudioXP setToggle={setToggle} list={list} setFilteredList={setFilteredList} />
                      </Route>
                      <Route exact path="/category/Venudio/:type/xpo/:xpoType/results">
                        <StudioFinalList filteredList={filteredList} />
                      </Route>
                      <Route exact path="/Create/Post">
                        <Create list={list} />
                      </Route>
                  </Switch>
              </div>
      </div>
    </Router>
    );
  }
  
export default App;
