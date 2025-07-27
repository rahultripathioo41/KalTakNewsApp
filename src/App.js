
import './App.css';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<NewsComponent category="India"/>}></Route>
        <Route path="/sports" element={<NewsComponent category="Sports"/>}></Route>
        <Route path="/politics" element={<NewsComponent category="Politics"/>}></Route>
        <Route path="/international" element={<NewsComponent category="International"/>}></Route>

      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
