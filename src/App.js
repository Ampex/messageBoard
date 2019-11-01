import React, { Component } from 'react';
import Header from './components/Header'
import { Grow } from '@material-ui/core'
import ScheduleIcon from '@material-ui/icons/Schedule'
import './App.css'

const messages = [
  {
    'title': 'Pierwszy dzień w pracy',
    'message': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, velit vitae porro optio dolorum neque veritatis praesentium quasi quos modi nihil accusamus molestiae expedita odit, molestias sed quaerat excepturi eos.',
    'time': '29.09.2019, 12:00:38'
  },
  {
    'title': 'Jak mmiał ona imię...',
    'message': 'velit vitae porro optio dolorum neque veritatis praesentium quasi quos.',
    'time': '20.09.2019, 17:07:43'
  },
  {
    'title': 'Pasi pasi?',
    'message': 'Minima, velit vitae porro optio dolorum neque veritatis praesentium quasi quos modi nihil accusamus molestiae expedita odit.',
    'time': '12.09.2019, 05:10:21'
  }
]

class App extends Component {
  state = {
  }

  handleChange = e => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = () => {

    const data = new Date().toLocaleString()
    const newMessage = {
      'title': this.state.title,
      'message': this.state.message,
      'time': data
    }
    messages.push(newMessage)
    this.setState ({
    })
  }

  render() {

    const list = messages.map((item, index) => (
      <Grow in key={index}>
        <div className='content'>
          <code><ScheduleIcon fontSize='inherit' /> {item.time}</code>
          <p>{item.title}</p>
          <code>{item.message}</code>
        </div>
      </Grow>
      
    ))

    return(
      <React.Fragment>
        <Header
        change={this.handleChange}
        submit={this.handleSubmit}
        />
        <div className='container'>{list ? list.reverse() : 'No messages found yet!'}</div>
      </React.Fragment>
    )
  }
}
export default App