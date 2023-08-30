// import logo from './logo.svg';
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  const person = [
    { first_name: "Jane", last_name: "Doe", age: 45, hair_color: "Black" },
    { first_name: "John", last_name: "Smith", age: 88, hair_color: "Brown" },
    {
      first_name: "Millard",
      last_name: "Fillmore",
      age: 50,
      hair_color: "Brown",
    },
    { first_name: "Maria", last_name: "Smith", age: 62, hair_color: "Brown" },
  ];
  return (
    <div className="App" class="row border border-1">
      <header className="App-header">
        <div>
          <div>
            <PersonCard person={person} />
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
