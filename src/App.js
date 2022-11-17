import "./App.css";
import Navbar from "./Navbar";

function App() {
  const title = "Welcome to my new blog";
  const likes = 50;
  const person = { name: "mondo", age: 30 };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{person.name}</p>
      </div>
    </div>
  );
}

export default App;
