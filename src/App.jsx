import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import SearchBar from "./components/SearchBar";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <div className="font-mono">
        <Header />
        <SearchBar />
        <TaskCard />
        <InputForm />
      </div>
    </>
  );
}

export default App;
