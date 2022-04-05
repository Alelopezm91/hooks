import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PostList } from "./components/Posts/Post";
import { ToDosList } from "./components/ToDos/ToDos";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-block d-flex mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<ToDosList />} />
            <Route path="/posts" element={<PostList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
