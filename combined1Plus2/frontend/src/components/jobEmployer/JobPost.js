import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Navbar from '../companyNavbar';

class JobPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: '',
       title: '',
       postingDate: '',
       deadline: '',
      location: '',
       salary: '',
      jobDescription: '',
      jobRequirements: '',
      category: '',
      companyName:''
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
   
    axios.post(`http://localhost:3000/jobs/`,
        {
          title: this.state.title,
          companyName: this.state.companyName,
          postingDate: this.state.postingDate,
          deadline: this.state.deadline,
          location: this.state.location,
          salary: this.state.salary,
          jobDescription: this.state.jobDescription,
          jobRequirements: this.state.jobRequirements,
          category: this.state.category
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(res => {
        if (res.status === 200) {
          this.setState({ redirect: <Redirect to='/company/viewjob' /> });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
     
      <div>
         <div>
      <Navbar />
    </div>
        <div style={{display:'flex',height: '-webkit-fill-available'}}>
          {this.state.redirect}
           
          <div class="col-md-5 coloring" style={{background:'#1569e0'}}>
           
            <h1 style={{ margin: '28%' }}>Create the Job  </h1>
          </div>
          <div class="col-md-7" style={{ marginTop: '2%' }}>
            <h1 style={{ marginBottom: '5%' }}>Create Post</h1>
            <form className='ui form' onSubmit={this.onSubmitHandler}>
              <div className='field'>
                <label>Job Title</label>
                <input
                  type='text'
                  name='title'
                  value={this.state.title}
                  placeholder='Job Title'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Company Name</label>
                <input
                  type='text'
                  name='companyName'
                  value={this.state.companyName}
                  placeholder='Company Name'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Job Posting Date</label>
                <input
                  type='text'
                  name='postingDate'
                  value={this.state.postingDate}
                  placeholder='Job Posting Date'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Application Deadline</label>
                <input
                  type='text'
                  name='deadline'
                  value={this.state.deadline}
                  placeholder='Application Deadline'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Location</label>
                <input
                  type='text'
                  name='location'
                  value={this.state.location}
                  placeholder='Location'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Job Salary</label>
                <input
                  type='text'
                  name='salary'
                  value={this.state.salary}
                  placeholder='Job Salary'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Description</label>
                <input
                  type='text'
                  name='jobDescription'
                  value={this.state.jobDescription}
                  placeholder='Description'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Requirements</label>
                <input
                  type='text'
                  name='jobRequirements'
                  value={this.state.jobRequirements}
                  placeholder='Requirements'
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className='field'>
                <label>Job Category</label>
                <input
                  type='text'
                  name='category'
                  value={this.state.category}
                  placeholder='Job Category'
                  onChange={this.onChangeHandler}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                {this.state.error && (
                  <div className='ui red message'>{this.state.error}</div>
                )}
              </div>
              <button className='btn btn-primary' type='submit'>
                Create Job Post
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default JobPost;
