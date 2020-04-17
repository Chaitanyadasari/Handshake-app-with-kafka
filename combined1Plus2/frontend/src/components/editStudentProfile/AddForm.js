import React from 'react';
import axios from 'axios';

class AddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      collegeName: '', 
      degree: '', major: '', 
      yearOfPassing: '', 
      cgpa: '', 
      location:'' };
  }
  componentDidMount() {
      
  }
  onCancel = () => {
    this.props.toggle();
  };

  onSave = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log(this.props.educationDetails)
    if(this.state.collegeName!=='' && 
    this.state.location!=='' && 
    this.state.degree!=='' && 
    this.state.major!=='' && 
    this.state.yearOfPassing!=='' && 
    this.state.cgpa!==''){
      const id = "5e949f4251d5b0046c2a751d"
      const newData = {education : [...this.props.educationDetails, {
        collegeName: this.state.collegeName,
        location: this.state.location,
        degree: this.state.degree,
        major: this.state.major,
        yearOfPassing: this.state.yearOfPassing,
        cgpa: this.state.cgpa
      }]}
      axios
        .put(`http://localhost:3000/student/studentProfile/${id}`, newData, {headers: {'Content-Type': 'application/json'}})
        .then(res => {
          if (res.status === 200) {
            this.props.onAddSchool(res.data.education);
            // this.props.toggle()  
          } else {
              console.log(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
    
  };

  onChangeHandlerCollege = (e) => {
    this.setState({collegeName: e.target.value}, () => {
      console.log("Input", this.state.collegeName);
    })
  }

  onChangeHandlerLocation = (e) => {
    this.setState({location: e.target.value}, () => {
      console.log("Input", this.state.location);
    })
  }

  onChangeHandlerDegree = (e) => {
    this.setState({degree: e.target.value}, () => {
      console.log("Input", this.state.degree);
    })
  }

  onChangeHandlerMajor = (e) => {
    this.setState({major: e.target.value}, () => {
      console.log("Input", this.state.major);
    })
  }
  
  onChangeHandlerYear = (e) => {
    this.setState({yearOfPassing: e.target.value}, () => {
      console.log("Input", this.state.yearOfPassing);
    })
  }

  onChangeHandlerGPA = (e) => {
    this.setState({cgpa: e.target.value}, () => {
      console.log("input", this.state.cgpa);
    })
  }

  render() {
    return (
      <div>
        <div>
          <form className='ui equal width form'>
            <div class='field'>
                <label>School Name</label>
                <input type="text"  
                placeholder='School'
                value={this.state.collegeName} 
                onChange={this.onChangeHandlerCollege} />
            </div>
            <div class='field'>
                <label>Location</label>
                <input type="text"  
                placeholder='Location'
                value={this.state.location} 
                onChange={this.onChangeHandlerLocation} />
            </div>
            <div class='field'>
                <label>Degree</label>
              <input type="text"  
              placeholder='Degree'
              value={this.state.degree}
              onChange={this.onChangeHandlerDegree} />
            </div>
            <div class='field'>
                <label>Major</label>
              <input type="text" 
              placeholder='Major'
              value={this.state.major}
              onChange={this.onChangeHandlerMajor} />
            </div>
            <div class='fields'>
                <div class='field'>
                    <label>Passing Year</label>
                    <input type="text" 
                    placeholder='Passing Year'
                    value={this.state.yearOfPassing}
                    onChange={this.onChangeHandlerYear}/>
                </div>
                <div class='field'>
                  <label>GPA</label>
                  <input 
                  type="text" 
                  value={this.state.cgpa} 
                  placeholder="GPA" 
                  onChange={this.onChangeHandlerGPA} />
                </div>
            </div>
            <div>
                <button class='ui primary button' onClick={this.onSave}>Save</button>
                <button class='ui button' onClick={this.onCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddForm;
