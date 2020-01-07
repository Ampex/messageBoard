import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  IconButton,
  Tooltip,
  Zoom,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PersonIcon from '@material-ui/icons/Person'

const emails = [
  'user01@gmail.com',
  'double@gmail.com',
  'tripple@gmail.com',
  'quadra@gmail.com'
]

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[3],
    fontSize: 12
  }
}))(Tooltip)

export default function User(props) {
  const [isOpen, setOpen] = useState(false)
  const [isUser, setUser] = useState(false)

  const handleClick = email => {
    setUser(email)
    setOpen(false)
  }

  return (
    <div className='user'>
      {isUser && (
        <p className='p-small'>
          Logged in as: <strong>{isUser}</strong>
        </p>
      )}
      <Zoom in>
        <LightTooltip title={isUser ? '' : 'Login / Register'} placement='left'>
          <IconButton onClick={() => setOpen(true)} color='secondary'>
            <AccountCircleIcon />
          </IconButton>
        </LightTooltip>
      </Zoom>
      <Dialog onClose={() => setOpen(false)} open={isOpen}>
        <DialogTitle id='dsaads'>Login to your account</DialogTitle>
        <List>
          {emails.map(email => (
            <ListItem key={email} button onClick={() => handleClick(email)}>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </div>
  )
}
