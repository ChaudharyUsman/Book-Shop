import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}></Route>
      
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App