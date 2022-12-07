import "./App.css";

function App() {
  const name = "Josh";
  const welcomeMessage = <p>Welcome to the website!</p>;
  const welcomeQuestion = <p>How would you like to start your day, {name}?</p>;
  return (
    <div className="App">
      <h1>Welcome, {name}</h1>
      {welcomeMessage}
      {welcomeQuestion}
    </div>
  );
}

export default App;
