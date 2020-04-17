import React from 'react';
// import axios from 'axios';
import Navbar from '../companyNavbar';
import JobItemApplicant from '../jobEmployer/JobItemApplicant';

class SingleEvent extends React.Component {
  constructor() {
    super();
    this.state = { registeredStudents: [] };
  }
  componentDidMount() {
  
    var students = this.props.location.state.post.students;
    this.setState({registeredStudents: students })
    console.log(this.state.registeredStudents);
    // axios
    //   .get(`http://localhost:3000/events/${id}`)
    //   .then(res => {
    //     if (res.status === 200) {
    //       this.setState({ registeredStudents: res.data.result }, () => {
    //         console.log(this.state.registeredStudents);
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
  render() {
    return (
      <div>
      {this.state.redirect}
      <div>
        <Navbar />
      </div>
      <div className='ui segment' style={{ marginTop: '0px', paddingLeft: '40px' }} >
        <b>
        <h3>Applications for Event Name: {this.props.location.state.post.eventName}</h3>
        </b>
      </div>
      <div>
      {this.state.redirect== '' && this.state.registeredStudents.map(registeredStudent => {
          return (
          <div className='ui raised segment' style={{marginLeft: '20px', width: '70%'}} >
              <JobItemApplicant key={registeredStudent.studentId} application={registeredStudent} />
            </div>
          );
        })}  
      </div>
    </div>
    );
  }
}

export default SingleEvent;
