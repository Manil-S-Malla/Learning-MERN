import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/navbar.component";
import ListExercise from "./components/listExercise.component";
import EditExercise from "./components/editExercise.component";
import CreateExercise from "./components/createExercise.component";
import CreateUser from "./components/createUser.component";


function App() {
  return (
    <Router>
     
      <div class= "container">
        <Navbar />
        <Route path= "/" exact component= {ListExercise} />
        <Route path= "/edit/:id" component= {EditExercise} />
        <Route path= "/create" component= {CreateExercise} />
        <Route path= "/user" component= {CreateUser} />
      </div>
      
    </Router>  
  );
}

export default App;
