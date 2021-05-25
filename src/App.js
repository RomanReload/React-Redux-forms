import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import LoginBlock from "./components/Form";

function App() {
  return (
    <Provider store={store}>
      <div className="Container">
        <LoginBlock />
      </div>
    </Provider>
  );
}

export default App;
