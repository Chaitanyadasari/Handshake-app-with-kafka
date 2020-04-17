import React from 'react';
import Event from './Event';
import Students from './Students'
import Jobs from './Jobs';
import Login from './studentLoginPage/Login';
import Register from './studentLoginPage/Register';
import LoginC from './companyLoginPage/Login';
import RegisterC  from './companyLoginPage/Register';
import EventPost from './eventEmployer/EventPost';
import ViewEventEmployer from './eventEmployer/ViewEventEmployer';
import ViewStudentProfile from './viewStudentProfile/ViewStudentProfile';
import SingleEvent from './eventEmployer/SingleEvent';
import EventPageStudent from './EventPageStudent';
import JobPost from './jobEmployer/JobPost';
import ViewJobs from './jobEmployer/ViewJobs';
import JobApplicants from './jobEmployer/JobApplicants';
import Application from './Application';
import StudentProfile from './editStudentProfile/StudentProfile';
import Home from './Home';
import ViewRegisteredEvent from './ViewRegisteredEvent';
import ViewStudentApplication from './jobEmployer/ViewStudentApplication';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Home} />
      </div>
      
      
      <div>
        
        <Route path='/student/login' component={Login} />
        <Route path='/student/signUp' component={Register} />
        <Route path='/company/login' component={LoginC} />
        <Route path='/company/signUp' component={RegisterC} />
        <Route path='/student/event' component={EventPageStudent} />
        <Route path='/student/registered/event' component={ViewRegisteredEvent} />
        <Route path='/company/postevent' component={EventPost} />
        <Route path='/company/postjob' component={JobPost} />
        <Route path='/company/viewjob' component={ViewJobs} />
        <Route path='/company/jobapplicants' component={JobApplicants} />
        <Route path='/company/viewstudentapplication' component={ViewStudentApplication} />
        <Route path='/applications' component={Application} />
        <Route path='/company/myevent' component={SingleEvent} />
        <Route path='/company/post' component={ViewEventEmployer} />  
        <Route path='/student/profile' component={ViewStudentProfile} />
        <Route path='/event' component={Event} />
        <Route path='/students' component={Students} />
        <Route path='/profile' component={StudentProfile} />
        <Route path='/student/jobs' component={Jobs} />
      </div>

    </Router>
  )
}

export default App;
