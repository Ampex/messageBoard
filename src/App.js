import React, { Component } from 'react'
import { Grow, Divider } from '@material-ui/core'
import ScheduleIcon from '@material-ui/icons/Schedule'
import './App.css'

import Header from './components/Header'
import User from './components/User'
import Chat from './components/Chat'

const min = 'minimum message length is 6'
const messages = [
  {
    user: 'guest',
    message:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, velit vitae porro optio dolorum neque veritatis praesentium quasi quos modi nihil accusamus molestiae expedita odit, molestias sed quaerat excepturi eos.',
    time: '29.09.2019, 12:00:38'
  },
  {
    user: 'guest',
    message:
      'velit vitae porro optio dolorum neque veritatis praesentium quasi quos.',
    time: '20.09.2019, 17:07:43'
  },
  {
    user: 'guest',
    message:
      'Minima, velit vitae porro optio dolorum neque veritatis praesentium quasi quos modi nihil accusamus molestiae expedita odit.',
    time: '12.09.2019, 05:10:21'
  },

  {
    user: 'guest',
    message:
      'Minima, velit vitae porro optio dolorum neque veritatis praesentium quasi quos modi nihil accusamus molestiae expedita odit.',
    time: '12.09.2019, 05:10:21'
  }
]

class App extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    const { length } = this.state.value
    this.setState({
      value: e.target.value,
      helperText: length < 5 ? min : null,
      error: length < 5 ? true : null
    })
  }

  handleSubmit = () => {
    const { user, value } = this.state
    if (!this.state.value) {
      this.setState({
        helperText: min,
        error: true
      })
    } else {
      const data = new Date().toLocaleString()
      const newMessage = {
        user: user,
        message: value,
        time: data
      }
      messages.push(newMessage)
      this.setState({
        value: ''
      })
    }
  }

  render() {
    const list = messages.map((item, index) => (
      <Grow in key={index}>
        <div className='content'>
          <code>
            <ScheduleIcon color='primary' fontSize='inherit' /> {item.time}
          </code>
          <code style={{ color: '#999' }}> | Author: guest</code>
          <Divider style={{ margin: '8px 0' }} />
          <p>{item.message}</p>
        </div>
      </Grow>
    ))

    return (
      <React.Fragment>
        <User />
        <Chat />
        <h2>Guest Message Board</h2>
        <p
          style={{
            color: 'white',
            opacity: 0.8,
            textAlign: 'center',
            fontSize: 12,
            marginBottom: 25
          }}
        >
          © 2019 bkasperski
        </p>

        <Header
          change={this.handleChange}
          submit={this.handleSubmit}
          value={this.state.value}
          error={this.state.error}
          helperText={this.state.helperText}
          length={this.state.value.length}
        />

        <div className='container'>
          {list ? list.reverse() : 'No messages found yet!'}
        </div>
      </React.Fragment>
    )
  }
}
export default App
