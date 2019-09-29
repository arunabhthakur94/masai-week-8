import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import DriveIt from './component/DriveIt';
import BookNow from './component/BookNow';
import Charges from './component/Charges';
import About from './component/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <React.Fragment>
        <Route exact path = "/" component = {DriveIt} />
        <Route exact path = "/booknow" component = {BookNow} />
        <Route exact path = "/charges" component = {Charges} />
        <Route exact path = "/about" component = {About} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
