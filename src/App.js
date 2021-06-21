
import './App.css';
import Topbar from './topbar';
import Login from "./Candidatelogin";
import Signup from "./Candidatesignup";
import RecruiterLogin  from './recruiterlogin';
import RecruiterSignup from './recruitersignup';
import Recruiterdashboard from './recruiterdashboard';
import Candidate from './candidatehp';
import Applied from './appliedcan'
import Create from './createjob';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
      
      <div class= "container-fluid">
        <Switch>
          <Route path="/" exact="true">
          <Topbar></Topbar>
          </Route>
        <Route path="/Candidatelogin" exact="true">
          <Login></Login>
        </Route>
        <Route path = "/Candidatesignup" exact="true">
            <Signup></Signup>
        </Route>
        <Route path="/RecruiterLogin" exact="true">
          <RecruiterLogin></RecruiterLogin>
        </Route>
        <Route path = "/RecruiterSignup" exact="true">
            <RecruiterSignup></RecruiterSignup>
        </Route>
        <Route path = "/Recruiterdashboard/:id" exact="true">
            <Recruiterdashboard></Recruiterdashboard>
        </Route>
        <Route path = "/createjob" exact="true">
            <Create></Create>
        </Route>
        <Route path = "/candidatedashboard/:id" exact="true">
            <Candidate></Candidate>
        </Route>
        <Route path = "/candidatesApplied" exact="true">
            <Applied></Applied>
        </Route>
        </Switch>
      </div>
    </div>
    </div>
    </Router>
  );
}

export default App;
