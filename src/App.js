import Title from "./components/Title";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="text-center mt-5">
      <Title />
      <AddUser />
      <UsersList />
    </div>
  );
}

export default App;
