
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";

const App = () => {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ItemList} />
        <Route path="/items/:id" component={ItemDetails} />
      </Switch>
    </div>
  </Router>
  )
}

export default App
