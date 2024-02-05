import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainHeader from "./components/MainHeader"
import Home from "./components/Home"
import Support from "./components/Support"
import About from "./components/About"
import Labs from "./components/Labs"
import NotFound from "./components/NotFound"
import { NavLink } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader/>}>
          {/* This Become Your Default Route */}
          <Route index element={<Home/>}/>
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

