import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  IconButton,
  Grow,
  Avatar,
  TextField,
  Tooltip,
  Typography,
  Divider
} from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import SendIcon from '@material-ui/icons/Send'
import CancelIcon from '@material-ui/icons/Cancel'

export default function Chat() {
  const [isActive, setActive] = useState(false)
  const [isError, setError] = useState(false)
  const [isEmpty, setEmpty] = useState('')
  const [isMessage, setMessages] = useState([])

  const LightTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[3],
      fontSize: 14
    }
  }))(Tooltip)

  const BiggerIcon = withStyles(theme => ({
    root: {
      color: 'rgba(57, 153, 251, 1)',
      fontSize: 28,
      padding: 4
    }
  }))(isActive ? SendIcon : ChatIcon)

  const handleActive = () => {
    setActive(true)
  }
  const handleSubmit = () => {
    const data = new Date().toLocaleTimeString()
    if (isEmpty.length > 0) {
      setMessages([...isMessage, { message: isEmpty, time: data }])
      setEmpty('')
      setError(false)
    } else setError(true)
  }
  const handleChange = e => {
    setEmpty(e.target.value)
  }

  const messages = isMessage.map((element, i) => (
    <div key={i}>
      <code>{element.time} / as Guest</code>
      <p>{element.message}</p>
      <Divider style={{ margin: '10px 0' }} />
    </div>
  ))

  return (
    <div className='chat'>
      <div className='circle bg'>
        <Grow in>
          <LightTooltip placement='top' title={isActive ? '' : "Let's chat!"}>
            <IconButton
              className='chat-icon'
              color='secondary'
              onClick={isActive ? handleSubmit : handleActive}
            >
              <BiggerIcon />
            </IconButton>
          </LightTooltip>
        </Grow>
      </div>
      <Grow in={isActive}>
        <div className='chat chat-window bg'>
          <div className='close'>
            <Avatar>G</Avatar>
            <Typography color='primary' variant='button'>
              Messages : {isMessage.length}
            </Typography>
            <LightTooltip placement='top' title='Close button'>
              <IconButton onClick={() => setActive(!isActive)}>
                <CancelIcon />
              </IconButton>
            </LightTooltip>
          </div>
          <Typography color='primary' variant='subtitle2'>
            {isMessage.length > 0 ? messages : false}
          </Typography>
          <TextField
            style={{ margin: '15px 0 0 0' }}
            value={isEmpty}
            onChange={handleChange}
            fullWidth
            multiline
            error={isError}
            helperText={isError && 'Must be filled'}
            variant='standard'
            margin='dense'
            placeholder='Your message'
          />
        </div>
      </Grow>
    </div>
  )
}
