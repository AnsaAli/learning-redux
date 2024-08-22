import { Provider } from "react-redux";
import "./App.css";
import Store from "./redux/Store.js";
import CountContainer from "./redux/CountContainer.js";
import AddSubStore from "./redux/AddSubStore.js";
import AddSubCounter from "./redux/AddSubCounter.js";

// function App() {
//   return (
//     <Provider store={Store}>
//       <div className="App">
//         <h1>Redux</h1>
//         <CountContainer/>
//       </div>
//     </Provider>
//   );
// }
function App() {
  return (
    <Provider store={AddSubStore}>
      <div className="App">
        <h1>Redux</h1>
        <AddSubCounter/>
      </div>
    </Provider>
  );
}

export default App;
