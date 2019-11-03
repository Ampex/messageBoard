import React, { Component } from 'react';
import Header from './components/Header'
import { Grow, Divider } from '@material-ui/core'
import ScheduleIcon from '@material-ui/icons/Schedule'
import './App.css'

const messages = [
  {
    'user': 'guest',
    'message': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, velit vitae porro optio dolorum neque veritatis praesentium quasi quos modi nihil accusamus molestiae expedita odit, molestias sed quaerat excepturi eos.',
    'time': '29.09.2019, 12:00:38'
  },
  {
    'user': 'guest',
    'message': 'velit vitae porro optio dolorum neque veritatis praesentium quasi quos.',
    'time': '20.09.2019, 17:07:43'
  },
  {
    'user': 'guest',
    'message': 'Minima, velit vitae porro optio dolorum neque veritatis praesentium quasi quos modi nihil accusamus molestiae expedita odit.',
    'time': '12.09.2019, 05:10:21'
  }
]

class App extends Component {

  state = {
    value: ''
  }

  handleChange = e => {
    this.setState ({
      value: e.target.value,
      helperText: this.state.value.length < 6 ? 'minimum message length is 6' : null,
      error: this.state.value.length < 6 ? true : null,
    })
  }

  handleSubmit = () => {
    
    if (!this.state.value) {
      this.setState ({
        helperText: 'minimum message length is 6',
        error: true
      })

    } else {
      const data = new Date().toLocaleString()
      const newMessage = {
        'user': this.state.user,
        'message': this.state.value,
        'time': data
      }      
    messages.push(newMessage)
    this.setState ({
      value: ''
    })
    }
  }

  render() {

    const list = messages.map((item, index) => (
      <Grow in key={index}>
        <div className='content'>
          <code><ScheduleIcon color='primary' fontSize='inherit' /> {item.time}</code>
          <code style={{color: '#999'}}> | Author: guest</code>
          <Divider style={{margin: '8px 0'}} />
          <p>{item.message}</p>
        </div>
      </Grow>
      
    ))

    return(
      <React.Fragment>
        <h2>Guest Chat Booard</h2>
        <p style={{color: 'white', opacity: .8, textAlign: 'center', fontSize: 12, marginBottom: 25}}>© 2019 bkasperski</p>

        <Header
        change={this.handleChange}
        submit={this.handleSubmit}
        value={this.state.value}
        error={this.state.error}
        helperText={this.state.helperText}
        />

        <div className='container'>{list ? list.reverse() : 'No messages found yet!'}</div>
        
      </React.Fragment>
    )
  }
}
export default App