import Cards from "./components/Cards";
import Header from "./components/Header";
import AddMovie from "./components/AddMovie";
import { Route,Routes } from "react-router-dom";
import Detail from "./components/Detail";
import { createContext, useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <Appstate.Provider value={{login, userName, setLogin, setUserName}}>
    <div className="App relative">
      <Header/>
      <Routes>
        <Route path="/" element={<Cards />}></Route>
        <Route path="/addmovie" element={<AddMovie />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate};