import React, {Component} from "react";
import HelloWorld from "./components/HelloWorld";
import {createStore} from "redux";
import reducer from "./reducers/reducer";

const initialState = {
  tech: "React "
};

const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    return <HelloWorld tech={store.getState().tech}/>
  }
}

export default App;