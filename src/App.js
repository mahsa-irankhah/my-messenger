import { Routes, Route } from "react-router-dom";

// commponents
import Login from "./components/Login";
import Chats from "./components/Chats";

//context 
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/chats" element={<Chats />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
