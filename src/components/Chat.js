import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { IconButton, Grow, TextField, Avatar, Tooltip } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import SendIcon from '@material-ui/icons/Send'
import CancelIcon from '@material-ui/icons/Cancel'

export default function Chat() {
  const [isActive, setActive] = useState(false)
  const [isEmpty, setEmpty] = useState('')

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

  const handleActive = e => {
    setActive(true)
  }
  const handleClear = e => {
    setEmpty('')
  }

  return (
    <div className='chat'>
      <div className='circle bg'>
        <Grow in>
          <LightTooltip placement='top' title={isActive ? '' : "Let's chat!"}>
            <IconButton
              className='chat-icon'
              color='secondary'
              onClick={isActive ? handleClear : handleActive}
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
            <LightTooltip placement='top' title='Close button'>
              <IconButton onClick={() => setActive(!isActive)}>
                <CancelIcon />
              </IconButton>
            </LightTooltip>
          </div>
          <TextField
            style={{ margin: '25px 0 0 0' }}
            value={isEmpty}
            onChange={e => setEmpty(e.target.value)}
            multiline
            variant='standard'
            margin='dense'
            placeholder='Your message'
          />
        </div>
      </Grow>
    </div>
  )
}
