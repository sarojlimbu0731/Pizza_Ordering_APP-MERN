import logo from './logo.svg';
import Navbar from "./components/Navbar";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import HomeScreen from './screens/Homescreen';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeScreen />
    </div>
  );
}

export default App;
