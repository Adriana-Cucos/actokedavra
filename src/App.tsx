import './App.css';

function App() {

  const actor = {
    name: "Leonardo Dicaprio",
    score: 10,
    hobbies: "Music and dancing naked in the rain",
    description: "He is a good guy with a thick mustache."
  }

  return (
    <div className="App">
      <ul style={{textAlign: "left"}}>
        <li>Name: {actor.name}</li>
        <li>Score: {actor.score}</li>
        <li>Hobbies: {actor.hobbies}</li>
        <li>Description: {actor.description}</li>
      </ul>
    </div>
  );
}

export default App;
