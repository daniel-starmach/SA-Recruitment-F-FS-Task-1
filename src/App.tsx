import React from "react";
import { connect } from "react-redux";
import "./App.css";
import logo from "./logo.svg";
import { AppState } from "./store";
import { DataState } from "./store/data/types";
import { setMood } from "./store/selected/actions";
import { SelectedState } from "./store/selected/types";

const mapDispatchToProps = { setMood };

const mapStateToProps = (state: AppState) => ({
  data: state.data,
  selected: state.selected
});

interface AppProps {
  data: DataState;
  selected: SelectedState;
  setMood: typeof setMood;
}

const App: React.FC<AppProps> = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
