import { Routes, Route } from "react-router-dom";

// commponents
import Login from "./components/Login";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    
  );
}

export default App;
