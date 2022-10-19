import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Notes from "./components/layout/notes";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
