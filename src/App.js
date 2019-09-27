import React from "react";
import "./App.css";

import Dropdown from "./components/Stretch/Dropdown";
import PhotoOfTheDay from "./components/PhotoOfTheDay.js";
import DougieBirthday from './components/Stretch/DougieBirthday.js';
import SophieBirthday from './components/Stretch/SophieBirthday.js';
import MyBirthday from "./components/Stretch/MyBirthday.js";

import {Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Dropdown />
      <Route exact path='/photo-of-the-day' component={PhotoOfTheDay} />
      <Route exact path='/dougie-birthday' component={DougieBirthday} />
      <Route exact path='/sophie-birthday' component={SophieBirthday} />
      <Route exact path='/my-birthday' component={MyBirthday} />
    </div>
  );
}

export default App;
