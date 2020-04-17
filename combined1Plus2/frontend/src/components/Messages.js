import React from 'react';
import axios from 'axios';
import { Label, Icon } from 'semantic-ui-react';


class Messages extends React.Component {
    constructor() {
        super();
        this.state = {Messages: [], current_message: ''}
    }

    componentDidMount() {
        console.log(this.props.locale.state);
        // if(this.props.locale.state.message != null) {
        //     this.setState({Messages: this.props.locale.state.message})
        // }
        // console.log(Messages);
    }

    onAdd = (e) => {
        // e.preventDefault();
        // const list = [...this.state.messages, this.state.current_message];
        // const str = list.join();
        // const data = {...this.props.message};
        // data.messageSet = str;
        // axios
        // .post('http://localhost:3000/student/message/studentName', data, {headers: {'Content-Type': 'application/json'}})
        // .then(res => {
        //     if (res.status === 200) {
        //         console.log(res.data);
          
        //     } else {
        //         console.log(res);
        //     }
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        // this.setState({messages: list})
        // this.setState({current_message: ''});

    }

    onChangeHandler = (e) => {
        this.setState({current_message: e.target.value});
        
    }
   
    renderMessages = (message) => {
       
        return (
                <Label as='a' style={{marginBottom:'5px'}}>
                    {message}
                    {/* <Icon name='delete' id={skill} onClick={this.onDeleteSkill}/> */}
                </Label>
        )
    }
    render() {
        console.log(Messages);
        return (
            <div>
                <div className='ui raised card' style={{padding: '10px'}}>
                    <div style={{marginBottom: '30px'}}>
                        <h3>Messages</h3>
                    </div>
                    <div style={{marginBottom: '20px'}}>
                        {this.state.Messages.map((message) => {
                            return this.renderMessages(message)
                        })}
                    </div>
                    <div>
                        <form className='ui form'>
                            <input type='text' placeholder='Add more Messages' value={this.state.current_message} onChange={this.onChangeHandler} />
                            <div style={{marginTop: '10px'}}>
                                <button class='ui positive button' onClick={this.onAdd}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Messages;