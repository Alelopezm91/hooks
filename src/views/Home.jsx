import { useTextColor } from "../contexts/TextColorContext";

const Home = () => {
    const { color, toggleColor } = useTextColor();
    
return (
  <div className="container-fluid">
    <div>
      <div className="row">
        <div className="col">Posts</div>
        <div className="col">To Do's</div>
      </div>
      <div
        className="btn-group row"
        role="group"
        aria-label="Basic outlined example"
      >
        <button onClick={toggleColor} className={`btn btn-outline-${color}`}>
          {color}
        </button>
        <button onClick={toggleColor} className={`btn btn-outline-${color}`}>
          {color}
        </button>
      </div>
    </div>
  </div>
);
}

export default Home