import { Provider } from "react-redux";
import store from "./store";
import MData from './Components/Movies/MData';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <MData />
    </div>
    </Provider>
  );
}

export default App;



