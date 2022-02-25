import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <div className="card-list">
        <Todo title="Learn React" />
        <Todo title="Master in React" />
        <Todo title="React Advance" />
      </div>
    </div>
  );
}

export default App;
