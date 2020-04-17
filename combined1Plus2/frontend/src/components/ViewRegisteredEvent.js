import React from 'react';
import axios from 'axios';
import Header from './Header';
import ButtonMenu from './ButtonMenu';
import EventItem from './EventItem';
import RegisteredEventItem from './RegisteredEventItem';
import EventSideList from './EventSideList';

class ViewRegisteredEvent extends React.Component {
    constructor() {
        super()
        this.state = {registeredEvents: []}
    }

    componentDidMount() {
      const id = sessionStorage.getItem("userId");
      axios.get(`http://localhost:3000/student/studentProfile/${id}`)
      .then(res => {
        if (res.status === 200) {
          this.setState({ registeredEvents: res.data.registeredEvents }, () => {
            console.log(this.state.registeredEvents);
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
    }

    render() {
        return (
            <div>
              <Header />
              <div className='container'>
                <div>
                  <ButtonMenu />
                </div>
                <div className='ui items' style={{float: 'left', width: '60%'}}>
                  {this.state.registeredEvents.map(event => {
                    return (
                      <div
                        className='ui raised segment '
                        style={{
                          marginTop: '40px',
                          marginLeft: '40px',
                          marginBottom: '20px',
                          marginRight: '20px',
                          paddingTop: '10px'
                        }}
                      >
                        <RegisteredEventItem key={event._id} event={event} />
                      </div>
                    );
                  })}
                </div>
                <div
                  style={{
                    float: 'left',
                    marginTop: '60px',
                    marginLeft: '30px',
                    marginRight: '40px'
                  }}
                >
                  <EventSideList />
                </div>
              </div>
            </div>
          );
    }
}

export default ViewRegisteredEvent;