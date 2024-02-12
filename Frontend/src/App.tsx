import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import WebTask from "./Pages/Todos/todo";
import Location from "./Pages/Location/Location";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<WebTask/>}/>
        <Route path="/location" element={<Location/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
