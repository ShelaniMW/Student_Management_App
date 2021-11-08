import logo from './logo.svg';
import './App.css';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import ListStudentComponent from './components/ListStudentComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import ListClassComponent from './components/ListClassComponent';
import CreateClassComponent from './components/CreateClassComponent';
import UpdateClassComponent from './components/UpdateClassComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AssignStudentComponent from './components/AssignStudentComponent';
import {Link} from 'react-router-dom'
import ListAssignedStudentComponent from './components/ListAssignedStudentComponent';



function App() {
  return (
    <div>
        <Router>
            <HeaderComponent />
              <div className="container">
                <Switch>
                <Route path="/" exact component={ListStudentComponent}></Route>
                <Route path="/students" component={ListStudentComponent}></Route>
                <Route path="/add-student" component={CreateStudentComponent}></Route>
                <Route path="/update-student/:id" component={UpdateStudentComponent}></Route>
                <Route path="/classes" component={ListClassComponent}></Route>
                <Route path="/add-class" component={CreateClassComponent}></Route>
                <Route path="/update-class/:id" component={UpdateClassComponent}></Route>
                <Route path="/assign-student" component={AssignStudentComponent}></Route>
                <Route path="/assign-records" component={ListAssignedStudentComponent}></Route>
          
                </Switch>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
