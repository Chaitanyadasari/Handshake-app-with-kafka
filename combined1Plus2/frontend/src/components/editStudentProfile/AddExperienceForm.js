import React from 'react';
import axios from 'axios';


class AddExperienceForm extends React.Component {
  constructor() {
    super();
    this.state = {
      companyName: '', 
      jobTitle: '', 
      startDate: '', 
      endDate: '', 
      location: '' , 
      workDescription: ''};
  }
  componentDidMount() {
      
  }
  onCancel = () => {
    this.props.toggle();
  };

  onSave = (e) => {
    e.preventDefault();
    console.log(this.state);
    if(this.state.companyName!=='' && 
    this.state.jobTitle!=='' && 
    this.state.startDate!=='' && 
    this.state.endDate!=='' && 
    this.state.location!=='' && 
    this.state.workDescription!==''){
      const id = "5e949f4251d5b0046c2a751d"
      const newData = {experience : [...this.props.experienceDetails, {
        companyName: this.state.companyName,
        jobTitle: this.state.jobTitle,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        location: this.state.location,
        workDescription: this.state.workDescription
      }]}
      axios
        .put(`http://localhost:3000/student/studentProfile/${id}`, newData, {headers: {'Content-Type': 'application/json'}})
        .then(res => {
          if (res.status === 200) {
            this.props.onAddExperience(res.data.experience);
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

  onChangeHandlerCompanyName = (e) => {
    this.setState({companyName: e.target.value}, () => {
      console.log("Dropdown", this.state.companyName);
    })
  }

  onChangeHandlerDesignation = (e) => {
    this.setState({jobTitle: e.target.value}, () => {
      console.log("Dropdown", this.state.jobTitle);
    })
  }

  onChangeHandlerFromDate = (e) => {
    this.setState({startDate: e.target.value}, () => {
      console.log("Dropdown", this.state.startDate);
    })
  }
  
  onChangeHandlerToDate = (e) => {
    this.setState({endDate: e.target.value}, () => {
      console.log("Dropdown", this.state.endDate);
    })
  }

  onChangeHandlerCompanyLocation = (e) => {
    this.setState({location: e.target.value}, () => {
      console.log("Dropdown", this.state.location);
    })
  }

  onChangeHandlerWorkSummary = (e) => {
    this.setState({workDescription: e.target.value}, () => {
      console.log("input", this.state.workDescription);
    })
  }

  render() {
      console.log(this.props.data);
    return (
      <div>
        <div>
          <form className='ui equal width form'>
            <div class='field'>
                <label>Company Name</label>
                <input type="text"
              placeholder='Company Name'
              value={this.state.companyName} 
              onChange={this.onChangeHandlerCompanyName} />
            </div>
            <div class='field'>
                <label>Designation</label>
              <input type="text" 
              placeholder='Designation'
              value={this.state.jobTitle}
              onChange={this.onChangeHandlerDesignation} />
            </div>
            <div class='field'>
                <label>From</label>
                <input type="text"
              placeholder='Starting Date'
              value={this.state.startDate}
              onChange={this.onChangeHandlerFromDate} />
            </div>
            <div class='fields'>
                <div class='field'>
                    <label>To</label>
                    <input type="text"
                    placeholder='End Date'
                    value={this.state.endDate}
                    onChange={this.onChangeHandlerToDate}/>
                </div>
            </div>
            <div class='field'>
                    <label>Company Location</label>
                    <input type="text"
                    placeholder='Location'
                    value={this.state.location}
                    onChange={this.onChangeHandlerCompanyLocation}/>
             </div>
            <div class='field'>
                <label>Work Summary</label>
                <input type="text" value={this.state.workDescription} placeholder="Work Summary" onChange={this.onChangeHandlerWorkSummary} />
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

export default AddExperienceForm;
