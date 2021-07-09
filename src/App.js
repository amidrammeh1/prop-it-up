import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        fName= "Jane" 
        lName = "Doe"
        age = {45}
        hairColor= "Black"
        />
         <PersonCard
        fName= "John" 
        lName = "Smith"
        age = {88}
        hairColor= "Brown"
        />
         <PersonCard
        fName= "Millard" 
        lName = "Fillmore"
        age = {50}
        hairColor= "Brown"
        />
         <PersonCard
        fName= "Maria" 
        lName = "Smith"
        age = {62}
        hairColor= "Brown"
        />
    
    </div>
  );
}

export default App;
