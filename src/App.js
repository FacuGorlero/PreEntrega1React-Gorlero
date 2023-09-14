import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes ,BrowserRouter} from "react-router-dom"
import { ItemListContainer } from './paginas/ItemListContainer';
import Remeras from './paginas/Remeras';
import Pantalones from './paginas/Pantalones';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/ItemListContainer" element={<ItemListContainer greeting="Bievenido a Dreamer"/>}/>
        <Route path="/Remeras" element={<Remeras/>}/>
        <Route path="/Pantalones" element={<Pantalones/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
