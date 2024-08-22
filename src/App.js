import { Provider } from "react-redux";
import "./App.css";
import Store from "./redux/Store.js";
import CountContainer from "./redux/CountContainer.js";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <h1>Redux</h1>
        <CountContainer/>
      </div>
    </Provider>
  );
}

export default App;
