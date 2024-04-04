import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home.js";
import User from "./components/User/User.js";
import Navbar from "./components/Navbar/Navbar.js";
import PostDetail from "./components/Post/PostDetail.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="/postDetail/:postId" element={<PostDetail />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
