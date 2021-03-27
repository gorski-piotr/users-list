import "./App.css";
import Title from "./components/Title";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="App">
      <Title />
      <AddUser />
      <UsersList />
    </div>
  );
}

export default App;
